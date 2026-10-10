import { business } from '../../site.config.mjs';
import { pageHero, icon, estimateForm, phoneLink } from '../lib/components.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact/' },
];

export default {
  path: '/contact/',
  title: 'Request an Estimate | Contact DK Quality Construction, Monroe MI',
  description: `Request a deck, fence or remodeling estimate from DK Quality Construction in Monroe, MI. Call ${business.phoneDisplay} or send your project details online.`,
  breadcrumbs: trail,
  body: `
${pageHero({
  eyebrow: 'Contact',
  title: 'Request an estimate',
  lede: 'Tell us about your project. We’ll follow up by your preferred method to talk it through and set up a time to see the site.',
  trail,
  actions: false,
})}

<section class="section estimate estimate--page" id="estimate" aria-labelledby="estimate-h">
  <div class="container estimate__grid">
    <div class="estimate__form card">
      <h2 id="estimate-h" class="form-title">Project details</h2>
      ${estimateForm({ idPrefix: 'contact', headingId: 'estimate-h' })}
    </div>
    <div class="estimate__intro contact-aside">
      <div class="contact-card">
        <h2 class="contact-card__h">Call</h2>
        ${phoneLink('contact-card__phone', business.phoneDisplay)}
        <p>Talk directly with owner ${business.owner}. If we miss your call, leave a message with your name, number and project type.</p>
      </div>
      <div class="contact-card">
        <h2 class="contact-card__h">Service area</h2>
        <p>${icon('pin')} Based in ${business.city}, ${business.region}. Serving ${business.serviceArea.summary}. <a href="/service-area/">See communities</a>.</p>
      </div>
      <div class="contact-card">
        <h2 class="contact-card__h">What helps us quote</h2>
        <ul class="checks" role="list">
          <li>${icon('check')} <span>Project type and rough size</span></li>
          <li>${icon('check')} <span>City or ZIP of the property</span></li>
          <li>${icon('check')} <span>Materials you’re considering</span></li>
          <li>${icon('check')} <span>A photo of the area, if you have one</span></li>
        </ul>
      </div>
      <div class="contact-card">
        <h2 class="contact-card__h">Elsewhere</h2>
        <p><a href="${business.facebook}" rel="noopener" target="_blank">${icon('facebook')} Facebook<span class="visually-hidden"> (opens in a new tab)</span></a> · <a href="${business.bbb}" rel="noopener" target="_blank">BBB profile<span class="visually-hidden"> (opens in a new tab)</span></a></p>
      </div>
    </div>
  </div>
</section>
`,
};
