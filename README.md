# Easy Progressive Web App

Easy way to transforma a web application into a progressive web app. It allows run the app offline, add icon to mobile home screen, receive push notifications, etc ( for Chrome desktop or Android browser)

## Elements needed for a progressive app

- manifefest.json: contains app icon, app name, splash screen image, etc.
- Service worker: javascript file to run and cache assets (html, css, fonts, images, etc) recive notifications, etc.

## Use:

- Copy: manifes.json and sw.js to your project root
- Configure manifes.json with values suited to your project: project name, path to icon, etc.
- In sw.js add  files to load offline to the 'filesToCache' array