import React from "react";
// logo from src/assets via runtime URL

export default function Footer(){
  return (
    <footer className="border-t py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold">Alpha Tech One</div>
            <div className="text-sm text-slate-600">Engenharia de precisão para um mundo conectado.</div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col items-start text-sm text-slate-600">
          <div className="mb-1"><span className="font-semibold">WhatsApp / Telefone:</span> <a className="hover:text-[#0036b2]" href="https://wa.me/5521973524066">(21) 97352-4066</a> / <a className="hover:text-[#0036b2]" href="https://wa.me/5521991195338">(21) 99119-5338</a></div>
          <div className="mb-1"><span className="font-semibold">E-mail:</span> <a className="hover:text-[#0036b2]" href="mailto:alphainstalacoes02@gmail.com">alphainstalacoes02@gmail.com</a></div>
          <div className="mb-1"><span className="font-semibold">Instagram:</span> <a className="hover:text-[#0036b2]" href="https://www.instagram.com/alphainstalacoes02/" target="_blank" rel="noreferrer">@alphainstalacoes02</a></div>
          <div><span className="font-semibold">Horário de Atendimento:</span> Seg. a Sex. das 08h às 18h</div>
        </div>

        <div className="w-full md:w-auto text-sm text-slate-600 text-center md:text-right">
          <div>© {new Date().getFullYear()} Alpha Tech One — Todos os direitos reservados</div>
          <div className="text-xs text-slate-400 mt-1">Powered by ATNexusLab</div>
        </div>
      </div>
    </footer>
  )
}
