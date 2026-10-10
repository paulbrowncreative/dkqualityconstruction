import { business, services, serviceUrl } from '../../site.config.mjs';
import { pageHero, picture, icon, ctaBand, esc } from '../lib/components.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services/' },
];

const altText = {
  decks: 'Aerial view of a large wood deck with stairs, railings and a built-in planter',
  fencing: 'Gray-stained picket fence with flower boxes around a backyard',
  'basement-finishing': 'Finished basement family room with bookshelves and recessed lighting',
  'bathroom-remodeling': 'Walk-in glass shower with marble-look tile',
  'kitchen-remodeling': 'White kitchen with shaker cabinets and stainless range',
  flooring: 'Installer laying plank flooring in an empty room',
  garages: 'Wood wall and roof framing on a building under construction',
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
        (s, i) => `<article class="svc-row" id="${s.slug}">
      <div class="svc-row__media">${picture(s.image, {
        alt: altText[s.slug],
        sizes: '(min-width: 960px) 40vw, 100vw',
        cls: 'frame',
      })}</div>
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
      </div>
    </article>`,
      )
      .join('\n')}
  </div>
</section>

${ctaBand()}
`,
};
