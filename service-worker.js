self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('basedex-cache').then(cache => {
            return cache.addAll([
                '/',
                './favicon.png',
                // Daftar URL aset lain yang ingin di-cache di sini
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
