import { business } from '../../site.config.mjs';
import { servicePage } from '../lib/service-template.mjs';
import { picture } from '../lib/components.mjs';

const materials = `
<section class="section" id="materials" aria-labelledby="materials-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Materials</p>
      <h2 id="materials-h" class="section-title">Pressure-treated or composite?</h2>
      <p class="section-head__text">Both are good choices for a Michigan or Ohio deck. The right one depends on your budget, how long you plan to stay, and how much maintenance you’re willing to do.</p>
    </div>
    <div class="material-compare">
      <article class="material card">
        ${picture('project-deck-pressure-treated-black-rail', {
          alt: 'Pressure-treated wood deck built by DK Quality Construction, with divider boards and black metal railings',
          sizes: '(min-width: 960px) 44vw, 100vw',
          cls: 'material__img',
        })}
        <div class="material__body">
          <h3>Pressure-treated lumber</h3>
          <p>The most common deck material in the region. Treated pine resists rot and insects and costs the least up front.</p>
          <table class="spec-table">
            <caption class="visually-hidden">Pressure-treated decking at a glance</caption>
            <tbody>
              <tr><th scope="row">Up-front cost</th><td>Lower</td></tr>
              <tr><th scope="row">Look</th><td>Natural wood; can be stained any color</td></tr>
              <tr><th scope="row">Upkeep</th><td>Clean and re-seal or re-stain every few years</td></tr>
              <tr><th scope="row">Over time</th><td>Can check, split or warp if left unsealed</td></tr>
              <tr><th scope="row">Good fit if</th><td>You want the most deck for the budget and don’t mind maintenance</td></tr>
            </tbody>
          </table>
        </div>
      </article>
      <article class="material card">
        ${picture('project-deck-cedar-tone-stairs', {
          alt: 'Brown-toned deck by DK Quality Construction with black metal railings, matching skirting and stairs to a paver patio',
          sizes: '(min-width: 960px) 44vw, 100vw',
          cls: 'material__img',
        })}
        <div class="material__body">
          <h3>Composite decking</h3>
          <p>Boards made from a blend of wood fiber and plastic, usually with a protective outer shell. Built on a treated-lumber frame.</p>
          <table class="spec-table">
            <caption class="visually-hidden">Composite decking at a glance</caption>
            <tbody>
              <tr><th scope="row">Up-front cost</th><td>Higher</td></tr>
              <tr><th scope="row">Look</th><td>Consistent color and grain; many color lines</td></tr>
              <tr><th scope="row">Upkeep</th><td>Occasional washing — no sanding or staining</td></tr>
              <tr><th scope="row">Over time</th><td>Resists splintering, rot and fading</td></tr>
              <tr><th scope="row">Good fit if</th><td>You plan to stay and want to spend weekends using the deck, not maintaining it</td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
    <p class="note">Either way, the frame underneath — footings, posts, beams, joists and the ledger connection to your house — is what determines how long a deck lasts. That’s where we put the care.</p>
  </div>
</section>`;

export default servicePage({
  slug: 'decks',
  title: 'Deck Builder in Monroe, MI — Treated & Composite | DK Quality',
  description:
    'Custom decks in Monroe, MI and Lucas County, OH. Pressure-treated and composite decks, stairs and railings from an owner-led, BBB-accredited builder.',
  schemaName: 'Deck building — pressure-treated and composite',
  serviceType: 'Deck construction',
  eyebrow: 'Decks · Our specialty',
  h1: 'Deck builder in Monroe, MI',
  lede: 'New pressure-treated and composite decks for homes across Monroe County, Michigan and Lucas County, Ohio — framed right, finished clean.',
  heroAlt: 'Aerial view of a wide gray deck built by DK Quality Construction, with built-in benches on both sides and white-trimmed center stairs',
  introHeading: 'Decks are what we do most.',
  intro: `
    <p>A deck is the most-used “room” of a lot of Monroe-area homes from May through October. Decking is DK Quality Construction’s specialty, and we build in both <strong>pressure-treated lumber</strong> and <strong>composite decking systems</strong>.</p>
    <p>Every deck starts with how you’ll actually use it: where the grill goes, how many people sit at the table, where the sun hits in the afternoon, how you get down to the yard. Then we size and frame it to suit — and build the structure to last, not just the surface you see.</p>
    <p>Owner ${business.owner} is involved from the first conversation, so the person who scoped your deck is the one accountable for how it’s built.</p>`,
  scopeHeading: 'Deck projects',
  scope: [
    'New attached and freestanding decks',
    'Ground-level and raised decks',
    'Multi-level decks with landings',
    'Stairs, guards and handrails',
    'Composite and pressure-treated decking',
    'Replacing an old, worn-out deck',
  ],
  feature: materials,
  considerHeading: 'What goes into a deck that lasts.',
  considerations: [
    {
      h: 'Footings below the frost line',
      p: `<p>Southeast Michigan winters heave anything set too shallow. Michigan’s residential code sets frost depth at 42 inches across most of the state, and deck footings need to bear below it so the deck doesn’t shift season to season.</p>`,
    },
    {
      h: 'A properly attached ledger',
      p: `<p>Where a deck attaches to your house, the ledger board has to be fastened correctly and flashed so water can’t get behind it. A poorly flashed ledger is one of the most common causes of hidden rot — in the deck and in the house.</p>`,
    },
    {
      h: 'Framing matched to the decking',
      p: `<p>Composite boards often need tighter joist spacing than wood, especially on angled layouts. The frame is built to the decking manufacturer’s installation requirements so the surface stays flat and the product warranty stays valid.</p>`,
    },
    {
      h: 'Guards, stairs and permits',
      p: `<p>Deck surfaces more than 30 inches above grade need guards, and stairs need consistent rise and run with a graspable handrail. Most new decks also need a building permit — the specifics depend on your city or township, and we’ll talk it through at the estimate.</p>`,
    },
  ],
  projects: ['P-021', 'P-018', 'P-014'],
  faqs: [
    {
      q: 'How much does a new deck cost in Monroe?',
      a: `<p>It depends mostly on size, height off the ground, material (treated vs. composite), railing style and stairs. Composite typically costs more up front than pressure-treated lumber. The fastest way to a real number is an on-site estimate — <a href="/contact/#estimate">request one here</a>.</p>`,
    },
    {
      q: 'Do I need a permit to build a deck?',
      a: `<p>Most new decks do. Requirements vary by city and township in Monroe County and Lucas County, and depend on the deck’s size, height and whether it attaches to the house. We’ll go over it at the estimate so it’s settled before work starts.</p>`,
    },
    {
      q: 'Can you replace my old deck?',
      a: `<p>Yes — tell us about the existing deck when you request an estimate. If you can, include a photo with the form; it helps us understand what’s there before we visit.</p>`,
    },
    {
      q: 'Do you work in Toledo and the rest of Lucas County?',
      a: `<p>Yes. We build decks across Lucas County, Ohio — Toledo, Sylvania, Maumee, Oregon and nearby — as well as throughout Monroe County, Michigan. <a href="/service-area/">See the full service area</a>.</p>`,
    },
  ],
  review: 'R-01',
  related: ['fencing', 'garages', 'basement-finishing'],
  ctaHeading: 'Let’s plan your deck.',
  ctaText: 'Send a few details — size, material you’re leaning toward, and where you are — and we’ll set up a time to look at the space.',
});
