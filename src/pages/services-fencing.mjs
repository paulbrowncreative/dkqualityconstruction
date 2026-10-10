import { servicePage } from '../lib/service-template.mjs';

export default servicePage({
  slug: 'fencing',
  title: 'Fence Installation in Monroe County, MI | DK Quality Construction',
  description:
    'Fence installation in Monroe County, MI and Lucas County, OH. Privacy, backyard and pool-area fences set plumb and built for freeze-thaw winters.',
  serviceType: 'Fence installation',
  eyebrow: 'Fencing',
  h1: 'Fence installation in Monroe County',
  lede: 'Privacy, backyard and property-line fences for homes in Monroe County, MI and Lucas County, OH — straight lines, solid posts, gates that keep closing.',
  heroAlt: 'Gray-stained picket fence with flower boxes enclosing a green backyard',
  introHeading: 'A fence is only as good as its posts.',
  intro: `
    <p>Most fence problems — leaning sections, sagging gates, boards that pull loose — come back to the posts. Set too shallow or without good drainage, they move with every freeze and thaw. We put the effort where it counts: post depth, alignment and solid gate framing.</p>
    <p>Fences pair naturally with decks, and many of our customers plan both together so the yard looks like one finished project. Whether you need privacy from a busy road, a safe space for kids and dogs, or a line along the property boundary, we’ll help you choose a height, style and layout that fits.</p>`,
  scopeHeading: 'Fence projects',
  scope: [
    'Backyard privacy fences',
    'Picket and decorative fences',
    'Property-line fencing',
    'Fencing around pools and decks',
    'Walk and drive gates',
    'Replacing old or damaged fence runs',
  ],
  considerHeading: 'Plan these before the first post goes in.',
  considerations: [
    {
      h: 'Know your property line',
      p: `<p>A fence built on the wrong side of the line is an expensive mistake. If you don’t have recent survey stakes or a plat, it’s worth confirming the boundary before the layout is final.</p>`,
    },
    {
      h: 'Utilities: call 811',
      p: `<p>Every post hole is digging. Underground utilities must be marked first — through MISS DIG 811 in Michigan or OHIO811 in Ohio. It’s free, and it’s required before excavation.</p>`,
    },
    {
      h: 'Local rules and HOAs',
      p: `<p>Cities, townships and homeowner associations often limit fence height, style or placement — especially in front yards and on corner lots. Many also require a permit. Check early so the design you love is one you can build.</p>`,
    },
    {
      h: 'Pools have their own requirements',
      p: `<p>Fences that serve as a pool barrier have specific height, opening and self-closing, self-latching gate requirements. Tell us if the fence surrounds a pool so it’s designed to meet them.</p>`,
    },
  ],
  faqs: [
    {
      q: 'How tall can my fence be?',
      a: `<p>It depends on your city or township and, if you have one, your HOA. Backyard privacy fences are commonly allowed taller than front-yard fences. We’ll check what applies at your address when we plan the layout.</p>`,
    },
    {
      q: 'Can you build a fence and a deck together?',
      a: `<p>Yes. Planning both at once lets the deck, stairs, gates and fence lines work together. See our <a href="/services/decks/">deck building</a> page, then mention both in your <a href="/contact/#estimate">estimate request</a>.</p>`,
    },
    {
      q: 'What fence materials do you install?',
      a: `<p>Tell us what you have in mind when you reach out — the best material depends on the look you want, your budget and how much upkeep you’re comfortable with. We’ll talk through the options during your estimate.</p>`,
    },
  ],
  related: ['decks', 'garages'],
  ctaHeading: 'Planning a new fence?',
  ctaText: 'Send the rough length, height and style you’re thinking about — a photo or a quick sketch of the yard helps.',
});
