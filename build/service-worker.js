importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([
  {
    "url": "index.html",
    "revision": "c866d424d607ea1d82759f442de41da8"
  },
  {
    "url": "scripts/app.js",
    "revision": "ca1d86b37919ea4a94019823e66bc0b8"
  },
  {
    "url": "scripts/console.js",
    "revision": "16ab3cbfafd7e3067a274b76ae8f6194"
  },
  {
    "url": "scripts/header.js",
    "revision": "43b9b8e5b0e8270108b1d47fa61e6dfc"
  },
  {
    "url": "scripts/login.js",
    "revision": "3cb8cad8b6f22c3074382b9371078e80"
  },
  {
    "url": "scripts/material.min.js",
    "revision": "e68511951f1285c5cbf4aa510e8a2faf"
  },
  {
    "url": "service-worker.js",
    "revision": "c256a1af9fed03d76d25e93d25833ea8"
  },
  {
    "url": "accountCreation.html",
    "revision": "a8357b052dcc4cadeb57dad1185f5a99"
  },
  {
    "url": "console.html",
    "revision": "d7aeaf7a53b676e71084522beb64f9ab"
  },
  {
    "url": "login.html",
    "revision": "5e61449689eccfc3abce1169b2ebfb56"
  },
  {
    "url": "css/Login_style.css",
    "revision": "0a3fedbad032d8e4d2e37a2969fa2a45"
  },
  {
    "url": "css/main.css",
    "revision": "dec2eed382307a2c86d3fcdd54ed87df"
  },
  {
    "url": "css/material.min.css",
    "revision": "a09f24c85cb39ef5db425b71c8c98c4a"
  },
  {
    "url": "css/styles.css",
    "revision": "628ea1d6d2f6d7016432010d4f8e4ae0"
  }
]);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workboxSW.router.registerRoute('https://code.getmdl.io/(.*)',
    workboxSW.strategies.cacheFirst({
        cacheName: 'mdl',
        cacheExpiration: {
            maxEntries: 20
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);

// // We want no more than 50 images in the cache. We check using a cache first strategy
// workboxSW.router.registerRoute(/\.(?:png|gif|jpg)$/,
//   workboxSW.strategies.cacheFirst({
//     cacheName: 'images-cache',
//     cacheExpiration: {
//       maxEntries: 50
//     }
//   })
// );
