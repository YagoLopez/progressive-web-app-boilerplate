// todo: 'install' event is for old caches deletion. use it?
// todo: split filesToCache in two arrays for easy configuration and merge them
// todo: use typescript. referernces:
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/service_worker_api

var cacheName = 'epwa';

var filesToCache = [

  // infrastructure files --------------------------
  '/',
  'index.html',
  'sw.js',
  'manifest.json',
  'favicon.png',
  //------------------------------------------------

  // app files -------------------------------------
  'page2.html',
  'css/styles.css',
  'img/header.jpg',
  'img/offline-img.png',
  'https://fonts.googleapis.com/css?family=Raleway'
  // -----------------------------------------------

];

// todo: check if service worker is installed before
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('sw: registration ok');
  }).catch(function(err) {
    console.error(err);
  });
}

// install (write) files to cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw: installing files into cache');
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener('activate', function (event) {
  console.log('sw: files installed to cache and sw activated', event);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // test if the request is cached
    caches.match(event.request).then(function(response) {
      // 1) if request cached: return "response" from cache
      // 2) if request not cached, "fetch" resource from network
      return response || fetch(event.request);
    }).catch(function (err) {
      // if request is not cached and network is unavailable, return to index by default
      return caches.match('img/offline-img.png');
    })
  )
});