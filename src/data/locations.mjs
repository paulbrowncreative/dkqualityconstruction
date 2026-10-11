// Community pages under /service-area/{slug}/. Every local fact is sourced (see
// docs/locations-research.md). A community gets a page only once it has verified,
// genuinely local content — the service-area lists fall back to plain names otherwise.
import { business } from '../../site.config.mjs';

export const states = {
  MI: {
    dig: { name: 'MISS DIG 811', url: 'https://missdig811.org/' },
    frost: 'Michigan’s residential code sets frost depth at 42 inches across most of the state, and deck footings need to bear below it so frost can’t heave the deck. We confirm the figure with the local building department during the permit review.',
  },
  OH: {
    dig: { name: 'OHIO811', url: 'https://www.oups.org/' },
    frost: '',
  },
};

export const locations = [];

export const countyOf = (loc) => business.serviceArea.counties.find((c) => c.stateAbbr === loc.county);
export const locationUrl = (loc) => `/service-area/${loc.slug}/`;
export const locationByName = (name, stateAbbr) => locations.find((l) => l.name === name && l.county === stateAbbr);
