// DK Quality Construction's own project photos. Descriptions state only what is visible
// in the photos; locations, materials/brands, costs and timelines are not claimed until
// the owner confirms them (see PROJECT-ASSET-REGISTER.md → open questions).
// images[0] is the card/cover photo; every image opens in the full-photo viewer.
// `featured` projects are listed first on /projects/ (aerials and the strongest wide shots).
export const categories = [
  { id: 'decks', name: 'Decks', service: '/services/decks/' },
  { id: 'kitchens', name: 'Kitchen Remodeling', service: '/services/kitchen-remodeling/' },
  { id: 'baths', name: 'Bathroom Remodeling', service: '/services/bathroom-remodeling/' },
  { id: 'basements', name: 'Basement Remodeling', service: '/services/basement-finishing/' },
  // No dedicated service page — interior finish carpentry (owner to confirm how it's offered).
  { id: 'interior', name: 'Interior Trim & Carpentry' },
  // No dedicated service page yet (owner to confirm scope) — the group links to the estimate form.
  { id: 'outdoor', name: 'Covered Patios' },
];

export const projects = [
  {
    id: 'P-001', category: 'decks', featured: true,
    title: 'Raised deck with privacy screen and wide stairs',
    caption: 'Gray deck with a contrasting border, white-and-black railings, a decorative privacy screen and a wide staircase.',
    images: [{ asset: 'DKQ-01-03', name: 'project-deck-aerial-privacy-screen', alt: 'Aerial view of a raised gray deck with a dark border, white posts and black balusters, a decorative black privacy screen along one side, and a wide staircase down to the yard' }],
  },
  {
    id: 'P-002', category: 'decks',
    title: 'Waterfront deck with a covered section',
    caption: 'Large deck that runs from a covered area out to the water, with white-and-black railings around the edge.',
    images: [{ asset: 'DKQ-01-02', name: 'project-deck-waterfront-covered', alt: 'Wide view across a large gray deck, partly under a roof overhang supported by white posts, with white railings and black balusters facing a lake' }],
  },
  {
    id: 'P-003', category: 'decks',
    title: 'Deck with wraparound corner stairs',
    caption: 'Gray deck with black metal railings, matching skirting and box steps that wrap the corner.',
    images: [{ asset: 'DKQ-01-05', name: 'project-deck-gray-corner-stairs', alt: 'Dark gray deck with black metal railings and box steps that wrap around the corner, in front of a screened porch' }],
  },
  {
    id: 'P-004', category: 'decks',
    title: 'Deck with stairs down to a paver patio',
    caption: 'Brown-toned deck with black metal railings, matching skirting and stairs down to the patio.',
    images: [{ asset: 'DKQ-01-04', name: 'project-deck-cedar-tone-stairs', alt: 'Brown-toned deck with black metal railings, matching skirting and a staircase leading down to a paver patio beside a white house' }],
  },
  {
    id: 'P-005', category: 'basements',
    title: 'Basement remodel with built-in cabinets',
    caption: 'Open basement room with a painted open-joist ceiling, recessed lighting, plank flooring and white built-ins.',
    images: [{ asset: 'DKQ-01-01', name: 'project-basement-remodel-built-ins', alt: 'Remodeled basement with a black painted open ceiling, recessed lights, wood-look plank flooring and white built-in cabinets with wood tops' }],
  },
  {
    id: 'P-006', category: 'decks',
    title: 'Covered deck with a stained wood ceiling',
    caption: 'Covered deck with a stained plank ceiling, black beams and gable bracing, dark brown boards and black metal railings.',
    images: [{ asset: 'DKQ-02-01', name: 'project-deck-covered-stained-ceiling', alt: 'Covered deck with a stained wood plank ceiling, black beams and gable bracing, dark brown deck boards and black metal railings, with a DK Quality Construction trailer parked in the background' }],
  },
  {
    id: 'P-007', category: 'decks',
    title: 'Covered deck with white columns',
    caption: 'Deck under a flat roof on square white columns, with white metal railings, gray boards, matching skirting and stairs.',
    images: [{ asset: 'DKQ-02-02', name: 'project-deck-covered-white-columns', alt: 'Covered deck with a flat roof on square white columns, white metal railings, gray deck boards with matching skirting and stairs, beside a light brick home' }],
  },
  {
    id: 'P-008', category: 'decks',
    title: 'Two-level deck by a screened porch',
    caption: 'Brown deck with a contrasting border board, steps up to a covered screened porch and wide steps down to the yard.',
    images: [{ asset: 'DKQ-02-03', name: 'project-deck-brown-screened-porch', alt: 'Brown deck with a contrasting border board, a step up to a covered screened porch and wide steps down to a flagstone path and lawn' }],
  },
  {
    id: 'P-009', category: 'kitchens',
    title: 'Kitchen remodel with white shaker cabinets',
    caption: 'White shaker cabinets, granite counters, a tile backsplash, recessed lighting and plank flooring.',
    images: [
      { asset: 'DKQ-02-05', name: 'project-kitchen-white-shaker', alt: 'Remodeled kitchen with white shaker cabinets, gray granite counters, a black double sink, white mosaic tile backsplash, stainless appliances and plank flooring against teal walls' },
      { asset: 'DKQ-03-01', name: 'project-kitchen-white-shaker-range-wall', alt: 'Another view of the same kitchen: corner of white shaker cabinets with a stainless range and microwave, granite counters, tile backsplash and a built-in surround for the refrigerator' },
      { asset: 'DKQ-02-04', name: 'project-kitchen-white-shaker-fridge-wall', alt: 'Another view of the same kitchen: a stainless side-by-side refrigerator with cabinets above, recessed lights, teal walls and plank flooring' },
    ],
  },
  {
    id: 'P-010', category: 'decks', featured: true,
    title: 'Large ground-level deck with picture-frame border',
    caption: 'Wide, low deck across the back of a brick home, with a contrasting picture-frame border and matching skirting.',
    images: [
      { asset: 'DKQ-03-02', name: 'project-deck-ground-level-brown-wide', alt: 'Wide view across a large low brown deck with a darker picture-frame border and matching skirting, running along a red-brick home into the backyard' },
      { asset: 'DKQ-03-03', name: 'project-deck-ground-level-brown-corner', alt: 'Corner of the same deck showing the mitered border boards and skirting, with the house beside it and a DK Quality Construction trailer parked on the street' },
      { asset: 'DKQ-03-04', name: 'project-deck-ground-level-brown-house', alt: 'The same deck seen from the yard, spanning the back of a brick and vinyl-sided home past the sliding patio door' },
    ],
  },
  {
    id: 'P-011', category: 'decks',
    title: 'Deck with white railings under a pergola',
    caption: 'Brown deck with white-and-black railings and white posts, shaded in part by a timber pergola.',
    images: [{ asset: 'DKQ-03-05', name: 'project-deck-pergola-white-railings', alt: 'Brown deck with white railings and black balusters and white posts, partly shaded by a timber pergola, overlooking a backyard' }],
  },
  {
    id: 'P-012', category: 'decks', featured: true,
    title: 'Raised lakeside deck over a screened room',
    caption: 'Raised dining deck with black metal railings and a long staircase, built together with the screened porch beneath it, looking out over the lake.',
    // P-025 (screened-room interior, DKQ-06-05) merged here in batch 7: DKQ-07-01 shows the same lake, dock, boat and neighboring house.
    images: [
      { asset: 'DKQ-04-05', name: 'project-deck-aerial-screened-room', alt: 'Aerial view of a raised brown deck with black metal railings, a dining table and a long staircase, built above a screened room with its own steps, behind a two-story home' },
      { asset: 'DKQ-07-02', name: 'project-deck-lakeside-screened-room-yard', alt: 'The same deck from the yard: the raised dining deck with black railings, the long staircase, and the screened room underneath with its own steps' },
      { asset: 'DKQ-07-01', name: 'project-deck-lakeside-dining-level', alt: 'On the upper deck: brown deck boards, a dining table and covered grill, and black metal railings looking out over the lake' },
      { asset: 'DKQ-06-05', name: 'project-screened-room-lake-view', alt: 'Inside the screened room under the deck: brown deck boards, black-framed screens and a screen door, looking out to the lake' },
    ],
  },
  {
    id: 'P-013', category: 'decks',
    title: 'Stairs and landing on a brick home',
    caption: 'Two-tone stairs with black metal railings rising to a raised landing along a brick wall.',
    images: [
      { asset: 'DKQ-04-01', name: 'project-stairs-landing-brick-wide', alt: 'Wide view of two-tone deck stairs with black metal railings climbing to a raised landing along a tan brick home above a concrete patio' },
      { asset: 'DKQ-04-03', name: 'project-stairs-landing-brick-close', alt: 'Closer view of the same stairs, showing the two-tone treads, matching risers and black metal railings' },
    ],
  },
  {
    id: 'P-014', category: 'decks',
    title: 'Pressure-treated deck with black metal railings',
    caption: 'Large pressure-treated wood deck with a divider board pattern and black metal railings.',
    images: [{ asset: 'DKQ-04-02', name: 'project-deck-pressure-treated-black-rail', alt: 'Newly built pressure-treated wood deck with divider boards running across it and black metal railings, beside a white-sided home and backyard' }],
  },
  {
    id: 'P-015', category: 'decks',
    title: 'Platform deck at the edge of a pond',
    caption: 'Low gray platform deck with a picture-frame border, set at the edge of a pond.',
    images: [{ asset: 'DKQ-04-04', name: 'project-deck-pond-platform', alt: 'Low gray platform deck with a picture-frame border at the edge of a pond, under a cloudy sky' }],
  },
  {
    id: 'P-016', category: 'decks', featured: true,
    title: 'Wide deck with built-in benches and center stairs',
    caption: 'Deck spanning the back of the home, with built-in benches on both sides and wide center stairs trimmed in white.',
    images: [{ asset: 'DKQ-05-01', name: 'project-deck-aerial-built-in-benches', alt: 'Aerial view of a wide gray deck across the back of a two-story home, with built-in benches on both sides, white-trimmed center stairs and gray skirting' }],
  },
  {
    id: 'P-017', category: 'decks',
    title: 'Deck with black metal railings and side stairs',
    caption: 'Brown deck with black metal railings, matching skirting and side stairs down to a concrete patio.',
    images: [{ asset: 'DKQ-05-02', name: 'project-deck-brown-black-rail-patio', alt: 'Brown deck with black metal railings, matching skirting and side stairs down to a concrete patio, beside a white-sided home with a fenced pool' }],
  },
  {
    id: 'P-018', category: 'decks',
    title: 'Pool deck around an above-ground pool',
    caption: 'Gray deck wrapped around an above-ground pool, with white-and-black railings and open views across the yard.',
    images: [
      { asset: 'DKQ-05-03', name: 'project-deck-above-ground-pool', alt: 'Gray deck with white railings and black balusters built around an above-ground pool, with a lawn and open field beyond' },
      { asset: 'DKQ-15-05', name: 'project-deck-pool-aerial-two-level-gray', alt: 'Aerial view of a two-level gray deck with white railings and black balusters, stepping down to a lower level that curves along the edge of an above-ground pool' },
    ],
  },
  {
    id: 'P-019', category: 'decks',
    title: 'Large pressure-treated deck with wood railings',
    caption: 'Pressure-treated wood deck with angled corners and wood railings with black metal balusters.',
    images: [{ asset: 'DKQ-05-04', name: 'project-deck-pressure-treated-wood-rail', alt: 'Newly built pressure-treated wood deck with angled corners and wood railings with black metal balusters, under a large shade tree' }],
  },
  {
    id: 'P-020', category: 'decks',
    title: 'Raised deck with white railings and dark skirting',
    caption: 'Gray deck with white-and-black railings, white fascia, dark skirting and a staircase to the yard.',
    images: [{ asset: 'DKQ-05-05', name: 'project-deck-white-rail-dark-skirting', alt: 'Raised gray deck with white railings and black balusters, white fascia trim, dark skirting and a staircase to the lawn, behind a gray two-story home' }],
  },
  {
    id: 'P-021', category: 'decks', featured: true,
    title: 'Wraparound deck with a covered porch and privacy wall',
    caption: 'Brown deck wrapping the back of a ranch home, with a covered porch section, a privacy wall and wide steps to a stamped-concrete border.',
    images: [
      { asset: 'DKQ-06-03', name: 'project-deck-aerial-covered-porch-privacy-wall', alt: 'Aerial view of a large brown deck wrapping the back of a white ranch home, with a covered porch section on wood posts, dark railings, a privacy wall and wide steps down to a stamped-concrete border' },
      { asset: 'DKQ-09-01', name: 'project-deck-aerial-covered-porch-close', alt: 'Closer aerial view of the same deck: the covered porch section on cedar-toned posts with dark railings, the wide steps and the privacy wall' },
    ],
  },
  {
    id: 'P-022', category: 'decks',
    title: 'Front porch deck with built-in benches',
    caption: 'Gray deck extending a covered front porch, with long built-in benches along two sides.',
    images: [
      { asset: 'DKQ-10-03', name: 'project-porch-deck-built-in-benches-aerial', alt: 'Aerial view of a gray deck extending a covered front porch, with angled built-in benches on both sides framed by flowering shrubs' },
      { asset: 'DKQ-06-01', name: 'project-porch-deck-built-in-benches', alt: 'Ground-level view of the same deck: long built-in benches on two sides of the deck, above landscaped flower beds' },
    ],
  },
  {
    id: 'P-023', category: 'decks',
    title: 'Deck with built-in planters and bench',
    caption: 'Gray deck with built-in planter boxes and a bench between them, overlooking a pond with a fountain.',
    images: [{ asset: 'DKQ-06-02', name: 'project-deck-planters-pond', alt: 'Gray deck with two built-in planter boxes full of vegetables and a bench between them, with white railings and a pond with a fountain beyond' }],
  },
  {
    id: 'P-024', category: 'outdoor',
    title: 'Covered patio with a gable roof',
    caption: 'Open gable roof over a concrete patio, with white beams and trusses, a stained wood ceiling, recessed lights and stone-wrapped column bases.',
    images: [{ asset: 'DKQ-06-04', name: 'project-covered-patio-gable-roof', alt: 'Covered patio with an open gable roof, white beams and trusses, a stained wood ceiling with recessed lights and a fan, and white columns on stone bases over a concrete patio' }],
  },
  {
    id: 'P-026', category: 'decks',
    title: 'Covered front porch with new composite floor',
    caption: 'Brown composite decking with a contrasting divider board on a covered front porch with white columns.',
    images: [{ asset: 'DKQ-07-03', name: 'project-porch-floor-composite-columns', alt: 'Covered front porch with brown composite deck boards and a contrasting divider board, white square columns, outdoor furniture and potted flowers, looking out over a lawn' }],
  },
  {
    id: 'P-027', category: 'decks',
    title: 'Ground-level deck with a picture-frame border',
    caption: 'Low brown deck beside the house, finished with a picture-frame border.',
    images: [{ asset: 'DKQ-07-04', name: 'project-deck-ground-level-picture-frame-dusk', alt: 'Low brown deck with a picture-frame border built beside a house, photographed at dusk under a work light' }],
  },
  {
    id: 'P-028', category: 'decks',
    title: 'Side-yard deck with white railings',
    caption: 'Gray deck with white-and-black railings, white fascia, gray skirting and stairs at each end.',
    images: [{ asset: 'DKQ-07-05', name: 'project-deck-gray-white-rail-side-yard', alt: 'Gray deck with white railings and black balusters, white fascia, gray skirting and stairs at each end, built along the side of a gray home' }],
  },
  {
    id: 'P-029', category: 'decks', featured: true,
    title: 'Deck with wide white-trimmed stairs on a stone home',
    caption: 'Gray deck with black metal railings and wide white-trimmed stairs stepping down to the lawn on two sides.',
    images: [{ asset: 'DKQ-08-04', name: 'project-deck-aerial-stone-home-stairs', alt: 'Aerial view of a gray deck with black metal railings and wide white-trimmed stairs on two sides, built against a large stone home above a lawn' }],
  },
  {
    id: 'P-030', category: 'decks',
    title: 'Composite deck with a timber pavilion',
    caption: 'Large brown composite deck with black metal railings and a timber pavilion with a metal roof.',
    images: [
      { asset: 'DKQ-08-05', name: 'project-deck-composite-pavilion', alt: 'Large brown composite deck with black metal railings and a timber pavilion with a metal roof, with trees behind' },
      { asset: 'DKQ-09-02', name: 'project-deck-composite-pavilion-stairs', alt: 'The same deck from the yard: composite skirting, a staircase with black metal railings and the timber pavilion above' },
    ],
  },
  {
    id: 'P-031', category: 'decks',
    title: 'Pressure-treated deck with a timber pavilion',
    caption: 'Large pressure-treated wood deck with wood railings, black balusters and a timber pavilion with a metal roof.',
    images: [{ asset: 'DKQ-08-03', name: 'project-deck-pressure-treated-pavilion', alt: 'Large pressure-treated wood deck with divider boards, wood railings with black balusters and a timber pavilion with a metal roof, overlooking a wide lawn' }],
  },
  {
    id: 'P-032', category: 'decks',
    title: 'Deck with an angled corner and picture-frame border',
    caption: 'Brown deck with an angled corner and a contrasting picture-frame border, outside a sliding patio door.',
    images: [{ asset: 'DKQ-08-02', name: 'project-deck-brown-angled-picture-frame', alt: 'Brown deck with an angled corner and a picture-frame border outside a sliding patio door, with the yard still being finished around it' }],
  },
  {
    id: 'P-033', category: 'decks',
    title: 'Low deck with white railings by a patio door',
    caption: 'Gray deck with white-and-black railings and gray skirting outside a sliding patio door.',
    images: [{ asset: 'DKQ-08-01', name: 'project-deck-gray-white-rail-patio-door', alt: 'Low gray deck with white railings, black balusters and gray skirting outside a sliding patio door on a gray home' }],
  },
  {
    id: 'P-034', category: 'decks', featured: true,
    title: 'Raised deck with angled box steps',
    caption: 'Brown composite deck with black-and-cedar-tone railings, composite skirting and angled box steps down to the yard.',
    images: [{ asset: 'DKQ-09-04', name: 'project-deck-aerial-box-steps-trailer', alt: 'Aerial view of a brown composite deck with black railings with cedar-tone accents, horizontal composite skirting and angled box steps, with the DK Quality Construction trailer parked beside the house' }],
  },
  {
    id: 'P-035', category: 'decks',
    title: 'Covered front porch on a brick ranch',
    caption: 'Brown composite porch floor with a divider board, matching skirting and box steps, under a covered porch with white columns.',
    images: [{ asset: 'DKQ-09-03', name: 'project-porch-floor-brick-ranch', alt: 'Covered front porch on a brick ranch home with a brown composite floor, a divider board, matching skirting, box steps and white square columns' }],
  },
  {
    id: 'P-036', category: 'decks',
    title: 'Raised pressure-treated deck in a wooded yard',
    caption: 'Pressure-treated wood deck with a divider board and wood railings with black balusters, overlooking a wooded yard.',
    images: [{ asset: 'DKQ-09-05', name: 'project-deck-pressure-treated-raised-woods', alt: 'Raised pressure-treated wood deck with a divider board and wood railings with black balusters, with stairs down to a wooded yard' }],
  },
  {
    id: 'P-037', category: 'decks', featured: true,
    title: 'Lakefront deck with cable railings',
    caption: 'Pressure-treated wood deck with wood-framed cable railings, built on the waterfront under a mature shade tree.',
    images: [{ asset: 'DKQ-10-01', name: 'project-deck-lakefront-cable-rail', alt: 'Pressure-treated wood deck with wood-framed horizontal cable railings beside a gray home, looking out over open water under a large shade tree' }],
  },
  {
    id: 'P-038', category: 'decks',
    title: 'Long covered porch with a composite floor',
    caption: 'Brown composite porch floor with a divider board, matching skirting and box steps, along a covered porch with wood posts.',
    images: [{ asset: 'DKQ-10-04', name: 'project-porch-cabin-wraparound', alt: 'Long covered porch on a wood-sided home with a brown composite floor, a divider board, matching skirting and box steps, under exposed rafters and wood posts' }],
  },
  {
    id: 'P-039', category: 'decks',
    title: 'Large two-tone composite deck',
    caption: 'Large ground-level composite deck with a darker contrasting border and divider boards.',
    images: [
      { asset: 'DKQ-10-05', name: 'project-deck-large-composite-two-tone', alt: 'Large ground-level composite deck with a darker border and divider boards, wet after rain, beside a two-story home with a fenced yard' },
      { asset: 'DKQ-11-01', name: 'project-deck-large-composite-divider-trailer', alt: 'The same deck looking out across the yard: the darker divider and border boards, a row of arborvitae along the fence, and the DK Quality Construction trailer parked nearby' },
    ],
  },
  {
    id: 'P-040', category: 'decks', featured: true,
    title: 'Wraparound deck with planters and two stairways',
    caption: 'Gray deck wrapping a sunroom, with white-and-black railings, built-in planter boxes and stairs at each end.',
    images: [{ asset: 'DKQ-11-03', name: 'project-deck-aerial-sunroom-planters', alt: 'Aerial view of a gray deck wrapping around a sunroom, with white railings and black balusters, two built-in planter boxes and a staircase at each end' }],
  },
  {
    id: 'P-041', category: 'decks',
    title: 'Gray deck overlooking a pool and open fields',
    caption: 'Gray composite deck with white-and-black railings, looking out over an above-ground pool and open farmland.',
    images: [{ asset: 'DKQ-11-04', name: 'project-deck-gray-pool-field-view', alt: 'Gray composite deck with white railings and black balusters, looking out over an above-ground pool, a play set and open farm fields under a clear sky' }],
  },
  {
    id: 'P-042', category: 'decks',
    title: 'Multi-zone pressure-treated deck with angled corners',
    caption: 'Large pressure-treated wood deck in two connected zones, with angled corners, a divider pattern and wood railings with black balusters.',
    images: [
      { asset: 'DKQ-12-01', name: 'project-deck-pressure-treated-multi-zone-aerial-wide', alt: 'Aerial view of a large pressure-treated wood deck with two connected zones, angled corners, wood railings with black balusters and board skirting, beside a gray home and paver patio' },
      { asset: 'DKQ-11-05', name: 'project-deck-aerial-pressure-treated-multi-zone', alt: 'Overhead view of the same deck showing the two zones, divider boards and angled corners' },
      { asset: 'DKQ-12-02', name: 'project-deck-pressure-treated-multi-zone-yard', alt: 'The same deck from the lawn: wood railings with black balusters, board skirting and a storage door underneath' },
    ],
  },
  {
    id: 'P-043', category: 'baths',
    title: 'Bathroom remodel with marble-look tile',
    caption: 'Marble-look subway tile tub surround with a recessed niche, black fixtures, a white shaker vanity with a stone-look top, and plank flooring.',
    images: [
      { asset: 'DKQ-12-05', name: 'project-bathroom-vanity-niche', alt: 'Remodeled bathroom with a white shaker vanity and speckled top, black faucet, round black mirror and three-light fixture, beside a tub with marble-look subway tile and a recessed niche' },
      { asset: 'DKQ-12-03', name: 'project-bathroom-tub-subway-tile', alt: 'Bathtub with a marble-look subway tile surround and black shower and tub fixtures, next to the white vanity and plank flooring' },
      { asset: 'DKQ-12-04', name: 'project-bathroom-tub-closet-shelves', alt: 'The other side of the bathroom: a dark shaker-style closet door, open shelves and the toilet beside the tiled tub' },
      { asset: 'DKQ-13-01', name: 'project-bathroom-vanity-niche-alt', alt: 'The vanity and tub again, showing the recessed tile niche, the three-light fixture over the round mirror and the plank flooring' },
    ],
  },
  {
    id: 'P-044', category: 'decks', featured: true,
    title: 'Two-level pool deck by the canal',
    caption: 'Brown composite deck wrapped around an above-ground pool, with a raised seating level, white-and-black railings and step lights.',
    images: [
      { asset: 'DKQ-13-05', name: 'project-deck-composite-pool-two-level', alt: 'Overhead view of a brown composite deck around an above-ground pool, with a raised seating level, white railings with black balusters, lit steps and a canal beside it' },
      { asset: 'DKQ-14-01', name: 'project-deck-composite-pool-two-level-poolside', alt: 'Poolside view of the same deck: brown composite boards curving around the pool edge, vertical composite skirting on the raised level and white-and-black railings' },
    ],
  },
  {
    id: 'P-045', category: 'decks',
    title: 'Raised pool deck with a hot-tub platform',
    caption: 'Pressure-treated deck built beside an above-ground pool, with a raised hot-tub platform, wood railings with black balusters and a sliding barn-style access door.',
    images: [{ asset: 'DKQ-13-02', name: 'project-deck-pressure-treated-pool-hot-tub', alt: 'Raised pressure-treated deck beside an above-ground pool, with a hot tub on the upper platform, wood railings with black balusters, board skirting and a sliding barn-style access door' }],
  },
  {
    id: 'P-046', category: 'decks',
    title: 'Pressure-treated deck with lit stairs',
    caption: 'Wide pressure-treated stairs with built-in step lights and post lights, photographed at dusk.',
    images: [{ asset: 'DKQ-13-04', name: 'project-deck-pressure-treated-stair-lights-night', alt: 'Wide pressure-treated deck stairs with built-in step lights and lighted posts, wood railings with black balusters, photographed at dusk' }],
  },
  {
    id: 'P-047', category: 'decks',
    title: 'Side-entry deck with wood railings',
    caption: 'Small pressure-treated deck and steps at a side door, with wood railings, black balusters and board skirting.',
    images: [{ asset: 'DKQ-13-03', name: 'project-deck-pressure-treated-side-door', alt: 'Small pressure-treated deck and steps at a side door, with wood railings, black balusters and board skirting, just after completion' }],
  },
  {
    id: 'P-048', category: 'basements',
    title: 'Finished basement with a media wall and bar',
    caption: 'Finished basement with a built-in media wall, louvered closet doors, a shiplap-front bar with stone-look counters, two-tone stairs, recessed lighting and wood-look plank flooring.',
    images: [
      { asset: 'DKQ-14-05', name: 'project-basement-media-wall-built-ins', alt: 'Finished basement media wall with a recessed TV niche, white base cabinets with a dark wood top, louvered closet doors on each side, recessed lights and dark wood-look plank flooring' },
      { asset: 'DKQ-14-03', name: 'project-basement-bar-shiplap', alt: 'Basement bar area with white shiplap fronts, thick stone-look countertops, recessed lights and dark wood-look plank flooring' },
      { asset: 'DKQ-15-01', name: 'project-basement-stairs-two-tone', alt: 'Basement stairs with stained treads, white risers and a white half-wall with a squared post, above the same dark wood-look plank flooring' },
    ],
  },
  {
    id: 'P-049', category: 'interior',
    title: 'Shiplap wall and door trim',
    caption: 'Shiplap accent walls with a built-up header and casing around a set of French doors, plus crown and base trim.',
    images: [{ asset: 'DKQ-14-02', name: 'project-interior-shiplap-door-trim', alt: 'Room with white shiplap walls and a built-up gray header and casing around black-framed French doors, with crown molding and baseboard' }],
  },
  {
    id: 'P-050', category: 'interior',
    title: 'Stair railing with iron balusters',
    caption: 'Painted stair railing with box newel posts and twisted iron balusters.',
    images: [{ asset: 'DKQ-14-04', name: 'project-interior-stair-railing-iron', alt: 'Interior stair railing with white paneled box newels, a white handrail and black twisted iron balusters along a stairwell' }],
  },
  {
    id: 'P-051', category: 'decks', featured: true,
    title: 'Covered front porch with a timber gable',
    caption: 'Covered front porch with an open timber gable, stained posts and beams, a brown composite floor, black metal railings and steps to the walk.',
    images: [{ asset: 'DKQ-15-03', name: 'project-porch-covered-gable-front', alt: 'Front of a white-sided home with a covered porch: open timber gable with stained posts and beams, a ceiling fan, brown composite decking, black metal railings and steps down to a concrete walk' }],
  },
  {
    id: 'P-052', category: 'decks',
    title: 'Covered deck with a stained ceiling and bar rail',
    caption: 'Covered composite deck with a stained plank ceiling, recessed lights and a fan, plus a bar-height rail top overlooking the yard and pool.',
    images: [{ asset: 'DKQ-15-04', name: 'project-deck-covered-fan-bar-rail', alt: 'Covered composite deck with a stained wood plank ceiling, recessed lights and a ceiling fan, outdoor seating around a fire table, and a bar-height rail top with stools looking out over the yard' }],
  },
  {
    id: 'P-053', category: 'interior',
    title: 'Fireplace wall with built-in cabinets',
    caption: 'Built-in cabinets and arched shelving on both sides of a fireplace, with a shiplap TV wall, crown molding and a wood mantel.',
    images: [{ asset: 'DKQ-15-02', name: 'project-interior-fireplace-built-ins', alt: 'Fireplace wall with white built-in cabinets and arched open shelves on both sides, a shiplap TV wall with crown molding above, a wood mantel and a stone fireplace surround' }],
  },
];

export const projectById = (id) => projects.find((p) => p.id === id);
