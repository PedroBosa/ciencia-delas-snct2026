const CACHE_SHELL = 'ciencia-delas-shell-v2';
const CACHE_ASSETS = 'ciencia-delas-assets-v2';

const PRECACHE_URLS = [
  '/',
  '/linha-do-tempo/',
  '/favicon.svg',
  '/manifest.webmanifest',
  '/marcas/ciencia-delas-app-192.png',
];

function normalizarNavegacao(url) {
  if (url.pathname === '/') return '/';
  return url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_SHELL)
      .then((cache) => Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const cachesAtivos = new Set([CACHE_SHELL, CACHE_ASSETS]);
  event.waitUntil(
    caches
      .keys()
      .then((chaves) =>
        Promise.all(chaves.filter((chave) => !cachesAtivos.has(chave)).map((chave) => caches.delete(chave)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegações HTML: Network-first com fallback no cache (ignorando query strings como ?uf=PI)
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      (async () => {
        const chaveRota = normalizarNavegacao(url);
        const cache = await caches.open(CACHE_SHELL);
        try {
          const resposta = await fetch(request);
          if (resposta.ok) {
            cache.put(chaveRota, resposta.clone());
          }
          return resposta;
        } catch {
          return (
            (await cache.match(chaveRota)) ||
            (await cache.match(url.pathname)) ||
            (await cache.match('/')) ||
            Response.error()
          );
        }
      })()
    );
    return;
  }

  // Pacotes com hash gerados pelo Astro: Cache-first
  if (url.pathname.startsWith('/_astro/')) {
    event.respondWith(
      caches.open(CACHE_ASSETS).then(async (cache) => {
        const emCache = await cache.match(request);
        if (emCache) return emCache;
        const resposta = await fetch(request);
        if (resposta.ok) cache.put(request, resposta.clone());
        return resposta;
      })
    );
    return;
  }

  // Retratos WebP, logotipos e manifesto: Stale-while-revalidate para abertura imediata offline
  if (
    url.pathname.startsWith('/pesquisadoras/') ||
    url.pathname.startsWith('/marcas/') ||
    url.pathname === '/favicon.svg' ||
    url.pathname === '/manifest.webmanifest'
  ) {
    event.respondWith(
      caches.open(CACHE_ASSETS).then(async (cache) => {
        const emCache = await cache.match(request);
        const atualizacao = fetch(request)
          .then((resposta) => {
            if (resposta.ok) cache.put(request, resposta.clone());
            return resposta;
          })
          .catch(() => null);
        return emCache || (await atualizacao) || Response.error();
      })
    );
  }
});
