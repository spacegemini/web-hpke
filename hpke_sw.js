const CACHE_NAME = 'hpke-tool-v2';
const ASSETS = [
    './hpke.html',
    './hpke_manifest.json',
    './hpke_sw.js',
    './hpke_lib/hpke_js.js',
    './hpke_lib/hpke_common.js',
    './hpke_lib/hpke_core.js',
    './hpke_lib/hpke_chacha20poly1305.js',
    './hpke_lib/hpke_dhkem_x25519.js',
    './hpke_lib/hpke_dhkem_x448.js',
    './hpke_lib/icon-192.png',
    './hpke_lib/icon-512.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
