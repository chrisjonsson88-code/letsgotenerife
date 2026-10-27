const CACHE_NAME = 'letsgo-tenerife-v7';
const ASSETS = [
  '/',
  'index.html',
  'logo.svg',
  'images/portada-carretera-teide.jpg',
  'images/teide-tour.jpg',
  'images/sunset-nubes.jpg',
  'images/vip-pareja-atardecer.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => console.log('PWA cache notice:', err));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
