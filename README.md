# Easy Progressive Web App

Keep it simple. Easy way to transform a web application into a progressive web app. It allows run the app offline, add an icon to mobile home screen, receive push notifications, etc (for Chrome desktop or Android browser).



## Elements needed for a progressive app

- `manifefest.json`: a file containing config metadata (app icon, app name, splash screen image, etc.)
- `Service worker`: javascript file to run and cache assets (html, css, fonts, images, etc) and receive notifications, etc. 
  - A service worker functions like a proxy server, allowing you to modify requests and responses, replace them with items from its own cache, and more.
  - Browsers that don’t support them can just use your app online in the normal expected fashion.

## Demo

- <a href="https://yagolopez.github.io/progressive-web-app-boilerplate/" target=_blank>Open</a>

## Requirements

- Chrome for desktop or mobile (Probably it works on latest versions of Opera and FireFox, not tested)
- Service workers need the **https** protocol. It is available on GitHub, for example. For local development and testing it only works on http://localhost or http://127.0.0.1. (Not valid for local intranet addresses or names, keep this in mind).

## Use

- Copy `manifes.json`, `sw-epwa.js` and `sw-config.js` in your ***project root*** and include them in the`index.html` file
- Configure `manifes.json` with values suited to your project: *project name, path to icon, etc.*
- In `sw-config.js`,  add to the paths to the files that must be loaded offline (this files are also called "app shell")
- In Chrome for desktop: disconnect form network and check if you can reload it. (see console for logs)
- In Chrome for mobile: use the upper right menu and add the icon app to the homescreen.
- Note: in offline mode is possible to get websockets error in console. Contact with Google :D

## To do

- Push notifications

