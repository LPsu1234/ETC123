/**
 * EasyToChina (ETC) - Service Worker
 * Enables offline use by caching app resources
 */

const CACHE_NAME = 'easytochina-v15';
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/data.js',
    './js/city-photos.js',
    './js/city-art.js',
    './js/city-art-part2.js',
    './js/city-art-part3.js',
    './js/city-art-part4.js',
    './js/city-mascots.js',
    './js/speech.js',
    './js/i18n.js',
    './js/auth.js',
    './js/community.js',
    './js/app.js',
    './manifest.json',
    './icon.svg',
    './images/mascots/beijing.png',
    './images/mascots/shanghai.png',
    './images/mascots/xian.png',
    './images/mascots/chengdu.png',
    './images/mascots/chongqing.png',
    './images/mascots/hangzhou.png',
    './images/mascots/suzhou.png',
    './images/mascots/guangzhou.png',
    './images/mascots/shenzhen.png',
    './images/mascots/harbin.png',
    './images/mascots/lasa.png',
    './images/mascots/changsha.png',
    './images/mascots/xiamen.png',
    './images/mascots/kunming.png',
    './images/mascots/nanjing.png',
    './images/mascots/jingdezhen.png',
    './images/mascots/yiwu.png',
    './images/mascots/wuhan.png',
    './images/mascots/tianjin.png',
    './images/mascots/qingdao.png',
    './images/mascots/zhengzhou.png',
    './images/mascots/urumqi.png',
    './images/mascots/hohhot.png',
    './images/mascots/london.png',
    './images/cities/london-1.jpg',
    './images/cities/london-2.jpg',
    './images/cities/london-3.jpg'
];

// Install: cache all assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch: network-first strategy (always get the latest version online, fall back to cache offline)
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;
    // Only handle same-origin requests
    if (req.url && new URL(req.url).origin !== self.location.origin) return;

    event.respondWith(
        fetch(req).then((response) => {
            if (response && response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(req, responseClone);
                });
            }
            return response;
        }).catch(() => {
            return caches.match(req).then((cached) => {
                if (cached) return cached;
                if (req.destination === 'document') {
                    return caches.match('./index.html');
                }
                return Response.error();
            });
        })
    );
});
