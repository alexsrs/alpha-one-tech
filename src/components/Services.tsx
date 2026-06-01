import React from "react";
import { Camera, Shield, Network, Phone, Settings } from "lucide-react";
import ServiceCard from "./ui/service-card";
import services from "../lib/services";

function makeIcon(title: string) {
  switch (title) {
    case "CFTV, Câmeras e Monitoramento":
      return <Camera className="text-[#0036b2]" size={20} />;
    case "Infraestrutura de Rede":
      return <Network className="text-[#0036b2]" size={20} />;
    case "Controle de Acesso e Segurança Eletrônica":
      return <Shield className="text-[#0036b2]" size={20} />;
    case "Interfones e Vídeo Porteiros":
      return <Phone className="text-[#0036b2]" size={20} />;
    case "Cancelas Eletrônicas":
      return <Settings className="text-[#0036b2]" size={20} />;
    case "Telefonia VOIP & PABX":
      return <Phone className="text-[#0036b2]" size={20} />;
    default:
      return <Network className="text-[#0036b2]" size={20} />;
  }
}

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.desc}
              image={s.image}
              icon={makeIcon(s.title)}
              onAction={() => {
                history.pushState({}, "", `/servico/${s.slug}`);
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
