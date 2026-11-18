# Ciência Delas · 23ª SNCT 2026

Acervo digital e painel interativo da sala temática **Ciência Delas**, desenvolvido para a **23ª Semana Nacional de Ciência e Tecnologia (SNCT 2026)** pelo curso de **Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)** do **IFPI Campus Floriano**.

## Sobre o acervo

O projeto reúne exclusivamente trajetórias da área de **Computação e Tecnologia da Informação**, conectando pioneiras internacionais, pesquisadoras brasileiras de destaque e lideranças científicas do Nordeste:

- **87 perfis completos** em `src/data/pesquisadoras.ts`:
  - **33 pesquisadoras do Nordeste**, cobrindo todos os 9 estados da região (`AL`, `BA`, `CE`, `MA`, `PB`, `PE`, `PI`, `RN`, `SE`);
  - **30 pesquisadoras e pioneiras de outras regiões do Brasil** (`Norte`, `Centro-Oeste`, `Sudeste` e `Sul`, totalizando 22 unidades da federação com representação no mapa);
  - **24 pioneiras internacionais**, dos primeiros algoritmos do século XIX à pesquisa contemporânea em IA.
- **Filtros com persistência na URL** (`?escopo=`, `?uf=`, `?area=`, `?busca=`) e cópia direta de links filtrados, preservando o estado ao voltar de um perfil.
- **36 marcos históricos** na linha do tempo (`src/data/linha-do-tempo.ts`: `14` no Brasil e `22` internacionais, de 1843 a 2026).
- **Mapa do Brasil em SVG** (`src/components/MapaBrasil.astro` e `src/data/mapa-brasil.ts`) com filtro direto por estado.
- **Módulo de código binário ASCII** (`src/lib/binario.ts`) para os cordões da instalação aérea (`ELAS`, `TI`, `TADS`, `SNCT`, `2026`) e palavras temáticas (`CÓDIGO`, `LÓGICA`, `DADOS`, `REDE`, `FUTURO`).
- **6 redes e iniciativas de apoio** (`src/data/iniciativas.ts`).
- **Compartilhamento nativo e QR Codes individuais** (`src/pages/pesquisadoras/[slug].astro`, `src/pages/qrcodes.astro` e `src/lib/qrcode.ts`), com botão `Web Share API` no celular, cópia do link e download individual de QR Code em `.svg` e `.png`.
- **Suporte básico offline / PWA** (`public/manifest.webmanifest` e `public/sw.js`) para cache local das rotas e retratos WebP em redes de eventos com sinal instável.

## Estrutura de pastas

```text
SNCT2026/
├── public/
│   ├── favicon.svg                 # Ícone SVG do site
│   ├── manifest.webmanifest        # Manifesto PWA (instalação e ícones)
│   ├── sw.js                       # Service Worker para cache offline em produção
│   ├── marcas/                     # Variantes oficiais Ciência Delas e parceiros institucionais
│   │   ├── ciencia-delas-app-*.png # Ícones PWA 192×192 e 512×512 (maskable)
│   │   ├── ciencia-delas-*.svg     # 4 versões vetoriais (cores, fundo-branco, branca, violeta)
│   │   ├── ciencia-delas-*.png     # 3 versões em PNG 2048×2048 sem fundo (cores, branca, violeta)
│   │   ├── ifpi-floriano-branca.svg
│   │   ├── mcti-governo-branca.svg
│   │   ├── pop-ciencia-branca-{1x,2x,3x}.png
│   │   └── snct-2026-branca-{1x,2x,3x}.png
│   └── pesquisadoras/
│       ├── *.webp                  # 87 retratos em 640×800 px (WebP)
│       └── min/*.webp              # 87 miniaturas Retina 240×300 px (WebP)
├── src/
│   ├── components/
│   │   ├── MapaBrasil.astro        # Mapa interativo por UF
│   │   └── RetratoEditorial.astro  # Moldura 4:5 com legenda de crédito
│   ├── data/
│   │   ├── iniciativas.ts          # Redes e grupos de apoio
│   │   ├── linha-do-tempo.ts       # 36 marcos históricos
│   │   ├── mapa-brasil.ts          # Geometrias SVG e rótulos das 27 UFs
│   │   ├── pesquisadoras.ts        # Catálogo das 87 pesquisadoras e helpers
│   │   └── taxonomia.ts            # Áreas, escopos, regiões e UFs
│   ├── layouts/
│   │   └── BaseLayout.astro        # Cabeçalho responsivo, rodapé e UI de navegação
│   ├── lib/
│   │   ├── binario.ts              # Conversor ASCII → binário e constantes da sala
│   │   └── qrcode.ts               # Geração vetorial de QR Codes em SVG
│   ├── pages/
│   │   ├── index.astro             # Página inicial (hero, mural, mapa, binário, projetos)
│   │   ├── linha-do-tempo.astro    # Linha do tempo filtrável (Brasil / Mundo)
│   │   ├── qrcodes.astro           # Folha de impressão com QR Codes dos 87 perfis
│   │   └── pesquisadoras/[slug].astro # Páginas individuais geradas estaticamente
│   └── styles/
│       └── global.css              # Tokens da SNCT 2026, tipografia e utilitários
├── astro.config.mjs
├── netlify.toml                  # Configuração de build e cache headers para Netlify
├── package.json
└── tsconfig.json
```

## Scripts e build

Instale as dependências e execute localmente (requer **Node.js >= 22.23.4**):

```bash
npm install
npm run dev
```

Para gerar o site estático em `dist/` (87 páginas de perfil + home + linha do tempo + página de QR Codes = `90` páginas HTML):

```bash
npm run build
npm run preview
```

### Deploy no Netlify e domínio para os QR Codes

O repositório já inclui [`netlify.toml`](./netlify.toml) configurado para build estático (`npm run build` -> `dist`) com cabeçalhos de cache otimizados para o Service Worker (`/sw.js`), manifesto PWA e ativos estáticos.

- **No Netlify:** o [astro.config.mjs](./astro.config.mjs) lê automaticamente `URL` (produção) e `DEPLOY_PRIME_URL` (previews), gerando os QR Codes já apontando para o endereço publicado.
- **Em build local personalizado:** defina `SITE_URL` explicitamente antes do build:

```powershell
$env:SITE_URL="https://cienciadelas.exemplo.br"; npm run build
```

Na página `/qrcodes` e no bloco lateral de cada perfil, os QR Codes também se adaptam ao domínio ativo no navegador.
