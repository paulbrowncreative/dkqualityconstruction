// Community pages under /service-area/{slug}/. Every local fact is sourced (see
// docs/locations-research.md). A community gets a page only once it has verified,
// genuinely local content — the service-area lists fall back to plain names otherwise.
import { business } from '../../site.config.mjs';

export const states = {
  MI: {
    dig: { name: 'MISS DIG 811', url: 'https://missdig811.org/' },
    frost: 'Michigan’s residential code sets the frost line at 42 inches (Michigan Administrative Code R 408.30516), and deck footings need to bear below it so frost can’t heave the deck. Lucas County, Ohio uses 36 inches, so we build each project to the rules where it stands.',
  },
  OH: {
    dig: { name: 'OHIO811', url: 'https://www.oups.org/' },
    frost: 'Lucas County Building Regulations and the City of Toledo both set frost depth at 36 inches — the minimum depth of footing below finished grade under the Residential Code of Ohio. That’s shallower than Michigan’s 42 inches, so we build each project to the rules where it stands.',
  },
};

export const locations = [
  {
    slug: 'monroe-mi', name: 'Monroe', county: 'MI', schemaType: 'City',
    typeLabel: 'City · Monroe County seat',
    zips: ['48161', '48162'], lat: 41.916586, lon: -83.384324,
    hero: 'project-porch-covered-gable-front',
    heroAlt: 'White-sided home with a new covered front porch: timber gable, stained posts and beams, brown composite decking and black metal railings, built by DK Quality Construction',
    description: 'Monroe, MI deck builder and remodeler based right here in town. New and replacement decks, fencing, basements, baths and kitchens, with city permits handled.',
    lede: 'Monroe is home base. We build decks, porches and fences and remodel basements, bathrooms and kitchens across the city — from the neighborhoods along the River Raisin to the blocks near Lake Erie.',
    intro: `<p>DK Quality Construction is based in Monroe, so city jobs are close to home for us. Owner David Kelly sees every project through himself: the first site visit, the plan, the build and the walkthrough at the end.</p>
<p>Monroe has a lot of older housing near downtown and the River Raisin, including the Old Village Historic District, alongside newer subdivisions toward the edges of town. Older homes often mean a replacement deck or porch that has to tie into framing, siding and grades that have shifted over the decades. We check what’s there before we price what’s next.</p>`,
    permit: {
      office: 'City of Monroe Building Division',
      url: 'https://www.monroemi.gov/c_i_t_y_h_a_l_l/departments/building',
      answer: 'Inside city limits, the City of Monroe Building Division at City Hall (120 E. First St.) reviews plans, checks zoning compliance and issues building permits, then handles the inspections. We prepare the drawings and pull the permit as part of the job.',
    },
    local: [
      { h: 'Older homes, newer decks', p: '<p>Many Monroe homes predate today’s deck codes. When we replace a deck we check the ledger connection, flashing and the condition of the rim board behind it — the parts that fail first and are hidden until the old deck comes off.</p>' },
      { h: 'Near the river or the lake', p: '<p>The River Raisin runs through the city and the city limits reach Lake Erie. Lots near the water can sit in a mapped flood zone, which affects how and where a deck or addition can be built. We check flood maps for the address before design starts.</p>' },
      { h: 'Historic districts', p: '<p>Monroe has several historic districts, including the Old Village Historic District downtown. If your home is in one, a porch or exterior change may need extra review, so we raise it at the first visit.</p>' },
    ],
    faqs: [
      { q: 'Are you actually based in Monroe?', a: '<p>Yes. DK Quality Construction LLC is a Monroe, Michigan company, BBB Accredited with an A+ rating. Most of our work is within a short drive of town.</p>' },
    ],
  },
  {
    slug: 'frenchtown-township-mi', name: 'Frenchtown Township', county: 'MI', schemaType: 'AdministrativeArea',
    typeLabel: 'Charter township',
    zips: ['48162', '48166', '48117'], lat: 41.960969, lon: -83.35808,
    hero: 'project-deck-waterfront-covered',
    heroAlt: 'Large gray composite deck partly under a roof overhang, with white railings and black balusters looking out over the water, built by DK Quality Construction',
    description: 'Decks, porches, fencing and remodeling in Frenchtown Township, MI — Stony Point, Detroit Beach, Woodland Beach and inland. Township permits handled for you.',
    lede: 'From the Lake Erie shoreline at Stony Point, Detroit Beach and Woodland Beach to the subdivisions inland, we build decks and fences and remodel homes across Frenchtown Township.',
    intro: `<p>Frenchtown Charter Township wraps around the north side of Monroe and runs to Lake Erie. It takes in the lakeshore communities of Stony Point, Detroit Beach and Woodland Beach, and most of Sterling State Park — Michigan’s only state park on Lake Erie.</p>
<p>That mix means very different projects a few miles apart: a lakefront deck that has to deal with wind, water and flood rules, or a backyard deck on a quiet inland lot. We plan each one for the lot it’s on.</p>`,
    permit: {
      office: 'Frenchtown Charter Township Building Department',
      url: 'https://www.frenchtownmi.gov/173/Permit-Applications',
      answer: 'The Frenchtown Charter Township Building Department at Township Hall (2744 Vivian Rd.) issues building permits, and does the zoning review at the same time as the building application. The township also publishes a deck specification sheet. We handle the drawings and application.',
    },
    local: [
      { h: 'Lakeshore lots', p: '<p>Homes in the lake communities often sit in mapped flood zones and take the brunt of the wind off Lake Erie. That affects footing design, fasteners and hardware, and sometimes how high a deck can go. We check the flood map for the address first.</p>' },
      { h: 'Township deck specs', p: '<p>Frenchtown publishes its own deck specification sheet and reviews zoning with the building permit. We design to it from the start, so the plans go in once.</p>' },
      { h: 'Inland subdivisions', p: '<p>Away from the lake, most projects are backyard decks, privacy fences and basement finishes. Subdivisions can add their own rules on fence style or deck size, so bring any HOA guidelines to the first meeting.</p>' },
    ],
  },
  {
    slug: 'monroe-township-mi', name: 'Monroe Township', county: 'MI', schemaType: 'AdministrativeArea',
    typeLabel: 'Charter township',
    zips: ['48161', '48145'], lat: 41.893123, lon: -83.424384,
    hero: 'project-deck-pressure-treated-multi-zone-aerial-wide',
    heroAlt: 'Aerial view of a large pressure-treated wood deck with two connected zones, angled corners and board skirting beside a paver patio, built by DK Quality Construction',
    description: 'Deck builder and remodeling contractor for Monroe Charter Township, MI — South Monroe, West Monroe, Avalon Beach and Bolles Harbor. Township permits handled.',
    lede: 'Decks, fences and remodeling for homeowners across Monroe Charter Township — South Monroe, West Monroe and the Lake Erie shoreline at Avalon Beach and Bolles Harbor.',
    intro: `<p>Monroe Charter Township surrounds the south and west sides of the City of Monroe and runs to Lake Erie, taking in South Monroe and West Monroe and the lakeshore around Avalon Beach and Bolles Harbor.</p>
<p>It’s minutes from our base, which makes site visits, inspections and follow-up easy to schedule. Most projects here are new or replacement backyard decks and fences, plus basement and bathroom remodels.</p>`,
    permit: {
      office: 'Monroe Charter Township Building Department',
      url: 'https://www.monroechartertownship.org/',
      answer: 'The Monroe Charter Township Building Department (4925 E. Dunbar Rd.) issues building permits; zoning questions go to the township’s Planning &amp; Zoning Department. We prepare the plans and submit the application.',
    },
    local: [
      { h: 'Different rules than the city', p: '<p>An address can say “Monroe” and still be in the township, with its own building department and zoning ordinance. We confirm which side of the line you’re on before we design anything.</p>' },
      { h: 'Lakeshore and harbor lots', p: '<p>Around Avalon Beach and Bolles Harbor, flood-zone mapping and lake wind shape the design. Hardware and fasteners need to stand up to wet conditions, and footings need to be right for the soil.</p>' },
      { h: 'Replacing an old deck', p: '<p>Many township homes have decks that have reached the end of their life. We take the old one down, check what can and can’t be reused, and rebuild to current code.</p>' },
    ],
  },
  {
    slug: 'temperance-mi', name: 'Temperance', county: 'MI', schemaType: 'Place',
    typeLabel: 'Unincorporated community in Bedford Township',
    zips: ['48182'], lat: 41.767537, lon: -83.571672,
    hero: 'project-deck-pool-aerial-two-level-gray',
    heroAlt: 'Aerial view of a two-level gray deck with white railings stepping down to an above-ground pool, built by DK Quality Construction',
    description: 'Temperance, MI deck builder and remodeler. New decks, pool decks, fences, basements and baths in Bedford Township (48182), with township permits handled.',
    lede: 'Backyard decks, pool decks, fences and interior remodels for Temperance homeowners — with the Bedford Township permit handled from start to finish.',
    intro: `<p>Temperance isn’t a city or village — it’s an unincorporated community in Bedford Township, the most populous municipality in Monroe County. That means building permits come from Bedford Township, not from a Temperance office.</p>
<p>Bedford Township borders Toledo, so it’s one of the busiest parts of our service area. A lot of the work here is in established subdivisions: replacing tired decks, building pool decks and adding privacy fencing.</p>`,
    permit: {
      office: 'Bedford Township Building Department',
      url: 'https://www.bedfordmi.org/departments/building/index.php',
      answer: 'Temperance is unincorporated, so the Bedford Township Building Department (8100 Jackman Rd., Temperance) issues building permits after a plan review; it needs a site plan and drawings. Zoning questions go to the township’s Community Development &amp; Planning Department. We prepare and submit everything.',
    },
    local: [
      { h: 'Pool decks', p: '<p>Above-ground pools are common in Temperance backyards. A pool deck has to meet guard and gate rules and line up with the pool wall without loading it. We design the deck and the pool access together.</p>' },
      { h: 'Site plan required', p: '<p>Bedford Township asks for a site plan with the drawings. We measure setbacks from property lines and the house at the first visit so the plan is accurate the first time.</p>' },
      { h: 'Drainage toward Lake Erie', p: '<p>The township drains southeast to Lake Erie through Halfway Creek, Flat Creek and other small creeks. Lots near a creek can have wetter soil or erosion-control requirements, which we account for in footing design.</p>' },
    ],
    faqs: [
      { q: 'Is Temperance in Michigan or Ohio rules?', a: '<p>Michigan. Temperance is in Bedford Township, Monroe County, so the Michigan Residential Code applies, including Michigan’s 42-inch frost depth — even though Toledo is just across the line.</p>' },
    ],
  },
  {
    slug: 'lambertville-mi', name: 'Lambertville', county: 'MI', schemaType: 'Place',
    typeLabel: 'Unincorporated community in Bedford Township',
    zips: ['48144'], lat: 41.745082, lon: -83.621825,
    hero: 'project-porch-deck-built-in-benches-aerial',
    heroAlt: 'Aerial view of a gray deck extending a covered front porch, with angled built-in benches framed by flowering shrubs, built by DK Quality Construction',
    description: 'Decks, porches, fences and remodeling in Lambertville, MI (48144). Bedford Township permits and Michigan code handled by a Monroe-based BBB A+ contractor.',
    lede: 'Lambertville sits right on the Ohio line, but it builds to Michigan rules. We design decks, porches and fences for Lambertville homes to Michigan code and Bedford Township requirements.',
    intro: `<p>Lambertville is an unincorporated community in the southwest corner of Bedford Township, bordering Toledo and Sylvania Township, Ohio. It was settled in the 1830s and today is mostly residential neighborhoods.</p>
<p>Because it’s on the state line, it’s easy to assume Ohio rules apply. They don’t: a Lambertville deck is permitted by Bedford Township and built to the Michigan Residential Code. We work on both sides of the line every week, so we know where the differences are.</p>`,
    permit: {
      office: 'Bedford Township Building Department',
      url: 'https://www.bedfordmi.org/departments/building/index.php',
      answer: 'Lambertville is unincorporated, so building permits come from the Bedford Township Building Department in Temperance, after a plan review with a site plan and drawings. We prepare and submit the application.',
    },
    local: [
      { h: 'Michigan code, Ohio neighbors', p: '<p>Michigan sets frost depth at 42 inches; Lucas County, across the line, uses 36. Footings, guards and inspection steps follow Michigan rules here, and we build to them.</p>' },
      { h: 'Front porches and entries', p: '<p>Plenty of Lambertville homes have small front stoops that can become a real porch or entry deck. Front-yard projects come with setback rules, so we check them before we sketch.</p>' },
      { h: 'Fences between neighbors', p: '<p>On closely spaced lots, the fence line matters. We locate it against the property survey where there is one and call MISS DIG before any post holes are dug.</p>' },
    ],
  },
  {
    slug: 'erie-mi', name: 'Erie', county: 'MI', schemaType: 'Place',
    typeLabel: 'Community in Erie Township',
    zips: ['48133'], lat: 41.774652, lon: -83.481996,
    hero: 'project-deck-planters-pond',
    heroAlt: 'Gray deck with two built-in planter boxes and a bench between them, white railings and a pond with a fountain beyond, built by DK Quality Construction',
    description: 'Deck builder and remodeler in Erie and Erie Township, MI. Decks, fences and remodels near Lake Erie and North Maumee Bay, with township permits handled.',
    lede: 'Decks, fences and remodels across Erie Township — from the Erie community to the shoreline along North Maumee Bay.',
    intro: `<p>Erie is an unincorporated community in Erie Township, the corner of Michigan where the state line meets Lake Erie. The township borders Toledo and Washington Township, Ohio, and its eastern edge is the lake and North Maumee Bay.</p>
<p>That makes it a township of contrasts: rural lots inland, waterfront homes along the bay. The township’s building and zoning office has clear rules on what needs a building permit, a zoning permit or both, and we follow them from the start.</p>`,
    permit: {
      office: 'Erie Township Building & Zoning',
      url: 'https://erietownshipmi.gov/building-zoning/',
      answer: 'Erie Township’s building and zoning official issues permits for most improvement projects. Smaller projects such as fences and sheds don’t need a building permit, but they still need a township zoning permit for setbacks, height and size. A building permit can’t be issued without a soil erosion permit or waiver.',
    },
    local: [
      { h: 'Fences need a zoning permit', p: '<p>In Erie Township a fence doesn’t need a building permit, but it does need a zoning permit covering setbacks, height and size. We include it in the job.</p>' },
      { h: 'Near the lake or a stream', p: '<p>Earth changes within 500 feet of a lake or stream need a soil erosion permit from the Monroe County Drain Commissioner, and the township won’t issue a building permit without that permit or a waiver. Many lots near the bay fall in that zone.</p>' },
      { h: 'Rural lots', p: '<p>Bigger inland lots give more freedom on deck size and layout, but often mean longer runs for fencing and more ground prep. We walk the whole site before we price it.</p>' },
    ],
  },
  {
    slug: 'luna-pier-mi', name: 'Luna Pier', county: 'MI', schemaType: 'City',
    typeLabel: 'City on Lake Erie',
    zips: ['48157'], lat: 41.803262, lon: -83.442475,
    hero: 'project-deck-lakeside-screened-room-yard',
    heroAlt: 'Raised lakeside dining deck with black railings, a long staircase and a screened porch beneath, built by DK Quality Construction',
    description: 'Lakefront decks, porches, fences and remodels in Luna Pier, MI (48157). Flood-zone aware design and City of Luna Pier permits handled by a local contractor.',
    lede: 'Lakefront and near-lake decks, porches and fences in Luna Pier — designed for Lake Erie wind and weather, and for the city’s flood and zoning rules.',
    intro: `<p>Luna Pier is a small city on the Lake Erie shoreline, known for its crescent-shaped pier and the beaches on either side. I-75 runs along its western edge, and it’s surrounded on land by Erie Township.</p>
<p>A lot of Luna Pier homes are on or close to the water. The city’s own building and zoning page links FEMA flood maps and elevation benchmarks, which tells you how much flood rules shape building here. We design with them in mind from the first sketch.</p>`,
    permit: {
      office: 'City of Luna Pier Building & Zoning',
      url: 'https://www.cityoflunapier.com/building-zoning/',
      answer: 'The City of Luna Pier Building &amp; Zoning official at City Hall (4357 Buckeye St.) issues permits; the city says most construction, remodeling and improvements need one, including re-roofing and siding. A zoning application has to be approved before the zoning permit is issued. Office hours are limited, so we schedule around them.',
    },
    local: [
      { h: 'Flood zones', p: '<p>Lakefront lots may sit in a mapped flood zone, which can affect elevations, footings and what can be enclosed under a deck. We check the FEMA map panel for the address before design.</p>' },
      { h: 'Built for lake weather', p: '<p>Wind, spray and freeze-thaw are harder on a deck near the lake. We choose fasteners, hardware and decking that hold up, and size the framing for the exposure.</p>' },
      { h: 'Fence limits', p: '<p>Luna Pier limits fence heights, especially in front yards, and sets distances from sidewalks and streets, plus clear sight triangles on corner lots. We confirm the current ordinance for your lot before ordering materials.</p>' },
    ],
  },
  {
    slug: 'lasalle-mi', name: 'LaSalle', county: 'MI', schemaType: 'AdministrativeArea',
    typeLabel: 'La Salle Township',
    zips: ['48145'], lat: 41.857808, lon: -83.478302,
    hero: 'project-deck-ground-level-brown-wide',
    heroAlt: 'Wide view across a large low brown composite deck with a darker border and matching skirting along a brick home, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in La Salle Township, MI (48145), from the Lake Erie shore to the open country inland. Township permits handled for you.',
    lede: 'Decks, fences and home remodels across La Salle Township — from the lakeshore at Grand View and North Shores to the open country inland.',
    intro: `<p>La Salle Township lies just southwest of the City of Monroe, between Monroe Charter Township and Erie and Bedford townships, with Lake Erie on its eastern edge. Lakeshore neighborhoods such as Grand View and North Shores sit on the water; most of the township inland is open country.</p>
<p>Otter Creek and several smaller creeks drain the township to the lake, so ground conditions can change from one lot to the next. We look at the site before we design the footings.</p>`,
    permit: {
      office: 'La Salle Township Building Inspector',
      url: 'https://lasalletwpmi.com/building-permits/',
      answer: 'La Salle Township issues its own building, electrical, mechanical and plumbing permits through the township building inspector at Township Hall on LaPlaisance Road. Applications go in by mail or in person. We prepare and submit them for you.',
    },
    local: [
      { h: 'Creek and lakeshore lots', p: '<p>Otter, Sulphur, Muddy and Woodchuck creeks all run to Lake Erie through the township. Near a creek or the lake, expect wetter soils and possible erosion-control rules.</p>' },
      { h: 'Room to build', p: '<p>Larger rural lots make room for wraparound decks, multi-level layouts and long fence runs. We plan access for materials and equipment as part of the estimate.</p>' },
      { h: 'Close to our base', p: '<p>La Salle Township is only a few miles from Monroe, which keeps site visits and inspection scheduling simple.</p>' },
    ],
  },
  {
    slug: 'ida-mi', name: 'Ida', county: 'MI', schemaType: 'Place',
    typeLabel: 'Community in Ida Township',
    zips: ['48140'], lat: 41.903674, lon: -83.562766,
    hero: 'project-deck-aerial-pressure-treated-multi-zone',
    heroAlt: 'Overhead view of a large pressure-treated wood deck with two zones, divider boards and angled corners, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in Ida, MI (48140). Built to Ida Township zoning — deck size, setbacks and fence heights — with permits handled for you.',
    lede: 'Decks, fences and remodels for Ida homeowners, designed around Ida Township’s zoning rules on deck size, setbacks and fence heights.',
    intro: `<p>Ida is a small unincorporated community in Ida Township, about 10 miles west of Monroe near US-23. It has no village government of its own, so building permits and zoning come from Ida Township.</p>
<p>Ida Township spells out its deck and fence rules in its zoning ordinance, and a certificate of zoning compliance is needed before a building permit is issued. We work through both steps for you so the project starts on schedule.</p>`,
    permit: {
      office: 'Ida Township Building Department',
      url: 'https://idatownshipmi.gov/building/',
      answer: 'The Ida Township Building Department at Township Hall (3016 Lewis Ave.) issues building permits. The township’s zoning administrator must issue a certificate of zoning compliance first. We handle both.',
    },
    local: [
      { h: 'Deck size and setbacks', p: '<p>Ida Township’s zoning ordinance caps a deck on a foundation at the home’s ground-floor area (steps not counted) and requires it to meet side-yard setbacks. A deck can extend up to 10 feet into a required front or rear yard if that part is no higher than the first floor and isn’t covered or enclosed.</p>' },
      { h: 'Fence heights', p: '<p>Fences are limited to 4 feet in the required front yard and 6 feet in side and rear yards, with the finished side facing the neighbor. On waterfront lots, a fence between the house and the shoreline has to be at least 80% see-through.</p>' },
      { h: 'Country lots', p: '<p>Many Ida-area homes sit on larger lots, which gives room for bigger decks and longer fence runs — within the township’s size and setback rules.</p>' },
    ],
  },
  {
    slug: 'dundee-mi', name: 'Dundee', county: 'MI', schemaType: 'City',
    typeLabel: 'Village in Dundee Township',
    zips: ['48131'], lat: 41.966485, lon: -83.669419,
    hero: 'project-deck-waterfront-covered',
    heroAlt: 'Large gray composite deck partly under a roof overhang, with white railings looking out over the water, built by DK Quality Construction',
    description: 'Deck builder and remodeler in Dundee, MI (48131). Decks, fences and remodels near the River Raisin, with Village of Dundee zoning and building permits handled.',
    lede: 'Decks, fences and home remodels in the Village of Dundee and Dundee Township — from the River Raisin neighborhoods to the newer homes off US-23.',
    intro: `<p>Dundee is a village of about 5,300 people where US-23 meets M-50 — the “Hub of the Highways.” The River Raisin runs through the middle of town, past the Old Mill Museum on the river dam and the National Register-listed Dundee Historic District.</p>
<p>The village has its own building department and its own permit rules for decks and fences. Outside the village limits, Dundee Township handles permits separately, so the first thing we confirm is which side of the line your home is on.</p>`,
    permit: {
      office: 'Village of Dundee Building Department',
      url: 'https://www.dundeevillage.net/135/Building',
      answer: 'Inside the village, the Village of Dundee Building Department (350 W. Monroe St.) issues building permits, and decks, fences, pools and accessory structures also need a village zoning compliance permit. Outside the village, Dundee Township has its own building department. We confirm which applies and file the applications.',
    },
    local: [
      { h: 'Village or township?', p: '<p>A Dundee mailing address can be inside the village or out in Dundee Township, and each has its own building department. We check the parcel before we design.</p>' },
      { h: 'Zoning permit for decks and fences', p: '<p>In the village, decks and fences need a zoning compliance permit, and new or extended fences need a fence permit. Contractors must also register with the village each year — we take care of that.</p>' },
      { h: 'Near the River Raisin', p: '<p>Homes near the river can have wetter ground and may fall in a mapped floodplain. That affects footing design and what can be built close to the water.</p>' },
    ],
  },
  {
    slug: 'petersburg-mi', name: 'Petersburg', county: 'MI', schemaType: 'City',
    typeLabel: 'City · surrounded by Summerfield Township',
    zips: ['49270'], lat: 41.899695, lon: -83.71403,
    hero: 'project-porch-covered-gable-front',
    heroAlt: 'White-sided home with a new covered front porch, timber gable, brown composite decking and black metal railings, built by DK Quality Construction',
    description: 'Decks, porches, fences and remodeling in Petersburg, MI (49270). City of Petersburg permits and fence rules handled by a Monroe County contractor.',
    lede: 'Porches, decks, fences and remodels for homes in the City of Petersburg and the surrounding Summerfield Township.',
    intro: `<p>Petersburg is a small city in western Monroe County, on the River Raisin about 17 miles west of Monroe. It’s surrounded by Summerfield Township but runs its own building department, so city addresses and township addresses are permitted separately.</p>
<p>In town, a lot of the work is on established homes: porch rebuilds, replacement decks and fences on standard city lots. Out in the township, lots are bigger and projects tend to be larger.</p>`,
    permit: {
      office: 'City of Petersburg Building Department',
      url: 'https://petersburgmi.gov/assessing-building/',
      answer: 'Inside city limits, the City of Petersburg’s building inspector issues building permits, and the inspector must approve any fence. Summerfield Township has its own building inspector for addresses outside the city. We confirm which applies and submit the application.',
    },
    local: [
      { h: 'Fence rules in the city', p: '<p>Petersburg’s zoning ordinance limits residential fences to 3 feet in the front yard (and in a side yard facing a street where other homes front) and 8 feet in other side and rear yards, at least a foot from any public sidewalk. The building inspector approves every fence.</p>' },
      { h: 'Front porches', p: '<p>Older homes in town often have front porches that need rebuilding. We match the porch to the house and the street, and work within front-yard setbacks.</p>' },
      { h: 'City or township', p: '<p>The city sits inside Summerfield Township, and each has its own inspector and rules. We check the parcel before we design.</p>' },
    ],
  },
  {
    slug: 'maybee-mi', name: 'Maybee', county: 'MI', schemaType: 'City',
    typeLabel: 'Village in Exeter Township',
    zips: ['48159'], lat: 42.010183, lon: -83.509259,
    hero: 'project-deck-ground-level-brown-wide',
    heroAlt: 'Wide view across a large low brown composite deck with a darker border and matching skirting along a brick home, built by DK Quality Construction',
    description: 'Deck builder and remodeler for Maybee, MI (48159) and Exeter Township. Decks, fences, basements and baths with Village of Maybee permits handled.',
    lede: 'Decks, fences and interior remodels for homes in the Village of Maybee and the surrounding Exeter Township countryside.',
    intro: `<p>Maybee is a small village in Exeter Township, roughly halfway between Milan and Monroe. Sandy Creek and the Antes Drain run through the village toward Lake Erie, and the area around it is mostly farmland and rural homes.</p>
<p>The village has its own building inspector, with permit forms posted by the village clerk. Homes outside the village fall under Exeter Township instead.</p>`,
    permit: {
      office: 'Village of Maybee',
      url: 'https://maybeevillage.com/permits/',
      answer: 'Inside the village, building, electrical, mechanical and plumbing permits go through the Village of Maybee and its building inspector; applications go to the village clerk. Homes outside the village are permitted through Exeter Township. We confirm which applies and file the paperwork.',
    },
    local: [
      { h: 'Rural lots', p: '<p>Bigger lots around Maybee leave room for large decks and long fence runs. We plan material delivery and equipment access as part of the estimate.</p>' },
      { h: 'Creek-side ground', p: '<p>Sandy Creek and the Antes Drain cross the village. Near them, soils can stay wet, which matters for footing depth and drainage around a deck.</p>' },
      { h: 'Basements and baths', p: '<p>Out here, many of our calls are for interior work — finishing a basement or updating a bathroom — as well as decks.</p>' },
    ],
  },
  {
    slug: 'carleton-mi', name: 'Carleton', county: 'MI', schemaType: 'City',
    typeLabel: 'Village in Ash Township',
    zips: ['48117'], lat: 42.057195, lon: -83.389838,
    hero: 'project-porch-deck-built-in-benches-aerial',
    heroAlt: 'Aerial view of a gray deck extending a covered front porch, with angled built-in benches framed by flowering shrubs, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in Carleton, MI (48117). Village of Carleton building and ordinance permits for decks and fences handled by a local contractor.',
    lede: 'Decks, porches, fences and remodels for homes in the Village of Carleton and Ash Township, just off I-275.',
    intro: `<p>Carleton is a village in the western part of Ash Township, about 11 miles north of Monroe, with I-275 a mile to the east. Tributaries of Swan Creek drain the area toward Lake Erie.</p>
<p>The village has its own building department, and both its building application and its ordinance application cover decks and fences. We fill out the right forms for the project so nothing gets held up.</p>`,
    permit: {
      office: 'Village of Carleton Building Department',
      url: 'https://carletonmi.us/village-office-building-department/',
      answer: 'Inside the village, the Village of Carleton Building Department at the village office (1230 Monroe St.) issues permits. Its building permit application and ordinance permit application both cover decks and fences. Homes outside the village are permitted through Ash Township. We handle the applications.',
    },
    local: [
      { h: 'Two village applications', p: '<p>Carleton uses both a building permit application and an ordinance permit application, and each lists decks and fences. We file whichever your project needs.</p>' },
      { h: 'Village lots', p: '<p>In-village lots are compact, so deck size, stair placement and fence lines are planned around setbacks and the neighbors.</p>' },
      { h: 'Close to I-275', p: '<p>Carleton is a quick drive up from Monroe, which keeps site visits and inspections easy to schedule.</p>' },
    ],
  },
  {
    slug: 'newport-mi', name: 'Newport', county: 'MI', schemaType: 'Place',
    typeLabel: 'Community in Berlin Charter Township',
    zips: ['48166'], lat: 41.99, lon: -83.31,
    hero: 'project-deck-pool-aerial-two-level-gray',
    heroAlt: 'Aerial view of a two-level gray deck with white railings stepping down to an above-ground pool, built by DK Quality Construction',
    description: 'Deck builder and remodeler in Newport, MI (48166). Decks, pool decks, fences and remodels with Berlin Charter Township or Frenchtown permits handled.',
    lede: 'Decks, pool decks, fences and remodels for Newport-area homes along Swan Creek, between I-75 and Lake Erie.',
    intro: `<p>Newport is an unincorporated community in Berlin Charter Township, built along Swan Creek just east of I-75. The creek runs through the middle of town and reaches Lake Erie about five miles east.</p>
<p>The 48166 ZIP code covers more than one township, so a Newport mailing address doesn’t tell you who issues the permit. Most of Newport is in Berlin Charter Township, but some 48166 addresses are in Frenchtown Charter Township. We check the parcel first.</p>`,
    permit: {
      office: 'Berlin Charter Township Building Department',
      url: 'https://berlinchartertwp.com/?p=586',
      answer: 'For most of Newport, the Berlin Charter Township Building Department (8000 Swan View Dr.) reviews plans and issues permits; the township’s zoning administrator handles zoning. Some 48166 addresses are in Frenchtown Charter Township, which has its own building department. We confirm the township from the parcel and file with the right one.',
    },
    local: [
      { h: 'Which township?', p: '<p>A Newport address can be in Berlin or Frenchtown Charter Township. The rules and the office differ, so we confirm it before we design.</p>' },
      { h: 'Along Swan Creek', p: '<p>Lots near Swan Creek and Little Swan Creek can have wet soils and floodplain mapping that shape footing design and how close you can build to the water.</p>' },
      { h: 'Pool decks and backyard decks', p: '<p>Many Newport homes have room for a pool deck or a large backyard deck. We plan guards, stairs and gates to code from the start.</p>' },
    ],
  },
  {
    slug: 'south-rockwood-mi', name: 'South Rockwood', county: 'MI', schemaType: 'City',
    typeLabel: 'Village in Berlin Charter Township',
    zips: ['48179'], lat: 42.060421, lon: -83.271532,
    hero: 'project-deck-lakeside-screened-room-yard',
    heroAlt: 'Raised dining deck with black railings, a long staircase and a screened porch beneath, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in South Rockwood, MI (48179). Village building, zoning and floodplain permits along the Huron River handled for you.',
    lede: 'Decks, fences and remodels in South Rockwood — including riverside lots along the Huron River, where floodplain rules come into play.',
    intro: `<p>South Rockwood is a village in Berlin Charter Township at the north edge of Monroe County. The Huron River forms its northern boundary and the county line, and I-75 runs right through the middle of the village.</p>
<p>The village runs its own building department and is clear that decks, fences, patios, sheds, pools and retaining walls may need zoning or floodplain permits as well as a building permit. That’s exactly the kind of detail we sort out before work starts.</p>`,
    permit: {
      office: 'Village of South Rockwood Building Department',
      url: 'https://www.villageofsouthrockwoodmi.com/departments/building/',
      answer: 'The Village of South Rockwood Building Department (5676 Carleton Rockwood Rd.) enforces the Michigan construction codes and issues building permits. Decks, fences, patios, pools and retaining walls may also need village zoning or floodplain permits, and contractors must register with the village. We handle all of it.',
    },
    local: [
      { h: 'Floodplain permits', p: '<p>Near the Huron River, the village’s floodplain rules can apply on top of the building permit. We check whether your lot is affected before we design.</p>' },
      { h: 'Zoning for decks and fences', p: '<p>The village zoning permit controls the location, size and height of structures like decks and fences. We plan within it from the first sketch.</p>' },
      { h: 'Registered with the village', p: '<p>South Rockwood requires contractors to register before pulling permits. We take care of registration so your permit isn’t held up.</p>' },
    ],
  },
  {
    slug: 'ottawa-lake-mi', name: 'Ottawa Lake', county: 'MI', schemaType: 'Place',
    typeLabel: 'Community in Whiteford Township',
    zips: ['49267'], lat: 41.772133, lon: -83.710221,
    hero: 'project-deck-pressure-treated-multi-zone-aerial-wide',
    heroAlt: 'Aerial view of a large pressure-treated wood deck with two connected zones, angled corners and board skirting beside a paver patio, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in Ottawa Lake, MI (49267) and Whiteford Township. Township plans, site plans and permits prepared for you.',
    lede: 'Decks, fences and remodels for Ottawa Lake and Whiteford Township homes, a few miles from the Ohio line.',
    intro: `<p>Ottawa Lake is an unincorporated community in Whiteford Township, about three miles north of the Ohio border near the US-23 and US-223 junction. It takes its name from a lake that has mostly been drained, just north of the community.</p>
<p>Whiteford Township issues permits through its Department of Zoning and Building Inspection, and asks for two sets of building plans and two site plans. We prepare both.</p>`,
    permit: {
      office: 'Whiteford Township Zoning & Building Inspection',
      url: 'https://whitefordtownshipmi.gov/?p=418',
      answer: 'The Whiteford Township Department of Zoning and Building Inspection (8000 Yankee Rd.) issues permits. It requires two sets of building plans and two site plans, and the property needs an address and parcel number. Starting work without a permit doubles the fee. We prepare the plans and file the application.',
    },
    local: [
      { h: 'Plans and site plans', p: '<p>Whiteford Township asks for two copies of the plans and two site plans with every application. We draw both from measurements taken at the first visit.</p>' },
      { h: 'Attached vs. detached', p: '<p>Under the township’s zoning, a structure attached to the house has to meet the rules for the house itself. That matters for attached decks and covered porches, so we design to it.</p>' },
      { h: 'Michigan rules, Ohio neighbors', p: '<p>Ottawa Lake is minutes from Toledo, but Michigan code applies here, including the 42-inch frost depth for footings.</p>' },
    ],
  },
  {
    slug: 'toledo-oh', name: 'Toledo', county: 'OH', schemaType: 'City',
    typeLabel: 'City · Lucas County seat',
    zips: ['436xx (varies by neighborhood)'], lat: 41.664071, lon: -83.581861,
    hero: 'project-deck-ground-level-brown-wide',
    heroAlt: 'Wide view across a large low brown composite deck with a darker border and matching skirting along a brick home, built by DK Quality Construction',
    description: 'Toledo, OH deck builder and remodeler. Decks, porches, fences, basements and baths, with City of Toledo permits and historic-district approvals handled.',
    lede: 'Decks, porches, fences and remodels across Toledo neighborhoods — built to the Residential Code of Ohio and permitted through the City of Toledo.',
    intro: `<p>Toledo sits at the western end of Lake Erie along the Maumee River, less than 20 miles from our Monroe base. It runs its own Division of Building Inspection, so Toledo projects are permitted by the city rather than Lucas County.</p>
<p>The housing ranges from early-1900s homes in neighborhoods like the Old West End to post-war ranches and newer subdivisions. Older homes often need a deck or porch rebuilt to today’s code; historic districts add their own review step. We plan for both.</p>`,
    permit: {
      office: 'City of Toledo Division of Building Inspection',
      url: 'https://toledo.oh.gov/services/building-inspection',
      answer: 'Inside city limits, the City of Toledo Division of Building Inspection (One Government Center, Suite 1600) issues building permits and does inspections; applications can go through the city’s online permit portal. Fences under 6 feet don’t need a building permit, but they do need a Certificate of Zoning Compliance. We file the applications.',
    },
    local: [
      { h: 'Historic districts', p: '<p>Toledo has three locally designated historic districts — the Old West End, Vistula and Westmoreland. Exterior changes there, including fences, decks and patios, need a Certificate of Appropriateness before work starts. We build that step into the schedule.</p>' },
      { h: 'Fences and zoning', p: '<p>A fence under 6 feet doesn’t need a building permit in Toledo, but it does need a Certificate of Zoning Compliance. Front-yard height limits depend on the zoning district.</p>' },
      { h: 'Ohio footings', p: '<p>The city’s residential design table sets frost depth at 36 inches minimum — shallower than Michigan’s 42. We build each project to the rules where it stands.</p>' },
    ],
  },
  {
    slug: 'sylvania-oh', name: 'Sylvania', county: 'OH', schemaType: 'City',
    typeLabel: 'City · surrounded by Sylvania Township',
    zips: ['43560'], lat: 41.710362, lon: -83.710212,
    hero: 'project-deck-pool-aerial-two-level-gray',
    heroAlt: 'Aerial view of a two-level gray deck with white railings stepping down to an above-ground pool, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in Sylvania, OH (43560). City of Sylvania zoning permits and Lucas County building permits handled by a nearby contractor.',
    lede: 'Decks, pool decks, fences and remodels for homes in the City of Sylvania and Sylvania Township — just across the state line from Michigan.',
    intro: `<p>Sylvania is a city at the meeting of Ten Mile Creek and Ottawa Creek, with the Michigan state line as its northern border. It’s surrounded by Sylvania Township, a separate jurisdiction with its own zoning.</p>
<p>Permits here are a two-step process: the City of Sylvania issues the zoning permit, then Lucas County Building Regulations issues the building permit under its agreement with the city. The county won’t issue the building permit without the city’s zoning approval, so we line them up in order.</p>`,
    permit: {
      office: 'City of Sylvania Zoning + Lucas County Building Regulations',
      url: 'https://www.cityofsylvania.com/government/zoning/zoning-permits-licenses/',
      answer: 'In the City of Sylvania, you first need a city zoning permit; then Lucas County Building Regulations (1115 S. McCord Rd., Holland) issues the building permit and does the inspections. Fences go through the city’s zoning permit. Sylvania Township has its own zoning office, with county building permits. We handle both steps.',
    },
    local: [
      { h: 'Zoning first, then building', p: '<p>Sylvania’s zoning permit has to be approved before Lucas County will issue the building permit. We submit in that order so nothing stalls.</p>' },
      { h: 'City or township?', p: '<p>Sylvania addresses can be in the city or in Sylvania Township, and each has its own zoning rules. We confirm which from the parcel.</p>' },
      { h: 'Creek-side lots', p: '<p>Homes near Ten Mile Creek or Ottawa Creek can have wetter soils and mapped floodplain. Footings go to Lucas County’s 36-inch minimum and deeper where the soil calls for it.</p>' },
    ],
  },
  {
    slug: 'maumee-oh', name: 'Maumee', county: 'OH', schemaType: 'City',
    typeLabel: 'City on the Maumee River',
    zips: ['43537'], lat: 41.571125, lon: -83.66625,
    hero: 'project-deck-waterfront-covered',
    heroAlt: 'Large gray composite deck partly under a roof overhang, with white railings looking out over the water, built by DK Quality Construction',
    description: 'Deck builder and remodeler in Maumee, OH (43537). Decks, fences and remodels with City of Maumee zoning and building permits handled for you.',
    lede: 'Decks, fences and remodels in Maumee — from the historic Uptown streets to the neighborhoods along the Maumee River.',
    intro: `<p>Maumee is a city on the Maumee River about 10 miles southwest of Toledo, with a National Register-listed Uptown Historic District along Conant, Wayne and Dudley streets. It runs its own building and zoning department.</p>
<p>Maumee is specific about which deck needs which permit. Small, freestanding, low decks go through a zoning permit; larger or attached decks need a building permit. Homes with a Maumee address in Monclova or Springfield Township are permitted by Lucas County instead.</p>`,
    permit: {
      office: 'City of Maumee Zoning & Inspection',
      url: 'https://www.maumee.org/259/Permits-Forms',
      answer: 'Inside city limits, the City of Maumee (400 Conant St.) issues permits. Decks of 200 square feet or less that aren’t attached to the house and aren’t over 30 inches tall use the city’s zoning permit; larger or attached decks need a building permit. Fences need a zoning permit with a plot plan. Maumee-addressed homes in Monclova or Springfield Township go to Lucas County. The city says approvals usually take 2 to 4 weeks.',
    },
    local: [
      { h: 'Which deck permit?', p: '<p>Maumee splits decks by size, height and attachment: small freestanding decks under 30 inches use a zoning permit; anything bigger or attached to the house needs a building permit. We tell you which applies when we design.</p>' },
      { h: 'Plan for 2–4 weeks', p: '<p>The city says most permit approvals are emailed within 2 to 4 weeks and it doesn’t do same-day permits. We submit early so the schedule holds.</p>' },
      { h: 'River flood areas', p: '<p>In a riverine flood area, Maumee’s plot plan must show the lowest-floor elevation. We check the flood map for your address before drawing the plan.</p>' },
    ],
    faqs: [
      { q: 'Do fences need a permit in Maumee?', a: '<p>Yes. Fences need a City of Maumee zoning permit with a plot plan, and the finished side must face out, with posts and framing on the inside.</p>' },
    ],
  },
  {
    slug: 'oregon-oh', name: 'Oregon', county: 'OH', schemaType: 'City',
    typeLabel: 'City on Lake Erie and Maumee Bay',
    zips: ['43616', '43618'], lat: 41.655956, lon: -83.438325,
    hero: 'project-deck-lakeside-screened-room-yard',
    heroAlt: 'Raised dining deck with black railings, a long staircase and a screened porch beneath, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in Oregon, OH (43616, 43618). City of Oregon building, zoning and floodplain permits handled for lakeside and inland homes.',
    lede: 'Decks, fences and remodels across Oregon, Ohio — from Maumee Bay and the Lake Erie shoreline to the neighborhoods inland.',
    intro: `<p>Oregon is a lakefront city on Lake Erie, home to Maumee Bay State Park and Pearson Metropark. Its Building &amp; Zoning Department is certified by the Ohio Board of Building Standards and handles residential permits itself, so Oregon projects don’t go through Lucas County.</p>
<p>Being on the lake, Oregon also has floodplain regulations and a special flood hazard development permit. The city’s building official is also its floodplain administrator, so we raise flood questions early.</p>`,
    permit: {
      office: 'City of Oregon Building & Zoning Department',
      url: 'https://oregonohio.org/departments/building-zoning/',
      answer: 'The City of Oregon Building &amp; Zoning Department (5330 Seaman Rd.) issues residential permits and registers contractors. Lakeside lots may also need a special flood hazard development permit. We handle the applications and contractor registration.',
    },
    local: [
      { h: 'Fence rules', p: '<p>Oregon’s fence guidelines cap fences at 4 feet in the front yard and 6 feet in residential districts, and 3 feet in the clear-vision area at corners. Fences can sit on the property line but not over it. A fence permit is only required with a pool, but every fence has to meet zoning.</p>' },
      { h: 'Floodplain', p: '<p>Near the lake and bay, the city’s floodplain chapter can require a special flood hazard development permit. We check your lot against the flood maps first.</p>' },
      { h: 'Accessory structures', p: '<p>Sheds and similar structures go in the rear yard, at least 3 feet from property lines and the house, within a 30% coverage limit. We site them before we price them.</p>' },
    ],
  },
  {
    slug: 'holland-oh', name: 'Holland', county: 'OH', schemaType: 'City',
    typeLabel: 'Village in Springfield Township',
    zips: ['43528'], lat: 41.619253, lon: -83.708216,
    hero: 'project-deck-pressure-treated-multi-zone-aerial-wide',
    heroAlt: 'Aerial view of a large pressure-treated wood deck with two connected zones, angled corners and board skirting beside a paver patio, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in Holland, OH (43528). Village of Holland zoning and Lucas County building permits handled by a nearby BBB A+ contractor.',
    lede: 'Decks, fences and remodels for homes in the Village of Holland and the surrounding Springfield Township.',
    intro: `<p>Holland is a village in the eastern part of Springfield Township, between Toledo, Maumee and Sylvania Township. It’s also where Lucas County Building Regulations has its office.</p>
<p>Since February 2025, building permits in Holland come from Lucas County rather than the City of Maumee, which used to provide the service — some older pages still say Maumee. The village issues the zoning permit first, and no building permit is issued without it.</p>`,
    permit: {
      office: 'Village of Holland Zoning + Lucas County Building Regulations',
      url: 'https://www.hollandohio.com/zoning-property/',
      answer: 'In the Village of Holland, the village issues a zoning permit for any new, altered or enlarged structure, and Lucas County Building Regulations then issues the building permit. The City of Maumee stopped providing Holland’s building services on February 3, 2025. Holland-addressed homes in Springfield Township use township zoning instead. We handle both steps.',
    },
    local: [
      { h: 'Zoning permit first', p: '<p>Holland requires a zoning permit to build, alter, remodel or enlarge any structure, and the county won’t issue a building permit without it. We submit in the right order.</p>' },
      { h: 'Pool fences', p: '<p>Holland requires pool enclosure fences to be at least 42 inches high. We design pool decks and their gates and fences together.</p>' },
      { h: 'Village or township', p: '<p>A Holland mailing address may be in the village or in Springfield Township, with different zoning offices. We check the parcel first.</p>' },
    ],
  },
  {
    slug: 'waterville-oh', name: 'Waterville', county: 'OH', schemaType: 'City',
    typeLabel: 'City on the Maumee River',
    zips: ['43566'], lat: 41.501971, lon: -83.736852,
    hero: 'project-deck-planters-pond',
    heroAlt: 'Gray deck with two built-in planter boxes and a bench between them, white railings and a pond with a fountain beyond, built by DK Quality Construction',
    description: 'Deck builder and remodeler in Waterville, OH (43566). City of Waterville zoning permits and Lucas County building permits handled for you.',
    lede: 'Decks, fences and remodels in Waterville, from the historic streets along the Maumee River to the newer neighborhoods.',
    intro: `<p>Waterville is a city on the west bank of the Maumee River, platted in 1830 when the Miami and Erie Canal ran through it. Roche de Boeuf, a historic rock in the river at Waterville, still carries part of the 1908 interurban bridge.</p>
<p>Building here is a two-step process: an approved City of Waterville zoning permit comes first, then the building permit from Lucas County Building Regulations, which handles permits and inspections for the city.</p>`,
    permit: {
      office: 'City of Waterville Zoning + Lucas County Building Regulations',
      url: 'https://waterville.org/zoning/',
      answer: 'In Waterville, the city’s zoning department (25 N. Second St.) must approve a zoning permit before any building is erected or altered. Lucas County Building Regulations then issues the building permit and does the inspections. Waterville Township is a separate jurisdiction. We handle both.',
    },
    local: [
      { h: 'Zoning permit first', p: '<p>Waterville requires a city zoning permit before any building work, then a county building permit. We line the two up so the project starts on time.</p>' },
      { h: 'Historic overlay', p: '<p>Waterville’s zoning has included a historic overlay district with its own requirements, where exterior work may need a certificate of appropriateness. For older homes near downtown, we confirm with the city’s zoning inspector before design.</p>' },
      { h: 'River lots', p: '<p>Near the Maumee, soils and flood mapping matter for footings. We build to Lucas County’s 36-inch frost depth and check the flood map for the address.</p>' },
    ],
  },
  {
    slug: 'whitehouse-oh', name: 'Whitehouse', county: 'OH', schemaType: 'City',
    typeLabel: 'Village in Waterville Township',
    zips: ['43571'], lat: 41.521582, lon: -83.795753,
    hero: 'project-porch-deck-built-in-benches-aerial',
    heroAlt: 'Aerial view of a gray deck extending a covered front porch, with angled built-in benches framed by flowering shrubs, built by DK Quality Construction',
    description: 'Decks, fences and remodeling in Whitehouse, OH (43571). Village zoning permits and Lucas County building permits handled, plus contractor registration.',
    lede: 'Decks, porches, fences and remodels for Whitehouse homes, near the Oak Openings in western Lucas County.',
    intro: `<p>Whitehouse is a village in Waterville Township in western Lucas County, close to Oak Openings Preserve, the largest park in the Metroparks Toledo system. The Oak Openings Region is a band of sandy glacial soil, and sandy ground behaves differently around footings than heavy clay.</p>
<p>Since 2023, Whitehouse has contracted with Lucas County Building Regulations for plan review, building permits and inspections. The village still issues zoning permits and requires contractors to register before any permit is issued.</p>`,
    permit: {
      office: 'Village of Whitehouse Zoning + Lucas County Building Regulations',
      url: 'https://whitehouseoh.gov/departments/administration/building-zoning-department/',
      answer: 'Since 2023, Lucas County Building Regulations has handled plan review, building permits and inspections for the Village of Whitehouse. The village still issues zoning permits, and contractors must register with the village before any permit is issued. We take care of registration and both applications.',
    },
    local: [
      { h: 'Sandy soils', p: '<p>In the Oak Openings area, sandy soil drains quickly but can be loose. We dig footings to Lucas County’s 36-inch minimum and size them for the soil we find.</p>' },
      { h: 'Contractor registration', p: '<p>Whitehouse requires contractors to register before it issues any permit. We handle that so your project isn’t held up.</p>' },
      { h: 'Zoning stays local', p: '<p>Building permits come from the county, but zoning — setbacks, height and placement — is still the village’s call. We confirm the zoning before we draw.</p>' },
    ],
  },
  {
    slug: 'ottawa-hills-oh', name: 'Ottawa Hills', county: 'OH', schemaType: 'City',
    typeLabel: 'Village · planned community (1915)',
    zips: ['43606'], lat: 41.667058, lon: -83.63977,
    hero: 'project-porch-covered-gable-front',
    heroAlt: 'White-sided home with a new covered front porch, timber gable, brown composite decking and black metal railings, built by DK Quality Construction',
    description: 'Decks, porches, fences and remodeling in Ottawa Hills, OH (43606). Village zoning permits and Lucas County building permits handled for you.',
    lede: 'Decks, porches, fences and remodels for homes in the Village of Ottawa Hills, with the village’s zoning permits and the county building permit handled.',
    intro: `<p>Ottawa Hills is a village surrounded by Toledo, begun in 1915 as a planned community on both sides of the Ottawa River. Its established homes and mature lots call for work that fits the house and the street.</p>
<p>The village issues its own zoning permits — free of charge — for fences, additions, accessory structures, pools, roofing and more. Building permits come from Lucas County Building Regulations under the village’s contract.</p>`,
    permit: {
      office: 'Village of Ottawa Hills Zoning + Lucas County Building Regulations',
      url: 'https://ottawahills.org/government/zoning',
      answer: 'The Village of Ottawa Hills issues zoning permits at no cost for additions, accessory structures, pools, fences, driveways, roofing and more; there’s a separate fence permit form. Building permits are issued by Lucas County. Variances go to the village Zoning Commission. We file both.',
    },
    local: [
      { h: 'A village zoning permit for most work', p: '<p>In Ottawa Hills, fences, additions, accessory structures and pools all need a village zoning permit, even when the county building permit isn’t required. We include it in every job.</p>' },
      { h: 'Established homes', p: '<p>Many homes here are decades old. Adding a deck or porch means tying into existing framing and matching the house, which we plan in detail before we price.</p>' },
      { h: 'Along the Ottawa River', p: '<p>Lots near the Ottawa River can have slopes and wetter soils, which shape stair layout and footing design.</p>' },
    ],
  },
];

export const countyOf = (loc) => business.serviceArea.counties.find((c) => c.stateAbbr === loc.county);
export const locationUrl = (loc) => `/service-area/${loc.slug}/`;
export const locationByName = (name, stateAbbr) => locations.find((l) => l.name === name && l.county === stateAbbr);
