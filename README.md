![](img/header.jpg)

# Easy Progressive Web App

Keep it simple. Easy way to transform a web application into a Progressive Web App (PWA). There are other options on the Internet to accomplish it, but this is much simpler in my opinion. (for Chrome desktop and mobile at the moment).

> PWAs enable the paradigm of one code base for all platforms: desktop and mobile (IOS, Android Windows Phone, etc.) This is a very efficient and low-cost way of software development for the enterprise -for example-. It avoids the current and inneficient platform fragmentation.



## Beneficts

- Great user experience: faster and native feeling
- Much lower cost of development and mantenance that multiple platforms
- Better SEO
- Lower data mobile use
- No app stores dependency
- Best of both worlds: mobile and web


|                 Image 1                  |                 Image 2                  |
| :--------------------------------------: | :--------------------------------------: |
| <img src="img/pwa-stats4.png"/ style="width:250px; height:150px;"> | <img src="img/pwa-stats3.jpg"/ style="width:250px; height:150px;"> |



## Elements needed for a Progressive Web App

- `manifefest.json`: a file containing config metadata (app icon, app name, splash screen image, etc.)
- `Service worker`: javascript file to cache assets (html, css, fonts, images...), receive notifications, etc. 
  - A service worker is a javascript file that runs in the background and works like a proxy server. It allows to intercept requests and decide if response from cache memory or from network.
  - Browsers that don’t support them can just use the app online in the normal expected fashion.

  <img src="img/sw.png"/>

## Demo

- <a href="https://yagolopez.github.io/progressive-web-app-boilerplate/" target=_blank>Open</a>

## Requirements

- Chrome for desktop or mobile (Probably it works on the latest Opera and FireFox versions, not tested)
- Service workers need to be served through **https** protocol. It is available on GitHub, for example. For local development and testing they only work on localhost (Not valid for local intranet addresses or names, keep this in mind).

## Use

- Copy `manifes.json` and `sw-epwa.js` into your ***project root***
- Configure `manifes.json` with values suited to your project: *app name, path to icon, etc.*
  - In `sw-epwa.js` → `filesToCache` *array*, add the paths of the files that must be cached to load offline (this files are also called "app shell")
- Add a shorcut icon to the home screen:
  - In Chrome for desktop: upper right menu → "More tools" → "Add to desktop"
  - In Chrome for mobile: upper right menu → "Add to home screen"
- Note: in offline mode some errors may appea in consoler, you can ignore it. This do not prevent the right execution of the service worker.

## To do

- Push notifications

## References

- [https://www.geekmj.org/insights/progressive-web-app-introduction-599/](https://www.geekmj.org/insights/progressive-web-app-introduction-599/)
- [https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)




<a href="#">Back to start </a> ↑