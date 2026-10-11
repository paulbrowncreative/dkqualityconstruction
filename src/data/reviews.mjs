// Customer reviews supplied by the client (batch 16 screenshots, originals in
// assets-src/uploads/batch-16/). Text is transcribed verbatim — original spelling,
// capitalization and punctuation kept. Names are shortened to first name + last
// initial at the client's request. Star ratings: the client asked for 5 stars on
// every review; the three review graphics show 5 stars, the two Facebook posts are
// "recommends" (Facebook has no star scale) — see PROJECT-ASSET-REGISTER.md.
// No Review / AggregateRating structured data is generated from these (Google's
// self-serving review guidelines).
export const reviews = [
  {
    id: 'R-01', asset: 'DKQ-16-02', name: 'Todd S.', project: 'Replacement deck', service: 'decks',
    source: 'Facebook recommendation',
    text: 'Dave and his crew were very easy and enjoyable to work with when having our new replacement deck built. From total demo and removal of the old deck to the building of the new deck, everything went very smooth. Great communication, skilled, knowledgeable, helpful, great quality work and just a great group of friendly guys. The job was very fairly priced and done in a timely manner. They were there when they said they would be and always left the worksite picked up and clean after each days work. There were never any “surprises”, communication was always a priority. We are VERY happy with our new deck and would HIGHLY recommend them to anyone looking for work to be done. Thank you Dave and crew for a great job!',
  },
  {
    id: 'R-02', asset: 'DKQ-16-01', name: 'Nikky B.', project: 'Finished basement', service: 'basement-finishing',
    source: 'Facebook recommendation',
    text: 'We are so happy with our finished basement from David and his crew. They were so kind and accommodating, made sure we knew what was happening every step of the way. Provided us updates daily and very knowledgeable in answering our questions. Efficient and fast as well. Would recommend to anyone! 10/10. Thanks David and crew!',
  },
  {
    id: 'R-03', asset: 'DKQ-16-05', name: 'The Orwig Family', project: 'Covered deck', service: 'decks', projectId: 'P-052',
    source: 'Customer review',
    headline: 'Highly Recommend!',
    text: 'David was in constant contact with us and adapted to the numerous changes that we had along the way',
  },
  {
    id: 'R-04', asset: 'DKQ-16-03', name: 'Alicia D.', project: 'Deck and screened porch', service: 'decks', projectId: 'P-012',
    source: 'Customer review',
    text: 'We love our new deck and screened in porch! Thank you for your professionalism and communication',
  },
  {
    id: 'R-05', asset: 'DKQ-16-04', name: 'The Brown Family', project: 'Elevated deck', service: 'decks',
    source: 'Customer review',
    headline: 'Highly Recommend',
    text: 'David was punctual on his time frame and communicated through out each step of the project. They transformed my backyard with a beautiful elevated deck',
  },
];

export const reviewById = (id) => reviews.find((r) => r.id === id);
