// todo: seems the 'install' event is launched each time the page is reloaded, which cause an indeterminated error
// todo: split filesToCache in two arrays for easy configuration and merge them
// todo: type definitions for typescript. referernces:
// todo: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/service_worker_api

var cacheName = 'epwa';

var filesToCache = [

  // infrastructure files
  '/',
  '/manifest.json',
  '/index.html',
  '/favicon.png',

  // app files
  '/page2.html',
  '/img/header.jpg'

];

self.addEventListener('install', function(event) {
  console.log('install event');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw: installed all files into cache');
      return cache.addAll(filesToCache);
    }).catch(function (err) {
      console.log('error caching files', err);
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // test if the request is cached
    caches.match(event.request).then(function(response) {
      console.log('sw: feching file from cache: ', event.request.url);
      // return response from cache or from network if it is available
      // return response || fetch(event.request);
      return response || fetch(event.request);
    }).catch(function () {
      // if request is not cached nor network available return to index
      return caches.match('index.html');
    })
  )
});