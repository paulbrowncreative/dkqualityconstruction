// Shared structure for individual service pages, so every service page has the same
// rhythm: hero → intro → scope → considerations → process note → FAQ → related → CTA.
import { site, business, services, serviceUrl } from '../../site.config.mjs';
import { pageHero, picture, icon, faq, ctaBand, esc } from './components.mjs';
import { ORG_ID } from './layout.mjs';

export function servicePage(cfg) {
  const svc = services.find((s) => s.slug === cfg.slug);
  const path = `/services/${cfg.slug}/`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/' },
    { name: svc.name, path },
  ];
  const related = services
    .filter((s) => s.slug !== cfg.slug && (cfg.related || []).includes(s.slug))
    .map(
      (s) => `<li><a class="related__link" href="${serviceUrl(s)}"><span>${esc(s.name)}</span>${icon('arrow')}</a></li>`,
    )
    .join('');

  return {
    path,
    title: cfg.title,
    description: cfg.description,
    breadcrumbs: trail,
    schema: [
      {
        '@type': 'Service',
        '@id': `${site.url}${path}#service`,
        name: cfg.schemaName || svc.name,
        serviceType: cfg.serviceType || svc.name,
        description: cfg.description,
        provider: { '@id': ORG_ID() },
        areaServed: business.serviceArea.counties.map((c) => ({
          '@type': 'AdministrativeArea',
          name: `${c.name}, ${c.state}`,
        })),
        url: `${site.url}${path}`,
      },
    ],
    body: `
${pageHero({
  eyebrow: cfg.eyebrow,
  title: cfg.h1,
  lede: cfg.lede,
  image: svc.image,
  imageAlt: cfg.heroAlt,
  trail,
})}

<section class="section" aria-labelledby="intro-h">
  <div class="container split">
    <div class="split__copy prose">
      <h2 id="intro-h" class="section-title">${cfg.introHeading}</h2>
      ${cfg.intro}
    </div>
    <div class="split__aside">
      <div class="scope card">
        <h3 class="scope__title">${cfg.scopeHeading || 'Typical projects'}</h3>
        <ul class="checks" role="list">
          ${cfg.scope.map((i) => `<li>${icon('check')} <span>${i}</span></li>`).join('')}
        </ul>
        <a class="btn btn--brass btn--block" href="/contact/#estimate">Request an Estimate${icon('arrow')}</a>
      </div>
    </div>
  </div>
</section>

${cfg.feature || ''}

<section class="section section--paper2" aria-labelledby="consider-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Before you build</p>
      <h2 id="consider-h" class="section-title">${cfg.considerHeading}</h2>
    </div>
    <div class="consider">
      ${cfg.considerations
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

${
  cfg.gallery
    ? `<section class="section" aria-label="${esc(svc.name)} examples">
  <div class="container gallery-row">
    ${cfg.gallery
      .map(
        (g) => `<figure class="gallery-row__item">${picture(g.image, {
          alt: g.alt,
          sizes: '(min-width: 960px) 33vw, (min-width: 600px) 50vw, 100vw',
          cls: 'frame',
        })}${g.caption ? `<figcaption>${g.caption}</figcaption>` : ''}</figure>`,
      )
      .join('')}
  </div>
</section>`
    : ''
}

<section class="section" aria-labelledby="svc-faq-h">
  <div class="container faq-layout">
    <div>
      <p class="eyebrow">${esc(svc.name)} FAQ</p>
      <h2 id="svc-faq-h" class="section-title">Questions we hear.</h2>
      <p>Call <a href="tel:${business.phoneE164}" data-track="click_call">${business.phoneDisplay}</a> with anything not covered here.</p>
    </div>
    ${faq(cfg.faqs)}
  </div>
</section>

${
  related
    ? `<section class="section section--tight related" aria-labelledby="related-h">
  <div class="container">
    <h2 id="related-h" class="related__h">Related services</h2>
    <ul class="related__list" role="list">${related}</ul>
  </div>
</section>`
    : ''
}

${ctaBand({ heading: cfg.ctaHeading, text: cfg.ctaText })}
`,
  };
}
