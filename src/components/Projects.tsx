import React from "react";

export default function Projects(){
  return (
    <section id="projetos" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="h-40 bg-slate-100 rounded mb-4 flex items-center justify-center">REDE ESTRUTURADA</div>
            <p className="text-slate-600">Evite problemas de para com antede, saiba mais.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="h-40 bg-slate-100 rounded mb-4 flex items-center justify-center">TELECOM & TELEFONIA</div>
            <p className="text-slate-600">Soluções integradas de voz e dados.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="h-40 bg-slate-100 rounded mb-4 flex items-center justify-center">SOLUÇÕES</div>
            <p className="text-slate-600">Projetos e consultoria para empresas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
