import { servicePage } from '../lib/service-template.mjs';

export default servicePage({
  slug: 'bathroom-remodeling',
  title: 'Bathroom Remodeling in Monroe, MI | DK Quality Construction',
  description:
    'Bathroom remodeling in Monroe County, MI and Lucas County, OH — showers, tile, vanities, fixtures and flooring, planned around how you use the room.',
  serviceType: 'Bathroom remodeling',
  eyebrow: 'Bathroom Remodeling',
  h1: 'Bathroom remodeling in Monroe, MI',
  lede: 'Full bathroom remodels and focused updates — showers, tile, vanities, fixtures and flooring — for homes in Monroe County and Lucas County.',
  heroAlt: 'Walk-in shower with frameless glass, marble-look wall tile and black fixtures',
  introHeading: 'A small room with a lot riding on it.',
  intro: `
    <p>Bathrooms pack plumbing, electrical, ventilation, waterproofing and finish work into a few square feet — and they get used every day. A remodel is the chance to fix what bugs you about the room: a tub you never use, a cramped vanity, a fan that doesn’t clear the steam, tile that won’t come clean.</p>
    <p>We start with how the room is used and by whom, then plan the layout, materials and sequence so the finished bathroom works as well as it looks.</p>`,
  scopeHeading: 'Bathroom projects',
  scope: [
    'Full bathroom remodels',
    'Tub-to-shower conversions',
    'Tile showers and tub surrounds',
    'Vanities, tops and fixtures',
    'Bathroom flooring',
    'Updates to dated bathrooms',
  ],
  considerHeading: 'Details that matter behind the tile.',
  considerations: [
    {
      h: 'Waterproofing, not just tile',
      p: `<p>Grout and tile aren’t waterproof on their own. A shower needs a proper waterproofing system behind and under the tile so moisture never reaches the framing.</p>`,
    },
    {
      h: 'Ventilation that actually vents',
      p: `<p>An exhaust fan sized for the room and ducted outdoors — not into the attic — is what keeps mold and peeling paint away.</p>`,
    },
    {
      h: 'Plan for the long term',
      p: `<p>Low- or no-threshold showers, blocking in the walls for future grab bars, and comfort-height fixtures cost little during a remodel and make the room easier to use for years.</p>`,
    },
    {
      h: 'Order lead times',
      p: `<p>Vanities, glass and some tile can take weeks to arrive. Selecting early keeps the bathroom out of commission for as short a time as possible.</p>`,
    },
  ],
  faqs: [
    {
      q: 'Can you convert my tub into a walk-in shower?',
      a: `<p>Tub-to-shower conversions are one of the most common bathroom updates. Mention it in your <a href="/contact/#estimate">estimate request</a> and we’ll look at the space, drain location and layout options.</p>`,
    },
    {
      q: 'How long will my bathroom be out of service?',
      a: `<p>It depends on the scope — a focused update is much faster than a full gut remodel — and on whether materials are on hand before work starts. We’ll talk timing during the estimate.</p>`,
    },
    {
      q: 'Do you remodel basement bathrooms too?',
      a: `<p>Yes — bathroom work often goes hand in hand with <a href="/services/basement-finishing/">basement remodeling</a>.</p>`,
    },
  ],
  related: ['kitchen-remodeling', 'basement-finishing', 'flooring'],
  ctaHeading: 'Let’s plan your new bathroom.',
  ctaText: 'Tell us what’s not working in the room now and what you’d like instead. A photo of the current bathroom helps.',
});
