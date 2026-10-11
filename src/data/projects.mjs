// DK Quality Construction's own project photos. Descriptions state only what is visible
// in the photos; locations, materials/brands, costs and timelines are not claimed until
// the owner confirms them (see PROJECT-ASSET-REGISTER.md → open questions).
// images[0] is the card/cover photo; every image opens in the full-photo viewer.
// `featured` projects are listed first on /projects/ (aerials and the strongest wide shots).
export const categories = [
  { id: 'decks', name: 'Decks', service: '/services/decks/' },
  { id: 'kitchens', name: 'Kitchen Remodeling', service: '/services/kitchen-remodeling/' },
  { id: 'basements', name: 'Basement Remodeling', service: '/services/basement-finishing/' },
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
    title: 'Raised deck with an elevated dining level over a screened room',
    caption: 'Raised deck with black metal railings and a long staircase, above a screened room with its own steps.',
    images: [{ asset: 'DKQ-04-05', name: 'project-deck-aerial-screened-room', alt: 'Aerial view of a raised brown deck with black metal railings, a dining table and a long staircase, built above a screened room with its own steps, behind a two-story home' }],
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
    images: [{ asset: 'DKQ-05-03', name: 'project-deck-above-ground-pool', alt: 'Gray deck with white railings and black balusters built around an above-ground pool, with a lawn and open field beyond' }],
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
];

export const projectById = (id) => projects.find((p) => p.id === id);
