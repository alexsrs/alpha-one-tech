import React from "react";
import { Building2, BriefcaseBusiness, Cross, GraduationCap } from "lucide-react";

const segments = [
  { title: "Condomínios", icon: Building2 },
  { title: "Hospitais", icon: Cross },
  { title: "Escolas", icon: GraduationCap },
  { title: "Empresas e outros segmentos", icon: BriefcaseBusiness },
];

export default function Segments(){
  return (
    <section id="segmentos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-800">Segmentos atendidos</h2>
          <p className="mt-3 text-slate-600">Projetos dimensionados para ambientes com diferentes níveis de fluxo, criticidade e controle de acesso.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map(({ title, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 h-10 w-10 rounded-full bg-[#0036b2]/10 flex items-center justify-center text-[#0036b2]" aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-semibold text-slate-800">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
