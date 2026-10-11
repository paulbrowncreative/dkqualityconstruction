import { services } from '../../site.config.mjs';
import { pageHero, picture, icon, ctaBand, esc } from '../lib/components.mjs';
import { posts } from '../data/posts.mjs';
import { postUrl, readMinutes, formatDate } from '../lib/post-template.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog/' },
];
const svcName = (slug) => services.find((s) => s.slug === slug).name;

const card = (p) => `<article class="post-card">
  ${p.image ? `<a class="post-card__media" href="${postUrl(p)}" tabindex="-1" aria-hidden="true">${picture(p.image, { alt: '', sizes: '(min-width: 1100px) 33vw, (min-width: 600px) 50vw, 100vw' })}</a>` : `<span class="post-card__media post-card__media--text" aria-hidden="true">${esc(svcName(p.service))}</span>`}
  <div class="post-card__body">
    <p class="post-card__cat">${esc(svcName(p.service))}</p>
    <h2 class="post-card__title"><a href="${postUrl(p)}">${p.h1}</a></h2>
    <p>${p.description}</p>
    <p class="post-card__meta"><time datetime="${p.date}">${formatDate(p.date)}</time> · ${readMinutes(p)} min read</p>
  </div>
</article>`;

export default {
  path: '/blog/',
  title: 'Deck, Fence & Remodeling Guides | DK Quality Construction Blog',
  description:
    'Planning guides for decks, fences, basements, baths, kitchens, flooring and garages in Monroe County, MI and Lucas County, OH: permits, codes and local rules.',
  breadcrumbs: trail,
  schema: [
    {
      '@type': 'ItemList',
      itemListElement: posts.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: postUrl(p), name: p.h1 })),
    },
  ],
  body: `
${pageHero({
  eyebrow: 'Blog',
  title: 'Planning guides',
  lede: 'Straight answers on permits, codes and materials for homeowners in Monroe County, Michigan and Lucas County, Ohio — from the people who build it.',
  trail,
  actions: false,
})}

<section class="section" aria-label="Guides">
  <div class="container">
    <div class="post-grid">${posts.map(card).join('')}</div>
  </div>
</section>

${ctaBand()}
`,
};
