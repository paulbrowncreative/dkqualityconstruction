import { servicePage } from '../lib/service-template.mjs';

export default servicePage({
  slug: 'kitchen-remodeling',
  title: 'Kitchen Remodeling in Monroe, MI | DK Quality Construction',
  description:
    'Kitchen remodeling in Monroe County, MI and Lucas County, OH — cabinets, countertops, layout changes and finish work from an owner-led contractor.',
  serviceType: 'Kitchen remodeling',
  eyebrow: 'Kitchen Remodeling',
  h1: 'Kitchen remodeling in Monroe, MI',
  lede: 'Kitchen updates and full remodels — cabinets, counters, layout and the finish work that ties it together — for homes across Monroe County and Lucas County.',
  heroAlt: 'Kitchen remodeled by DK Quality Construction with white shaker cabinets, granite counters, a tile backsplash, stainless appliances and plank flooring',
  introHeading: 'Built around how you cook and gather.',
  intro: `
    <p>The kitchen is where a remodel pays off every single day. Whether you’re replacing tired cabinets and counters or reworking a layout that never made sense, the goal is the same: more usable counter space, storage that fits what you own, and a room that’s easy to move around in.</p>
    <p>We talk through how your household actually uses the kitchen, then plan the scope, materials and order of work so the project runs smoothly — and so you’re without a kitchen for as little time as possible.</p>`,
  scopeHeading: 'Kitchen projects',
  scope: [
    'Full kitchen remodels',
    'Cabinet replacement',
    'Countertops and backsplashes',
    'Layout and island changes',
    'Kitchen flooring',
    'Trim and finish carpentry',
  ],
  considerHeading: 'Plan these and the rest goes smoother.',
  considerations: [
    {
      h: 'Layout before looks',
      p: `<p>Where the sink, range and refrigerator sit — and the walking space between them — matters more than any finish. Get the layout right first.</p>`,
    },
    {
      h: 'Counters come after cabinets',
      p: `<p>Stone and quartz countertops are usually measured after the base cabinets are installed, then fabricated. That gap is normal and worth building into the schedule.</p>`,
    },
    {
      h: 'Lead times drive the calendar',
      p: `<p>Cabinets and some appliances can take weeks to arrive. Making selections early keeps the kitchen torn up for the shortest time.</p>`,
    },
    {
      h: 'Plan a temporary kitchen',
      p: `<p>A microwave, coffee maker and fridge set up in another room makes living through a remodel much easier.</p>`,
    },
  ],
  faqs: [
    {
      q: 'Can you replace cabinets and counters without a full remodel?',
      a: `<p>Often, yes — many kitchen projects are focused updates rather than full gut jobs. Describe what you want to change in your <a href="/contact/#estimate">estimate request</a>.</p>`,
    },
    {
      q: 'Can I keep my existing flooring?',
      a: `<p>Sometimes. It depends on whether cabinets or islands move and whether the existing floor runs under them. We’ll look at it during the estimate. See <a href="/services/#flooring">flooring</a> if you’re replacing it.</p>`,
    },
    {
      q: 'How do I get a price for a kitchen remodel?',
      a: `<p>Kitchen costs swing widely with cabinet quality, counter material and whether walls, plumbing or electrical move. An on-site estimate is the only reliable way to a number — <a href="/contact/#estimate">request one here</a>.</p>`,
    },
  ],
  projects: ['P-009'],
  related: ['bathroom-remodeling', 'flooring', 'basement-finishing'],
  ctaHeading: 'Let’s talk about your kitchen.',
  ctaText: 'Tell us what you want to change — cabinets, counters, layout — and add a photo of the kitchen as it is now.',
});
