// Reusable HTML fragments. Plain template strings; no runtime dependencies.
import { readFileSync } from 'node:fs';
import { site, business, services, serviceUrl } from '../../site.config.mjs';

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
  // Delivered by FormSubmit.co to business.leadEmail. With JS the form posts in the
  // background (AJAX) and the visitor never leaves the site; without JS the plain POST
  // redirects back to /thank-you/ via _next.
  const target = encodeURIComponent(site.formAlias || business.leadEmail);
  return `<form class="estimate-form" name="estimate" method="POST"
  action="https://formsubmit.co/${target}" data-ajax-action="https://formsubmit.co/ajax/${target}"
  enctype="multipart/form-data" novalidate
  ${headingId ? `aria-labelledby="${headingId}"` : ''} data-estimate-form>
  <input type="hidden" name="_subject" value="New estimate request — DK Quality Construction website">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_next" value="${site.url}/thank-you/">
  <p class="visually-hidden" aria-hidden="true">
    <label>Leave this field empty <input type="text" name="_honey" tabindex="-1" autocomplete="off"></label>
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

/* ---------- Before / after comparison slider ----------
   Two aligned photos layered in one frame. BEFORE sits on top, clipped to the left of
   the divider; AFTER fills the frame underneath. The handle is an ARIA slider whose
   value is the share of the frame showing BEFORE (default 50). Works without JS at 50%.
   before/after: image manifest names. ratio: shared frame, e.g. '4 / 3'.
   position: optional object-position for both layers (keep identical so they align). */
export function compareSlider({ id, before, after, beforeAlt, afterAlt, label, ratio = '4 / 3', position = '50% 50%', sizes = '(min-width: 960px) 60vw, 100vw', eager = false }) {
  if (!id || !label) throw new Error('compareSlider needs id and label');
  const hint = `${id}-hint`;
  return `<figure class="compare-slider" data-compare data-ratio="${esc(ratio)}" data-position="${esc(position)}">
  <div class="compare-slider__frame">
    <div class="compare-slider__layer compare-slider__layer--after">${picture(after, { alt: afterAlt, sizes, eager })}</div>
    <div class="compare-slider__layer compare-slider__layer--before" data-compare-before>${picture(before, { alt: beforeAlt, sizes, eager })}</div>
    <span class="compare-slider__tag compare-slider__tag--before" aria-hidden="true">Before</span>
    <span class="compare-slider__tag compare-slider__tag--after" aria-hidden="true">After</span>
    <div class="compare-slider__divider" aria-hidden="true"></div>
    <div class="compare-slider__handle" role="slider" tabindex="0" data-compare-handle
      aria-label="${esc(label)}: before and after comparison" aria-describedby="${hint}"
      aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"
      aria-valuetext="50% before, 50% after">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg>
    </div>
  </div>
  <figcaption class="compare-slider__caption">
    <span>${esc(label)}</span>
    <span class="compare-slider__hint" id="${hint}">Drag the handle or use the arrow keys to compare before and after.</span>
  </figcaption>
</figure>`;
}

/* ---------- Project portfolio cards + full-image viewer ----------
   Cards crop to a consistent 4:3 for a tidy grid; the full, uncropped photo opens in a
   native <dialog> (or, without JS, as the image file itself). */
export const largestJpg = (name) => {
  const m = imageManifest[name];
  return `/assets/img/photos/${name}-${m.widths[m.widths.length - 1]}.jpg`;
};

export function projectCard(p, { headingLevel = 3, sizes = '(min-width: 1100px) 33vw, (min-width: 600px) 50vw, 100vw' } = {}) {
  const h = `h${headingLevel}`;
  const trigger = (img, i, inner, cls) => {
    const meta = imageManifest[img.name];
    const n = p.images.length > 1 ? ` (photo ${i + 1} of ${p.images.length})` : '';
    return `<a class="${cls}" href="${largestJpg(img.name)}" data-lightbox data-title="${esc(p.title)}" data-caption="${esc(p.caption)}" data-w="${meta.width}" data-h="${meta.height}" aria-label="View full photo: ${esc(p.title)}${n}">${inner}</a>`;
  };
  const [cover, ...more] = p.images;
  const zoom = `<span class="project-card__zoom" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" fill="none" stroke="currentColor" stroke-width="2"/></svg></span>`;
  return `<figure class="project-card" id="${p.id.toLowerCase()}">
  ${trigger(cover, 0, `${picture(cover.name, { alt: cover.alt, sizes, cls: 'project-card__pic' })}${zoom}${more.length ? `<span class="project-card__count">${p.images.length} photos</span>` : ''}`, 'project-card__media')}
  <figcaption class="project-card__body">
    <${h} class="project-card__title">${esc(p.title)}</${h}>
    <p>${esc(p.caption)}</p>
    ${more.length ? `<ul class="project-card__thumbs" role="list">${more.map((img, i) => `<li>${trigger(img, i + 1, picture(img.name, { alt: img.alt, sizes: '6rem' }), 'project-card__thumb')}</li>`).join('')}</ul>` : ''}
  </figcaption>
</figure>`;
}

export const lightboxDialog = () => `<dialog class="lightbox" data-lightbox-dialog aria-labelledby="lightbox-title">
  <div class="lightbox__inner">
    <div class="lightbox__bar">
      <p class="lightbox__title" id="lightbox-title"></p>
      <button class="lightbox__btn" type="button" data-lb-close aria-label="Close photo">${icon('close')}</button>
    </div>
    <div class="lightbox__stage" data-lb-stage></div>
    <div class="lightbox__foot">
      <button class="lightbox__btn" type="button" data-lb-prev aria-label="Previous photo"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
      <p class="lightbox__caption" data-lb-caption aria-live="polite"></p>
      <button class="lightbox__btn" type="button" data-lb-next aria-label="Next photo"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
    </div>
  </div>
</dialog>`;

/* ---------- Customer reviews ---------- */
const starPath = '<path d="M12 2.5l2.94 6.17 6.56.82-4.8 4.57 1.2 6.69L12 17.5l-5.9 3.25 1.2-6.69-4.8-4.57 6.56-.82z"/>';
export const stars = (n = 5) =>
  `<span class="stars" role="img" aria-label="${n} out of 5 stars">${Array.from({ length: n }, () => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${starPath}</svg>`).join('')}</span>`;

export function reviewCard(r, { headingLevel = 3, projectHref } = {}) {
  const h = `h${headingLevel}`;
  return `<figure class="review-card" id="${r.id.toLowerCase()}">
  ${stars(5)}
  ${r.headline ? `<${h} class="review-card__headline">${esc(r.headline)}</${h}>` : ''}
  <blockquote class="review-card__quote"><p>${esc(r.text)}</p></blockquote>
  <figcaption class="review-card__by">
    <span class="review-card__name">${esc(r.name)}</span>
    <span class="review-card__meta">${esc(r.project)} · ${esc(r.source)}</span>
    ${projectHref ? `<a class="review-card__link" href="${projectHref}">See this project ${icon('arrow')}</a>` : ''}
  </figcaption>
</figure>`;
}
