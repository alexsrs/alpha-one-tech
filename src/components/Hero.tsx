import React from "react";
// hero from src/assets via runtime URL
const hero = "/assets/hero.jpg";

export default function Hero(){
  return (
    <section className="relative">
    <div
      className="w-screen h-[520px] bg-cover bg-center relative left-1/2 -translate-x-1/2 overflow-hidden"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(6,40,61,0.88), rgba(6,52,69,0.6)), url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Estrutura, agilidade e segurança</h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">Soluções integradas em infraestrutura de redes, CFTV e controle de acesso para residências, empresas e condomínios, garantindo eficiência, segurança e continuidade operacional.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contato" className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded cursor-pointer">Fale Conosco</a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end">
          
        </div>
        </div>
      </div>
    </div>
    </section>
  )
}

