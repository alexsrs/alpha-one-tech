import React from "react";
// about image from src/assets via runtime URL
const aboutImg = "/assets/about.jpg";

export default function AboutSection(){
  return (
    <section id="sobre" className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Sobre Nós</h2>
          <p className="mt-4 text-slate-600">Somos especializados em infraestrutura de redes, telefonia, CFTV e controle de acesso. Desenvolvemos soluções escaláveis e sob medida, com foco em disponibilidade, segurança e facilidade de manutenção.</p>
          <p className="mt-4 text-slate-600">Trabalhamos com as melhores marcas e desenvolvemos soluções próprias em nossos projetos, garantindo uma solução abrangente e completa. Nossos consultores e técnicos, treinados junto aos fabricantes, projetam e apresentam a solução ideal para sua empresa.</p>
        </div>
        <div>
          <img src={aboutImg} alt="Sobre" className="w-full h-56 object-cover rounded-md shadow-sm" />
        </div>
      </div>
    </section>
  )
}

