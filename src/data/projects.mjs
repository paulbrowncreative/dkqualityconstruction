// DK Quality Construction's own project photos. Descriptions state only what is visible
// in the photos; locations, materials/brands, costs and timelines are not claimed until
// the owner confirms them (see PROJECT-ASSET-REGISTER.md → open questions).
export const categories = [
  { id: 'decks', name: 'Decks', service: '/services/decks/' },
  { id: 'basements', name: 'Basement Remodeling', service: '/services/basement-finishing/' },
];

export const projects = [
  {
    id: 'P-001', category: 'decks', assetIds: ['DKQ-01-03'],
    title: 'Raised deck with privacy screen and wide stairs',
    image: 'project-deck-aerial-privacy-screen',
    alt: 'Aerial view of a raised gray deck with a dark border, white posts and black balusters, a decorative black privacy screen along one side, and a wide staircase down to the yard',
    caption: 'Gray deck with a contrasting border, white-and-black railings, a decorative privacy screen and a wide staircase.',
  },
  {
    id: 'P-002', category: 'decks', assetIds: ['DKQ-01-02'],
    title: 'Waterfront deck with a covered section',
    image: 'project-deck-waterfront-covered',
    alt: 'Wide view across a large gray deck, partly under a roof overhang supported by white posts, with white railings and black balusters facing a lake',
    caption: 'Large deck that runs from a covered area out to the water, with white-and-black railings around the edge.',
  },
  {
    id: 'P-003', category: 'decks', assetIds: ['DKQ-01-05'],
    title: 'Deck with wraparound corner stairs',
    image: 'project-deck-gray-corner-stairs',
    alt: 'Dark gray deck with black metal railings and box steps that wrap around the corner, in front of a screened porch',
    caption: 'Gray deck with black metal railings, matching skirting and box steps that wrap the corner.',
  },
  {
    id: 'P-004', category: 'decks', assetIds: ['DKQ-01-04'],
    title: 'Deck with stairs down to a paver patio',
    image: 'project-deck-cedar-tone-stairs',
    alt: 'Brown-toned deck with black metal railings, matching skirting and a staircase leading down to a paver patio beside a white house',
    caption: 'Brown-toned deck with black metal railings, matching skirting and stairs down to the patio.',
  },
  {
    id: 'P-005', category: 'basements', assetIds: ['DKQ-01-01'],
    title: 'Basement remodel with built-in cabinets',
    image: 'project-basement-remodel-built-ins',
    alt: 'Remodeled basement with a black painted open ceiling, recessed lights, wood-look plank flooring and white built-in cabinets with wood tops',
    caption: 'Open basement room with a painted open-joist ceiling, recessed lighting, plank flooring and white built-ins.',
  },
];
