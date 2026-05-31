import * as React from "react";
import {
  Camera,
  ShieldCheck,
  Eye,
  Server,
  Columns,
  FileText,
  Link,
  UserCheck,
  PhoneCall,
  Settings,
  MapPin,
  Wifi,
  Lock,
  DollarSign,
} from "lucide-react";

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
    slug: "cftv-cameras-monitoramento",
    title: "CFTV, Câmeras e Monitoramento",
    image: `${assetsBase}/cftv.jpg`,
    desc: "Proteção 24h para o seu patrimônio com câmeras que inibem incidentes, gravações que apoiam decisões e acesso remoto para você acompanhar tudo em tempo real, de qualquer lugar.",
    advantages: [
      { title: "Vigilância contínua", text: "Câmeras analógicas, digitais ou IP registram o ambiente e inibem furtos, invasões e perdas.", icon: React.createElement(Camera, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Acesso remoto seguro", text: "Visualização por aplicativo ou central autorizada, com imagens disponíveis para acompanhamento em tempo real.", icon: React.createElement(Eye, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Gravação e alertas", text: "Armazenamento local ou em nuvem, regras de alerta e evidências para resposta rápida e auditoria.", icon: React.createElement(ShieldCheck, { className: "text-[#0036b2]", size: 20 }) },
    ],
    howItWorks: "Avaliamos os pontos críticos, definimos câmeras, gravadores ou NVRs, configuramos acesso remoto, retenção de imagens e alertas para que o monitoramento opere de forma contínua e confiável.",
    whereToUse: "Comércios, condomínios, indústrias, escolas, clínicas, estacionamentos, áreas externas e qualquer ambiente que precise de vigilância, registro e acompanhamento 24h.",
  },
  {
    slug: "controle-acesso-seguranca-eletronica",
    title: "Controle de Acesso e Segurança Eletrônica",
    image: `${assetsBase}/door_access_control.jpg`,
    desc: "Saiba quem entrou, quando e onde. Controle de acesso com credenciais flexíveis e rastreável, impedindo entradas não autorizadas e protegendo pessoas e ativos.",
    advantages: [
      { title: "Credenciais flexíveis", text: "Liberação por senha, cartão, tag, biometria ou reconhecimento facial conforme o perfil de risco e a rotina do local.", icon: React.createElement(UserCheck, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Rastreabilidade e logs", text: "Registros de entrada e saída apoiam auditorias, investigação de ocorrências e gestão de permissões.", icon: React.createElement(FileText, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Proteção integrada", text: "Integração com CFTV, fechaduras, portas, catracas e automações para elevar a segurança eletrônica do patrimônio.", icon: React.createElement(Link, { className: "text-[#0036b2]", size: 20 }) },
    ],
    howItWorks: "Mapeamos fluxos de pessoas e áreas restritas, selecionamos leitores, controladoras, fechaduras e dispositivos de identificação, configuramos regras de acesso e validamos integrações com CFTV e demais sistemas de segurança.",
    whereToUse: "Empresas, condomínios, portarias, escolas, clínicas, hospitais, salas restritas, estoques, laboratórios, residências e locais que exigem controle de acesso e proteção patrimonial.",
  },
  {
    slug: "infraestrutura-de-rede",
    title: "Infraestrutura de Rede",
    image: `${assetsBase}/estructure-cable.jpg`,
    desc: "Rede cabeada e Wi-Fi projetadas para não falhar. Base organizada, conectividade estável e espaço para crescer sem retrabalho — essencial para negócios que dependem de disponibilidade.",
    advantages: [
      { title: "Base física organizada", text: "Cabeamento estruturado, racks, patch panels e identificação reduzem falhas e simplificam manutenção.", icon: React.createElement(Columns, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Conectividade corporativa", text: "Switches, enlaces, pontos de rede e topologia dimensionados para desempenho, disponibilidade e crescimento.", icon: React.createElement(Server, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Wi-Fi e hotspots", text: "Cobertura planejada, pontos de acesso, segmentação e políticas para usuários internos, visitantes e áreas de alta densidade.", icon: React.createElement(Wifi, { className: "text-[#0036b2]", size: 20 }) },
    ],
    howItWorks: "Realizamos levantamento do ambiente, projetamos a topologia cabeada e sem fio, instalamos cabos, racks, switches e access points, configuramos hotspots e validamos cobertura, conectividade e desempenho.",
    whereToUse: "Escritórios, condomínios, escolas, hotéis, shoppings, clínicas, hospitais, indústrias, data centers e ambientes que dependem de rede cabeada, Wi-Fi ou acesso de visitantes.",
  },
  {
    slug: "interfones-video-porteiros",
    title: "Interfones e Vídeo Porteiros",
    image: `${assetsBase}/interfones-video-porteiros.png`,
    desc: "Identifique visitantes antes de abrir a porta. Comunicação por áudio e vídeo que dá segurança para portarias, recepções e residências liberarem apenas quem deve entrar.",
    advantages: [
      { title: "Atendimento prático", text: "Comunicação rápida entre visitante, portaria, recepção, morador ou equipe interna.", icon: React.createElement(PhoneCall, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Identificação antes da entrada", text: "Áudio e vídeo porteiro ajudam a confirmar visitantes antes de liberar portas, portões ou áreas controladas.", icon: React.createElement(Eye, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Integração com acesso", text: "Pode acionar fechaduras, portões e controles de entrada, mantendo a comunicação integrada à segurança do local.", icon: React.createElement(Lock, { className: "text-[#0036b2]", size: 20 }) },
    ],
    howItWorks: "Definimos pontos internos e externos, instalamos módulos de áudio ou vídeo, configuramos acionamentos e testamos a comunicação para uma rotina de acesso mais segura e organizada.",
    whereToUse: "Condomínios, casas, portarias, recepções, clínicas, escolas, empresas, galpões e locais que precisam comunicar visitantes e controlar liberações de entrada.",
  },
  {
    slug: "cancelas-eletronicas",
    title: "Cancelas Eletrônicas",
    image: `${assetsBase}/cancela-eletronica.png`,
    desc: "Controle veicular sem falhas humanas. Cancelas automatizadas organizam entradas e saídas, reduzem acessos indevidos e liberam o fluxo sem comprometer a segurança.",
    advantages: [
      { title: "Fluxo veicular controlado", text: "Organiza entradas e saídas, reduz acesso indevido e melhora a operação de garagens e estacionamentos.", icon: React.createElement(MapPin, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Acionamento automatizado", text: "Liberação por controle, TAG, cartão, interfone, botão ou integração com sistemas de acesso.", icon: React.createElement(Settings, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Integração de segurança", text: "Cancelas podem operar com CFTV, registros de acesso e regras para visitantes, moradores ou colaboradores.", icon: React.createElement(Link, { className: "text-[#0036b2]", size: 20 }) },
    ],
    howItWorks: "Projetamos o ponto de controle, instalamos a cancela ou automação do portão, configuramos acionamentos e integramos recursos de identificação e monitoramento quando necessário.",
    whereToUse: "Condomínios, estacionamentos, empresas, escolas, hospitais, centros logísticos, garagens e áreas com controle de acesso veicular.",
  },
  {
    slug: "telefonia-voip-pabx",
    title: "Telefonia VOIP & PABX",
    image: `${assetsBase}/voip.jpg`,
    desc: "Comunicação corporativa que reduz custos e ganha mobilidade. Sua equipe atende de qualquer ponto com ramais inteligentes, filas e gravações que melhoram o atendimento ao cliente.",
    advantages: [
      { title: "Redução de custos", text: "Chamadas via IP e roteamento inteligente ajudam a reduzir despesas de telefonia.", icon: React.createElement(DollarSign, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Mobilidade e ramais", text: "Usuários podem atender de estações, softphones ou filiais conectadas à rede corporativa.", icon: React.createElement(PhoneCall, { className: "text-[#0036b2]", size: 20 }) },
      { title: "Recursos avançados", text: "Filas, URA, gravação, relatórios e regras de atendimento melhoram a comunicação com clientes e equipes.", icon: React.createElement(Settings, { className: "text-[#0036b2]", size: 20 }) },
    ],
    howItWorks: "Dimensionamos ramais e troncos, configuramos PABX IP, gateways, filas, URA e gravações, validando qualidade de voz, roteamento e integração com a rede existente.",
    whereToUse: "Empresas, centrais de atendimento, clínicas, escritórios, lojas, condomínios, instituições de ensino e organizações com múltiplos ramais ou filiais.",
  },
];

export default services;
