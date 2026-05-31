import React from "react";
import ImgWithFallback from "./ui/img-fallback";

export default function Projects(){
  return (
    <section id="projetos" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden text-center">
            <ImgWithFallback src="/assets/estructure-cable.jpg" alt="Infraestrutura de Rede" className="h-40 w-full object-cover" />
            <div className="p-6">
              <p className="text-slate-600">Rede estruturada para ambientes que não podem parar. Dados, voz e imagem tráfegam com estabilidade, segurança e espaço para crescer.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden text-center">
            <ImgWithFallback src="/assets/voip.jpg" alt="Telefonia VOIP" className="h-40 w-full object-cover" />
            <div className="p-6">
              <p className="text-slate-600">Comunicação corporativa com custos menores e mais mobilidade. Sua equipe atende de qualquer ponto sem perder qualidade nem controle.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden text-center">
            <ImgWithFallback src="/assets/cftv.jpg" alt="CFTV e Monitoramento" className="h-40 w-full object-cover" />
            <div className="p-6">
              <p className="text-slate-600">Proteção 24h com evidências reais. Câmeras inibem incidentes, gravações apoiam decisões e você acompanha tudo em tempo real.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
