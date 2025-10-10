// Service Worker simple para mejorar el cacheo en iOS
const CACHE_NAME = 'enalo-v1';
const CRITICAL_ASSETS = [
  '/images/hero/pipeta-aceite.png',
  '/images/hero/background.png',
  '/images/products/squalane-100.png',
  '/images/products/body-oil.png',
  '/images/squalane.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Solo cachear imágenes
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((fetchResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
});

