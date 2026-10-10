import { site, business } from '../../site.config.mjs';
import { pageHero, projectCard, lightboxDialog, ctaBand, icon, esc, largestJpg } from '../lib/components.mjs';
import { categories, projects } from '../data/projects.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects/' },
];

const groups = categories
  .map((c) => ({ ...c, items: projects.filter((p) => p.category === c.id) }))
  .filter((g) => g.items.length);

export default {
  path: '/projects/',
  title: 'Deck & Remodeling Projects | DK Quality Construction, Monroe MI',
  description:
    'Photos of decks and remodeling projects built by DK Quality Construction for homeowners in Monroe County, MI and Lucas County, OH.',
  breadcrumbs: trail,
  schema: [
    {
      '@type': 'ImageGallery',
      name: 'DK Quality Construction projects',
      image: projects.map((p) => ({ '@type': 'ImageObject', name: p.title, caption: p.caption, contentUrl: `${site.url}${largestJpg(p.image)}` })),
    },
  ],
  body: `
${pageHero({
  eyebrow: 'Our work',
  title: 'Projects',
  lede: 'Real decks and remodels built by DK Quality Construction. Select any photo to see it full size.',
  image: 'project-deck-aerial-privacy-screen',
  imageAlt: 'Aerial view of a raised gray deck with white-and-black railings, a privacy screen and wide stairs',
  trail,
})}

<section class="section" aria-label="Project photos">
  <div class="container">
    ${groups.length > 1 ? `<nav class="chip-nav" aria-label="Project categories"><ul role="list">${groups.map((g) => `<li><a href="#${g.id}">${esc(g.name)} <span class="chip-nav__count">${g.items.length}</span></a></li>`).join('')}</ul></nav>` : ''}
    ${groups
      .map(
        (g) => `<section class="project-group" id="${g.id}" aria-labelledby="${g.id}-h">
      <div class="project-group__head">
        <h2 id="${g.id}-h" class="section-title">${esc(g.name)}</h2>
        <a class="link-arrow" href="${g.service}">About our ${esc(g.name.toLowerCase())} ${icon('arrow')}</a>
      </div>
      <div class="project-grid">${g.items.map((p) => projectCard(p)).join('')}</div>
    </section>`,
      )
      .join('')}
    <p class="note">More projects are being added. For the latest builds, see <a href="${business.facebook}" rel="noopener" target="_blank">our Facebook page<span class="visually-hidden"> (opens in a new tab)</span></a>.</p>
  </div>
</section>
${lightboxDialog()}
${ctaBand({ heading: 'Want results like these?', text: 'Tell us about your project and where it is. We’ll follow up to talk it through and set up a time to see the site.' })}
`,
};
