import React from "react";
// logo from src/assets via runtime URL
const logo = "/assets/logo.png";

export default function Navbar(){
  function navigateToFragment(e: React.MouseEvent<HTMLAnchorElement>, fragment: string){
    e.preventDefault();
    // If we're on a service page, navigate client-side to `/` then scroll to fragment.
    if (location.pathname.startsWith('/servico/')){
      history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      // small delay to allow home to render
      setTimeout(() => {
        const el = document.querySelector(fragment) as HTMLElement | null;
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    // otherwise just set the hash to scroll
    location.hash = fragment;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
            className="inline-block cursor-pointer"
          >
            <img src={logo} alt="Grid" className="h-16 w-auto" loading="lazy" draggable={false} />
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#servicos" onClick={(e) => navigateToFragment(e, '#servicos')} className="hover:text-slate-900 cursor-pointer">Serviços</a>
          <a href="#projetos" onClick={(e) => navigateToFragment(e, '#projetos')} className="hover:text-slate-900 cursor-pointer">Projetos</a>
          <a href="#sobre" onClick={(e) => navigateToFragment(e, '#sobre')} className="hover:text-slate-900 cursor-pointer">Sobre Nós</a>
          <a href="#contato" onClick={(e) => navigateToFragment(e, '#contato')} className="hover:text-slate-900 cursor-pointer">Contato</a>
        </nav>
        <a href="#contato" onClick={(e) => navigateToFragment(e, '#contato')} className="ml-4 !bg-emerald-500 text-white px-3 py-2 rounded-md shadow-sm hover:opacity-85 inline-flex items-center cursor-pointer">Solicitar Orçamento</a>
      </div>
    </header>
  )
}

