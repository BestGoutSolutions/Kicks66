// Kicks66 Service Worker
const CACHE = 'kicks66-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // Pass through all requests normally
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
