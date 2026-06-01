import React, { useEffect, useState, useCallback } from "react";
import { submitContact } from "../lib/contact";
import { trackFormSubmit } from "../lib/analytics";
import services from "../lib/services";

type ContactFormProps = {
  initialService?: string;
  onClose?: () => void;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const fieldLimits = {
  name: 120,
  company: 120,
  email: 160,
  phone: 40,
  message: 1000,
};

export default function ContactForm({ initialService, onClose }: ContactFormProps){
  const defaultService = services[0]?.title ?? "CFTV, Câmeras e Monitoramento";
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService ?? defaultService);
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const max = fieldLimits.message;

  const showToast = useCallback(() => setToastVisible(true), []);
  const hideToast = useCallback(() => setToastVisible(false), []);

  function handleReset(){
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setService(initialService ?? defaultService);
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
  }

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  // Auto-dismiss toast after 5s
  useEffect(() => {
    if (status === "success" || status === "error") {
      showToast();
      const timer = setTimeout(hideToast, 5000);
      return () => clearTimeout(timer);
    }
  }, [status, showToast, hideToast]);

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()){
      setStatus("error");
      setErrorMessage("Por favor preencha Nome, E-mail e WhatsApp/Telefone.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())){
      setStatus("error");
      setErrorMessage("Informe um e-mail válido.");
      return;
    }
    if (!privacyAccepted){
      setStatus("error");
      setErrorMessage("Para continuar, leia e aceite a Política de Privacidade.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const result = await submitContact({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      company: company.trim() || undefined,
      service: service || undefined,
    });

    if (result.success) {
      trackFormSubmit(service || undefined);
      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setService(initialService ?? defaultService);
      setMessage("");
      if (onClose) onClose();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Erro ao enviar. Tente novamente.");
    }
  }

  return (
    <section id="contato" className="py-4 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Solicitação de Orçamento / Primeiro Contato</h2>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-slate-600 mb-4">Preencha o formulário abaixo e nossa equipe entrará em contato para orçar sua demanda.</p>

          {status === "success" && (
            <div className="mb-4 p-4 rounded-md bg-green-50 border border-green-200 text-green-800" role="alert">
              <p className="font-medium">Mensagem enviada com sucesso!</p>
              <p className="text-sm mt-1">Recebemos sua solicitação e entraremos em contato em breve.</p>
            </div>
          )}

          {status === "error" && (
            <div className="mb-4 p-4 rounded-md bg-red-50 border border-red-200 text-red-800" role="alert">
              <p className="font-medium">Erro ao enviar</p>
              <p className="text-sm mt-1">{errorMessage}</p>
              <button
                type="button"
                onClick={() => { setStatus("idle"); setErrorMessage(""); }}
                className="text-sm mt-2 underline text-red-700 hover:text-red-900"
              >
                Tentar novamente
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="text-sm text-slate-700 block mb-2">Nome *</label>
                <input
                  id="contact-name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  maxLength={fieldLimits.name}
                  disabled={status === "submitting"}
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400 disabled:opacity-60"
                />
              </div>

              <div>
                <label htmlFor="contact-company" className="text-sm text-slate-700 block mb-2">Empresa</label>
                <input
                  id="contact-company"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="Nome da empresa (opcional)"
                  maxLength={fieldLimits.company}
                  disabled={status === "submitting"}
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400 disabled:opacity-60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="contact-email" className="text-sm text-slate-700 block mb-2">E-mail *</label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@exemplo.com"
                  required
                  maxLength={fieldLimits.email}
                  disabled={status === "submitting"}
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400 disabled:opacity-60"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="text-sm text-slate-700 block mb-2">WhatsApp / Telefone *</label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="(21) 99999-9999"
                  required
                  maxLength={fieldLimits.phone}
                  disabled={status === "submitting"}
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400 disabled:opacity-60"
                />
              </div>

              <div>
                <label htmlFor="contact-service" className="text-sm text-slate-700 block mb-2">Serviço desejado</label>
                <select id="contact-service" value={service} onChange={e => setService(e.target.value)} disabled={status === "submitting"} className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 disabled:opacity-60">
                  {services.map(s => <option key={s.slug}>{s.title}</option>)}
                  <option>Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="text-sm text-slate-700 block mb-2">Detalhes do Projeto</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={e => setMessage(e.target.value.slice(0, max))}
                maxLength={max}
                rows={6}
                placeholder="Descreva sua necessidade: quantidade, local, prazos, observações adicionais"
                disabled={status === "submitting"}
                className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400 disabled:opacity-60"
              />
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-slate-500">Informações que ajudam na elaboração do orçamento.</div>
                <div className="text-xs text-slate-500">{message.length}/{max} caracteres</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="privacy-accept"
                type="checkbox"
                checked={privacyAccepted}
                onChange={e => setPrivacyAccepted(e.target.checked)}
                disabled={status === "submitting"}
                className="mt-1 w-4 h-4 accent-[#0036b2]"
              />
              <label htmlFor="privacy-accept" className="text-sm text-slate-600">
                Li e aceito a{" "}
                <a href="/politica-de-privacidade" className="text-[#0036b2] underline">
                  Política de Privacidade
                </a>{" "}
                e autorizo o contato para fins de orçamento e prestação de serviços. *
              </label>
            </div>

            <div className="flex items-center gap-3">
              <button type="button" onClick={handleReset} disabled={status === "submitting"} className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded cursor-pointer disabled:opacity-60">Limpar</button>
              <button type="submit" disabled={status === "submitting"} className="ml-auto bg-[#0036b2] text-white px-4 py-2 rounded cursor-pointer disabled:opacity-60 hover:bg-[#002a8a]">
                {status === "submitting" ? "Enviando..." : "Solicitar Orçamento"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Floating toast */}
      {(status === "success" || status === "error") && (
        <div
          className={`toast toast--${status === "success" ? "success" : "error"}${toastVisible ? " toast--visible" : ""}`}
          role="alert"
          aria-live="polite"
        >
          {status === "success"
            ? "Mensagem enviada com sucesso! Entraremos em contato em breve."
            : errorMessage}
        </div>
      )}
    </section>
  )
}
