import React from "react";
// logo from src/assets via runtime URL

export default function Footer(){
  return (
    <footer className="border-t py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold">Grid Engenharia de Redes</div>
            <div className="text-sm text-slate-600">Engenharia de precisão para um mundo conectado.</div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col items-start text-sm text-slate-600">
          <div className="mb-1"><span className="font-semibold">WhatsApp / Telefone:</span> (21) 9999-9999</div>
          <div className="mb-1"><span className="font-semibold">E-mail:</span> contato@gridredes.com.br</div>
          <div><span className="font-semibold">Horário de Atendimento:</span> Seg. a Sex. das 08h às 18h</div>
        </div>

        <div className="w-full md:w-auto text-sm text-slate-600 text-center md:text-right">
          <div>© {new Date().getFullYear()} Grid Engenharia de Redes — Todos os direitos reservados</div>
          <div className="text-xs text-slate-400 mt-1">Powered by ATNexusLab</div>
        </div>
      </div>
    </footer>
  )
}

