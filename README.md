# Easy Progressive Web App

Easy way to transform a web application into a progressive web app. It allows run the app offline, add icon to mobile home screen, receive push notifications, etc (for Chrome desktop or Android browser)

## Elements needed for a progressive app

- `manifefest.json`: contains app icon, app name, splash screen image, etc.
- Service worker: javascript file to run and cache assets (html, css, fonts, images, etc) and receive notifications, etc.

## Use:

- Copy `manifes.json` and `sw-epwa.js` to your ***project root***
- Configure `manifes.json` with values suited to your project: *project name, path to icon, etc.*
- In `sw-epwa.js`, add to the ***filesToCache*** array variable the path to the files that must be loaded offline (this files are also called "app shell")