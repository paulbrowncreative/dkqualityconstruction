import { servicePage } from '../lib/service-template.mjs';

export default servicePage({
  slug: 'basement-finishing',
  title: 'Basement Remodeling in Monroe, MI | DK Quality Construction',
  description:
    'Basement remodeling and finishing in Monroe County, MI and Lucas County, OH. Turn unfinished space into a family room, office or guest area.',
  serviceType: 'Basement remodeling',
  eyebrow: 'Basement Remodeling',
  h1: 'Basement remodeling in Monroe, MI',
  lede: 'Turn an unfinished or dated basement into comfortable living space — family room, home office, gym or guest area.',
  heroAlt: 'Basement remodeled by DK Quality Construction with a black painted open ceiling, recessed lights, plank flooring and white built-in cabinets',
  introHeading: 'Square footage you already own.',
  intro: `
    <p>For a lot of homes in Monroe and Toledo’s suburbs, the basement is the cheapest square footage you’ll ever add: the foundation, roof and walls are already there. Finishing or remodeling it can give you a family room, an office away from the household noise, a place for guests, or simply storage that isn’t a mess.</p>
    <p>Good basement work is mostly about what happens before the drywall goes up — moisture, insulation, ceiling height, and keeping access to the mechanicals you’ll need later. We plan those first, then finish the space to feel like the rest of the house.</p>`,
  scopeHeading: 'Basement projects',
  scope: [
    'Finishing unfinished basements',
    'Remodeling dated basement spaces',
    'Family rooms and rec rooms',
    'Home offices and gyms',
    'Guest areas',
    'Basement flooring',
  ],
  considerHeading: 'What makes a basement finish hold up.',
  considerations: [
    {
      h: 'Solve moisture first',
      p: `<p>Any active water — seepage, cracks that leak, high humidity — has to be addressed before walls go up. Finishing over a damp basement traps the problem behind drywall where it becomes mold and rot.</p>`,
    },
    {
      h: 'Bedrooms need an egress window',
      p: `<p>If the plan includes a sleeping room, code requires an emergency escape opening — usually an egress window with a window well. It affects the layout and the budget, so decide early.</p>`,
    },
    {
      h: 'Keep the mechanicals reachable',
      p: `<p>Furnace, water heater, main shutoffs, sump and cleanouts all need access. Smart layouts work around them; ceiling choices can keep pipes and wiring serviceable.</p>`,
    },
    {
      h: 'Choose below-grade materials',
      p: `<p>Basements are cooler and damper than upstairs. Luxury vinyl plank, tile and moisture-tolerant subfloors generally do better below grade than solid hardwood or standard carpet pad.</p>`,
    },
  ],
  faqs: [
    {
      q: 'Does finishing a basement need a permit?',
      a: `<p>Usually, yes — especially when it includes framing new rooms, electrical, plumbing or HVAC changes. Requirements depend on your city or township. We’ll go over it during the estimate.</p>`,
    },
    {
      q: 'Can you add a bathroom in the basement?',
      a: `<p>Often, but it depends on where existing drain lines run and how deep they are. Mention it in your <a href="/contact/#estimate">estimate request</a> so we can look at the plumbing when we visit. See also <a href="/services/bathroom-remodeling/">bathroom remodeling</a>.</p>`,
    },
    {
      q: 'What flooring works best in a basement?',
      a: `<p>Products made for below-grade use, like luxury vinyl plank and tile, are the usual picks because they tolerate humidity. We can install flooring as part of the project — see <a href="/services/#flooring">flooring</a>.</p>`,
    },
  ],
  projects: ['P-048', 'P-005'],
  review: 'R-02',
  related: ['bathroom-remodeling', 'flooring', 'kitchen-remodeling'],
  ctaHeading: 'Ready to use your basement?',
  ctaText: 'Tell us how you want to use the space and roughly how big it is. Photos of the current basement help.',
});
