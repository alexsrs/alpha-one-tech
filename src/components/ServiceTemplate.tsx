import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Modal from "./ui/modal";
import ContactForm from "./ContactForm";
import type { Service } from "../lib/services";

type Props = {
  service: Service;
};

export default function ServiceTemplate({ service }: Props){
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <header className="mb-8 bg-white rounded shadow-sm overflow-hidden relative">
        <div className="absolute left-4 top-4 z-20">
          <button onClick={() => { history.pushState({}, "", "/"); window.dispatchEvent(new PopStateEvent('popstate')); }} className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded cursor-pointer">Voltar</button>
        </div>
        <div className="relative h-64 w-full">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute left-6 bottom-6 text-white">
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="mt-2 max-w-2xl">{service.desc}</p>
          </div>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Principais Vantagens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.advantages.map(a => (
            <div key={a.title} className="bg-white p-6 rounded shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                {a.icon ?? <CheckCircle className="text-emerald-500" size={20} />}
              </div>
              <h3 className="font-semibold mb-2">{a.title}</h3>
              <p className="text-slate-600 text-sm">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Como funciona?</h2>
          <p className="text-slate-600">{service.howItWorks}</p>
        </div>
        <div>
          <img src={service.image} alt={service.title} className="w-full rounded" />
        </div>
      </section>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Onde utilizar?</h2>
          <p className="text-slate-600">{service.whereToUse}</p>
        </div>
        <div className="md:order-first">
          <img src={service.image} alt={service.title} className="w-full rounded" />
        </div>
      </section>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 p-6 rounded">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Por que nos escolher?</h2>
          <p className="text-slate-600">Trabalhamos com as melhores marcas e desenvolvimentos de soluções próprias em nossos projetos, garantindo uma solução abrangente e completa. Nossos técnicos são treinados junto aos fabricantes para garantir qualidade na instalação e suporte.</p>
        </div>
        <div>
          <img src="/assets/team.jpg" alt="Equipe" className="w-full rounded" />
        </div>
      </section>

      <section className="mb-12 bg-slate-800 text-white p-8 rounded">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Orçamento sem compromisso</h3>
            <p className="mt-2 text-slate-200">Clique e preencha o formulário para receber uma proposta personalizada.</p>
          </div>
          <div>
            <button onClick={() => setOpen(true)} className="border border-white px-6 py-3 rounded cursor-pointer">Solicitar Orçamento</button>
          </div>
        </div>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} title={`Orçamento — ${service.title}`}>
        <ContactForm initialService={service.title} onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
