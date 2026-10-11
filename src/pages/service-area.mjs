import { business } from '../../site.config.mjs';
import { pageHero, icon, ctaBand, phoneLink, esc } from '../lib/components.mjs';
import { locationByName, locationUrl } from '../data/locations.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area/' },
];

const [monroe, lucas] = business.serviceArea.counties;

const countyBlock = (c, intro) => `<article class="county card" id="${c.slug}">
  <header class="county__head">
    ${icon('pin')}
    <h2 class="county__title">${c.name}, ${c.state}</h2>
  </header>
  <p>${intro}</p>
  <h3 class="county__sub">Communities we serve</h3>
  <ul class="tag-list" role="list">${c.communities.map(((t) => { const l = locationByName(t, c.stateAbbr); return `<li>${l ? `<a href="${locationUrl(l)}">${esc(t)}</a>` : esc(t)}</li>`; })).join('')}</ul>
</article>`;

export default {
  path: '/service-area/',
  title: 'Service Area: Monroe County, MI & Lucas County, OH | DK Quality',
  description:
    'Decks and remodeling across Monroe County, Michigan and Lucas County, Ohio — Monroe, Temperance, Lambertville, Toledo, Sylvania, Maumee and more.',
  breadcrumbs: trail,
  body: `
${pageHero({
  eyebrow: 'Service Area',
  title: 'Serving Monroe County, MI and Lucas County, OH',
  lede: 'Based in Monroe, Michigan, we work on both sides of the state line — from the River Raisin to the Maumee.',
  trail,
})}

<section class="section" aria-label="Counties served">
  <div class="container county-grid">
    ${countyBlock(
      monroe,
      'Home base. We’re based in Monroe and work throughout the county — the city, the surrounding townships, and the communities between Dundee and Lake Erie.',
    )}
    ${countyBlock(
      lucas,
      'Just across the state line, we take on deck and remodeling projects in Toledo and its suburbs throughout Lucas County.',
    )}
  </div>
</section>

<section class="section section--paper2" aria-labelledby="area-notes-h">
  <div class="container split">
    <div class="split__copy prose">
      <h2 id="area-notes-h" class="section-title">Two states, one standard.</h2>
      <p>Building on both sides of the Michigan–Ohio line means working with different building departments and codes. Deck footings, fence heights, permit triggers and inspection steps can all vary between a township in Monroe County and a city in Lucas County.</p>
      <p>When you request an estimate, include the city or ZIP code of the project. That tells us which rules apply before we start planning.</p>
      <p>Not on the list? If you’re close to either county, <a href="tel:${business.phoneE164}" data-track="click_call">give us a call</a> and ask.</p>
    </div>
    <div class="split__aside">
      <div class="card scope">
        <h3 class="scope__title">Check your address</h3>
        <p>Call with your address and project type and we’ll tell you right away whether it’s in our area.</p>
        ${phoneLink('btn btn--ink btn--block')}
        <a class="btn btn--brass btn--block" href="/contact/#estimate">Request an Estimate${icon('arrow')}</a>
      </div>
    </div>
  </div>
</section>

${ctaBand()}
`,
};
