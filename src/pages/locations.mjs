// One page per community in src/data/locations.mjs → /service-area/{slug}/
import { locations } from '../data/locations.mjs';
import { locationPage } from '../lib/location-template.mjs';

export default locations.map((loc, i) => locationPage(loc, i));
