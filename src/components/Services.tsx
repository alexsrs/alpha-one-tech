import React from "react";
import { Camera, Shield, Network, Phone, Settings } from "lucide-react";
import services from "../lib/services";

function makeIcon(title: string){
  switch(title){
    case "CFTV, Câmeras e Monitoramento": return <Camera className="text-[#0036b2]" />;
    case "Infraestrutura de Rede": return <Network className="text-[#0036b2]" />;
    case "Controle de Acesso e Segurança Eletrônica": return <Shield className="text-[#0036b2]" />;
    case "Interfones e Vídeo Porteiros": return <Phone className="text-[#0036b2]" />;
    case "Cancelas Eletrônicas": return <Settings className="text-[#0036b2]" />;
    case "Telefonia VOIP & PABX": return <Phone className="text-[#0036b2]" />;
    default: return <Network className="text-[#0036b2]" />;
  }
}

export default function Services(){
  return (
    <section id="servicos" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <article
              key={s.slug}
              className="text-left bg-white rounded-lg shadow-sm border overflow-hidden transform transition hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative h-40 w-full">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 text-white">
                  <div className="absolute inset-0 px-3 pb-3 flex items-end">
                    <p className="text-sm text-white/90">{s.desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-3">
                <div className="flex items-center gap-3">
                  <div className="text-[#0036b2]">{makeIcon(s.title)}</div>
                  <div className="font-semibold text-md leading-tight">{s.title}</div>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); history.pushState({}, "", `/servico/${s.slug}`); window.dispatchEvent(new PopStateEvent('popstate')); }}
                    className="inline-flex items-center text-[#0036b2] border border-[#0036b2]/20 bg-white px-4 py-2 rounded text-sm hover:bg-[#0036b2]/5 cursor-pointer"
                    aria-label={`Saiba mais sobre ${s.title}`}
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
