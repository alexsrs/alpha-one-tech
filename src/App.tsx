import React, { useEffect, useState } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ServiceTemplate from "./components/ServiceTemplate";
import services from "./lib/services";

export default function App() {
  const [path, setPath] = useState<string>(location.pathname || "/");

  useEffect(() => {
    const onPop = () => setPath(location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // route /servico/:slug
  if (path.startsWith("/servico/")) {
    const slug = path.replace("/servico/", "").replace(/\/$/, "");
    const svc = services.find(s => s.slug === slug);
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
