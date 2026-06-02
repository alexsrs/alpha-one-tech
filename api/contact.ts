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

export default async function handler(req: Request): Promise<Response> {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers }
    );
  }

  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return new Response(
      JSON.stringify({ error: "Content-Type deve ser application/json" }),
      { status: 415, headers }
    );
  }

  try {
    const body: ContactBody = await req.json();

    const name = sanitize(body.name || "");
    const email = sanitize(body.email || "");
    const phone = sanitize(body.phone || "");
    const message = sanitize(body.message || "");
    const company = sanitize(body.company || "");
    const service = sanitize(body.service || "");

    if (!name || name.length > 120) {
      return new Response(
        JSON.stringify({ success: false, error: "Nome é obrigatório (máx. 120 caracteres)." }),
        { status: 400, headers }
      );
    }

    if (!email || email.length > 160 || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "E-mail inválido ou obrigatório (máx. 160 caracteres)." }),
        { status: 400, headers }
      );
    }

    if (!phone || phone.length > 40) {
      return new Response(
        JSON.stringify({ success: false, error: "Telefone é obrigatório (máx. 40 caracteres)." }),
        { status: 400, headers }
      );
    }

    if (!message || message.length > 1000) {
      return new Response(
        JSON.stringify({ success: false, error: "Mensagem é obrigatória (máx. 1000 caracteres)." }),
        { status: 400, headers }
      );
    }

    if (company && company.length > 120) {
      return new Response(
        JSON.stringify({ success: false, error: "Empresa deve ter no máximo 120 caracteres." }),
        { status: 400, headers }
      );
    }

    if (service && service.length > 200) {
      return new Response(
        JSON.stringify({ success: false, error: "Serviço deve ter no máximo 200 caracteres." }),
        { status: 400, headers }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const subject = `Contato do site — ${name} (${service || "Geral"})`;
    const textLines = [
      `Nome: ${name}`,
      company ? `Empresa: ${company}` : null,
      `E-mail: ${email}`,
      `Telefone: ${phone}`,
      `Serviço: ${service || "Geral"}`,
      "",
      "Mensagem:",
      message || "Não informado.",
    ].filter(Boolean).join("\n");

    await resend.emails.send({
      from: "Alpha One Tech <noreply@alphaonetech.com.br>",
      to: ["alphainstalacoes02@gmail.com"],
      replyTo: email,
      subject,
      text: textLines,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers }
    );
  } catch (err: unknown) {
    console.error("[api/contact] Error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Erro interno do servidor. Tente novamente mais tarde." }),
      { status: 500, headers }
    );
  }
}
