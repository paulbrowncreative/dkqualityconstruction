// Full-page screenshots of every page at representative viewports.
//   node screens.mjs [baseUrl] [outDir]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:8080';
const out = process.argv[3] || 'reports/screens';
mkdirSync(out, { recursive: true });

export const PAGES = ['/', '/services/', '/services/decks/', '/services/fencing/', '/services/basement-finishing/',
  '/services/bathroom-remodeling/', '/services/kitchen-remodeling/', '/service-area/', '/about/', '/contact/',
  '/thank-you/', '/privacy-policy/', '/missing-page'];
const VIEWPORTS = (process.env.VP || '375x812,1440x900').split(',').map((v) => v.split('x').map(Number));
const only = process.env.ONLY ? process.env.ONLY.split(',') : PAGES;

const browser = await chromium.launch();
for (const [w, h] of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const p of only) {
    await page.goto(base + p, { waitUntil: 'load' });
    await page.evaluate(async () => {
      // trigger lazy images
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(900);
    const name = (p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_|_$/g, '')) + `-${w}.png`;
    await page.screenshot({ path: `${out}/${name}`, fullPage: true });
  }
  await ctx.close();
}
await browser.close();
console.log('screens done');
