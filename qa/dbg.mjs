import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:8080/', { waitUntil: 'load' });
console.log(await p.evaluate(() => {
  const r = (s) => { const e = document.querySelector(s); const b = e.getBoundingClientRect(); return [s, Math.round(b.top), Math.round(b.height), getComputedStyle(e).position]; };
  const img = document.querySelector('.hero__media img');
  return [r('.site-header'), r('.hero'), r('.hero__media'), r('.hero__media picture'), r('.hero__media img'), img.complete, img.currentSrc, getComputedStyle(document.querySelector('.hero'),'::before').zIndex];
}));
await b.close();
