import React from "react";
import { contactEmail, instagramHandle, instagramUrl } from "../lib/contact";
// logo from src/assets via runtime URL

export default function Footer(){
  return (
    <footer className="border-t py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold">Alpha One Tech</div>
            <div className="text-sm text-slate-600">Engenharia de precisão para um mundo conectado.</div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col items-start text-sm text-slate-600">
          <div className="mb-1"><span className="font-semibold">WhatsApp / Telefone:</span> <a className="hover:text-[#0036b2]" href="https://wa.me/5521973524066">(21) 97352-4066</a> / <a className="hover:text-[#0036b2]" href="https://wa.me/5521991195338">(21) 99119-5338</a></div>
          <div className="mb-1"><span className="font-semibold">E-mail:</span> <a className="hover:text-[#0036b2]" href={`mailto:${contactEmail}`}>{contactEmail}</a></div>
          <div className="mb-1"><span className="font-semibold">Instagram:</span> <a className="hover:text-[#0036b2]" href={instagramUrl} target="_blank" rel="noreferrer">@{instagramHandle}</a></div>
          <div><span className="font-semibold">Horário de Atendimento:</span> Seg. a Sex. das 08h às 18h</div>
        </div>

        <div className="w-full md:w-auto text-sm text-slate-600 text-center md:text-right">
          <div>© {new Date().getFullYear()} Alpha One Tech — Todos os direitos reservados</div>
          <div className="text-xs text-slate-500 mt-1">
            <a href="/politica-de-privacidade" className="hover:text-[#0036b2] underline">Política de Privacidade</a>
            <span className="mx-1">·</span>
            Powered by ATNexusLab
          </div>
        </div>
      </div>
    </footer>
  )
}
