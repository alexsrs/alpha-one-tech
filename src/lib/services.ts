import * as React from "react";
import { Camera, ShieldCheck, Eye, Server, Layers, Columns, FileText, Link, UserCheck, PhoneCall, Settings, MapPin, Wifi, Lock, DollarSign } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  image: string;
  desc: string;
  advantages: { title: string; text: string; icon?: React.ReactNode }[];
  howItWorks: string;
  whereToUse: string;
};

const assetsBase = "/assets";

export const services: Service[] = [
  {
    slug: "cftv-e-cameras",
    title: "CFTV e Câmeras",
    image: `${assetsBase}/cftv.jpg`,
    desc: "Monitoramento inteligente com análise avançada.",
    advantages: [
        { title: "Inibe furtos e assaltos", text: "Sistema visível e atuante para prevenção de ocorrências.", icon: React.createElement(ShieldCheck, { className: "text-emerald-500", size: 20 }) },
        { title: "Modelos para cada cenário", text: "Câmeras analógicas, digitais e IP para atender toda necessidade.", icon: React.createElement(Camera, { className: "text-emerald-500", size: 20 }) },
        { title: "Acompanhamento em tempo real", text: "Acesso remoto e alertas para eventos críticos.", icon: React.createElement(Eye, { className: "text-emerald-500", size: 20 }) },
    ],
    howItWorks: "As câmeras capturam vídeo, que é transmitido por cabos ou redes para um gravador ou NVR, sendo possível visualizar e gravar imagens localmente ou na nuvem.",
    whereToUse: "Comércio, indústrias, condomínios, escolas e qualquer ambiente que necessite de vigilância contínua.",
  },
  {
    slug: "cabeamento-estruturado",
    title: "Cabeamento Estruturado",
    image: `${assetsBase}/estructure-cable.jpg`,
    desc: "Projeto e cabeamento para alta performance maximizando a velocidade de transmissão",
    advantages: [
        { title: "Desempenho otimizado", text: "Melhora a confiabilidade das conexões e transferência de dados.", icon: React.createElement(Server, { className: "text-emerald-500", size: 20 }) },
        { title: "Escalabilidade", text: "Facilita upgrades futuros sem grandes intervenções.", icon: React.createElement(Layers, { className: "text-emerald-500", size: 20 }) },
        { title: "Organização", text: "Racks e patch panels bem planejados reduzem falhas.", icon: React.createElement(Columns, { className: "text-emerald-500", size: 20 }) },
    ],
    howItWorks: "Realizamos o projeto do cabeamento, instalação de cabos, testes e certificação conforme normas técnicas.",
    whereToUse: "Escritórios, data centers, prédios comerciais e industriais.",
  },
  {
    slug: "controle-de-acesso",
    title: "Controle de Acesso",
    image: `${assetsBase}/door_access_control.jpg`,
    desc: "Sistemas para gestão e segurança de entradas.",
    advantages: [
        { title: "Segurança reforçada", text: "Controle de quem entra e sai em tempo real.", icon: React.createElement(ShieldCheck, { className: "text-emerald-500", size: 20 }) },
        { title: "Logs de acesso", text: "Registros para auditoria e investigação.", icon: React.createElement(FileText, { className: "text-emerald-500", size: 20 }) },
        { title: "Integração", text: "Integra com CFTV e sistemas de gestão.", icon: React.createElement(Link, { className: "text-emerald-500", size: 20 }) },
    ],
    howItWorks: "Leitores, controladores e fechaduras eletrônicas que podem ser gerenciados por software centralizado.",
    whereToUse: "Prédios corporativos, condomínios e áreas restritas.",
  },
  {
    slug: "reconhecimento-facial",
    title: "Reconhecimento Facial",
    image: `${assetsBase}/facial-recognition.jpg`,
    desc: "Identificação avançada para controle e monitoramento.",
    advantages: [
        { title: "Identificação rápida", text: "Senha ou cartão podem ser substituídos por reconhecimento biométrico.", icon: React.createElement(UserCheck, { className: "text-emerald-500", size: 20 }) },
        { title: "Aumento de segurança", text: "Reduz tentativas de fraude de identidade.", icon: React.createElement(ShieldCheck, { className: "text-emerald-500", size: 20 }) },
        { title: "Integração", text: "Trabalha junto com controle de acesso e CFTV.", icon: React.createElement(Link, { className: "text-emerald-500", size: 20 }) },
    ],
    howItWorks: "Algoritmos com modelos treinados identificam rostos em tempo real para autorizar ou sinalizar eventos.",
    whereToUse: "Aeroportos, indústrias sensíveis, laboratórios e lojas de alto valor.",
  },
  {
    slug: "telefonia-voip-pabx",
    title: "Telefonia VOIP & PABX",
    image: `${assetsBase}/voip.jpg`,
    desc: "Comunicação eficiente e integrada.",
    advantages: [
        { title: "Redução de custos", text: "Chamadas via IP reduzem despesas de voz.", icon: React.createElement(DollarSign, { className: "text-emerald-500", size: 20 }) },
        { title: "Mobilidade", text: "Usuários podem estar em qualquer lugar com acesso a rede.", icon: React.createElement(PhoneCall, { className: "text-emerald-500", size: 20 }) },
        { title: "Recursos avançados", text: "Gravação, filas e URAs configuráveis.", icon: React.createElement(Settings, { className: "text-emerald-500", size: 20 }) },
    ],
    howItWorks: "Chamadas são roteadas por rede IP, usando gateways para conexão PSTN quando necessário.",
    whereToUse: "Centros de atendimento, empresas com tráfego de voz e filiais.",
  },
  {
    slug: "wifi-corporativo",
    title: "Wi-Fi Corporativo e Hotspots",
    image: `${assetsBase}/wifi.jpg`,
    desc: "Projetamos redes Wi-Fi de alta densidade garantindo sinal em toda a planta",
    advantages: [
        { title: "Cobertura planejada", text: "Projetos para evitar pontos mortos e interferência.", icon: React.createElement(MapPin, { className: "text-emerald-500", size: 20 }) },
        { title: "Gerenciamento central", text: "Controladora para gerenciar APs e políticas.", icon: React.createElement(Wifi, { className: "text-emerald-500", size: 20 }) },
        { title: "Segurança", text: "Soluções WPA2/WPA3 e segmentação de tráfego.", icon: React.createElement(Lock, { className: "text-emerald-500", size: 20 }) },
    ],
    howItWorks: "Realizamos o planejamento de RF, instalação de APs e integração com a rede core.",
    whereToUse: "Hotéis, shoppings, empresas e ambientes com alta densidade de usuários.",
  },
];

export default services;
