"use strict";

const CACHE_PREFIX = "nokhba-cinema";
const CACHE_VERSION = "v1.0.1";
const STATIC_CACHE = `${CACHE_PREFIX}-static-${CACHE_VERSION}`;
const PAGE_CACHE = `${CACHE_PREFIX}-pages-${CACHE_VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./about.html",
  "./gallery.html",
  "./movies.html",
  "./videos.html",
  "./create-video.html",
  "./science-fiction.html",
  "./nature.html",
  "./style.css",
  "./app.js",
  "./i18n.js",
  "./pwa.js",
  "./manifest.json",
  "./film-strip-logo.svg",
  "./icons/nokhba-cinema.svg",
  "./nokhba-cinema-hero.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith(CACHE_PREFIX + "-") && key !== STATIC_CACHE && key !== PAGE_CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(PAGE_CACHE).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);
          return cachedPage || await caches.match("./index.html") || Response.error();
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      const networkUpdate = fetch(request).then(response => {
        if (response && response.ok && response.type === "basic") {
          const copy = response.clone();
          caches.open(STATIC_CACHE).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => cached);

      return cached || networkUpdate;
    })
  );
});