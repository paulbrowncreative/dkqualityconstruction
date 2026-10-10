// Reusable HTML fragments. Plain template strings; no runtime dependencies.
import { readFileSync } from 'node:fs';
import { business, services, serviceUrl } from '../../site.config.mjs';

const imageManifest = JSON.parse(
  readFileSync(new URL('../data/images.json', import.meta.url), 'utf8'),
);

export const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/* ---------- Icons (inline SVG, decorative unless labelled) ---------- */
const paths = {
  phone:
    '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/>',
  arrow: '<path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>',
  chevron: '<path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2"/>',
  check: '<path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="2.25"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" stroke-width="2"/>',
  close: '<path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" stroke-width="2"/>',
  pin: '<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>',
  facebook:
    '<path d="M14 8.5V6.8c0-.8.5-1.3 1.4-1.3H17V2.2A21 21 0 0 0 14.6 2C12.2 2 10.5 3.5 10.5 6.2v2.3H8v3.7h2.5V22H14v-9.8h2.8l.4-3.7z"/>',
  shield: '<path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5z" fill="none" stroke="currentColor" stroke-width="1.75"/><path d="M8.5 12l2.5 2.5 4.5-5" fill="none" stroke="currentColor" stroke-width="1.75"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" fill="none" stroke="currentColor" stroke-width="2"/>',
};

export const icon = (name, { label = '', cls = '' } = {}) =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="currentColor" ${
    label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true" focusable="false"'
  }>${paths[name]}</svg>`;

/* ---------- Responsive images ---------- */
/**
 * <picture> with AVIF + JPEG sources. `sizes` must describe the rendered width.
 * Above-the-fold images pass eager: true (no lazy-load, high fetch priority).
 */
export function picture(name, { alt, sizes = '100vw', eager = false, cls = '', imgCls = '', mobile } = {}) {
  const meta = imageManifest[name];
  if (!meta) throw new Error(`Unknown image "${name}" — run scripts/process-images.py`);
  if (alt === undefined) throw new Error(`Image "${name}" needs an alt attribute (use "" if decorative)`);
  const base = `/assets/img/photos/${name}`;
  const set = (ext) => meta.widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
  const fallbackW = meta.widths.includes(1024) ? 1024 : meta.widths[meta.widths.length - 1];
  // Optional art direction: a separate crop for viewports under 48em.
  const mobileSources = mobile
    ? (() => {
        const m = imageManifest[mobile];
        const mb = `/assets/img/photos/${mobile}`;
        const ms = (ext) => m.widths.map((w) => `${mb}-${w}.${ext} ${w}w`).join(', ');
        return `<source media="(max-width: 47.99em)" type="image/avif" srcset="${ms('avif')}" sizes="100vw">
  <source media="(max-width: 47.99em)" type="image/jpeg" srcset="${ms('jpg')}" sizes="100vw">
  `;
      })()
    : '';
  return `<picture class="${cls}">
  ${mobileSources}<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">
  <img src="${base}-${fallbackW}.jpg" srcset="${set('jpg')}" sizes="${sizes}" width="${meta.width}" height="${meta.height}" alt="${esc(alt)}" class="${imgCls}" ${
    eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"'
  }>
</picture>`;
}

export function preloadImage(name, sizes, mobile) {
  const link = (n, media, sz) => {
    const meta = imageManifest[n];
    const srcset = meta.widths.map((w) => `/assets/img/photos/${n}-${w}.avif ${w}w`).join(', ');
    const href = `/assets/img/photos/${n}-${meta.widths[Math.min(1, meta.widths.length - 1)]}.avif`;
    return `<link rel="preload" as="image" type="image/avif" href="${href}" imagesrcset="${srcset}" imagesizes="${sz}"${media ? ` media="${media}"` : ''} fetchpriority="high">`;
  };
  if (!mobile) return link(name, '', sizes);
  return `${link(mobile, '(max-width: 47.99em)', '100vw')}\n${link(name, '(min-width: 48em)', sizes)}`;
}

/* ---------- Calls to action ---------- */
export const phoneLink = (cls = 'btn btn--ghost', text = `Call ${business.phoneDisplay}`) =>
  `<a class="${cls}" href="tel:${business.phoneE164}" data-track="click_call">${icon('phone')}<span>${text}</span></a>`;

export const estimateButton = (cls = 'btn btn--brass', text = 'Request an Estimate') =>
  `<a class="${cls}" href="/contact/#estimate">${text}${icon('arrow')}</a>`;

export function ctaBand({
  heading = 'Ready to talk about your project?',
  text = 'Tell us what you have in mind and where the project is. We’ll follow up to talk it through and set up a time to look at the site.',
} = {}) {
  return `<section class="cta-band" aria-labelledby="cta-band-h">
  <div class="container cta-band__inner">
    <div>
      <p class="eyebrow eyebrow--light">Next step</p>
      <h2 id="cta-band-h" class="cta-band__title">${heading}</h2>
      <p class="cta-band__text">${text}</p>
    </div>
    <div class="cta-band__actions">
      ${estimateButton()}
      ${phoneLink('btn btn--outline-light')}
    </div>
  </div>
</section>`;
}

/* ---------- Breadcrumbs (visible) ---------- */
export function breadcrumbs(trail) {
  const items = trail
    .map((c, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${esc(c.name)}</li>`
        : `<li><a href="${c.path}">${esc(c.name)}</a></li>`,
    )
    .join('');
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
}

/* ---------- Page hero for inner pages ---------- */
export function pageHero({ eyebrow, title, lede, image, imageAlt = '', trail, actions = true }) {
  return `<header class="page-hero${image ? ' page-hero--image' : ''}">
  ${image ? `<div class="page-hero__media">${picture(image, { alt: imageAlt, sizes: '100vw', eager: true })}</div>` : ''}
  <div class="container page-hero__inner">
    ${trail ? breadcrumbs(trail) : ''}
    ${eyebrow ? `<p class="eyebrow eyebrow--light">${eyebrow}</p>` : ''}
    <h1 class="page-hero__title">${title}</h1>
    ${lede ? `<p class="page-hero__lede">${lede}</p>` : ''}
    ${actions ? `<div class="page-hero__actions">${estimateButton()}${phoneLink('btn btn--outline-light')}</div>` : ''}
  </div>
</header>`;
}

/* ---------- Estimate form (Netlify Forms) ---------- */
// The same field set is used everywhere the form appears so Netlify registers one form.
export function estimateForm({ idPrefix = 'est', headingId } = {}) {
  const id = (n) => `${idPrefix}-${n}`;
  const options = services
    .map((s) => `<option value="${esc(s.name)}">${esc(s.name)}</option>`)
    .join('');
  return `<form class="estimate-form" name="estimate" method="POST" action="/thank-you/"
  data-netlify="true" netlify-honeypot="company_website" enctype="multipart/form-data" novalidate
  ${headingId ? `aria-labelledby="${headingId}"` : ''} data-estimate-form>
  <input type="hidden" name="form-name" value="estimate">
  <p class="visually-hidden" aria-hidden="true">
    <label>Leave this field empty <input type="text" name="company_website" tabindex="-1" autocomplete="off"></label>
  </p>
  <p class="form-note">Fields marked <span class="req" aria-hidden="true">*</span><span class="visually-hidden">with an asterisk</span> are required.</p>
  <div class="form-grid">
    <div class="field">
      <label for="${id('name')}">Name <span class="req" aria-hidden="true">*</span></label>
      <input id="${id('name')}" name="name" type="text" autocomplete="name" required maxlength="100" aria-describedby="${id('name')}-err">
      <p class="field__error" id="${id('name')}-err" hidden></p>
    </div>
    <div class="field">
      <label for="${id('phone')}">Phone <span class="req" aria-hidden="true">*</span></label>
      <input id="${id('phone')}" name="phone" type="tel" autocomplete="tel" inputmode="tel" required maxlength="25" aria-describedby="${id('phone')}-err">
      <p class="field__error" id="${id('phone')}-err" hidden></p>
    </div>
    <div class="field">
      <label for="${id('email')}">Email <span class="req" aria-hidden="true">*</span></label>
      <input id="${id('email')}" name="email" type="email" autocomplete="email" required maxlength="150" aria-describedby="${id('email')}-err">
      <p class="field__error" id="${id('email')}-err" hidden></p>
    </div>
    <div class="field">
      <label for="${id('location')}">City or ZIP of the project <span class="req" aria-hidden="true">*</span></label>
      <input id="${id('location')}" name="project_location" type="text" autocomplete="postal-code" required maxlength="80" aria-describedby="${id('location')}-hint ${id('location')}-err">
      <p class="field__hint" id="${id('location')}-hint">We work in Monroe County, MI and Lucas County, OH.</p>
      <p class="field__error" id="${id('location')}-err" hidden></p>
    </div>
    <div class="field field--full">
      <label for="${id('service')}">What kind of project? <span class="req" aria-hidden="true">*</span></label>
      <select id="${id('service')}" name="service" required aria-describedby="${id('service')}-err">
        <option value="">Choose a project type</option>
        ${options}
        <option value="Other / not sure">Other / not sure</option>
      </select>
      <p class="field__error" id="${id('service')}-err" hidden></p>
    </div>
    <div class="field field--full">
      <label for="${id('details')}">Project details <span class="optional">(optional)</span></label>
      <textarea id="${id('details')}" name="details" rows="5" maxlength="3000" aria-describedby="${id('details')}-hint"></textarea>
      <p class="field__hint" id="${id('details')}-hint">Rough size, materials you’re considering, timing — whatever you know so far.</p>
    </div>
    <fieldset class="field field--full field--radios">
      <legend>Best way to reach you</legend>
      <label class="radio"><input type="radio" name="contact_preference" value="Phone call" checked> Phone call</label>
      <label class="radio"><input type="radio" name="contact_preference" value="Text message"> Text message</label>
      <label class="radio"><input type="radio" name="contact_preference" value="Email"> Email</label>
    </fieldset>
    <div class="field field--full">
      <label for="${id('photo')}">Add a photo of the area <span class="optional">(optional)</span></label>
      <input id="${id('photo')}" name="photo" type="file" accept="image/jpeg,image/png,image/heic,image/heif,image/webp" aria-describedby="${id('photo')}-hint ${id('photo')}-err">
      <p class="field__hint" id="${id('photo')}-hint">One image, up to 8 MB.</p>
      <p class="field__error" id="${id('photo')}-err" hidden></p>
    </div>
  </div>
  <div class="form-status" role="alert" aria-live="assertive" hidden></div>
  <div class="form-actions">
    <button class="btn btn--brass btn--lg" type="submit">
      <span class="btn__label">Send Estimate Request</span>${icon('arrow')}
    </button>
    <p class="form-privacy">We use your details only to respond about your project. <a href="/privacy-policy/">Privacy policy</a>.</p>
  </div>
</form>`;
}

/* ---------- Service list (editorial index) ---------- */
export function serviceIndex({ headingLevel = 3 } = {}) {
  const h = `h${headingLevel}`;
  return `<ol class="service-index" role="list">
${services
  .map(
    (s, i) => `  <li class="service-index__item">
    <a class="service-index__link" href="${serviceUrl(s)}">
      <span class="service-index__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <${h} class="service-index__name">${esc(s.name)}</${h}>
      <span class="service-index__desc">${esc(s.short)}</span>
      <span class="service-index__go" aria-hidden="true">${icon('arrow')}</span>
    </a>
  </li>`,
  )
  .join('\n')}
</ol>`;
}

/* ---------- FAQ (native details/summary: accessible, no JS) ---------- */
export function faq(items, { id = 'faq' } = {}) {
  return `<div class="faq" id="${id}">
${items
  .map(
    (q) => `  <details class="faq__item">
    <summary class="faq__q"><span>${q.q}</span>${icon('chevron', { cls: 'faq__icon' })}</summary>
    <div class="faq__a">${q.a}</div>
  </details>`,
  )
  .join('\n')}
</div>`;
}
