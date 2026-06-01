import { serve } from "bun";
import index from "./index.html";

const server = serve({
  port: process.env.PORT ? parseInt(process.env.PORT) : 4000,
  routes: {
    // Serve static assets from public/assets first
    "/assets/*": async (req: Request) => {
      try {
        const url = new URL(req.url);
        const p = `public${url.pathname}`;
        return new Response(Bun.file(p));
      } catch (e) {
        return new Response("Not found", { status: 404 });
      }
    },

    // Serve index.html for all unmatched routes.
    "/": index,
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },

    "/api/contact": async (req: Request) => {
      if (req.method !== "POST") {
        return Response.json({ error: "Method not allowed" }, { status: 405 });
      }

      try {
        const data = await req.json().catch(() => null);
        if (!data) {
          return Response.json({ success: false, error: "Corpo da requisição inválido." }, { status: 400 });
        }

        const name = String(data.name ?? "").trim();
        const email = String(data.email ?? "").trim();
        const phone = String(data.phone ?? "").trim();
        const message = String(data.message ?? "").trim();
        const company = String(data.company ?? "").trim();
        const service = String(data.service ?? "").trim();

        if (!name || name.length > 120) {
          return Response.json({ success: false, error: "Nome é obrigatório (máx. 120 caracteres)." }, { status: 400 });
        }
        if (!email || email.length > 160 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return Response.json({ success: false, error: "E-mail inválido." }, { status: 400 });
        }
        if (!phone || phone.length > 40) {
          return Response.json({ success: false, error: "WhatsApp/Telefone é obrigatório (máx. 40 caracteres)." }, { status: 400 });
        }
        if (!message || message.length > 1000) {
          return Response.json({ success: false, error: "Mensagem é obrigatória (máx. 1000 caracteres)." }, { status: 400 });
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
          console.error("RESEND_API_KEY não configurada");
          return Response.json({ success: false, error: "Erro interno. Tente novamente mais tarde." }, { status: 500 });
        }

        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        const subject = `Contato do site — ${name}${service ? ` (${service})` : ""}`;
        const bodyLines = [
          `Nome: ${name}`,
          company ? `Empresa: ${company}` : null,
          `E-mail: ${email}`,
          `WhatsApp / Telefone: ${phone}`,
          service ? `Serviço: ${service}` : null,
          "",
          "Mensagem:",
          message,
        ].filter(Boolean).join("\n");

        await resend.emails.send({
          from: "Alpha One Tech <noreply@alphaonetech.com.br>",
          to: "alphainstalacoes02@gmail.com",
          replyTo: email,
          subject,
          text: bodyLines,
        });

        return Response.json({ success: true });
      } catch (err) {
        console.error("Erro no /api/contact:", err);
        return Response.json({ success: false, error: "Erro interno. Tente novamente mais tarde." }, { status: 500 });
      }
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
