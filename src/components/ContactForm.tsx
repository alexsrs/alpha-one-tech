import React, { useEffect, useState } from "react";

type ContactFormProps = {
  initialService?: string;
  onClose?: () => void;
};

export default function ContactForm({ initialService, onClose }: ContactFormProps){
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService ?? "CFTV e Câmeras");
  const [message, setMessage] = useState("");
  const max = 1000;

  function handleReset(){
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setService(initialService ?? "CFTV e Câmeras");
    setMessage("");
  }

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    // basic validation
    if (!name.trim() || !email.trim() || !phone.trim()){
      alert("Por favor preencha Nome, E-mail e WhatsApp/Telefone.");
      return;
    }

    const payload = { name, company, email, phone, service, message };
    console.log("Solicitação de orçamento:", payload);
    // TODO: enviar para API
    handleReset();
    alert("Solicitação enviada (simulada). Entraremos em contato em breve.");
    if (onClose) onClose();
  }

  return (
    <section id="contato" className="py-4 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Solicitação de Orçamento / Primeiro Contato</h2>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-slate-600 mb-4">Preencha o formulário abaixo e nossa equipe entrará em contato para orçar sua demanda.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700 block mb-2">Nome *</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 block mb-2">Empresa</label>
                <input
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="Nome da empresa (opcional)"
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-slate-700 block mb-2">E-mail *</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@exemplo.com"
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 block mb-2">WhatsApp / Telefone *</label>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="(21) 99999-9999"
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 block mb-2">Serviço desejado</label>
                <select value={service} onChange={e => setService(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800">
                  <option>CFTV e Câmeras</option>
                  <option>Cabeamento Estruturado</option>
                  <option>Controle de Acesso</option>
                  <option>Reconhecimento Facial</option>
                  <option>Telefonia VOIP &amp; PABX</option>
                  <option>Wi-Fi Corporativo e Hotspots</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-700 block mb-2">Detalhes do Projeto</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value.slice(0, max))}
                rows={6}
                placeholder="Descreva sua necessidade: quantidade, local, prazos, observações adicionais"
                className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-400"
              />
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-slate-500">Informações que ajudam na elaboração do orçamento.</div>
                <div className="text-xs text-slate-500">{message.length}/{max} caracteres</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button type="button" onClick={handleReset} className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded cursor-pointer">Limpar</button>
              <button type="submit" className="ml-auto bg-emerald-500 text-white px-4 py-2 rounded cursor-pointer">Solicitar Orçamento</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
