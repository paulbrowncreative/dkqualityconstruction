import { business } from '../../site.config.mjs';
import { projects } from '../data/projects.mjs';
import {
  picture, preloadImage, icon, estimateButton, phoneLink, serviceIndex, faq, estimateForm, projectCard, lightboxDialog,
} from '../lib/components.mjs';

const heroSizes = '100vw';

const faqs = [
  {
    q: 'What areas do you serve?',
    a: `<p>We work throughout <strong>Monroe County, Michigan</strong> and <strong>Lucas County, Ohio</strong> — from Monroe, Temperance and Lambertville to Toledo, Sylvania and Maumee. If you’re near the edge of that area, call and ask. <a href="/service-area/">See the full service area</a>.</p>`,
  },
  {
    q: 'Do you build composite decks or just wood?',
    a: `<p>Both. Decking is our specialty, and we build with pressure-treated lumber and with composite decking systems. Each has real trade-offs in cost, upkeep and look — <a href="/services/decks/#materials">here’s a plain comparison</a>.</p>`,
  },
  {
    q: 'How do I get an estimate?',
    a: `<p>Send the <a href="/contact/#estimate">estimate request form</a> or call <a href="tel:${business.phoneE164}" data-track="click_call">${business.phoneDisplay}</a>. Tell us the type of project, where it is, and anything you already know about size or materials. A photo of the area helps. We’ll follow up to talk it through and arrange a time to see the site.</p>`,
  },
  {
    q: 'What happens before work starts?',
    a: `<p>We look at the site in person, talk through what you want, and confirm the scope and materials before anything is built. If the project needs a building permit, that’s part of the conversation up front — requirements vary by city and township, so it’s worth settling early.</p>`,
  },
  {
    q: 'When is the best time to plan a deck?',
    a: `<p>Deck building in our area mostly happens spring through fall, and those months fill up. Starting the conversation in late winter or early spring gives you the most scheduling options — but it’s never too early to get an estimate.</p>`,
  },
  {
    q: 'Do you do interior work too?',
    a: `<p>Yes. Along with decks and fencing, we handle <a href="/services/basement-finishing/">basement remodeling</a>, <a href="/services/bathroom-remodeling/">bathrooms</a>, <a href="/services/kitchen-remodeling/">kitchens</a>, <a href="/services/#flooring">flooring</a> and <a href="/services/#garages">garage projects</a>.</p>`,
  },
];

export default {
  path: '/',
  title: 'Deck Builder & Remodeler in Monroe, MI | DK Quality Construction',
  description:
    'Owner-led deck builder and remodeler in Monroe, MI. Treated and composite decks, fences, basements, kitchens and baths in Monroe County and Lucas County, OH.',
  preload: preloadImage('project-deck-aerial-covered-porch-privacy-wall', heroSizes),
  bodyClass: 'page-home',
  body: `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__media">
    ${picture('project-deck-aerial-covered-porch-privacy-wall', {
      alt: 'Aerial view of a large brown deck built by DK Quality Construction, wrapping the back of a ranch home with a covered porch section, a privacy wall and wide steps',
      sizes: heroSizes,
      eager: true,
    })}
  </div>
  <div class="container hero__inner">
    <p class="eyebrow eyebrow--light">Monroe, Michigan <span aria-hidden="true">·</span> Est. 2021</p>
    <h1 class="hero__title" id="hero-title">Decks and remodeling, <span class="hero__accent">built right</span> in Monroe County.</h1>
    <p class="hero__lede">DK Quality Construction is an owner-led contractor building pressure-treated and composite decks, fences and interior remodels for homeowners in Monroe County, MI and Lucas County, OH.</p>
    <div class="hero__actions">
      ${estimateButton('btn btn--brass btn--lg')}
      ${phoneLink('btn btn--outline-light btn--lg')}
    </div>
  </div>
</section>

<section class="proof-strip" aria-label="Credentials at a glance">
  <ul class="container proof-strip__list" role="list">
    <li class="proof-strip__item">
      ${icon('shield')}
      <span><strong>BBB Accredited</strong> since ${business.bbbAccreditedSince} · <a href="${business.bbb}" rel="noopener" target="_blank">View A+ profile<span class="visually-hidden"> on BBB.org (opens in a new tab)</span></a></span>
    </li>
    <li class="proof-strip__item">
      ${icon('check')}
      <span><strong>Owner-led</strong> — talk directly with ${business.owner}</span>
    </li>
    <li class="proof-strip__item">
      ${icon('pin')}
      <span><strong>Local</strong> to Monroe, serving MI &amp; OH</span>
    </li>
  </ul>
</section>

<section class="section specialty" aria-labelledby="specialty-h">
  <div class="container specialty__grid">
    <div class="specialty__media">
      ${picture('project-deck-waterfront-covered', {
        alt: 'Large gray deck by DK Quality Construction, partly covered, with white railings and black balusters overlooking a lake',
        sizes: '(min-width: 960px) 46vw, 100vw',
        cls: 'frame',
      })}
    </div>
    <div class="specialty__copy">
      <p class="eyebrow">Our specialty</p>
      <h2 id="specialty-h" class="section-title">Decks, in treated lumber or composite.</h2>
      <p class="lead">Decks are the core of what we do. We build in pressure-treated wood and in composite decking systems, and we’ll help you pick the one that fits your budget and how much upkeep you want.</p>
      <dl class="compare">
        <div class="compare__col">
          <dt>Pressure-treated</dt>
          <dd>Lower cost up front</dd>
          <dd>Classic wood look and feel</dd>
          <dd>Needs periodic cleaning and sealing or stain</dd>
        </div>
        <div class="compare__col">
          <dt>Composite</dt>
          <dd>Higher cost up front</dd>
          <dd>Consistent color, no staining</dd>
          <dd>Mostly just washing to maintain</dd>
        </div>
      </dl>
      <a class="link-arrow" href="/services/decks/">Deck building in Monroe, MI ${icon('arrow')}</a>
    </div>
  </div>
</section>

<section class="section section--flush-top" aria-labelledby="recent-h">
  <div class="container">
    <div class="project-group__head">
      <div>
        <p class="eyebrow">Recent work</p>
        <h2 id="recent-h" class="section-title">Built by DK Quality.</h2>
      </div>
      <a class="link-arrow" href="/projects/">See all projects ${icon('arrow')}</a>
    </div>
    <div class="project-grid">${['P-030', 'P-009', 'P-016'].map((id) => projectCard(projects.find((p) => p.id === id))).join('')}</div>
  </div>
</section>
${lightboxDialog()}

<section class="section section--paper2" aria-labelledby="services-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">What we build</p>
      <h2 id="services-h" class="section-title">Outside and in, one contractor.</h2>
      <p class="section-head__text">From a new deck and fence line to a finished basement, kitchen or bath — one point of contact from the first call to the final walkthrough.</p>
    </div>
    ${serviceIndex()}
  </div>
</section>

<section class="section process" aria-labelledby="process-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">How it works</p>
      <h2 id="process-h" class="section-title">A straightforward process.</h2>
    </div>
    <ol class="steps" role="list">
      <li class="steps__item">
        <span class="steps__num" aria-hidden="true">01</span>
        <h3 class="steps__title">Reach out</h3>
        <p>Call or send the estimate form with the project type, location and anything you know about size or materials.</p>
      </li>
      <li class="steps__item">
        <span class="steps__num" aria-hidden="true">02</span>
        <h3 class="steps__title">Site visit</h3>
        <p>We look at the space in person — measurements, access, the existing structure — and talk through options.</p>
      </li>
      <li class="steps__item">
        <span class="steps__num" aria-hidden="true">03</span>
        <h3 class="steps__title">Your estimate</h3>
        <p>You get an estimate that spells out the scope and materials, so you know what you’re agreeing to.</p>
      </li>
      <li class="steps__item">
        <span class="steps__num" aria-hidden="true">04</span>
        <h3 class="steps__title">Build &amp; walkthrough</h3>
        <p>We build it, clean up, and walk the finished work with you before we call it done.</p>
      </li>
    </ol>
  </div>
</section>

<section class="section section--ink why" aria-labelledby="why-h">
  <div class="container why__grid">
    <div class="why__intro">
      <p class="eyebrow eyebrow--light">Why DK Quality</p>
      <h2 id="why-h" class="section-title">The person you call is the person accountable for the build.</h2>
      <p>DK Quality Construction was founded in Monroe in 2021 by ${business.owner}. It’s a deliberately small operation: the person you talk to about your project is the person accountable for how it’s built.</p>
      <a class="link-arrow link-arrow--light" href="/about/">About DK Quality Construction ${icon('arrow')}</a>
    </div>
    <ul class="why__list" role="list">
      <li>
        <h3>A record you can check</h3>
        <p>BBB Accredited since ${business.bbbAccreditedSince} with an A+ rating. Don’t take our word for it — <a href="${business.bbb}" rel="noopener" target="_blank">read the profile<span class="visually-hidden"> (opens in a new tab)</span></a>.</p>
      </li>
      <li>
        <h3>Deck specialists</h3>
        <p>Decking is our main focus, in both treated and composite systems — not a sideline to roofing or siding.</p>
      </li>
      <li>
        <h3>Local on both sides of the state line</h3>
        <p>Based in Monroe and working across Monroe County, MI and Lucas County, OH.</p>
      </li>
      <li>
        <h3>See the work as it happens</h3>
        <p>We post projects on <a href="${business.facebook}" rel="noopener" target="_blank">our Facebook page<span class="visually-hidden"> (opens in a new tab)</span></a> — follow along for recent builds and updates.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section area-teaser" aria-labelledby="area-h">
  <div class="container area-teaser__grid">
    <div>
      <p class="eyebrow">Service area</p>
      <h2 id="area-h" class="section-title">Monroe County, MI &amp; Lucas County, OH.</h2>
      <p class="lead">Based in Monroe, we work across both counties — including the communities below. Not sure if you’re in range? Call <a href="tel:${business.phoneE164}" data-track="click_call">${business.phoneDisplay}</a>.</p>
      <a class="link-arrow" href="/service-area/">View the service area ${icon('arrow')}</a>
    </div>
    <div class="area-teaser__lists">
      ${business.serviceArea.counties
        .map(
          (c) => `<div>
        <h3 class="area-teaser__county">${c.name}, ${c.stateAbbr}</h3>
        <ul class="tag-list" role="list">${c.communities
          .slice(0, 8)
          .map((t) => `<li>${t}</li>`)
          .join('')}</ul>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section--paper2" aria-labelledby="faq-h">
  <div class="container faq-layout">
    <div>
      <p class="eyebrow">Questions</p>
      <h2 id="faq-h" class="section-title">Common questions.</h2>
      <p>Anything else? Call <a href="tel:${business.phoneE164}" data-track="click_call">${business.phoneDisplay}</a>.</p>
    </div>
    ${faq(faqs)}
  </div>
</section>

<section class="section estimate" id="estimate-home" aria-labelledby="estimate-home-h">
  <div class="container estimate__grid">
    <div class="estimate__intro">
      <p class="eyebrow">Request an estimate</p>
      <h2 id="estimate-home-h" class="section-title">Tell us about your project.</h2>
      <p class="lead">A few details is all it takes to start. We’ll follow up by your preferred method.</p>
      <ul class="checks" role="list">
        <li>${icon('check')} No obligation</li>
        <li>${icon('check')} Talk directly with the owner</li>
        <li>${icon('check')} Monroe County, MI &amp; Lucas County, OH</li>
      </ul>
      <p class="estimate__call">Prefer to talk? ${phoneLink('link-phone', business.phoneDisplay)}</p>
    </div>
    <div class="estimate__form card">
      ${estimateForm({ idPrefix: 'home', headingId: 'estimate-home-h' })}
    </div>
  </div>
</section>
`,
};
