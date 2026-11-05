// Bump VERSION whenever you change any file, so phones fetch the update.
const VERSION = 'home-emom-v12';
const FILES = ['./','index.html','style.css','app.js','manifest.json',
  'icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png',
  'home-emom-guide.pdf',
  'ex-toe-taps.svg',
  'ex-pelvic-tilts.svg',
  'ex-heel-slides.svg',
  'ex-clamshells.svg',
  'ex-chair-squats.svg',
  'ex-cat-cow.svg',
  'ex-breathing-and-pelvic-floor-lift.svg',
  'ex-bird-dogs.svg','ex-bodyweight-squats.svg','ex-dead-bugs.svg','ex-donkey-kicks.svg','ex-fire-hydrants.svg','ex-forearm-plank.svg','ex-glute-bridges.svg','ex-mountain-climbers.svg','ex-pike-push-ups.svg','ex-prone-w-raises.svg','ex-push-ups.svg','ex-reverse-lunges.svg','ex-reverse-snow-angels.svg','ex-standing-calf-raises.svg','ex-standing-side-leg-raises.svg','ex-sumo-squats.svg','ex-superman-raises.svg','ex-supported-reverse-lunges.svg','ex-wall-push-ups.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(hit => hit || fetch(e.request).catch(() => caches.match('index.html'))));
});
