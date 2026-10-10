import { business } from '../../site.config.mjs';
import { icon } from '../lib/components.mjs';

export default {
  path: '/thank-you/',
  title: 'Thank You — Estimate Request Received | DK Quality Construction',
  description: 'Your estimate request was sent to DK Quality Construction.',
  noindex: true,
  sitemap: false,
  bodyClass: 'page-thanks',
  body: `
<section class="section thanks" aria-labelledby="thanks-h">
  <div class="container thanks__inner">
    <span class="thanks__badge">${icon('check')}</span>
    <h1 id="thanks-h" class="section-title">Thanks — your request is in.</h1>
    <p class="lead">We’ve received your project details and will follow up by your preferred contact method.</p>
    <p>If your project is time-sensitive, call <a href="tel:${business.phoneE164}" data-track="click_call">${business.phoneDisplay}</a>.</p>
    <div class="thanks__actions">
      <a class="btn btn--ink" href="/services/decks/">Compare deck materials</a>
      <a class="btn btn--outline" href="/">Back to home</a>
    </div>
  </div>
</section>
`,
};
