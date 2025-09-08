const CACHE_NAME = 'pinyin-app-cache-v1';
const urlsToCache = [
  './学习拼音最终版.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
  // 若有其它资源（如 css、js）可继续添加
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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