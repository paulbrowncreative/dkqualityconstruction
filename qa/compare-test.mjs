// QA for the before/after slider. Needs: (root) BUILD_FIXTURES=1 node build.mjs && node scripts/serve.mjs 8080
// Optional: node compare-test.mjs <baseUrl> <path-with-a-slider>
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const BASE = process.argv[2] || 'http://localhost:8080';
const PATH = process.argv[3] || '/qa-fixtures/compare/';
let fail = 0;
const rec = (n, ok, d = '') => { if (!ok) fail++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${d ? ` — ${d}` : ''}`); };
const b = await chromium.launch();

// Measures what is actually revealed: the BEFORE layer's visible width share via its computed clip.
const state = (p) => p.evaluate(() => {
  const root = document.querySelector('[data-compare]');
  const frame = root.querySelector('.compare-slider__frame').getBoundingClientRect();
  const before = root.querySelector('[data-compare-before]');
  const clip = getComputedStyle(before).clipPath; // inset(0px X% 0px 0px) or px
  const m = clip.match(/inset\(\S+ ([\d.]+)(px|%)/);
  const rightInset = m ? (m[2] === '%' ? +m[1] : (+m[1] / frame.width) * 100) : NaN;
  const h = root.querySelector('[data-compare-handle]');
  const hb = h.getBoundingClientRect();
  return {
    beforeShare: Math.round(100 - rightInset),
    now: +h.getAttribute('aria-valuenow'),
    text: h.getAttribute('aria-valuetext'),
    handleCenterPct: Math.round(((hb.left + hb.width / 2 - frame.left) / frame.width) * 100),
    beforeLeftTag: root.querySelector('.compare-slider__tag--before').getBoundingClientRect().left < root.querySelector('.compare-slider__tag--after').getBoundingClientRect().left,
    imgs: [...root.querySelectorAll('img')].every((i) => i.complete && i.naturalWidth > 0),
    sameBox: (() => { const [a, c] = [...root.querySelectorAll('img')].map((i) => i.getBoundingClientRect()); return a.width === c.width && a.height === c.height && a.left === c.left && a.top === c.top; })(),
  };
});

for (const [label, opts] of [['desktop', { viewport: { width: 1280, height: 900 } }], ['mobile', { viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true }]]) {
  const ctx = await b.newContext(opts);
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto(BASE + PATH, { waitUntil: 'load' });
  await p.waitForTimeout(300);
  let s = await state(p);
  rec(`[${label}] both images load, layered in identical boxes (aligned, no stretch)`, s.imgs && s.sameBox);
  rec(`[${label}] default 50%: BEFORE share 50, handle centered, BEFORE label left`, s.beforeShare === 50 && s.now === 50 && Math.abs(s.handleCenterPct - 50) <= 1 && s.beforeLeftTag, JSON.stringify(s));
  const fb = await p.locator('.compare-slider__frame').first().boundingBox();
  const y = fb.y + fb.height / 2;

  if (label === 'desktop') {
    await p.mouse.move(fb.x + fb.width * 0.5, y); await p.mouse.down();
    await p.mouse.move(fb.x + fb.width * 0.8, y, { steps: 8 }); await p.mouse.up();
    s = await state(p);
    rec('[desktop] mouse drag right → more BEFORE (~80)', Math.abs(s.beforeShare - 80) <= 2 && Math.abs(s.handleCenterPct - 80) <= 2, JSON.stringify(s));
    await p.mouse.move(fb.x + fb.width * 0.8, y); await p.mouse.down();
    await p.mouse.move(fb.x + fb.width * 0.2, y, { steps: 8 }); await p.mouse.up();
    s = await state(p);
    rec('[desktop] mouse drag left → more AFTER (~20)', Math.abs(s.beforeShare - 20) <= 2, JSON.stringify(s));
    await p.mouse.move(fb.x + fb.width * 0.3, y); await p.mouse.down(); await p.mouse.move(fb.x + fb.width + 80, y, { steps: 5 }); await p.mouse.up();
    s = await state(p);
    rec('[desktop] drag past edges clamps to 0–100', s.beforeShare === 100 && s.now === 100, JSON.stringify(s));
    // keyboard
    await p.locator('[data-compare-handle]').focus();
    await p.keyboard.press('Home'); s = await state(p); const home = s.now === 0 && s.beforeShare === 0;
    await p.keyboard.press('ArrowRight'); await p.keyboard.press('ArrowRight'); s = await state(p); const right = s.now === 4;
    await p.keyboard.press('ArrowLeft'); s = await state(p); const left = s.now === 2;
    await p.keyboard.press('End'); s = await state(p); const end = s.now === 100;
    const scrollY = await p.evaluate(() => scrollY);
    rec('[desktop] keyboard Home/Arrow/End adjust value and reveal; no page scroll', home && right && left && end && scrollY === 0, `scrollY=${scrollY} ${s.text}`);
    const focusVisible = await p.locator('[data-compare-handle]').evaluate((h) => getComputedStyle(h).outlineStyle !== 'none');
    rec('[desktop] visible focus indicator on handle', focusVisible);
  } else {
    const cdp = await ctx.newCDPSession(p);
    const touch = async (pts) => {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: pts[0][0], y: pts[0][1] }] });
      for (const [x, yy] of pts.slice(1)) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: yy }] });
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    };
    const steps = (x0, x1, y0, y1, n = 10) => Array.from({ length: n + 1 }, (_, i) => [x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n]);
    await touch(steps(fb.x + fb.width * 0.5, fb.x + fb.width * 0.85, y, y));
    s = await state(p);
    rec('[mobile] touch drag from handle to the right → more BEFORE', s.beforeShare >= 80, JSON.stringify(s));
    await touch(steps(fb.x + fb.width * 0.7, fb.x + fb.width * 0.15, y + 30, y + 30));
    s = await state(p);
    rec('[mobile] horizontal touch swipe on photo → more AFTER', s.beforeShare <= 20, JSON.stringify(s));
    const before = s.beforeShare;
    await touch(steps(fb.x + fb.width * 0.6, fb.x + fb.width * 0.62, y + 60, y - 160));
    await p.waitForTimeout(400);
    s = await state(p);
    const sy = await p.evaluate(() => scrollY);
    rec('[mobile] vertical swipe over slider scrolls the page and leaves divider alone', sy > 50 && s.beforeShare === before, `scrollY=${sy} share=${s.beforeShare}`);
    const hb = await p.locator('[data-compare-handle]').boundingBox();
    rec('[mobile] handle touch target ≥ 44px', hb.width >= 44 && hb.height >= 44, `${hb.width}x${hb.height}`);
    const overflow = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    rec('[mobile] no horizontal overflow', !overflow);
  }
  const axe = await new AxeBuilder({ page: p }).include('[data-compare]').withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  rec(`[${label}] axe on slider: 0 violations`, !axe.violations.length, axe.violations.map((v) => v.id).join(', '));
  rec(`[${label}] no console errors`, !errs.length, errs.join(' | '));
  await ctx.close();
}
await b.close();
console.log(fail ? `${fail} FAILED` : 'ALL PASS');
process.exit(fail ? 1 : 0);
