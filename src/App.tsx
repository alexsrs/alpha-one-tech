import React, { useEffect, useState } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Segments from "./components/Segments";
import Differentials from "./components/Differentials";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ServiceTemplate from "./components/ServiceTemplate";
import PrivacyPolicy from "./components/PrivacyPolicy";
import services from "./lib/services";

const serviceSlugAliases: Record<string, string> = {
  "cftv-e-cameras": "cftv-cameras-monitoramento",
  monitoramento: "cftv-cameras-monitoramento",
  "controle-de-acesso": "controle-acesso-seguranca-eletronica",
  "fechadura-eletronica": "controle-acesso-seguranca-eletronica",
  "seguranca-eletronica": "controle-acesso-seguranca-eletronica",
  "reconhecimento-facial": "controle-acesso-seguranca-eletronica",
  "cabeamento-estruturado": "infraestrutura-de-rede",
  "wifi-corporativo": "infraestrutura-de-rede",
  interfones: "interfones-video-porteiros",
  "cancelas-eletronicas": "cancelas-eletronicas",
  "telefonia-voip-pabx": "telefonia-voip-pabx",
};

export default function App() {
  const [path, setPath] = useState<string>(location.pathname || "/");

  useEffect(() => {
    const onPop = () => setPath(location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // route /politica-de-privacidade
  if (path === "/politica-de-privacidade") {
    return (
      <div className="min-h-screen bg-white text-slate-800 font-sans">
        <Navbar />
        <main className="pt-20">
          <PrivacyPolicy />
        </main>
        <Footer />
      </div>
    );
  }

  // route /servico/:slug
  if (path.startsWith("/servico/")) {
    const slug = path.replace("/servico/", "").replace(/\/$/, "");
    const canonicalSlug = serviceSlugAliases[slug] ?? slug;
    const svc = services.find(s => s.slug === canonicalSlug);
    return (
      <div className="min-h-screen bg-white text-slate-800 font-sans">
        <Navbar />
        <main className="pt-20">
          {svc ? <ServiceTemplate service={svc} /> : <div className="max-w-6xl mx-auto p-6">Serviço não encontrado.</div>}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Navbar />
      <main className="pt-20 container mx-auto p-8">
        <Hero />
        <section className="my-4">
          <Services />
        </section>
        <section className="my-4">
          <Segments />
        </section>
        <section className="my-4">
          <Differentials />
        </section>
        <section className="my-4">
          <Partners />
        </section>
        <section className="my-4">
          <Projects />
        </section>
        <section className="my-4">
          <AboutSection />
        </section>
        <section className="my-4">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
