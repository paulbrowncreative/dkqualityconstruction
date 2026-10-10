// Central business + site configuration.
// Every business fact here is sourced; see docs/research.md. Edit here, not in page files.

const env = process.env;

/**
 * Canonical origin for canonical tags, sitemap and structured data.
 * Priority: SITE_URL env var → Netlify's production URL → local preview.
 * Set SITE_URL in Netlify (Site configuration → Environment variables) to the
 * final domain, e.g. https://www.example.com — no trailing slash.
 */
function resolveSiteUrl() {
  if (env.SITE_URL) return env.SITE_URL.replace(/\/+$/, '');
  if (env.CONTEXT === 'production' && env.URL) return env.URL.replace(/\/+$/, '');
  return 'http://localhost:8080';
}

// Netlify sets CONTEXT to production | deploy-preview | branch-deploy | dev.
// Anything that is not the production deploy is kept out of search indexes.
const context = env.CONTEXT || 'local';
const isProductionDeploy = context === 'production';

export const site = {
  url: resolveSiteUrl(),
  siteUrlExplicit: Boolean(env.SITE_URL),
  context,
  indexable: isProductionDeploy || env.FORCE_INDEXABLE === 'true',
  lang: 'en-US',
  locale: 'en_US',

  analytics: {
    // GA4 measurement ID (G-XXXXXXXXXX). Left empty, no analytics code is output.
    ga4Id: (env.GA4_MEASUREMENT_ID || '').trim(),
    // Google Search Console HTML-tag verification token (content value only).
    gscVerification: (env.GOOGLE_SITE_VERIFICATION || '').trim(),
  },
};

export const business = {
  name: 'DK Quality Construction',
  legalName: 'DK Quality Construction LLC',
  owner: 'David Kelly',
  founded: '2021-12-09', // BBB: business start date 12/9/2021; logo reads "Est. 2021"
  foundedYear: 2021,
  phoneDisplay: '(734) 497-6773',
  phoneE164: '+17344976773',
  // Email intentionally omitted: no verified public address. The estimate form is the
  // written contact channel. Add `email` here once confirmed and it appears site-wide.
  email: '',
  city: 'Monroe',
  region: 'MI',
  regionName: 'Michigan',
  postalCode: '48161',
  country: 'US',
  facebook: 'https://www.facebook.com/DKQConstruction/',
  bbb: 'https://www.bbb.org/us/mi/monroe/profile/general-contractor/dk-quality-construction-llc-0422-211007299',
  bbbAccreditedSince: 2023,
  serviceArea: {
    summary: 'Monroe County, Michigan and Lucas County, Ohio',
    counties: [
      {
        name: 'Monroe County',
        state: 'Michigan',
        stateAbbr: 'MI',
        communities: [
          'Monroe', 'Frenchtown Township', 'Monroe Township', 'Temperance', 'Lambertville',
          'Erie', 'Luna Pier', 'LaSalle', 'Ida', 'Dundee', 'Petersburg', 'Maybee',
          'Carleton', 'Newport', 'South Rockwood', 'Ottawa Lake',
        ],
      },
      {
        name: 'Lucas County',
        state: 'Ohio',
        stateAbbr: 'OH',
        communities: [
          'Toledo', 'Sylvania', 'Maumee', 'Oregon', 'Holland', 'Waterville', 'Whitehouse',
          'Ottawa Hills',
        ],
      },
    ],
  },
};

// Services confirmed by the BBB business profile (and Facebook page for decking focus).
// `page` services get a dedicated URL; the rest are covered on /services/.
export const services = [
  {
    slug: 'decks',
    name: 'Decks',
    navName: 'Decks — Treated & Composite',
    short: 'New decks in pressure-treated lumber or low-maintenance composite, designed around how you use your yard.',
    page: true,
    image: 'project-deck-waterfront-covered',
  },
  {
    slug: 'fencing',
    name: 'Fencing',
    navName: 'Fencing',
    short: 'Privacy, property-line and pool-area fences set plumb, straight and built for Michigan frost.',
    page: true,
    image: 'fence-backyard-gray',
  },
  {
    slug: 'basement-finishing',
    name: 'Basement Remodeling',
    navName: 'Basement Remodeling',
    short: 'Turn an unfinished or dated basement into usable living space — family rooms, offices, guest areas.',
    page: true,
    image: 'project-basement-remodel-built-ins',
  },
  {
    slug: 'bathroom-remodeling',
    name: 'Bathroom Remodeling',
    navName: 'Bathroom Remodeling',
    short: 'Full bathroom remodels and updates: showers, tile, vanities, fixtures and flooring.',
    page: true,
    image: 'bathroom-walk-in-shower',
  },
  {
    slug: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    navName: 'Kitchen Remodeling',
    short: 'Kitchen updates and remodels — cabinets, counters, layout changes and the finish work that ties it together.',
    page: true,
    image: 'kitchen-white-cabinets',
  },
  {
    slug: 'flooring',
    name: 'Flooring',
    navName: 'Flooring',
    short: 'Flooring installation as a standalone project or as part of a larger remodel.',
    page: false,
    image: 'flooring-plank-install',
  },
  {
    slug: 'garages',
    name: 'Garages',
    navName: 'Garages',
    short: 'Garage construction and garage projects — talk to us about your plans.',
    page: false,
    image: 'framing-new-construction',
  },
];

export const serviceUrl = (s) => (s.page ? `/services/${s.slug}/` : `/services/#${s.slug}`);
