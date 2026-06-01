# Go-Live Checklist — Alpha One Tech

## Informações do Projeto

| Item | Valor |
|---|---|
| **Domínio** | alphaonetech.com.br |
| **Plataforma** | Vercel |
| **E-mail destino** | alphainstalacoes02@gmail.com |
| **WhatsApp** | (21) 99119-5338 |
| **API de e-mail** | Resend (serverless function) |
| **Analytics** | Google Analytics 4 |

---

## Fase 1 — Bloqueadores Críticos

### 1. Formulário de Contato Funcional
- [x] Criar `api/contact.ts` — serverless function (POST, validação, envio via Resend)
- [x] Reescrever `src/lib/contact.ts` — fetch para `/api/contact`, timeout 10s, tratamento de erro
- [x] Atualizar `src/components/ContactForm.tsx` — estados idle/submitting/success/error
- [x] Adicionar env var `RESEND_API_KEY` na Vercel (confirmado pelo usuário)
- [x] Validação client-side: campos obrigatórios, email válido

**Arquivos:**
- `api/contact.ts` (novo)
- `src/lib/contact.ts`
- `src/components/ContactForm.tsx`
- `src/index.css` (estilos de toast)

### 2. SEO — Meta Tags + Open Graph
- [x] Adicionar `<meta name="description">` no `index.html`
- [x] Adicionar `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`
- [x] Adicionar `twitter:card` meta tag
- [x] Gerar imagem OG em `/public/assets/og-image.png`

**Arquivo:** `src/index.html`

### 3. Conteúdo de Serviços
- [x] Corrigir typo em `Projects.tsx` ("Evite problemas de para com antede")
- [x] Preencher imagens vazias em `Projects.tsx` (usando assets reais)
- [x] Revisar textos descritivos — orientar a benefício, não feature

**Arquivos:**
- `src/lib/services.ts`
- `src/components/Projects.tsx`

### 4. Sitemap + Robots
- [x] Criar `public/robots.txt`
- [x] Criar `public/sitemap.xml` (home + páginas de serviço)

**Arquivos:**
- `public/robots.txt`
- `public/sitemap.xml`

### 5. Google Analytics 4
- [x] Adicionar script `gtag.js` no `index.html`
- [x] Configurar evento customizado `form_submit`
- [x] Measurement ID: `G-F2E1KMCEQ7`

**Arquivo:** `src/index.html`

---

### 5b. Hero Animado (HeroGeometric)
- [x] Instalar framer-motion
- [x] Criar `src/components/ui/shape-landing-hero.tsx` (HeroGeometric + ElegantShape)
- [x] Adaptar cores para identidade Alpha One Tech (#0036b2)
- [x] Restaurar imagem de fundo hero.jpg com overlay
- [x] Reescrever `src/components/Hero.tsx` como wrapper

### 5c. Seção de Serviços (ServiceCard)
- [x] Criar `src/components/ui/service-card.tsx` (adaptado do ProductCard)
- [x] Refatorar `src/components/Services.tsx` para usar ServiceCard
- [x] Cards com hover effects, badge de ícone, botão "Saiba mais"

---

## Fase 2 — Importantes

### 6. WhatsApp Flutuante
- [ ] Criar `src/components/WhatsAppButton.tsx`
- [ ] Link: `https://wa.me/5521991195338?text=Olá! Vi o site da Alpha One Tech.`
- [ ] Posição fixa, visível em mobile e desktop
- [ ] Adicionar `src/App.tsx`

**Arquivo:** `src/components/WhatsAppButton.tsx` (novo)

### 7. Fallback de Imagens
- [x] Criar helper `<ImgWithFallback>` com `onError`
- [x] Aplicar nos serviços e projetos

**Arquivo:** `src/components/ui/img-fallback.tsx` (novo)

### 8. Links Externos Seguros
- [x] Adicionar `target="_blank" rel="noopener noreferrer"` em links externos do `Partners.tsx`

**Arquivo:** `src/components/Partners.tsx`

### 9. LGPD
- [x] Adicionar checkbox "Li e aceito a Política de Privacidade" no formulário
- [x] Adicionar link "Política de Privacidade" no Footer

**Arquivos:**
- `src/components/ContactForm.tsx`
- `src/components/Footer.tsx`

---

## Fase 3 — Deploy + Validação

### Deploy na Vercel
- [x] Conectar repositório ao Vercel
- [ ] Configurar domínio `alphaonetech.com.br`
- [x] Adicionar env var `RESEND_API_KEY`
- [ ] Confirmar build automático via push

### Validação
- [ ] `bun run build` → exit code 0
- [ ] Formulário envia e-mail em produção
- [ ] Sem broken images
- [ ] Sem typos/placeholders
- [ ] GA4 recebendo page_views
- [ ] WhatsApp flutuante abrindo conversa
- [ ] Lighthouse ≥ 80 (SEO, acessibilidade)
- [ ] SSL ativo (https funcionando)

---

## Pós Go-Live (Backlog)

- [ ] Navbar sticky com blur no scroll
- [ ] Animações fade-in nas seçõesIntersectionObserver
- [ ] JSON-LD structured data (LocalBusiness)
- [ ] Lazy loading de imagens below-the-fold
- [ ] Página 404 customizada
- [ ] Testes de build automatizados
