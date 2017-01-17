// todo: seems to launch 'install' event each time the page reloads which cause indeterminated error
// todo: split filesToCache in two arrays for easy configuration and merge them

var cacheName = 'epwa';
var filesToCache = [
  '/',
  // 'sw-config.js',
  'sw-epwa.js',
  'manifest.json',
  'index.html',
  'page2.html',
  'favicon.ico',
  'img/icon144x144.png'
];

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw-epwa.js').then(function(reg) {
    console.log('sw: registration succeeded');
  }).catch(function(error) {
    console.log('sw: registration failed ' + error);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw: installing all files into cache');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // test if the request is cached
    caches.match(event.request).then(function(response) {
      // return response from cache or from network if is available
      return response || fetch(event.request);
    }).catch(function () {
      // if request is not cached nor network available return to index
      return caches.match('index.html');
    })
  );
});