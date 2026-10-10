import { chromium } from 'playwright';
const [url, out, w=1440, h=900, scrollSel] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: +h } });
const errs=[]; p.on('console', m => m.type()==='error' && errs.push(m.text())); p.on('pageerror', e => errs.push(e.message));
await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(1200);
if (scrollSel) { await p.locator(scrollSel).first().scrollIntoViewIfNeeded(); await p.waitForTimeout(400); }
await p.screenshot({ path: out });
const info = await p.evaluate(() => { const i=document.querySelector('.site-footer__logo'); return { footerLogo: i && [i.complete, i.naturalWidth, i.currentSrc] }; });
console.log(JSON.stringify(info), errs);
await b.close();
