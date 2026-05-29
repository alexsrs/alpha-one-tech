import React, { useRef } from "react";

export default function Partners(){
  const partners = [
    { src: "/assets/soho.png", href: "https://sohoplus.com.br/" },
    { src: "/assets/unifi.jpg", href: "https://ui.com/br/pt-br/wifi" },
    { src: "/assets/intelbras.png", href: "https://www.intelbras.com/pt-br/" },
    { src: "/assets/cisco.png", href: "https://www.cisco.com/site/br/pt/buy/index.html" },
    { src: "/assets/hikivision.png", href: "https://www.hikvision.com/pt-br/" },
    { src: "/assets/control_id.png", href: "https://www.controlid.com.br/" },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.7);
    const to = dir === "left" ? -amount : amount;
    el.scrollBy({ left: to, behavior: "smooth" });
  };

  return (
    <section id="parceiros" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center mb-6">
          <div className="flex-1 border-t border-slate-200"></div>
          <h2 className="mx-4 text-lg font-semibold text-slate-800 uppercase tracking-wider">NOSSOS PARCEIROS</h2>
          <div className="flex-1 border-t border-slate-200"></div>
        </div>

        <div className="relative">
          <button
            aria-label="scroll left"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md ml-2 hover:bg-slate-50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="partners-scroll flex gap-8 items-center overflow-x-auto py-6 px-6 sm:px-12"
            style={{ scrollBehavior: 'smooth' }}
          >
            {partners.map((p, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center justify-center w-44 partner-logo">
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="block px-2 py-2">
                  <img src={p.src} alt={`Parceiro ${idx+1}`} className="max-h-14 object-contain" />
                </a>
              </div>
            ))}
          </div>

          <button
            aria-label="scroll right"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md mr-2 hover:bg-slate-50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .partners-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .partners-scroll::-webkit-scrollbar { height: 10px; }
        .partners-scroll::-webkit-scrollbar-track { background: transparent; }
        .partners-scroll::-webkit-scrollbar-thumb { background: transparent; border-radius: 9999px; transition: background-color .18s ease; }
        .partners-scroll:hover::-webkit-scrollbar-thumb { background: #22c55e66; }
        /* Firefox thumb on hover */
        .partners-scroll:hover { scrollbar-color: #22c55e66 transparent; }

        /* Keep scrollbar hidden-look but functional (WebKit) */
        .partners-scroll::-webkit-scrollbar { display: block; }

        /* Logos appear in color by default; subtle hover lift */
        .partner-logo img { filter: none; opacity: 1; transition: transform .18s ease, opacity .18s ease; }
        .partner-logo:hover img { transform: translateY(-3px) scale(1.02); }
      `}</style>
    </section>
  )
}
