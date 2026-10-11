import { business } from '../../site.config.mjs';
import { pageHero, picture, icon, ctaBand } from '../lib/components.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about/' },
];

export default {
  path: '/about/',
  title: `About DK Quality Construction | Owner ${business.owner} | Monroe, MI`,
  description:
    'DK Quality Construction is an owner-led Monroe, MI contractor founded in 2021 by David Kelly. BBB Accredited with an A+ rating. Decks, fencing and remodeling.',
  breadcrumbs: trail,
  body: `
${pageHero({
  eyebrow: 'About',
  title: 'A Monroe contractor, run by its owner',
  lede: `DK Quality Construction was founded in Monroe, Michigan in 2021 by ${business.owner}.`,
  trail,
  actions: false,
})}

<section class="section" aria-labelledby="story-h">
  <div class="container split split--about">
    <div class="split__copy prose">
      <h2 id="story-h" class="section-title">Small on purpose.</h2>
      <p>DK Quality Construction LLC is a Monroe-based general contractor specializing in decks — pressure-treated and composite — along with fencing, garages, flooring, and basement, bathroom and kitchen remodeling.</p>
      <p>The company is owner-led. When you call, you’re talking with the person who will scope your project and who is accountable for how it’s built. There’s no sales team handing you off to a crew you’ve never met.</p>
      <p>Our stated commitment is simple: give every customer top-notch quality. That shows up in the parts of a project you don’t see in photos — footings set deep enough, ledgers flashed properly, waterproofing done right behind the tile.</p>
    </div>
    <figure class="split__aside about-logo">
      <img src="/assets/img/brand/dk-logo-480.webp" width="480" height="261" alt="${business.name} logo, established 2021" loading="lazy" decoding="async">
    </figure>
  </div>
</section>

<section class="section section--ink" aria-labelledby="facts-h">
  <div class="container">
    <h2 id="facts-h" class="section-title">At a glance</h2>
    <dl class="facts">
      <div class="facts__item"><dt>Founded</dt><dd>2021, Monroe, MI</dd></div>
      <div class="facts__item"><dt>Owner</dt><dd>${business.owner}</dd></div>
      <div class="facts__item"><dt>Credentials</dt><dd>Licensed &amp; insured</dd></div>
      <div class="facts__item"><dt>Specialty</dt><dd>Treated &amp; composite decks</dd></div>
      <div class="facts__item"><dt>BBB</dt><dd>Accredited since ${business.bbbAccreditedSince} · <a href="${business.bbb}" rel="noopener" target="_blank">A+ rating<span class="visually-hidden"> (opens in a new tab)</span></a></dd></div>
      <div class="facts__item"><dt>Serving</dt><dd>Monroe County, MI · Lucas County, OH</dd></div>
    </dl>
  </div>
</section>

<section class="section" aria-labelledby="work-h">
  <div class="container split split--reverse">
    <div class="split__copy prose">
      <h2 id="work-h" class="section-title">See recent work.</h2>
      <p>Browse photos of finished decks and remodels on our <a href="/projects/">projects page</a>. We also share new builds on Facebook as they’re completed.</p>
      <p><a class="btn btn--ink" href="${business.facebook}" rel="noopener" target="_blank">${icon('facebook')}<span>DK Quality Construction on Facebook</span><span class="visually-hidden"> (opens in a new tab)</span></a></p>
    </div>
    <div class="split__aside">
      ${picture('project-deck-aerial-box-steps-trailer', {
        alt: 'Aerial view of a brown composite deck with angled box steps built by DK Quality Construction, with the company trailer parked beside the house',
        sizes: '(min-width: 960px) 40vw, 100vw',
        cls: 'frame',
      })}
    </div>
  </div>
</section>

${ctaBand()}
`,
};
