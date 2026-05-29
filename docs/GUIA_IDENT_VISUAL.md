## Diretrizes de Aplicação — Grid Engenharia de Redes

### Uso do Logotipo
- Versão principal: símbolo à esquerda, texto à direita.
- Versão vertical: símbolo acima do texto (redes sociais).
- Ícone: apenas o símbolo (favicon).
- Margem de segurança: 1x (onde x = largura do símbolo).
- Tamanho mínimo: 32px (ícone) / 48px (horizontal).

### Paleta de Cores
- Azul Navy (Base) — #1A2B48 — Títulos, marca, fundos sóbrios.  
- Verde Status (Ação) — #4CAF50 — CTAs, ícones de status, realces.  
- Cinza Técnico — #64748B — Textos de apoio, ícones secundários.  
- Branco Gelo — #F8FAFC — Fundo principal.

Exemplo CSS variável:
```css
:root{
    --brand-blue:#1A2B48;
    --brand-green:#4CAF50;
    --gray-technical:#64748B;
    --ice-white:#F8FAFC;
}
```

### Tipografia
- Títulos: Montserrat ou Inter — Bold 700.  
- Corpo: Inter ou Open Sans — Regular 400.  
- Apoio (dados/código): JetBrains Mono ou Fira Code.  
Import (exemplo):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700&display=swap" rel="stylesheet">
```

### Ícones e Imagens
- Biblioteca recomendada: lucide-react (traço fino).  
- Ícones sugeridos: Camera, Shield, Network, Phone.  
- Imagens: racks organizados, câmeras modernas — aplicar filtro azul suave e legível.

### Componentes e Estilo
- Cards: fundo branco, borda sutil, sombra leve (ex: shadow-sm).  
- Botão principal (Solicitar Orçamento): background #4CAF50, texto branco, borda arredondada. Exemplo Tailwind:
    `bg-[#4CAF50] text-white rounded-md px-4 py-2 hover:opacity-90`
- Grid de serviços: 3 colunas responsivas; ícone verde no topo, título em negrito.

### Layouts Específicos
- Hero: imagem de data center com overlay suave + título "Grid Engenharia de Redes" e subtítulo "Estrutura, agilidade e segurança".
- Sobre Nós: texto à esquerda, imagem técnica à direita.
- Formulário de Contato: formulário simples com mapa ao lado (placeholder).

### Navbar
- Sticky/fixa no topo; ao rolar reduzir opacidade do fundo (ex: bg-white/90 -> bg-white/70) e manter sombra leve.

### Grade e Elementos Técnicos
- Usar linhas finas 1px em tons de cinza claro no fundo para remeter a planta técnica.  
- Espaçamento modular: 8px (base), 16px, 24px, 32px para consistência.

### Boas práticas de export e assets
- SVG para logotipo e ícones quando possível.  
- Pastas sugeridas: /src/components, /src/assets.  
- README: instruções para rodar (ex: bun install; bun run dev) e deploy (Vercel/Netlify).
- Referência de implementação: usar lucide-react para ícones e fontes Inter/Montserrat conforme import acima.