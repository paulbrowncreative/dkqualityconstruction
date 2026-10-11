// Blog posts under /blog/{slug}/. Content lives in src/data/posts.mjs; this template adds
// the article chrome (byline, contents, FAQ, related links, CTA) and BlogPosting schema.
import { site, business, services, serviceUrl } from '../../site.config.mjs';
import { pageHero, icon, faq, ctaBand, esc, largestJpg, preloadImage } from './components.mjs';
import { locations, locationUrl } from '../data/locations.mjs';
import { ORG_ID } from './layout.mjs';
import { titleCaseText } from './title-case.mjs';

export const postTitle = (p) => titleCaseText(p.h1);

export const postUrl = (p) => `/blog/${p.slug}/`;

const words = (html) => html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
export const readMinutes = (p) =>
  Math.max(1, Math.ceil(words(p.intro + p.sections.map((s) => s.html).join(' ') + (p.faqs || []).map((f) => f.a).join(' ')) / 230));

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export function postPage(p) {
  const path = postUrl(p);
  const svc = services.find((s) => s.slug === p.service);
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog/' },
    { name: titleCaseText(p.short || p.h1), path },
  ];
  const related = (p.relatedServices || [p.service])
    .map((slug) => services.find((s) => s.slug === slug))
    .map((s) => `<li><a class="related__link" href="${s.page ? serviceUrl(s) : `/services/#${s.slug}`}"><span>${esc(s.name)}</span>${icon('arrow')}</a></li>`)
    .join('');
  const places = (p.places || [])
    .map((slug) => locations.find((l) => l.slug === slug))
    .map((l) => `<li><a href="${locationUrl(l)}">${esc(l.name)}, ${l.county}</a></li>`)
    .join('');

  return {
    path,
    title: p.title,
    description: p.description,
    breadcrumbs: trail,
    lastmod: p.updated || p.date,
    ogType: 'article',
    ogImage: p.image ? largestJpg(p.image) : undefined,
    preload: p.image ? preloadImage(p.image, '100vw') : '',
    schema: [
      {
        '@type': 'BlogPosting',
        '@id': `${site.url}${path}#article`,
        headline: postTitle(p),
        description: p.description,
        datePublished: p.date,
        dateModified: p.updated || p.date,
        author: { '@id': ORG_ID() },
        publisher: { '@id': ORG_ID() },
        mainEntityOfPage: { '@id': `${site.url}${path}#webpage` },
        ...(p.image ? { image: `${site.url}${largestJpg(p.image)}` } : {}),
        articleSection: svc.name,
        about: { '@type': 'Thing', name: p.topic },
        wordCount: words(p.intro + p.sections.map((s) => s.html).join(' ')),
        inLanguage: site.lang,
      },
    ],
    body: `
${pageHero({
  eyebrow: `${esc(svc.name)} guide`,
  title: p.h1,
  lede: p.lede,
  image: p.image || undefined,
  imageAlt: p.imageAlt,
  trail,
  actions: false,
})}

<article class="section post" aria-labelledby="post-h">
  <div class="container post__grid">
    <div class="post__body prose">
      <p class="post__meta" id="post-h">By ${esc(business.name)} · <time datetime="${p.date}">${formatDate(p.date)}</time>${p.updated ? ` · Updated <time datetime="${p.updated}">${formatDate(p.updated)}</time>` : ''} · ${readMinutes(p)} min read</p>
      ${p.intro}
      ${p.takeaways ? `<aside class="post__takeaways" aria-label="Key takeaways"><h2 class="post__takeaways-h">Key takeaways</h2><ul>${p.takeaways.map((t) => `<li>${t}</li>`).join('')}</ul></aside>` : ''}
      ${p.sections.map((s) => `<h2 id="${s.id}">${s.h}</h2>\n${s.html}`).join('\n')}
      <p class="post__note">${p.note || 'Codes and local rules change, and individual lots differ. Confirm requirements for your address with your local building department — or ask us, and we’ll check as part of your estimate.'}</p>
    </div>
    <aside class="post__aside" aria-label="In this article">
      <nav class="card post__toc" aria-labelledby="toc-h">
        <h2 id="toc-h" class="post__toc-h">In this guide</h2>
        <ol>${p.sections.map((s) => `<li><a href="#${s.id}">${s.toc || s.h}</a></li>`).join('')}${p.faqs?.length ? '<li><a href="#faq">Common questions</a></li>' : ''}</ol>
      </nav>
      <div class="card scope post__cta">
        <h2 class="scope__title">Planning ${esc(p.ctaNoun || svc.name.toLowerCase())}?</h2>
        <p>Talk it through with ${esc(business.owner.split(' ')[0])} — we’ll look at the site and give you a clear estimate.</p>
        <a class="btn btn--brass btn--block" href="/contact/#estimate">Request an Estimate${icon('arrow')}</a>
        <a class="btn btn--ink btn--block" href="tel:${business.phoneE164}" data-track="click_call">${icon('phone')}<span>Call ${business.phoneDisplay}</span></a>
      </div>
    </aside>
  </div>
</article>

${
  p.faqs?.length
    ? `<section class="section section--paper2" aria-labelledby="post-faq-h">
  <div class="container faq-layout">
    <div>
      <p class="eyebrow">FAQ</p>
      <h2 id="post-faq-h" class="section-title">Common questions.</h2>
    </div>
    ${faq(p.faqs)}
  </div>
</section>`
    : ''
}

<section class="section section--tight related" aria-labelledby="post-related-h">
  <div class="container">
    <h2 id="post-related-h" class="related__h">Related services</h2>
    <ul class="related__list" role="list">${related}<li><a class="related__link" href="/blog/"><span>More guides</span>${icon('arrow')}</a></li></ul>
    ${places ? `<h2 class="related__h related__h--spaced">Local pages mentioned in this guide</h2><ul class="tag-list" role="list">${places}</ul>` : ''}
  </div>
</section>

${ctaBand({ heading: p.ctaHeading || 'Ready to plan your project?', text: 'Tell us what you have in mind and the address. We’ll confirm the local rules and set up a time to see the site.' })}
`,
  };
}
