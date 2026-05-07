// astro-compass service worker
// 캐시·푸시 없는 최소 구성 — PWA 등록용
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
