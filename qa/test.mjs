// Automated QA for the built site. Start the preview server first:
//   (repo root) node build.mjs && node scripts/serve.mjs 8080
//   (qa/)       node test.mjs [baseUrl]
// Writes reports/test-results.json and exits non-zero on failures.
import { chromium, webkit, firefox } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { writeFileSync, mkdirSync } from 'node:fs';

const BASE = process.argv[2] || 'http://localhost:8080';
const PAGES = ['/', '/services/', '/services/decks/', '/services/fencing/', '/services/basement-finishing/',
  '/services/bathroom-remodeling/', '/services/kitchen-remodeling/', '/projects/', '/service-area/', '/about/', '/contact/',
  '/thank-you/', '/privacy-policy/', '/404.html'];
const WIDTHS = [320, 375, 414, 768, 1024, 1280, 1440, 1920];

const results = { base: BASE, ranAt: new Date().toISOString(), checks: [] };
let failures = 0;
const record = (name, ok, detail = '') => {
  results.checks.push({ name, ok, detail });
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
};

const browser = await chromium.launch();

/* 1. Layout: horizontal overflow, console errors, image loading — every page × every width */
for (const w of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  const overflow = [];
  const brokenImgs = [];
  for (const p of PAGES) {
    await page.goto(BASE + p, { waitUntil: 'load' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
      window.scrollTo(0, document.body.scrollHeight); await new Promise((r) => setTimeout(r, 300));
    });
    await page.waitForLoadState('networkidle');
    await page.waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 5000 }).catch(() => {});
    const r = await page.evaluate(() => ({
      sw: document.documentElement.scrollWidth,
      iw: window.innerWidth,
      bad: [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.currentSrc || i.src),
    }));
    if (r.sw > r.iw) overflow.push(`${p} (${r.sw}px)`);
    if (r.bad.length) brokenImgs.push(`${p}: ${r.bad.join(', ')}`);
  }
  record(`No horizontal overflow @${w}px (${PAGES.length} pages)`, !overflow.length, overflow.join('; '));
  record(`All images load @${w}px`, !brokenImgs.length, brokenImgs.join('; '));
  // 404.html intentionally requested directly; ignore resource 404 for missing favicon etc. none expected.
  record(`No console/JS errors @${w}px`, !errors.length, [...new Set(errors)].join(' | '));
  await ctx.close();
}

/* 2. Accessibility: axe-core WCAG 2.0/2.1/2.2 A + AA, desktop and mobile */
for (const [label, vp] of [['mobile', { width: 375, height: 812 }], ['desktop', { width: 1440, height: 900 }]]) {
  const ctx = await browser.newContext({ viewport: vp });
  const page = await ctx.newPage();
  const all = [];
  for (const p of PAGES) {
    await page.goto(BASE + p, { waitUntil: 'load' });
    const res = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
      .analyze();
    res.violations.forEach((v) => all.push(`${p}: [${v.impact}] ${v.id} (${v.nodes.length}) ${v.nodes.slice(0, 2).map((n) => n.target.join(' ')).join(' ; ')}`));
  }
  record(`axe-core WCAG 2.2 AA + best-practice — ${label}`, !all.length, all.join('\n    '));
  await ctx.close();
}

/* 3. Mobile menu */
{
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true });
  const page = await ctx.newPage();
  await page.goto(BASE + '/');
  const btn = page.locator('[data-menu-toggle]');
  await btn.click();
  const opened = (await btn.getAttribute('aria-expanded')) === 'true' && (await page.locator('#mobile-menu').isVisible());
  await page.keyboard.press('Escape');
  const closed = (await btn.getAttribute('aria-expanded')) === 'false' && !(await page.locator('#mobile-menu').isVisible());
  const focusBack = await page.evaluate(() => document.activeElement?.matches('[data-menu-toggle]'));
  await btn.click();
  await page.locator('#mobile-menu a[href="/services/decks/"]').click();
  await page.waitForURL('**/services/decks/');
  record('Mobile menu opens, Esc closes, focus returns, links navigate', opened && closed && focusBack, `opened=${opened} closed=${closed} focusBack=${focusBack}`);
  const tapTargets = await page.evaluate(() =>
    [...document.querySelectorAll('a.btn, button, .icon-btn, .mobile-cta a, input, select, textarea')]
      .filter((e) => e.offsetParent && e.type !== 'hidden' && e.type !== 'radio')
      .map((e) => [e.getBoundingClientRect(), e.outerHTML.slice(0, 60)])
      .filter(([r]) => r.height < 44 && r.height > 0)
      .map(([r, h]) => `${Math.round(r.height)}px ${h}`));
  record('Primary tap targets ≥ 44px tall (mobile, decks page)', !tapTargets.length, tapTargets.join(' | '));
  await ctx.close();
}

/* 4. Desktop services dropdown (keyboard + mouse) */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + '/');
  const toggle = page.locator('.primary-nav__toggle');
  await toggle.click();
  const open = await page.locator('#nav-services').isVisible();
  await page.keyboard.press('Tab');
  const focusInMenu = await page.evaluate(() => !!document.activeElement.closest('#nav-services'));
  await page.keyboard.press('Escape');
  const closed = !(await page.locator('#nav-services').isVisible());
  record('Desktop Services dropdown: opens, keyboard reachable, Esc closes', open && focusInMenu && closed, `open=${open} focusInMenu=${focusInMenu} closed=${closed}`);
  await page.close();
}

/* 5. Estimate form: validation + submission flow + single conversion event */
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(BASE + '/contact/');
  const form = page.locator('form[name="estimate"]');
  await form.locator('button[type="submit"]').click();
  const invalidCount = await form.locator('[aria-invalid="true"]').count();
  const focusedFirst = await page.evaluate(() => document.activeElement?.name === 'name');
  const statusShown = await form.locator('.form-status').isVisible();
  record('Form blocks empty submit, flags 5 required fields, focuses first, shows summary', invalidCount === 5 && focusedFirst && statusShown, `invalid=${invalidCount} focusFirst=${focusedFirst} status=${statusShown}`);

  await form.locator('[name="email"]').fill('not-an-email');
  await form.locator('[name="email"]').blur();
  const emailMsg = await page.locator('#contact-email-err').innerText();
  record('Inline email validation message', /valid email/i.test(emailMsg), emailMsg);

  await form.locator('[name="name"]').fill('QA Test');
  await form.locator('[name="phone"]').fill('(734) 555-0100');
  await form.locator('[name="email"]').fill('qa@example.com');
  await form.locator('[name="project_location"]').fill('Monroe 48161');
  await form.locator('[name="service"]').selectOption('Decks');
  await form.locator('[name="details"]').fill('Automated QA submission — please ignore.');
  // FormSubmit is mocked here so automated runs never send real email.
  await page.route('https://formsubmit.co/**', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":"true","message":"The form was submitted successfully."}' }));
  const [req] = await Promise.all([
    page.waitForRequest((r) => r.method() === 'POST' && r.url().startsWith('https://formsubmit.co/')),
    form.locator('button[type="submit"]').click(),
  ]);
  const body = req.postDataBuffer()?.toString() || '';
  const hasFormName = req.url() === 'https://formsubmit.co/ajax/dkqconstruction%40gmail.com' && body.includes('name="_honey"') && body.includes('name="_subject"') && body.includes('name="_replyto"') && body.includes('QA Test');
  await page.waitForURL('**/thank-you/');
  await page.waitForLoadState('load');
  await page.waitForTimeout(300);
  const leads = await page.evaluate(() => (window.dataLayer || []).filter((a) => a[0] === 'event' && a[1] === 'generate_lead').length);
  record('Valid submission posts multipart in the background to FormSubmit (dkqconstruction@gmail.com) and redirects to /thank-you/', hasFormName, req.url());
  await page.unroute('https://formsubmit.co/**');
  record('generate_lead fires exactly once after submission', leads === 1, `count=${leads}`);
  await page.reload();
  await page.waitForTimeout(300);
  const leadsAfterReload = await page.evaluate(() => (window.dataLayer || []).filter((a) => a[0] === 'event' && a[1] === 'generate_lead').length);
  record('Reloading /thank-you/ does not re-fire generate_lead', leadsAfterReload === 0, `count=${leadsAfterReload}`);

  // Server failure path
  await page.goto(BASE + '/contact/');
  // FormSubmit answers 200 with success:"false" until the inbox is activated — must be treated as a failure.
  await page.route('https://formsubmit.co/**', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":"false","message":"This form needs Activation."}' }));
  const f2 = page.locator('form[name="estimate"]');
  await f2.locator('[name="name"]').fill('QA Test');
  await f2.locator('[name="phone"]').fill('7345550100');
  await f2.locator('[name="email"]').fill('qa@example.com');
  await f2.locator('[name="project_location"]').fill('Toledo');
  await f2.locator('[name="service"]').selectOption('Fencing');
  await f2.locator('button[type="submit"]').click();
  await page.waitForTimeout(500);
  const errText = await f2.locator('.form-status').innerText().catch(() => '');
  const btnEnabled = await f2.locator('button[type="submit"]').isEnabled();
  record('Failed submission shows error with phone fallback and re-enables button', /didn’t go through/.test(errText) && btnEnabled, errText);

  // Phone click tracking
  await page.unroute('https://formsubmit.co/**');
  await page.goto(BASE + '/');
  await page.evaluate(() => document.querySelectorAll('a[href^="tel:"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault())));
  await page.locator('.nav-phone').click();
  const calls = await page.evaluate(() => (window.dataLayer || []).filter((a) => a[1] === 'click_call').length);
  record('Phone link click pushes one click_call event', calls === 1, `count=${calls}`);
  await page.close();
}

/* 5b. Project photo viewer (dialog) */
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(BASE + '/projects/');
  const cards = page.locator('[data-lightbox]');
  const n = await cards.count();
  await cards.nth(1).click();
  const open = await page.locator('[data-lightbox-dialog]').evaluate((d) => d.open);
  await page.waitForFunction(() => { const i = document.querySelector('[data-lb-img]'); return i.complete && i.naturalWidth > 0; });
  // Compare the displayed photo (multi-photo projects share one title).
  const t1 = await page.locator('[data-lb-img]').getAttribute('src');
  await page.keyboard.press('ArrowRight');
  const t2 = await page.locator('[data-lb-img]').getAttribute('src');
  const alt = await page.locator('[data-lb-img]').getAttribute('alt');
  await page.keyboard.press('Escape');
  const closed = !(await page.locator('[data-lightbox-dialog]').evaluate((d) => d.open));
  const focusBack = await page.evaluate(() => document.activeElement?.matches('[data-lightbox]'));
  record('Project viewer: opens full photo, arrow keys page through, alt carried over, Esc closes, focus returns', n >= 5 && open && t1 !== t2 && !!alt && closed && focusBack, `cards=${n} open=${open} ${t1} -> ${t2} closed=${closed} focusBack=${focusBack}`);
  await page.close();
}

/* 6. On-page SEO checks */
{
  const page = await browser.newPage();
  const titles = new Set();
  const descs = new Set();
  const problems = [];
  for (const p of PAGES) {
    const res = await page.goto(BASE + p);
    const d = await page.evaluate(() => ({
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.content || '',
      canonical: document.querySelector('link[rel="canonical"]')?.href || '',
      robots: document.querySelector('meta[name="robots"]')?.content || '',
      h1: document.querySelectorAll('h1').length,
      og: ['og:title', 'og:description', 'og:image', 'og:url'].every((k) => document.querySelector(`meta[property="${k}"]`)),
      lang: document.documentElement.lang,
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { JSON.parse(s.textContent); return true; } catch { return false; } }),
      headingSkips: (() => { let last = 0, skips = []; document.querySelectorAll('main h1, main h2, main h3, main h4').forEach((h) => { const l = +h.tagName[1]; if (last && l > last + 1) skips.push(`${h.tagName} after H${last}: ${h.textContent.trim().slice(0, 30)}`); last = l; }); return skips; })(),
      imgNoAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).length,
      imgNoDims: [...document.querySelectorAll('img')].filter((i) => !i.getAttribute('width') || !i.getAttribute('height')).length,
    }));
    if (p === '/404.html' && res.status() !== 200) problems.push(`${p}: status ${res.status()}`);
    if (!d.title || titles.has(d.title)) problems.push(`${p}: missing/duplicate title`);
    if (!d.desc || descs.has(d.desc)) problems.push(`${p}: missing/duplicate description`);
    if (d.desc.length > 160) problems.push(`${p}: description ${d.desc.length} chars`);
    if (d.title.length > 66) problems.push(`${p}: title ${d.title.length} chars`);
    titles.add(d.title); descs.add(d.desc);
    if (!d.canonical) problems.push(`${p}: no canonical`);
    if (d.h1 !== 1) problems.push(`${p}: ${d.h1} h1`);
    if (!d.og) problems.push(`${p}: missing OG tags`);
    if (d.lang !== 'en-US') problems.push(`${p}: lang=${d.lang}`);
    if (!d.jsonld.length || d.jsonld.includes(false)) problems.push(`${p}: JSON-LD missing/invalid`);
    if (d.headingSkips.length) problems.push(`${p}: heading skips ${d.headingSkips.join('; ')}`);
    if (d.imgNoAlt) problems.push(`${p}: ${d.imgNoAlt} img without alt`);
    if (d.imgNoDims) problems.push(`${p}: ${d.imgNoDims} img without width/height`);
  }
  record('Titles/descriptions unique & sized, canonical, single H1, OG, JSON-LD, heading order, alt, dimensions', !problems.length, problems.join('\n    '));
  const notFound = await page.goto(BASE + '/definitely-not-a-page');
  record('Unknown URL returns 404 status with custom page', notFound.status() === 404 && (await page.title()).includes('Not Found'), `status=${notFound.status()}`);
  await page.close();
}

/* 7. Keyboard: skip link is first focusable and moves focus to main */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + '/services/');
  await page.keyboard.press('Tab');
  const isSkip = await page.evaluate(() => document.activeElement?.classList.contains('skip-link'));
  const skipVisible = await page.locator('.skip-link').evaluate((e) => e.getBoundingClientRect().top >= 0);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(100);
  const inMain = await page.evaluate(() => location.hash === '#main');
  record('Skip link first in tab order, visible on focus, targets main', isSkip && skipVisible && inMain, `skip=${isSkip} visible=${skipVisible} main=${inMain}`);
  await page.close();
}

/* 8. Reduced motion respected */
{
  const ctx = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(BASE + '/');
  const dur = await page.locator('.btn').first().evaluate((e) => getComputedStyle(e).transitionDuration);
  record('prefers-reduced-motion disables transitions', dur.split(',').every((d) => parseFloat(d) < 0.001), dur);
  await ctx.close();
}

/* 8b. Production CSP (from netlify.toml) enforced in-browser: no violations on any page */
{
  const headersFile = (await import('node:fs')).readFileSync('../dist/_headers', 'utf8');
  const csp = headersFile.match(/Content-Security-Policy: (.+)/)[1].replace('upgrade-insecure-requests', '');
  const ctx = await browser.newContext();
  await ctx.route('**/*', async (route) => {
    const req = route.request();
    if (req.resourceType() !== 'document' || !req.url().startsWith(BASE)) return route.continue();
    const resp = await route.fetch();
    route.fulfill({ response: resp, headers: { ...resp.headers(), 'content-security-policy': csp } });
  });
  const page = await ctx.newPage();
  const violations = [];
  page.on('console', (m) => /Content Security Policy|Refused to/i.test(m.text()) && violations.push(m.text()));
  for (const p of PAGES) {
    await page.goto(BASE + p, { waitUntil: 'load' });
    const v = await page.evaluate(() => new Promise((r) => { const out = []; document.addEventListener('securitypolicyviolation', (e) => out.push(e.violatedDirective + ' ' + e.blockedURI)); setTimeout(() => r(out), 150); }));
    violations.push(...v.map((x) => `${p}: ${x}`));
  }
  record('Production Content-Security-Policy causes no violations', !violations.length, [...new Set(violations)].join(' | '));
  await ctx.close();
}

await browser.close();

/* 9. Cross-engine smoke test (WebKit ≈ Safari, Firefox) where engines are installed */
for (const [name, engine] of [['webkit', webkit], ['firefox', firefox]]) {
  try {
    const b = await engine.launch();
    const pg = await b.newPage({ viewport: { width: 390, height: 844 } });
    const errs = [];
    pg.on('pageerror', (e) => errs.push(e.message));
    await pg.goto(BASE + '/');
    const ok = (await pg.locator('h1').count()) === 1;
    record(`${name}: homepage renders without JS errors`, ok && !errs.length, errs.join(' | '));
    await b.close();
  } catch (e) {
    results.checks.push({ name: `${name}: smoke test`, ok: null, detail: `SKIPPED — engine not installed (${e.message.split('\n')[0]})` });
    console.log(`SKIP  ${name}: engine not installed in this environment`);
  }
}

mkdirSync('reports', { recursive: true });
writeFileSync('reports/test-results.json', JSON.stringify(results, null, 2));
console.log(`\n${results.checks.filter((c) => c.ok).length} passed, ${failures} failed, ${results.checks.filter((c) => c.ok === null).length} skipped`);
process.exit(failures ? 1 : 0);
