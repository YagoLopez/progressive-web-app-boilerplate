var cacheName = 'easy-pwa';
var filesToCache = [
  '/'
];

if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').then(function () {
    console.log('sw: service worker registered');
  })
}

// install service worker
self.addEventListener('install', function (e) {
  console.log('sw: installing');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('sw: caching app shell');
      return cache.addAll(filesToCache);
    })
  )
});

// during activation if old cache of this app exists, remove it
self.addEventListener('activate', function(e) {
  console.log('sw: activating');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('sw: removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('sw: fetching', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});