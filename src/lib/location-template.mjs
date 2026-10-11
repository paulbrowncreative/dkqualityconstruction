// Shared structure for the community pages under /service-area/{slug}/.
// The template supplies the trust and conversion sections; everything local (permits,
// ZIP codes, geography, FAQs, intro copy) comes from src/data/locations.mjs, where every
// fact is sourced. Pages are only built for communities with verified local content —
// no city-name-swap doorway pages.
import { site, business, services, serviceUrl } from '../../site.config.mjs';
import { readFileSync } from 'node:fs';
import { pageHero, icon, faq, ctaBand, esc, projectCard, lightboxDialog, reviewCard, preloadImage, picture } from './components.mjs';
import { projects as allProjects } from '../data/projects.mjs';
import { reviewById } from '../data/reviews.mjs';
import { locations, states, countyOf, locationUrl } from '../data/locations.mjs';
import { ORG_ID } from './layout.mjs';

const HOME = { lat: 41.916586, lon: -83.384324 }; // City of Monroe (Census Gazetteer internal point)

export function miles(a, b) {
  const r = (d) => (d * Math.PI) / 180;
  const h = Math.sin(r(b.lat - a.lat) / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(r(b.lon - a.lon) / 2) ** 2;
  return 3958.8 * 2 * Math.asin(Math.sqrt(h));
}

// Rotations keep neighbouring pages from looking identical without inventing anything.
// Every deck project, featured first; each page takes the next three, so no two pages
// show the same set.
const DECK_PROJECTS = allProjects
  .filter((p) => p.category === 'decks')
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  .map((p) => p.id);
const REVIEWS = ['R-01', 'R-04', 'R-05', 'R-03'];

// Intro photo under the "Building in …" copy. Sharp landscape deck and porch photos,
// largest first. Each page takes the next one that isn't already used on another
// community page and doesn't come from the page's hero or project-card projects.
const imageMeta = JSON.parse(readFileSync(new URL('../data/images.json', import.meta.url), 'utf8'));
const projectOfImage = new Map(allProjects.flatMap((p) => p.images.map((i) => [i.name, p])));
const INTRO_POOL = allProjects
  .filter((p) => p.category === 'decks')
  .flatMap((p) => p.images.map((img) => ({ ...img, project: p, ...imageMeta[img.name] })))
  .filter((i) => i.width >= 1200 && i.width / i.height >= 1.25)
  .sort((a, b) => b.width - a.width);
const usedIntro = new Set();
function introPhoto(index, hero, projectIds) {
  const blocked = new Set([projectOfImage.get(hero)?.id, ...projectIds]);
  const ok = (i) => i.name !== hero && !blocked.has(i.project.id);
  const ordered = [...INTRO_POOL.slice(index % INTRO_POOL.length), ...INTRO_POOL.slice(0, index % INTRO_POOL.length)];
  const pick = ordered.find((i) => ok(i) && !usedIntro.has(i.name)) || ordered.find(ok);
  usedIntro.add(pick.name);
  return pick;
}

const schemaPlace = (loc, county) => ({
  '@type': loc.schemaType,
  name: `${loc.name}, ${county.stateAbbr}`,
  containedInPlace: {
    '@type': 'AdministrativeArea',
    name: `${county.name}, ${county.state}`,
  },
});

export function locationPage(loc, index) {
  const county = countyOf(loc);
  const st = states[county.stateAbbr];
  const path = locationUrl(loc);
  const place = `${loc.name}, ${county.stateAbbr}`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Service Area', path: '/service-area/' },
    { name: loc.name, path },
  ];
  const dist = Math.round(miles(HOME, loc));
  const nearby = locations
    .filter((l) => l.slug !== loc.slug)
    .map((l) => ({ l, d: miles(loc, l) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 5);
  const projectIds = [0, 1, 2].map((k) => DECK_PROJECTS[(index * 3 + k) % DECK_PROJECTS.length]);
  const review = reviewById(REVIEWS[index % REVIEWS.length]);
  const photo = introPhoto(index, loc.hero, projectIds);
  const pageServices = services.filter((s) => s.page);

  const facts = [
    ['Community', loc.typeLabel],
    ['County', `${county.name}, ${county.state}`],
    ['ZIP code' + (loc.zips.length > 1 ? 's' : ''), loc.zips.join(', ')],
    ['Building permits', loc.permit.url ? `<a href="${loc.permit.url}" rel="noopener" target="_blank">${esc(loc.permit.office)}<span class="visually-hidden"> (opens in a new tab)</span></a>` : esc(loc.permit.office)],
    ['Before digging', `<a href="${st.dig.url}" rel="noopener" target="_blank">${esc(st.dig.name)}<span class="visually-hidden"> (opens in a new tab)</span></a> — free, required`],
    ['From our base', loc.slug === 'monroe-mi' ? 'Home base' : `About ${dist} miles from Monroe (straight line)`],
  ];

  const faqs = [
    {
      q: `Do you build decks in ${loc.name}?`,
      a: `<p>Yes. ${esc(loc.name)} is ${loc.slug === 'monroe-mi' ? 'our home base' : `part of our regular service area in ${esc(county.name)}`}. We build new decks, replace old ones and take on fencing and interior remodeling here. <a href="/contact/#estimate">Request an estimate</a> or call <a href="tel:${business.phoneE164}" data-track="click_call">${business.phoneDisplay}</a>.</p>`,
    },
    {
      q: `Who issues deck permits in ${loc.name}?`,
      a: `<p>${loc.permit.answer}</p>`,
    },
    {
      q: `How deep do deck footings go in ${loc.name}?`,
      a: `<p>${st.frost}</p>`,
    },
    ...(loc.faqs || []),
  ];

  return {
    path,
    title: loc.title || `Deck Builder & Remodeling in ${place} | DK Quality`,
    description: loc.description,
    breadcrumbs: trail,
    preload: preloadImage(loc.hero, '100vw'),
    schema: [
      {
        '@type': 'Service',
        '@id': `${site.url}${path}#service`,
        name: `Deck building and home remodeling in ${place}`,
        serviceType: ['Deck construction', 'Fence installation', 'Basement remodeling', 'Bathroom remodeling', 'Kitchen remodeling'],
        provider: { '@id': ORG_ID() },
        areaServed: schemaPlace(loc, county),
        url: `${site.url}${path}`,
      },
    ],
    body: `
${pageHero({
  eyebrow: `${county.name}, ${county.stateAbbr}`,
  title: `Deck builder &amp; remodeling contractor in ${esc(place)}`,
  lede: loc.lede,
  image: loc.hero,
  imageAlt: loc.heroAlt,
  trail,
})}

<section class="section" aria-labelledby="loc-intro-h">
  <div class="container split">
    <div class="split__copy prose">
      <h2 id="loc-intro-h" class="section-title">Building in ${esc(loc.name)}.</h2>
      ${loc.intro}
      <figure class="loc-photo">
        ${picture(photo.name, { alt: photo.alt, sizes: '(min-width: 1240px) 640px, (min-width: 960px) 52vw, 100vw', cls: 'loc-photo__pic' })}
        <figcaption>From our portfolio: ${esc(photo.project.title.charAt(0).toLowerCase() + photo.project.title.slice(1))}.</figcaption>
      </figure>
    </div>
    <div class="split__aside">
      <div class="card scope loc-facts">
        <h3 class="scope__title">${esc(loc.name)} at a glance</h3>
        <dl class="loc-facts__list">
          ${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}
        </dl>
        <a class="btn btn--brass btn--block" href="/contact/#estimate">Request an Estimate${icon('arrow')}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper2" aria-labelledby="loc-plan-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Before you build</p>
      <h2 id="loc-plan-h" class="section-title">Planning a project in ${esc(loc.name)}</h2>
    </div>
    <div class="consider">
      ${loc.local
        .map(
          (c, i) => `<article class="consider__item">
        <span class="consider__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3>${c.h}</h3>
        ${c.p}
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="loc-svc-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Services</p>
      <h2 id="loc-svc-h" class="section-title">What we build in ${esc(loc.name)}</h2>
      <p class="section-head__text">Decks are our specialty. We also install fencing and remodel basements, bathrooms and kitchens, plus flooring and garage projects.</p>
    </div>
    <ul class="related__list" role="list">
      ${pageServices.map((s) => `<li><a class="related__link" href="${serviceUrl(s)}"><span>${esc(s.name)}</span>${icon('arrow')}</a></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section section--paper2" aria-labelledby="loc-work-h">
  <div class="container">
    <div class="project-group__head">
      <div>
        <h2 id="loc-work-h" class="section-title">Recent DK deck projects</h2>
        <p class="section-head__text">A sample of our own work from across Monroe County and Lucas County.</p>
      </div>
      <a class="link-arrow" href="/projects/">See all projects ${icon('arrow')}</a>
    </div>
    <div class="project-grid">${projectIds.map((id) => projectCard(allProjects.find((p) => p.id === id))).join('')}</div>
  </div>
</section>
${lightboxDialog()}

<section class="section section--ink testimonials testimonials--single" aria-labelledby="loc-review-h">
  <div class="container">
    <h2 id="loc-review-h" class="visually-hidden">Customer review</h2>
    ${reviewCard(review)}
    <a class="link-arrow link-arrow--light" href="/testimonials/">Read more testimonials ${icon('arrow')}</a>
  </div>
</section>

<section class="section" aria-labelledby="loc-faq-h">
  <div class="container faq-layout">
    <div>
      <p class="eyebrow">${esc(loc.name)} FAQ</p>
      <h2 id="loc-faq-h" class="section-title">Questions from ${esc(loc.name)} homeowners.</h2>
      <p>Call <a href="tel:${business.phoneE164}" data-track="click_call">${business.phoneDisplay}</a> with anything not covered here.</p>
    </div>
    ${faq(faqs)}
  </div>
</section>

<section class="section section--tight related" aria-labelledby="loc-near-h">
  <div class="container">
    <h2 id="loc-near-h" class="related__h">Nearby communities we serve</h2>
    <ul class="related__list" role="list">
      ${nearby
        .map(({ l }) => `<li><a class="related__link" href="${locationUrl(l)}"><span>${esc(l.name)}, ${countyOf(l).stateAbbr}</span>${icon('arrow')}</a></li>`)
        .join('')}
      <li><a class="related__link" href="/service-area/#${county.slug}"><span>All of ${esc(county.name)}</span>${icon('arrow')}</a></li>
    </ul>
  </div>
</section>

${ctaBand({ heading: `Planning a project in ${esc(loc.name)}?`, text: `Tell us what you have in mind and the address. We’ll confirm which ${county.stateAbbr === 'MI' ? 'Michigan' : 'Ohio'} rules apply and set up a time to see the site.` })}
`,
  };
}
