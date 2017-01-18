# Easy Progressive Web App

Keep it simple. Easy way to transform a web application into a progressive web app. There are other options on the Internet to accomplish this, but this is much simpler in my opinion. This project allows to run the app offline, add an icon to the mobile home screen, receive push notifications, etc. (for Chrome desktop or Chrome mobile browser).



## Elements needed for a Progressive Web App

- `manifefest.json`: a file containing config metadata (app icon, app name, splash screen image, etc.)
- `Service worker`: javascript file to cache assets (html, css, fonts, images, etc), receive notifications, etc. 
  - A service worker is a javascript file that runs in the background and works like a proxy server. It allows to intercept requests and decide if response from cache memory or from network.
  - Browsers that don’t support them can just use your app online in the normal expected fashion.

## Demo

- <a href="https://yagolopez.github.io/progressive-web-app-boilerplate/" target=_blank>Open</a>

## Requirements

- Chrome for desktop or mobile (Probably it works on latest versions of Opera and FireFox, not tested)
- Service workers need to be served through **https** protocol. It is available on GitHub, for example. For local development and testing they only work on http://localhost or http://127.0.0.1. (Not valid for local intranet addresses or names, keep this in mind).

## Use

- Copy `manifes.json` and `sw-epwa.js` into your ***project root***
- Configure `manifes.json` with values suited to your project: *app name, path to icon, etc.*
- In `sw-epwa.js`,  add the paths of the files that must be loaded offline (this files are also called "app shell")
- In Chrome for desktop: disconnect form network and check if you can reload it. (see console for logs). You can also check the Cache Storage in Developer Tools → Application tab
- In Chrome for mobile: use the upper right menu and add the app icon to the home screen, disconnect from network an reload.
- Note: in offline mode some errors may appear, you can ignore it. This do not prevent the right execution of the service worker.

## To do

- Push notifications

