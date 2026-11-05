// Bump VERSION whenever you change any file, so phones fetch the update.
const VERSION = 'home-emom-v11';
const FILES = ['./','index.html','style.css','app.js','manifest.json',
  'icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png',
  'guide/home-emom-guide.pdf',
  'assets/exercises/toe-taps.svg',
  'assets/exercises/pelvic-tilts.svg',
  'assets/exercises/heel-slides.svg',
  'assets/exercises/clamshells.svg',
  'assets/exercises/chair-squats.svg',
  'assets/exercises/cat-cow.svg',
  'assets/exercises/breathing-and-pelvic-floor-lift.svg',
  'assets/exercises/bird-dogs.svg','assets/exercises/bodyweight-squats.svg','assets/exercises/dead-bugs.svg','assets/exercises/donkey-kicks.svg','assets/exercises/fire-hydrants.svg','assets/exercises/forearm-plank.svg','assets/exercises/glute-bridges.svg','assets/exercises/mountain-climbers.svg','assets/exercises/pike-push-ups.svg','assets/exercises/prone-w-raises.svg','assets/exercises/push-ups.svg','assets/exercises/reverse-lunges.svg','assets/exercises/reverse-snow-angels.svg','assets/exercises/standing-calf-raises.svg','assets/exercises/standing-side-leg-raises.svg','assets/exercises/sumo-squats.svg','assets/exercises/superman-raises.svg','assets/exercises/supported-reverse-lunges.svg','assets/exercises/wall-push-ups.svg'];
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
