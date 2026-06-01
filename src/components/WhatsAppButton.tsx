"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "5521973524066";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vi o site da Alpha One Tech.")}`;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / greeting bubble */}
      {visible && !dismissed && (
        <div
          className="bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-3 max-w-[220px] relative animate-[fadeIn_0.3s_ease-out]"
          role="dialog"
          aria-label="WhatsApp"
        >
          <button
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 bg-slate-100 hover:bg-slate-200 rounded-full p-0.5 transition-colors"
            aria-label="Fechar"
          >
            <X size={14} className="text-slate-500" />
          </button>
          <p className="text-sm text-slate-700 leading-snug">
            Olá! Fale conosco pelo <strong>WhatsApp</strong> 👋
          </p>
        </div>
      )}

      {/* FAB button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group flex items-center justify-center w-14 h-14 rounded-full
          bg-[#25D366] text-white shadow-lg
          hover:bg-[#20bd5a] hover:shadow-xl hover:scale-110
          transition-all duration-300
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
}
