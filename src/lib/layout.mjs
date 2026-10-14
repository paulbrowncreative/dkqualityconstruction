// Page shell: <head>, header, footer and site-wide structured data.
import { site, business, services, serviceUrl } from '../../site.config.mjs';
import { esc, icon, estimateButton } from './components.mjs';

const abs = (path) => `${site.url}${path}`;
export const ORG_ID = () => `${site.url}/#business`;

export function businessSchema() {
  return {
    '@type': 'GeneralContractor',
    '@id': ORG_ID(),
    name: business.name,
    legalName: business.legalName,
    url: `${site.url}/`,
    logo: abs('/assets/img/brand/dk-logo-full.png'),
    image: abs('/assets/img/og-default.jpg'),
    telephone: business.phoneE164,
    ...(business.email ? { email: business.email } : {}),
    foundingDate: business.founded,
    founder: { '@type': 'Person', name: business.owner },
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    areaServed: business.serviceArea.counties.map((c) => ({
      '@type': 'AdministrativeArea',
      name: `${c.name}, ${c.state}`,
    })),
    knowsAbout: services.map((s) => s.name),
    sameAs: [business.facebook, business.bbb],
  };
}

function head({ title, description, path, ogImage, ogType = 'website', noindex, preload = '', schema = [] }) {
  const canonical = abs(path);
  const robots = !site.indexable || noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  const graph = { '@context': 'https://schema.org', '@graph': schema };
  const og = abs(ogImage || '/assets/img/og-default.jpg');
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${robots}">
<meta name="theme-color" content="#121214">
<meta name="format-detection" content="telephone=no">
${site.analytics.gscVerification ? `<meta name="google-site-verification" content="${esc(site.analytics.gscVerification)}">` : ''}
<link rel="preload" href="/assets/fonts/archivo-var.woff2" as="font" type="font/woff2" crossorigin>
${preload}
<link rel="stylesheet" href="${'{{css}}'}">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/img/brand/icon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/assets/img/brand/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(business.name)}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(business.name)} logo over an aerial view of a completed deck">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${og}">
<script type="application/ld+json">${JSON.stringify(graph)}</script>
<script src="${'{{js}}'}" defer></script>
${site.analytics.ga4Id ? `<script src="/assets/js/analytics.js" data-ga4-id="${esc(site.analytics.ga4Id)}" defer></script>` : ''}
</head>`;
}

function header(path) {
  const isCurrent = (p) => (path === p ? ' aria-current="page"' : '');
  // Landing page gets aria-current; pages inside its section get a visual marker only.
  const isSection = (p) => (path === p ? ' aria-current="page"' : path.startsWith(p) ? ' data-current' : '');
  const inServices = path.startsWith('/services/');
  const serviceLinks = services
    .map((s) => `<li><a href="${serviceUrl(s)}"${isCurrent(serviceUrl(s))}>${esc(s.navName)}</a></li>`)
    .join('');
  return `<a class="skip-link" href="#main">Skip to main content</a>
<header class="site-header" data-header>
  <div class="container site-header__inner">
    <a class="brand" href="/" aria-label="${esc(business.name)} — home">
      <img class="brand__emblem" src="/assets/img/brand/dk-emblem-160.webp" width="160" height="62" alt="">
      <span class="brand__text"><span class="brand__name">DK Quality</span><span class="brand__sub">Construction</span></span>
    </a>
    <nav class="primary-nav" aria-label="Main" data-nav>
      <ul class="primary-nav__list" role="list">
        <li class="has-sub" data-sub>
          <button class="primary-nav__toggle" type="button" aria-expanded="false" aria-controls="nav-services"${inServices ? ' data-current' : ''}>
            Services ${icon('chevron')}
          </button>
          <ul class="subnav" id="nav-services" role="list">
            <li><a href="/services/"${isCurrent('/services/')}>All services</a></li>
            ${serviceLinks}
          </ul>
        </li>
        <li><a href="/blog/"${isSection('/blog/')}>Blog</a></li>
        <li><a href="/projects/"${isCurrent('/projects/')}>Projects</a></li>
        <li><a href="/testimonials/"${isCurrent('/testimonials/')}>Testimonials</a></li>
        <li><a href="/service-area/"${isSection('/service-area/')}>Service Area</a></li>
        <li><a href="/about/"${isCurrent('/about/')}>About</a></li>
        <li><a href="/contact/"${isCurrent('/contact/')}>Contact</a></li>
      </ul>
      <div class="primary-nav__cta">
        <a class="nav-phone" href="tel:${business.phoneE164}" data-track="click_call">${icon('phone')}<span>${business.phoneDisplay}</span></a>
        ${estimateButton('btn btn--brass btn--sm', 'Get an Estimate')}
      </div>
    </nav>
    <div class="header-actions">
      <a class="icon-btn" href="tel:${business.phoneE164}" data-track="click_call">${icon('phone', { label: `Call ${business.phoneDisplay}` })}</a>
      <button class="icon-btn menu-btn" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
        <span class="menu-btn__open">${icon('menu')}</span><span class="menu-btn__close">${icon('close')}</span>
        <span class="visually-hidden">Menu</span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
    <nav class="container" aria-label="Mobile">
      <p class="mobile-menu__label">Services</p>
      <ul class="mobile-menu__services" role="list">
        ${serviceLinks}
        <li><a href="/services/"${isCurrent('/services/')}>All services</a></li>
      </ul>
      <ul class="mobile-menu__main" role="list">
        <li><a href="/projects/"${isCurrent('/projects/')}>Projects</a></li>
        <li><a href="/testimonials/"${isCurrent('/testimonials/')}>Testimonials</a></li>
        <li><a href="/service-area/"${isSection('/service-area/')}>Service Area</a></li>
        <li><a href="/blog/"${isSection('/blog/')}>Blog</a></li>
        <li><a href="/about/"${isCurrent('/about/')}>About</a></li>
        <li><a href="/contact/"${isCurrent('/contact/')}>Contact</a></li>
      </ul>
      <div class="mobile-menu__cta">
        ${estimateButton('btn btn--brass btn--block')}
        <a class="btn btn--outline-light btn--block" href="tel:${business.phoneE164}" data-track="click_call">${icon('phone')}<span>Call ${business.phoneDisplay}</span></a>
      </div>
    </nav>
  </div>
</header>`;
}

function footer() {
  const year = new Date().getFullYear();
  const svc = services.map((s) => `<li><a href="${serviceUrl(s)}">${esc(s.name)}</a></li>`).join('');
  const areas = business.serviceArea.counties
    .map((c) => `<li><a href="/service-area/#${c.slug}">${esc(c.name)}, ${c.stateAbbr}</a></li>`)
    .join('');
  return `<footer class="site-footer">
  <div class="container site-footer__grid">
    <div class="site-footer__brand">
      <img src="/assets/img/brand/dk-logo-480.webp" width="480" height="261" alt="${esc(business.name)} logo — established 2021" loading="lazy" decoding="async" class="site-footer__logo">
      <p>Decks, fencing and interior remodeling for homeowners in ${esc(business.serviceArea.summary)}.</p>
      <p class="site-footer__cred">${icon('check')}<span>Licensed &amp; insured${business.licenseNumber ? ` · MI Residential Builder #${esc(business.licenseNumber)}` : ''}</span></p>
      <a class="site-footer__bbb" href="${business.bbb}" rel="noopener" target="_blank">${icon('shield')}<span>BBB Accredited Business · A+<span class="visually-hidden"> (opens in a new tab)</span></span></a>
    </div>
    <nav class="site-footer__col" aria-label="Services">
      <h2 class="site-footer__h">Services</h2>
      <ul role="list">${svc}</ul>
    </nav>
    <nav class="site-footer__col" aria-label="Company">
      <h2 class="site-footer__h">Company</h2>
      <ul role="list">
        <li><a href="/about/">About</a></li>
        <li><a href="/projects/">Projects</a></li>
        <li><a href="/testimonials/">Testimonials</a></li>
        <li><a href="/service-area/">Service Area</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/contact/">Contact &amp; Estimates</a></li>
        <li><a href="/privacy-policy/">Privacy Policy</a></li>
      </ul>
    </nav>
    <div class="site-footer__col">
      <h2 class="site-footer__h">Contact</h2>
      <ul role="list" class="site-footer__contact">
        <li><a href="tel:${business.phoneE164}" data-track="click_call">${icon('phone')}<span>${business.phoneDisplay}</span></a></li>
        ${business.email ? `<li><a href="mailto:${business.email}" data-track="click_email">${esc(business.email)}</a></li>` : ''}
        <li>${icon('pin')}<span>Based in ${business.city}, ${business.region}</span></li>
        <li><a href="${business.facebook}" rel="noopener" target="_blank">${icon('facebook')}<span>Facebook<span class="visually-hidden"> (opens in a new tab)</span></span></a></li>
      </ul>
      <h2 class="site-footer__h site-footer__h--spaced">Areas served</h2>
      <ul role="list">${areas}</ul>
    </div>
  </div>
  <div class="container site-footer__legal">
    <p>&copy; ${year} ${esc(business.legalName)}. All rights reserved.</p>
    <p>All project photos show DK Quality Construction’s own work.</p>
  </div>
</footer>
<nav class="mobile-cta" aria-label="Quick contact" data-mobile-cta>
  <a class="mobile-cta__call" href="tel:${business.phoneE164}" data-track="click_call">${icon('phone')}<span>Call</span></a>
  <a class="mobile-cta__estimate" href="/contact/#estimate">Request an Estimate</a>
</nav>`;
}

/**
 * Render a full HTML document.
 * page: { path, title, description, body, schema?, breadcrumbs?, noindex?, preload?, bodyClass? }
 */
export function renderPage(page) {
  const schema = [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: `${site.url}/`,
      name: business.name,
      publisher: { '@id': ORG_ID() },
    },
    businessSchema(),
    {
      '@type': 'WebPage',
      '@id': `${abs(page.path)}#webpage`,
      url: abs(page.path),
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': ORG_ID() },
      inLanguage: site.lang,
    },
    ...(page.breadcrumbs
      ? [
          {
            '@type': 'BreadcrumbList',
            itemListElement: page.breadcrumbs.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.name,
              item: abs(c.path),
            })),
          },
        ]
      : []),
    ...(page.schema || []),
  ];
  return `<!doctype html>
<html lang="${site.lang}">
${head({ ...page, schema })}
<body class="${page.bodyClass || ''}">
${header(page.path)}
<main id="main" tabindex="-1">
${page.body}
</main>
${footer()}
</body>
</html>
`;
}
