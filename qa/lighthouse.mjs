// Lighthouse lab runs (mobile emulation, simulated throttling) against the local preview.
//   CHROME_PATH=/path/to/chrome node lighthouse.mjs [baseUrl]
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { writeFileSync, mkdirSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:8080';
const pages = process.env.LH_PAGES ? process.env.LH_PAGES.split(',') : ['/', '/services/decks/', '/projects/', '/contact/', '/services/', '/about/'];
mkdirSync('reports/lighthouse', { recursive: true });
const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });
const summary = [];
for (const formFactor of ['mobile', 'desktop']) {
  for (const p of pages) {
    const flags = { port: chrome.port, output: 'html', logLevel: 'error' };
    const config = formFactor === 'desktop'
      ? (await import('lighthouse/core/config/desktop-config.js')).default
      : undefined;
    const r = await lighthouse(base + p, flags, config);
    const c = r.lhr.categories, a = r.lhr.audits;
    const row = {
      page: p, formFactor,
      performance: Math.round(c.performance.score * 100),
      accessibility: Math.round(c.accessibility.score * 100),
      bestPractices: Math.round(c['best-practices'].score * 100),
      seo: Math.round(c.seo.score * 100),
      LCP: a['largest-contentful-paint'].displayValue,
      CLS: a['cumulative-layout-shift'].displayValue,
      TBT: a['total-blocking-time'].displayValue,
      FCP: a['first-contentful-paint'].displayValue,
      weightKB: Math.round(a['total-byte-weight'].numericValue / 1024),
    };
    summary.push(row);
    console.log(JSON.stringify(row));
    writeFileSync(`reports/lighthouse/${formFactor}${p.replace(/\//g, '_') || '_'}.html`, r.report);
  }
}
writeFileSync('reports/lighthouse/summary.json', JSON.stringify(summary, null, 2));
await chrome.kill();
