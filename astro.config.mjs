// @ts-check
import { defineConfig } from 'astro/config';

/**
 * URL pública do site — usada para gerar os QR Codes impressos.
 * No Netlify, utiliza automaticamente URL (produção) ou DEPLOY_PRIME_URL (preview),
 * podendo ser sobrescrita explicitamente via SITE_URL:
 *   PowerShell:  $env:SITE_URL="https://cienciadelas.exemplo.br"; npm run build
 */
const SITE_URL =
  process.env.SITE_URL ??
  (process.env.CONTEXT === 'production'
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL ?? process.env.URL) ??
  'http://localhost:4321';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
});
