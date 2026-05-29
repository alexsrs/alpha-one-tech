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
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Alpha Tech One</h1>
           <p className="mt-4 text-xl md:text-2xl text-white/95 font-semibold">Tecnologia, segurança e confiança para o seu dia a dia.</p>
           <p className="mt-4 text-lg md:text-xl text-white/90">Soluções integradas em infraestrutura de rede, segurança eletrônica e automação para residências, empresas e condomínios.</p>
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

