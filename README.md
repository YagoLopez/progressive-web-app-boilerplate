# Easy Progressive Web App

Easy way to transform a web application into a progressive web app. It allows run the app offline, add an icon to mobile home screen, receive push notifications, etc (for Chrome desktop or Android browser)

## Elements needed for a progressive app

- `manifefest.json`: file containing metadata: app icon, app name, splash screen image, etc.
- Service worker: javascript file to run and cache assets (html, css, fonts, images, etc) and receive notifications, etc.

## Demo

- <a href="https://yagolopez.github.io/progressive-web-app-boilerplate/" target=_blank>Open</a>

## Requirements

- Chrome for desktop or mobile (Probably it works on Opera, not tested)
- Service workers need the **https** protocol. It is available on GitHub, for example. For local development and testing it only works on http://localhost or http://127.0.0.1. (Not valid for local intranet addresses or names, keep this in mind).

## Use

- Copy `manifes.json` and `sw-epwa.js` to your ***project root***
- Configure `manifes.json` with values suited to your project: *project name, path to icon, etc.*
- In `sw-config.js`,  add to the ***filesToCache*** array the path to the files that must be loaded offline (this files are also called "app shell")
- Load your app, disconnect form network and check if you can reload it.
- Note 1: check the console for logs.

## Notes

- Check the console for logs.
- When network is disconnected Chrome throws some error even being able to reload the page.

## To do

- Push notifications

