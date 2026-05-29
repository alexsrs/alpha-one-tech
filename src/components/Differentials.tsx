import React from "react";

const differentials = [
  "Equipe especializada",
  "Tecnologia de ponta",
  "Atendimento personalizado",
  "Suporte técnico qualificado",
];

export default function Differentials(){
  return (
    <section className="py-16 bg-[#0036b2] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Por que escolher a Alpha?</h2>
          <p className="mt-3 text-white/85">Unimos planejamento técnico, instalação cuidadosa e suporte para manter sua infraestrutura segura e confiável.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentials.map(item => (
            <article key={item} className="rounded-lg border border-white/20 bg-white/10 p-5">
              <div className="mb-4 h-10 w-10 rounded-full bg-white text-[#0036b2] flex items-center justify-center font-bold">✓</div>
              <h3 className="font-semibold">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
