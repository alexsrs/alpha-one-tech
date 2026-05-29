import React from "react";
// about image from src/assets via runtime URL
const aboutImg = "/assets/about.jpg";

export default function AboutSection(){
  return (
    <section id="sobre" className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Sobre Nós</h2>
          <p className="mt-4 text-slate-600">A Alpha One Tech oferece soluções completas em infraestrutura de rede, segurança eletrônica e automação, com tecnologia de ponta e equipe especializada para proteger o que realmente importa.</p>
          <p className="mt-4 text-slate-600">Atuamos com projetos, instalação e manutenção de redes, CFTV, controle de acesso, interfones e automação, sempre com atendimento personalizado e suporte técnico qualificado.</p>
        </div>
        <div>
          <img src={aboutImg} alt="Sobre" className="w-full h-56 object-cover rounded-md shadow-sm" />
        </div>
      </div>
    </section>
  )
}
