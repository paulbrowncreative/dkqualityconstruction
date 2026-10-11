import { business, services, serviceUrl } from '../../site.config.mjs';
import { pageHero, reviewCard, ctaBand, icon, esc } from '../lib/components.mjs';
import { reviews } from '../data/reviews.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Testimonials', path: '/testimonials/' },
];
const svc = (slug) => services.find((s) => s.slug === slug);

export default {
  path: '/testimonials/',
  title: 'Customer Reviews & Testimonials | DK Quality Construction',
  description:
    'What homeowners say about working with DK Quality Construction on decks, screened porches and basement remodels in Monroe County, MI and Lucas County, OH.',
  breadcrumbs: trail,
  body: `
${pageHero({
  eyebrow: 'Testimonials',
  title: 'What our customers say',
  lede: 'Homeowners on working with David and the crew: the communication, the cleanup and the finished work.',
  image: 'project-deck-covered-fan-bar-rail',
  imageAlt: 'Covered composite deck with a stained plank ceiling, ceiling fan and bar-height rail, built by DK Quality Construction',
  trail,
})}

<section class="section" aria-labelledby="reviews-h">
  <div class="container">
    <div class="section-head">
      <h2 id="reviews-h" class="section-title">Customer reviews</h2>
      <p class="section-head__text">Shared by DK Quality Construction customers, quoted word for word. Names are shortened for privacy.</p>
    </div>
    <div class="review-grid review-grid--page">
      ${reviews.map((r) => reviewCard(r, { projectHref: r.projectId ? `/projects/#${r.projectId.toLowerCase()}` : null })).join('\n')}
    </div>
    <p class="note">More reviews and recommendations are on <a href="${business.facebook}" rel="noopener" target="_blank">our Facebook page<span class="visually-hidden"> (opens in a new tab)</span></a>. We’re also <a href="${business.bbb}" rel="noopener" target="_blank">BBB Accredited with an A+ rating<span class="visually-hidden"> (opens in a new tab)</span></a>.</p>
  </div>
</section>

<section class="section section--tight related" aria-labelledby="rev-related-h">
  <div class="container">
    <h2 id="rev-related-h" class="related__h">See the work behind the reviews</h2>
    <ul class="related__list" role="list">
      <li><a class="related__link" href="/projects/"><span>Project photos</span>${icon('arrow')}</a></li>
      ${['decks', 'basement-finishing'].map((s) => `<li><a class="related__link" href="${serviceUrl(svc(s))}"><span>${esc(svc(s).name)}</span>${icon('arrow')}</a></li>`).join('')}
    </ul>
  </div>
</section>

${ctaBand({ heading: 'Ready to start your project?', text: 'Tell us what you have in mind and where the project is. We’ll follow up to talk it through and set up a time to see the site.' })}
`,
};
