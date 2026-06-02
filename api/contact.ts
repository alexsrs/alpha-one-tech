import type { IncomingMessage, ServerResponse } from "node:http";
import { Resend } from "resend";

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string;
  service?: string;
}

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk: Buffer) => {
      data += chunk.toString();
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const contentType = req.headers["content-type"] || "";
  if (!contentType.includes("application/json")) {
    res.writeHead(415, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Content-Type deve ser application/json" }));
    return;
  }

  try {
    const raw = await readBody(req);
    const body: ContactBody = JSON.parse(raw);

    const name = sanitize(body.name || "");
    const email = sanitize(body.email || "");
    const phone = sanitize(body.phone || "");
    const message = sanitize(body.message || "");
    const company = sanitize(body.company || "");
    const service = sanitize(body.service || "");

    if (!name || name.length > 120) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: false, error: "Nome é obrigatório (máx. 120 caracteres)." }));
      return;
    }

    if (!email || email.length > 160 || !isValidEmail(email)) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: false, error: "E-mail inválido ou obrigatório (máx. 160 caracteres)." }));
      return;
    }

    if (!phone || phone.length > 40) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: false, error: "Telefone é obrigatório (máx. 40 caracteres)." }));
      return;
    }

    if (!message || message.length > 2000) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: false, error: "Mensagem é obrigatória (máx. 2000 caracteres)." }));
      return;
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? "alphainstalacoes02@gmail.com";

    if (!resendApiKey) {
      console.error("[api/contact] RESEND_API_KEY não configurada");
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: false, error: "Serviço de e-mail não configurado." }));
      return;
    }

    const resend = new Resend(resendApiKey);

    const subject = `Contato via site — ${name}${service ? ` (${service})` : ""}`;
    const html = `
      <h2>Novo contato pelo site</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
      ${service ? `<p><strong>Serviço:</strong> ${service}</p>` : ""}
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    await resend.emails.send({
      from: `Alpha One Tech <${contactEmail}>`,
      to: [contactEmail],
      replyTo: email,
      subject,
      html,
    });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: true }));
  } catch (err) {
    console.error("[api/contact] erro:", err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, error: "Erro interno ao enviar mensagem." }));
  }
}
