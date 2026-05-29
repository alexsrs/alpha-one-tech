import React from "react";
import { Camera, Shield, Network, Eye, Phone, Wifi } from "lucide-react";
import services from "../lib/services";

function makeIcon(title: string){
  switch(title){
    case "CFTV e Câmeras": return <Camera className="text-emerald-500" />;
    case "Cabeamento Estruturado": return <Network className="text-emerald-500" />;
    case "Controle de Acesso": return <Shield className="text-emerald-500" />;
    case "Reconhecimento Facial": return <Eye className="text-emerald-500" />;
    case "Telefonia VOIP & PABX": return <Phone className="text-emerald-500" />;
    case "Wi-Fi Corporativo e Hotspots": return <Wifi className="text-emerald-500" />;
    default: return <Network className="text-emerald-500" />;
  }
}

export default function Services(){
  return (
    <section id="servicos" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.slug}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { history.pushState({}, "", `/servico/${s.slug}`); window.dispatchEvent(new PopStateEvent('popstate')); } }}
              onClick={() => { history.pushState({}, "", `/servico/${s.slug}`); window.dispatchEvent(new PopStateEvent('popstate')); }}
              className="text-left bg-white rounded-lg shadow-sm border overflow-hidden cursor-pointer transform transition hover:shadow-md hover:-translate-y-1"
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
                  <div className="text-emerald-500">{makeIcon(s.title)}</div>
                  <div className="font-semibold text-md leading-tight">{s.title}</div>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); history.pushState({}, "", `/servico/${s.slug}`); window.dispatchEvent(new PopStateEvent('popstate')); }}
                    className="inline-flex items-center text-emerald-600 border border-emerald-100 bg-white px-4 py-2 rounded text-sm hover:bg-emerald-50 cursor-pointer"
                    aria-label={`Saiba mais sobre ${s.title}`}
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

