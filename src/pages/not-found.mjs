import { business, services, serviceUrl } from '../../site.config.mjs';
import { icon, esc } from '../lib/components.mjs';

export default {
  path: '/404.html',
  outFile: '404.html',
  title: 'Page Not Found | DK Quality Construction',
  description: 'The page you were looking for could not be found.',
  noindex: true,
  sitemap: false,
  body: `
<section class="section notfound" aria-labelledby="nf-h">
  <div class="container notfound__inner">
    <p class="eyebrow">Error 404</p>
    <h1 id="nf-h" class="section-title">This page isn’t here.</h1>
    <p class="lead">The link may be old or mistyped. Here’s where most people are headed:</p>
    <ul class="related__list" role="list">
      ${services
        .filter((s) => s.page)
        .map((s) => `<li><a class="related__link" href="${serviceUrl(s)}"><span>${esc(s.name)}</span>${icon('arrow')}</a></li>`)
        .join('')}
      <li><a class="related__link" href="/contact/#estimate"><span>Request an Estimate</span>${icon('arrow')}</a></li>
    </ul>
    <p>Or call <a href="tel:${business.phoneE164}" data-track="click_call">${business.phoneDisplay}</a> · <a href="/">Go to the homepage</a></p>
  </div>
</section>
`,
};
