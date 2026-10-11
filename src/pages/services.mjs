import { business, services, serviceUrl } from '../../site.config.mjs';
import { pageHero, picture, icon, ctaBand, esc } from '../lib/components.mjs';
import { postsForService } from '../data/posts.mjs';
import { postTitle } from '../lib/post-template.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services/' },
];

const altText = {
  decks: 'Aerial view of a wide gray deck with built-in benches and white-trimmed center stairs',
  'basement-finishing': 'Remodeled basement with a black painted ceiling, plank flooring and white built-in cabinets',
  'bathroom-remodeling': 'Remodeled bathroom with a white vanity, round mirror and marble-look tile tub surround',
  'kitchen-remodeling': 'Remodeled kitchen with white shaker cabinets, granite counters and stainless appliances',
  flooring: 'Dark wood-look plank flooring in a basement finished by DK Quality Construction',
};

const extra = {
  flooring: `<p>We install flooring on its own or as part of a basement, kitchen or bathroom remodel. Below-grade spaces and wet areas call for different products than living rooms and bedrooms — we’ll help you match the floor to the room.</p>`,
  garages: `<p>Garages are on our list of services. Whether you’re thinking about a new garage or a project in the one you have, tell us what you need and we’ll talk it through. Garage construction typically requires a permit and must meet local setback rules, so we cover that early.</p>`,
};

export default {
  path: '/services/',
  title: 'Services: Decks, Fencing & Remodeling | DK Quality Construction',
  description:
    'Decks, fencing, basement, bathroom and kitchen remodeling, flooring and garages — DK Quality Construction serves Monroe County, MI and Lucas County, OH.',
  breadcrumbs: trail,
  body: `
${pageHero({
  eyebrow: 'Services',
  title: 'Construction and remodeling services',
  lede: `Decks are our specialty. We also build fences and remodel basements, bathrooms and kitchens for homeowners in ${business.serviceArea.summary}.`,
  trail,
})}

<section class="section" aria-label="All services">
  <div class="container svc-list">
    ${services
      .map(
        (s, i) => `<article class="svc-row${s.image ? '' : ' svc-row--text'}" id="${s.slug}">
      ${s.image ? `<div class="svc-row__media">${picture(s.image, {
        alt: altText[s.slug],
        sizes: '(min-width: 960px) 40vw, 100vw',
        cls: 'frame',
      })}</div>` : ''}
      <div class="svc-row__body">
        <span class="svc-row__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h2 class="svc-row__title">${esc(s.name)}</h2>
        <p class="lead">${esc(s.short)}</p>
        ${extra[s.slug] || ''}
        ${
          s.page
            ? `<a class="link-arrow" href="${serviceUrl(s)}">${esc(s.name)} in Monroe, MI ${icon('arrow')}</a>`
            : `<a class="link-arrow" href="/contact/#estimate">Request a ${esc(s.name.toLowerCase())} estimate ${icon('arrow')}</a>`
        }
        ${postsForService(s.slug).map((p) => `<p class="svc-row__guide">Guide: <a href="/blog/${p.slug}/">${postTitle(p)}</a></p>`).join('')}
      </div>
    </article>`,
      )
      .join('\n')}
  </div>
</section>

${ctaBand()}
`,
};
