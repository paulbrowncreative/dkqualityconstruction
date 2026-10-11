// Blog posts (/blog/{slug}/). One or more planning guides per service.
// Local rules quoted here come from the same official sources as the community pages
// (docs/locations-research.md); code figures are cited to the International Residential
// Code (IRC), which both the Michigan Residential Code and the Residential Code of Ohio
// are based on. No prices, statistics or claims we can't support.
const PUBLISHED = '2026-10-11';

export const posts = [
  {
    slug: 'deck-permits-monroe-county-mi-lucas-county-oh',
    service: 'decks',
    date: PUBLISHED,
    topic: 'Deck building permits',
    title: 'Deck Permits in Monroe County, MI & Lucas County, OH | DK Quality',
    h1: 'Deck permits in Monroe County, MI and Lucas County, OH: who issues them?',
    short: 'Deck permits by community',
    description: 'Who issues deck permits in Monroe, Temperance, Toledo, Sylvania, Maumee and 19 more communities — plus footing depths, 811 rules and what to have ready.',
    lede: 'In this part of Michigan and Ohio, the office that issues your deck permit depends on the exact address — not the ZIP code. Here’s how it works in all 24 communities we serve.',
    image: 'project-deck-aerial-screened-room',
    imageAlt: 'Aerial view of a raised deck and stairs built over a screened porch, built by DK Quality Construction',
    places: ['monroe-mi', 'temperance-mi', 'lambertville-mi', 'newport-mi', 'toledo-oh', 'sylvania-oh', 'maumee-oh', 'oregon-oh', 'holland-oh', 'whitehouse-oh'],
    relatedServices: ['decks', 'fencing'],
    ctaNoun: 'a new deck',
    intro: `<p>Most new decks need a building permit. What surprises people is <em>who</em> issues it. In Monroe County, Michigan, every city, village and township we serve runs its own building department or inspector. In Lucas County, Ohio, most communities use the county’s building department — but Toledo, Maumee and Oregon run their own.</p>
<p>This guide explains how it works on each side of the state line, lists the permit office for every community we serve, and covers the two rules that apply everywhere: how deep footings go, and calling 811 before anyone digs.</p>`,
    takeaways: [
      'In Monroe County, MI, the permit comes from your city, village or township — not the county.',
      'In Lucas County, OH, Lucas County Building Regulations issues residential building permits except in Toledo, Maumee, Oregon and Berkey. Most cities and villages still issue their own zoning permit first.',
      'Michigan footings go at least 42 inches deep; Lucas County uses 36 inches.',
      'Call 811 before digging: MISS DIG in Michigan, OHIO811 in Ohio. It’s free.',
    ],
    sections: [
      {
        id: 'mailing-address',
        h: 'Why your mailing address isn’t enough',
        toc: 'Why the address matters',
        html: `<p>Mailing addresses follow post office routes, not municipal lines. A “Monroe” address can be in the City of Monroe, Monroe Charter Township or Frenchtown Charter Township — three different building departments. A “Newport” address is usually in Berlin Charter Township, but some 48166 addresses are in Frenchtown. A “Maumee” address in Monclova or Springfield Township is permitted by Lucas County, not the City of Maumee.</p>
<p>The reliable way to know is the parcel: the township or municipality it sits in decides the office. We check this before we draw anything.</p>`,
      },
      {
        id: 'michigan',
        h: 'Monroe County, Michigan: every community has its own office',
        toc: 'Monroe County, MI',
        html: `<p>Monroe County does not issue building permits for the communities below; each has its own building department or inspector. Unincorporated communities such as Temperance, Lambertville, Erie, Ida, Newport and Ottawa Lake are permitted by the township they sit in.</p>
<div class="table-wrap"><table class="spec-table spec-table--wide">
<caption>Who issues residential building permits, Monroe County, MI</caption>
<thead><tr><th scope="col">Community</th><th scope="col">Permit office</th></tr></thead>
<tbody>
<tr><th scope="row"><a href="/service-area/monroe-mi/">Monroe</a> (city)</th><td>City of Monroe Building Division</td></tr>
<tr><th scope="row"><a href="/service-area/frenchtown-township-mi/">Frenchtown Township</a></th><td>Frenchtown Charter Township Building Department</td></tr>
<tr><th scope="row"><a href="/service-area/monroe-township-mi/">Monroe Township</a></th><td>Monroe Charter Township Building Department</td></tr>
<tr><th scope="row"><a href="/service-area/temperance-mi/">Temperance</a>, <a href="/service-area/lambertville-mi/">Lambertville</a></th><td>Bedford Township Building Department</td></tr>
<tr><th scope="row"><a href="/service-area/erie-mi/">Erie</a></th><td>Erie Township Building &amp; Zoning</td></tr>
<tr><th scope="row"><a href="/service-area/luna-pier-mi/">Luna Pier</a></th><td>City of Luna Pier Building &amp; Zoning</td></tr>
<tr><th scope="row"><a href="/service-area/lasalle-mi/">LaSalle</a></th><td>La Salle Township building inspector</td></tr>
<tr><th scope="row"><a href="/service-area/ida-mi/">Ida</a></th><td>Ida Township Building Department</td></tr>
<tr><th scope="row"><a href="/service-area/dundee-mi/">Dundee</a> (village)</th><td>Village of Dundee Building Department</td></tr>
<tr><th scope="row"><a href="/service-area/petersburg-mi/">Petersburg</a> (city)</th><td>City of Petersburg Building Department</td></tr>
<tr><th scope="row"><a href="/service-area/maybee-mi/">Maybee</a> (village)</th><td>Village of Maybee building inspector</td></tr>
<tr><th scope="row"><a href="/service-area/carleton-mi/">Carleton</a> (village)</th><td>Village of Carleton Building Department</td></tr>
<tr><th scope="row"><a href="/service-area/newport-mi/">Newport</a></th><td>Berlin Charter Township (some addresses: Frenchtown)</td></tr>
<tr><th scope="row"><a href="/service-area/south-rockwood-mi/">South Rockwood</a> (village)</th><td>Village of South Rockwood Building Department</td></tr>
<tr><th scope="row"><a href="/service-area/ottawa-lake-mi/">Ottawa Lake</a></th><td>Whiteford Township Zoning &amp; Building Inspection</td></tr>
</tbody></table></div>
<p>Some offices add their own steps. Ida Township needs a certificate of zoning compliance before it issues a building permit. Erie Township won’t issue one without a soil erosion permit or waiver. Whiteford Township asks for two sets of plans and two site plans. Each community page links to the official office.</p>`,
      },
      {
        id: 'ohio',
        h: 'Lucas County, Ohio: the county, with a few exceptions',
        toc: 'Lucas County, OH',
        html: `<p>Lucas County Building Regulations, in Holland, has jurisdiction over residential construction across the county except inside Toledo, Maumee, Oregon and Berkey. Several cities and villages — including Sylvania, Holland, Waterville, Ottawa Hills and, since 2023, Whitehouse — contract with the county for building permits and inspections.</p>
<p>In most of those places, the local zoning permit comes first. Sylvania, Holland and Waterville all require their own zoning approval before the county will issue the building permit.</p>
<div class="table-wrap"><table class="spec-table spec-table--wide">
<caption>Who issues residential building permits, Lucas County, OH</caption>
<thead><tr><th scope="col">Community</th><th scope="col">Building permit</th><th scope="col">Zoning step</th></tr></thead>
<tbody>
<tr><th scope="row"><a href="/service-area/toledo-oh/">Toledo</a></th><td>City of Toledo Division of Building Inspection</td><td>City zoning; historic districts need a Certificate of Appropriateness</td></tr>
<tr><th scope="row"><a href="/service-area/maumee-oh/">Maumee</a></th><td>City of Maumee</td><td>Small, low, detached decks use the city zoning permit</td></tr>
<tr><th scope="row"><a href="/service-area/oregon-oh/">Oregon</a></th><td>City of Oregon Building &amp; Zoning</td><td>Same department; floodplain permit near the lake</td></tr>
<tr><th scope="row"><a href="/service-area/sylvania-oh/">Sylvania</a></th><td>Lucas County Building Regulations</td><td>City of Sylvania zoning permit first</td></tr>
<tr><th scope="row"><a href="/service-area/holland-oh/">Holland</a></th><td>Lucas County Building Regulations</td><td>Village zoning permit first</td></tr>
<tr><th scope="row"><a href="/service-area/waterville-oh/">Waterville</a></th><td>Lucas County Building Regulations</td><td>City zoning permit first</td></tr>
<tr><th scope="row"><a href="/service-area/whitehouse-oh/">Whitehouse</a></th><td>Lucas County Building Regulations</td><td>Village zoning permit; contractor registration</td></tr>
<tr><th scope="row"><a href="/service-area/ottawa-hills-oh/">Ottawa Hills</a></th><td>Lucas County Building Regulations</td><td>Village zoning permit (no fee)</td></tr>
</tbody></table></div>
<p>Maumee is the clearest about deck types: decks of 200 square feet or less that aren’t attached to the house and aren’t over 30 inches tall go through its zoning permit, while larger or attached decks need a building permit.</p>`,
      },
      {
        id: 'footings',
        h: 'Footing depth: 42 inches in Michigan, 36 in Lucas County',
        toc: 'Footing depth',
        html: `<p>Deck footings have to bear below the frost line, or freezing soil can lift the deck over the winter. The two states set different depths:</p>
<ul>
<li><strong>Michigan:</strong> the Michigan Residential Code sets the frost line at 42 inches.</li>
<li><strong>Lucas County, Ohio:</strong> Lucas County Building Regulations and the City of Toledo both set a 36-inch minimum depth of footing below finished grade.</li>
</ul>
<p>So a deck in Lambertville and a deck a few miles south in Toledo are built to different footing depths. Soil conditions can call for deeper or larger footings than the minimum, especially near creeks, rivers or the lake.</p>`,
      },
      {
        id: 'call-811',
        h: 'Call 811 before anyone digs',
        toc: 'Calling 811',
        html: `<p>Every post hole is an excavation. Before digging, underground utilities must be marked:</p>
<ul>
<li><strong>Michigan:</strong> contact MISS DIG 811 at least three business days before digging.</li>
<li><strong>Ohio:</strong> Ohio law requires the excavator to notify OHIO811 at least two working days before digging (not counting the day of the call).</li>
</ul>
<p>Both services are free. When we build your deck, we make the call.</p>`,
      },
      {
        id: 'what-to-have-ready',
        h: 'What a permit application usually needs',
        toc: 'What to have ready',
        html: `<p>Requirements vary, but most offices ask for some combination of:</p>
<ul>
<li>A <strong>site plan</strong> showing the house, the deck and distances to property lines.</li>
<li><strong>Construction drawings</strong>: footing sizes and depth, post, beam and joist sizes and spacing, the ledger connection to the house, guards and stairs.</li>
<li>The <strong>parcel number and address</strong>.</li>
<li>Any <strong>zoning approval</strong> the community requires first.</li>
<li><strong>Contractor registration</strong> where required — Whitehouse, Dundee and South Rockwood, for example, require contractors to register.</li>
</ul>
<p>Expect inspections along the way, typically of the footing holes before concrete and of the finished framing. Plan for review time too: the City of Maumee, for example, says most approvals are emailed within two to four weeks.</p>`,
      },
    ],
    faqs: [
      { q: 'Do I need a permit for a small, low deck?', a: '<p>It depends on the community. Some treat small, low, freestanding decks differently — Maumee handles them through a zoning permit — but an attached deck almost always needs a building permit. Check with your local office, or ask us to.</p>' },
      { q: 'Who pulls the permit, me or the contractor?', a: '<p>When we build your deck, we prepare the drawings and handle the permit application with the right office.</p>' },
      { q: 'What happens if a deck is built without a permit?', a: '<p>Offices can require work to stop, charge extra fees — Whiteford Township, for example, doubles the permit fee when work starts without one — or require changes. Unpermitted work can also come up when you sell the house.</p>' },
    ],
  },
  {
    slug: 'composite-vs-pressure-treated-decking',
    service: 'decks',
    date: PUBLISHED,
    topic: 'Deck materials',
    title: 'Composite vs. Pressure-Treated Decking in MI & OH | DK Quality',
    h1: 'Composite vs. pressure-treated decking for Michigan and Ohio winters',
    short: 'Composite vs. pressure-treated',
    description: 'How composite and pressure-treated decking compare for upkeep, looks and lifespan in southeast Michigan and northwest Ohio — and why the frame matters more.',
    lede: 'Both are good choices here. The right one depends on how you’ll use the deck, how long you’ll stay and how much upkeep you want.',
    image: 'project-deck-ground-level-brown-wide',
    imageAlt: 'Large low brown deck with a darker picture-frame border and matching skirting, built by DK Quality Construction',
    places: ['monroe-mi', 'toledo-oh'],
    relatedServices: ['decks'],
    ctaNoun: 'a new deck',
    intro: `<p>Almost every deck we build in Monroe County and the Toledo area is framed with pressure-treated lumber. The real choice is the surface: pressure-treated boards or composite. Freeze-thaw cycles, summer sun and snow on the boards all affect how each one ages.</p>
<p>Here’s a straight comparison, plus the frame details that matter regardless of which you choose.</p>`,
    takeaways: [
      'Pressure-treated decking costs less up front and needs regular cleaning and sealing or staining.',
      'Composite costs more up front and needs little more than washing.',
      'Either way, the frame is pressure-treated lumber, and the frame decides how long the deck lasts.',
      'Composite boards have their own joist-spacing and fastening rules — follow the manufacturer’s.',
    ],
    sections: [
      {
        id: 'pressure-treated',
        h: 'Pressure-treated decking',
        html: `<p>Pressure-treated pine is treated to resist rot and insects. It’s the most common deck material in the region and the least expensive up front.</p>
<ul>
<li><strong>Look:</strong> natural wood that can be stained almost any color.</li>
<li><strong>Upkeep:</strong> clean it and re-seal or re-stain every few years. Left unprotected, boards can check, split, cup or warp, and the surface weathers to gray.</li>
<li><strong>Good fit if:</strong> you want the most deck for the budget and don’t mind the maintenance.</li>
</ul>`,
      },
      {
        id: 'composite',
        h: 'Composite decking',
        html: `<p>Composite boards blend wood fiber and plastic, and most current lines have a protective outer shell. They’re installed on a pressure-treated frame just like wood boards.</p>
<ul>
<li><strong>Look:</strong> consistent color and grain, with many color lines.</li>
<li><strong>Upkeep:</strong> occasional washing. No sanding, sealing or staining.</li>
<li><strong>Good fit if:</strong> you plan to stay and would rather spend weekends on the deck than maintaining it.</li>
</ul>
<p>Composite has its own rules. Manufacturers set maximum joist spacing — often 16 inches on center, and closer for diagonal board layouts — and specify fasteners and gapping. Building outside those rules can void the warranty, so we design the frame to the specific product.</p>`,
      },
      {
        id: 'winters',
        h: 'What our winters do to a deck',
        toc: 'Winter effects',
        html: `<p>Water is the enemy of both materials. On wood, water that sits on or in the boards drives checking and rot; sealing slows it. Composite shrugs off surface water, but the wood frame under it doesn’t — which is why the frame details below matter on every deck.</p>
<p>Snow is fine on both. If you shovel, use a plastic shovel and follow the decking manufacturer’s guidance on de-icers.</p>`,
      },
      {
        id: 'frame',
        h: 'The frame matters more than the boards',
        toc: 'The frame',
        html: `<p>Whatever goes on top, these are the parts that decide whether a deck lasts:</p>
<ul>
<li><strong>Footings below the frost line</strong> — 42 inches in Michigan and 36 inches in Lucas County, Ohio — so frost can’t heave the deck.</li>
<li><strong>A properly attached and flashed ledger.</strong> Where a deck attaches to the house, the ledger must be bolted or screwed to the house framing and flashed so water can’t get behind it. A failed ledger is a common cause of serious deck failures.</li>
<li><strong>Treated lumber rated for its use.</strong> Posts and framing in contact with or close to the ground need lumber rated for ground contact.</li>
<li><strong>Hardware that’s compatible with treated lumber.</strong> Modern treatments are corrosive to plain steel, so connectors and fasteners need the right coating or stainless steel.</li>
</ul>
<p>Read more about how we approach this on our <a href="/services/decks/">deck building page</a>.</p>`,
      },
      {
        id: 'choosing',
        h: 'How to choose',
        html: `<p>Three questions usually settle it:</p>
<ol>
<li><strong>How long will you stay?</strong> The longer you’ll own the house, the more composite’s low upkeep pays off.</li>
<li><strong>Will you maintain it?</strong> If re-staining every few years won’t happen, composite avoids a deck that looks tired fast.</li>
<li><strong>What’s the budget?</strong> Pressure-treated gets you more square footage for the money.</li>
</ol>
<p>Some homeowners split the difference: composite where people walk and sit, and treated lumber for less visible parts. We’ll price both options at the estimate.</p>`,
      },
    ],
    faqs: [
      { q: 'Is composite decking slippery?', a: '<p>Most current composite boards have textured surfaces. Any deck surface can be slick when wet or icy, so we pay attention to stair treads and handrails on every deck.</p>' },
      { q: 'Can I put composite boards on my old frame?', a: '<p>Sometimes. The frame has to be sound, built to code and spaced for the composite product. We inspect it before recommending a resurface.</p>' },
    ],
  },
  {
    slug: 'fence-rules-monroe-county-toledo-area',
    service: 'fencing',
    date: PUBLISHED,
    topic: 'Residential fence rules',
    title: 'Fence Rules in Monroe County & the Toledo Area | DK Quality',
    h1: 'Planning a fence in Monroe County and the Toledo area: heights, permits and 811',
    short: 'Fence rules and permits',
    description: 'Fence height limits, permits and setbacks in Toledo, Maumee, Oregon, Ida Township, Petersburg and more — plus MISS DIG and OHIO811 rules before you dig.',
    lede: 'Fence rules are set locally, and they differ a lot from one community to the next. Here’s what to check before you pick a style — with real examples from around Monroe County and Lucas County.',
    image: null,
    places: ['toledo-oh', 'maumee-oh', 'oregon-oh', 'holland-oh', 'sylvania-oh', 'ottawa-hills-oh', 'ida-mi', 'petersburg-mi', 'erie-mi', 'dundee-mi', 'luna-pier-mi'],
    relatedServices: ['fencing', 'decks'],
    ctaNoun: 'a new fence',
    intro: `<p>A fence looks simple: posts, rails, boards. The rules around it aren’t. Height limits, permit requirements, how close you can build to a sidewalk, which side faces the neighbor — they’re all set by your city, village or township, and they vary across our service area.</p>
<p>This guide walks through the questions to answer before you choose a fence, with examples from the actual ordinances.</p>`,
    takeaways: [
      'Front-yard fences are usually limited to 3 or 4 feet; side and rear yards allow taller.',
      'Many communities need a zoning permit for a fence even when no building permit is required.',
      'Some require the finished side to face out, toward the neighbor.',
      'Call MISS DIG 811 (Michigan) or OHIO811 (Ohio) before any post hole is dug.',
    ],
    sections: [
      {
        id: 'permit',
        h: 'Do you need a permit?',
        html: `<p>Often, yes — but usually a zoning permit rather than a building permit. Examples:</p>
<ul>
<li><a href="/service-area/toledo-oh/"><strong>Toledo</strong></a>: fences under 6 feet don’t need a building permit, but they do need a Certificate of Zoning Compliance.</li>
<li><a href="/service-area/maumee-oh/"><strong>Maumee</strong></a>: fences need a city zoning permit with a plot plan.</li>
<li><a href="/service-area/erie-mi/"><strong>Erie Township</strong></a>: no building permit for a fence, but a township zoning permit covers setbacks, height and size.</li>
<li><a href="/service-area/sylvania-oh/"><strong>Sylvania</strong></a>, <a href="/service-area/ottawa-hills-oh/"><strong>Ottawa Hills</strong></a> and <a href="/service-area/dundee-mi/"><strong>Dundee</strong></a>: fences go through a local zoning or fence permit.</li>
<li><a href="/service-area/oregon-oh/"><strong>Oregon</strong></a>: a fence permit is only required with a swimming pool, but every fence must still meet zoning.</li>
</ul>`,
      },
      {
        id: 'height',
        h: 'How tall can it be?',
        html: `<p>Front yards are the most restricted, because fences there affect the street and sight lines. Some real limits:</p>
<div class="table-wrap"><table class="spec-table spec-table--wide">
<caption>Examples of residential fence height limits</caption>
<thead><tr><th scope="col">Community</th><th scope="col">Front yard</th><th scope="col">Side and rear</th></tr></thead>
<tbody>
<tr><th scope="row"><a href="/service-area/ida-mi/">Ida Township</a></th><td>4 ft</td><td>6 ft</td></tr>
<tr><th scope="row"><a href="/service-area/petersburg-mi/">Petersburg</a></th><td>3 ft</td><td>8 ft</td></tr>
<tr><th scope="row"><a href="/service-area/oregon-oh/">Oregon</a></th><td>4 ft</td><td>6 ft in residential districts</td></tr>
</tbody></table></div>
<p>Corner lots have extra limits. Oregon caps fences at 3 feet in the clear-vision area at corners; Luna Pier requires clear sight triangles. Petersburg also limits a side-yard fence facing a street to 3 feet where other homes front that street.</p>`,
      },
      {
        id: 'placement',
        h: 'Where exactly can it go?',
        toc: 'Placement and setbacks',
        html: `<ul>
<li><strong>Property line:</strong> Oregon and Ida Township allow fences on the property line, but not over it or in the right-of-way. Knowing where the line is matters — a survey is the most reliable source.</li>
<li><strong>Sidewalks and streets:</strong> Petersburg requires at least a foot from any public sidewalk; Luna Pier sets distances from both sidewalks and streets.</li>
<li><strong>Waterfront:</strong> in Ida Township, a fence between the house and the shoreline must be at least 80% see-through.</li>
<li><strong>Pools:</strong> pool barriers have their own rules. Holland, for example, requires pool enclosure fences to be at least 42 inches high.</li>
</ul>`,
      },
      {
        id: 'good-side',
        h: 'Which side faces the neighbor?',
        toc: 'The finished side',
        html: `<p>Some communities decide for you. Ida Township requires the finished side to face the neighbor, and Maumee requires the finished side out, with posts and framing on the inside. Even where it isn’t required, facing the finished side out is the neighborly default.</p>`,
      },
      {
        id: 'call-811',
        h: 'Call 811 before digging',
        toc: 'Calling 811',
        html: `<p>Fence installation is mostly digging, and buried utility lines are common along property lines. Before any post hole:</p>
<ul>
<li><strong>Michigan:</strong> contact MISS DIG 811 at least three business days ahead.</li>
<li><strong>Ohio:</strong> the excavator must notify OHIO811 at least two working days ahead.</li>
</ul>
<p>It’s free, and when we install your fence, we make the call. Post depth matters too: posts set too shallow can heave in our freeze-thaw winters.</p>`,
      },
      {
        id: 'hoa',
        h: 'Don’t forget the HOA',
        toc: 'HOA rules',
        html: `<p>Subdivision covenants can be stricter than the municipality — limiting style, material, color or height. Check before you order materials. Bring your HOA guidelines to the estimate and we’ll design to both.</p>`,
      },
    ],
    faqs: [
      { q: 'Are these rules current?', a: '<p>They come from the communities’ official websites and ordinances as of October 2026. Ordinances change, so we confirm the current rules for your address before any fence is ordered.</p>' },
      { q: 'Can my fence go right on the property line?', a: '<p>In some communities, yes — Oregon and Ida Township allow it — but it can’t cross the line or sit in the right-of-way. A survey is the safest way to know where the line is.</p>' },
    ],
  },
  {
    slug: 'finishing-a-basement-moisture-egress-permits',
    service: 'basement-finishing',
    date: PUBLISHED,
    topic: 'Basement finishing',
    title: 'Finishing a Basement: Moisture, Egress & Permits | DK Quality',
    h1: 'Finishing a basement: moisture, egress windows and permits',
    short: 'Finishing a basement',
    description: 'Before finishing a basement in Michigan or Ohio: moisture, egress window sizes for bedrooms, ceiling height, permits and flooring that works below grade.',
    lede: 'A finished basement is some of the most affordable living space you can add. The work that makes it last happens before the drywall goes up.',
    image: 'project-basement-remodel-built-ins',
    imageAlt: 'Finished basement with a black painted ceiling, plank flooring and white built-in cabinets, by DK Quality Construction',
    places: ['monroe-mi', 'toledo-oh'],
    relatedServices: ['basement-finishing', 'flooring'],
    ctaNoun: 'a basement',
    intro: `<p>Finishing a basement turns storage space into a family room, office, guest room or bar. But basements are below grade, often damp, and covered by specific code rules — especially if anyone will sleep down there.</p>
<p>Here’s what to sort out before framing starts.</p>`,
    takeaways: [
      'Fix water and moisture problems first. Finishes trap moisture; they don’t solve it.',
      'Basements and every sleeping room need an emergency escape opening — a code-sized egress window or door.',
      'A basement finish usually needs a building permit, plus electrical, plumbing or mechanical permits for that work.',
      'Choose flooring made for below-grade use.',
    ],
    sections: [
      {
        id: 'moisture',
        h: 'Start with water and moisture',
        toc: 'Water and moisture',
        html: `<p>The biggest risk in a finished basement is moisture trapped behind new walls. Before finishing:</p>
<ul>
<li><strong>Look for history:</strong> water lines, efflorescence (white mineral deposits) on the walls, musty smells, damp spots after heavy rain.</li>
<li><strong>Fix the outside first:</strong> gutters and downspouts that discharge away from the house, and soil that slopes away from the foundation, solve many wet basements.</li>
<li><strong>Address active leaks and cracks</strong> before covering the walls.</li>
<li><strong>Plan for vapor:</strong> wall and floor assemblies should let the foundation dry rather than trap moisture against it.</li>
</ul>
<p>If water is coming in, finishing over it guarantees mold and wasted money. We’ll tell you honestly if the basement isn’t ready.</p>`,
      },
      {
        id: 'egress',
        h: 'Egress: the escape-opening rule',
        toc: 'Egress windows',
        html: `<p>Under the International Residential Code — the basis for both the Michigan and Ohio residential codes — basements and every sleeping room need at least one emergency escape and rescue opening. If you’re adding a bedroom, it needs its own.</p>
<p>For a window used as the escape opening, the code sets:</p>
<ul>
<li>A net clear opening of at least <strong>5.7 square feet</strong> (5.0 square feet for openings at grade-floor level or below).</li>
<li>A clear opening at least <strong>24 inches high</strong> and <strong>20 inches wide</strong>. These minimums alone don’t add up to 5.7 square feet, so the window has to be larger in at least one direction.</li>
<li>A sill no more than <strong>44 inches</strong> above the floor.</li>
<li>Operation from inside without keys, tools or special knowledge.</li>
</ul>
<p>Below grade, the window needs a window well at least <strong>9 square feet</strong> in area and at least <strong>36 inches</strong> in projection and width, with a permanent ladder or steps if it’s deeper than 44 inches. Your local department applies the edition and amendments it has adopted, so we confirm the details at plan review.</p>`,
      },
      {
        id: 'layout',
        h: 'Layout, ceilings and mechanicals',
        toc: 'Layout and ceilings',
        html: `<ul>
<li><strong>Keep access:</strong> the furnace, water heater, electrical panel, sump pump and shutoffs need clearance and access panels.</li>
<li><strong>Ceiling height:</strong> ducts and beams set your low points. Painting an open ceiling dark, as in the basement above, is one way to keep height and access.</li>
<li><strong>Light:</strong> plan recessed lighting and outlets before walls close; it’s far cheaper than adding them later.</li>
<li><strong>Built-ins:</strong> media walls, bars and storage make the most of awkward spaces under stairs and around posts.</li>
</ul>`,
      },
      {
        id: 'permits',
        h: 'Permits',
        html: `<p>Finishing a basement generally needs a building permit, plus separate electrical, plumbing or mechanical permits for that work. In Monroe County, your city, village or township issues them; in most of Lucas County, it’s Lucas County Building Regulations, except in Toledo, Maumee and Oregon. Our <a href="/blog/deck-permits-monroe-county-mi-lucas-county-oh/">permit guide</a> lists the office for each community.</p>`,
      },
      {
        id: 'flooring',
        h: 'Flooring that works below grade',
        toc: 'Flooring',
        html: `<p>Concrete slabs can stay cool and pass moisture. Solid hardwood isn’t recommended below grade. Luxury vinyl plank and tile are common choices; engineered products rated for below-grade use are another. See our <a href="/blog/choosing-flooring-basements-kitchens-bathrooms/">flooring guide</a> for more.</p>`,
      },
    ],
    faqs: [
      { q: 'Can I call a basement room a bedroom without an egress window?', a: '<p>No. A sleeping room needs a code-compliant emergency escape opening. We can cut in an egress window and well as part of the project.</p>' },
      { q: 'Should I test for radon before finishing?', a: '<p>The U.S. EPA recommends testing all homes for radon. Testing before you finish is easiest, because mitigation is simpler before walls and ceilings close in.</p>' },
    ],
  },
  {
    slug: 'bathroom-remodel-planning-ventilation-waterproofing',
    service: 'bathroom-remodeling',
    date: PUBLISHED,
    topic: 'Bathroom remodeling',
    title: 'Bathroom Remodel Guide: Ventilation & Waterproofing | DK Quality',
    h1: 'Planning a bathroom remodel: layout, waterproofing and ventilation',
    short: 'Planning a bathroom remodel',
    description: 'What to decide before a bathroom remodel: layout, tub-to-shower conversions, shower waterproofing, exhaust fan sizing (50 cfm), GFCI outlets and storage.',
    lede: 'Bathrooms pack plumbing, electrical, tile and water into a small room. Getting the hidden layers right is what keeps a new bathroom looking new.',
    image: 'project-bathroom-vanity-niche',
    imageAlt: 'Remodeled bathroom with a white vanity, round mirror and tiled tub surround with a built-in niche, by DK Quality Construction',
    places: ['monroe-mi', 'sylvania-oh'],
    relatedServices: ['bathroom-remodeling', 'flooring'],
    ctaNoun: 'a bathroom remodel',
    intro: `<p>A bathroom remodel can be a simple refresh — vanity, mirror, lighting — or a full gut down to the studs. Either way, the decisions that matter most are the ones you won’t see when it’s done: waterproofing, ventilation and how the plumbing is laid out.</p>`,
    takeaways: [
      'Moving plumbing costs more than keeping fixtures where they are; decide layout first.',
      'Tile isn’t waterproof. A shower needs a waterproofing layer behind it.',
      'The code requires bathroom exhaust of at least 50 cfm intermittent (or 20 cfm continuous), ducted outdoors.',
      'Bathroom receptacles need GFCI protection.',
    ],
    sections: [
      {
        id: 'layout',
        h: 'Decide the layout first',
        toc: 'Layout',
        html: `<p>Keeping the toilet, tub or shower and sink where they are keeps costs down. Moving them means opening floors and walls for drains and vents. Common upgrades that are worth the plumbing work:</p>
<ul>
<li><strong>Tub-to-shower conversions</strong> for easier access and a bigger shower.</li>
<li><strong>Wider vanities</strong> or a second sink where space allows.</li>
<li><strong>Better storage:</strong> recessed niches in the shower, medicine cabinets and linen storage.</li>
</ul>`,
      },
      {
        id: 'waterproofing',
        h: 'Waterproofing: what’s behind the tile',
        toc: 'Waterproofing',
        html: `<p>Grout and most tile let some water through, and cement backer board isn’t waterproof on its own. A shower needs a dedicated waterproofing layer — a membrane or liquid-applied system — on the walls and pan, sealed at seams, corners and penetrations. Niches and benches need the same attention, sloped so they drain.</p>
<p>This step is invisible when the job is done, and it’s the difference between a shower that lasts and one that rots the wall behind it.</p>`,
      },
      {
        id: 'ventilation',
        h: 'Ventilation: size the fan and vent it outside',
        toc: 'Ventilation',
        html: `<p>Moisture left in a bathroom leads to peeling paint and mold. The International Residential Code requires a bathroom to have either an openable window or mechanical exhaust of at least <strong>50 cfm intermittent</strong> or <strong>20 cfm continuous</strong>, and exhaust has to discharge outdoors — not into the attic.</p>
<p>A quiet fan on a timer or humidity sensor gets used; a loud one doesn’t. We often replace undersized or unvented fans as part of a remodel.</p>`,
      },
      {
        id: 'electrical',
        h: 'Lighting and electrical',
        html: `<p>Bathroom receptacles need GFCI protection under the electrical code. Beyond that, plan layered light: a fixture over the vanity for grooming, overhead light, and a light in the shower area if it’s enclosed. Electrical and plumbing changes generally need permits from your local building department.</p>`,
      },
      {
        id: 'finishes',
        h: 'Finishes that hold up',
        html: `<ul>
<li><strong>Flooring:</strong> tile and waterproof vinyl are the usual choices. Textured or smaller tiles give better grip.</li>
<li><strong>Vanity:</strong> materials that tolerate humidity.</li>
<li><strong>Fixtures:</strong> buy before rough-in, because valve bodies and drain locations depend on the exact model.</li>
</ul>`,
      },
    ],
    faqs: [
      { q: 'How long does a bathroom remodel take?', a: '<p>It depends on scope — a refresh is much faster than a full gut with layout changes. We give you a schedule with the estimate, including ordering time for fixtures and tile.</p>' },
      { q: 'Can we keep using the bathroom during the remodel?', a: '<p>Usually not for a full remodel. If it’s your only bathroom, tell us at the estimate and we’ll plan the sequence to minimize downtime.</p>' },
    ],
  },
  {
    slug: 'kitchen-remodel-planning-decisions-before-demolition',
    service: 'kitchen-remodeling',
    date: PUBLISHED,
    topic: 'Kitchen remodeling',
    title: 'Kitchen Remodel Planning: What to Decide First | DK Quality',
    h1: 'Kitchen remodel planning: the decisions to make before demolition',
    short: 'Kitchen remodel planning',
    description: 'The order of decisions for a kitchen remodel — layout, appliances, cabinets, counters, lighting and electrical — so it runs smoothly from demolition to finish.',
    lede: 'Most kitchen remodel headaches come from decisions made in the wrong order. Here’s the sequence that keeps a project on track.',
    image: 'project-kitchen-white-shaker',
    imageAlt: 'Remodeled kitchen with white shaker cabinets, granite counters and stainless appliances, by DK Quality Construction',
    places: ['maumee-oh', 'monroe-mi'],
    relatedServices: ['kitchen-remodeling', 'flooring'],
    ctaNoun: 'a kitchen remodel',
    intro: `<p>A kitchen remodel involves more trades and more decisions than almost any other room: layout, cabinets, counters, appliances, plumbing, electrical, lighting, flooring and finishes. Each depends on others. Making them in the right order keeps the schedule and budget intact.</p>`,
    takeaways: [
      'Set the layout and budget before shopping for finishes.',
      'Choose appliances before cabinets — cabinet sizes depend on them.',
      'Countertops are measured after cabinets are installed.',
      'Plan electrical early: kitchens need dedicated circuits, and countertop receptacles need GFCI protection.',
    ],
    sections: [
      {
        id: 'layout-budget',
        h: '1. Layout and budget',
        toc: 'Layout and budget',
        html: `<p>Decide whether you’re keeping the current layout or changing it. Keeping the sink, range and refrigerator where they are keeps plumbing, gas and electrical work simpler. Moving walls or fixtures opens more possibilities and more cost. Set a budget range and a contingency before you choose finishes.</p>`,
      },
      {
        id: 'appliances',
        h: '2. Appliances before cabinets',
        toc: 'Appliances',
        html: `<p>Cabinet sizes, panel layouts and electrical or gas rough-in all depend on the exact appliances. Pick models — especially the range, refrigerator and any built-in or panel-ready units — before cabinets are ordered, and keep the spec sheets.</p>`,
      },
      {
        id: 'cabinets',
        h: '3. Cabinets and storage',
        toc: 'Cabinets',
        html: `<p>Cabinets set the look and most of the function. Think about drawers versus doors for lower cabinets, pantry storage, trash and recycling pull-outs, and corners. Cabinet lead times vary by line, so order once the layout and appliances are final.</p>`,
      },
      {
        id: 'counters',
        h: '4. Countertops and backsplash',
        toc: 'Countertops',
        html: `<p>Choose the material early so it fits the budget, but stone and solid-surface counters are templated after the cabinets are installed — exact measurements come from the real cabinets, not the drawings. The backsplash follows the counters.</p>`,
      },
      {
        id: 'electrical-lighting',
        h: '5. Electrical and lighting',
        toc: 'Electrical and lighting',
        html: `<p>Kitchens need dedicated circuits for several appliances, and countertop receptacles need GFCI protection under the electrical code. Plan lighting in layers: under-cabinet task lighting, overhead general lighting, and pendants over an island or sink. Electrical, plumbing and gas changes generally need permits.</p>`,
      },
      {
        id: 'flooring-living',
        h: '6. Flooring and living through it',
        toc: 'Flooring and logistics',
        html: `<p>Decide whether new flooring goes under the cabinets or around them. Then plan for the remodel itself: a temporary kitchen setup, dust control and where materials will be stored. We walk through the sequence with you before demolition.</p>`,
      },
    ],
    faqs: [
      { q: 'Should flooring go in before or after cabinets?', a: '<p>It depends on the flooring and your plans. Running some floors under cabinets makes future layout changes easier; floating floors are often installed around cabinets. We’ll recommend the right approach for the products you choose.</p>' },
      { q: 'Do I need a permit to remodel a kitchen?', a: '<p>Cosmetic work often doesn’t, but electrical, plumbing, gas and structural changes generally do. We confirm with your local building department.</p>' },
    ],
  },
  {
    slug: 'choosing-flooring-basements-kitchens-bathrooms',
    service: 'flooring',
    date: PUBLISHED,
    topic: 'Flooring selection',
    title: 'Choosing Flooring for Basements, Kitchens & Baths | DK Quality',
    h1: 'Choosing flooring for basements, kitchens and bathrooms',
    short: 'Choosing flooring',
    description: 'How luxury vinyl plank, tile, engineered wood and solid hardwood compare for basements, kitchens and bathrooms — and the subfloor prep every floor needs.',
    lede: 'The right floor depends on the room: moisture, traffic and what’s underneath matter more than the sample board.',
    image: 'project-basement-bar-shiplap',
    imageAlt: 'Basement bar area with shiplap walls and dark wood-look plank flooring, by DK Quality Construction',
    places: ['monroe-mi', 'temperance-mi'],
    relatedServices: ['flooring', 'basement-finishing', 'bathroom-remodeling', 'kitchen-remodeling'],
    ctaNoun: 'new flooring',
    intro: `<p>Flooring has to handle a different job in every room. A basement floor sits on concrete that can pass moisture. A kitchen floor takes spills and heavy traffic. A bathroom floor gets wet every day. Here’s how the common options match up, and the prep work that makes any floor last.</p>`,
    takeaways: [
      'Basements: luxury vinyl plank (LVP), tile or engineered products rated for below grade. Avoid solid hardwood.',
      'Bathrooms: tile or waterproof vinyl.',
      'Kitchens: LVP, tile or engineered wood, depending on the look you want and how you use the room.',
      'Every floor depends on a flat, dry, sound subfloor — and on the manufacturer’s installation rules.',
    ],
    sections: [
      {
        id: 'options',
        h: 'The main options',
        html: `<ul>
<li><strong>Luxury vinyl plank (LVP):</strong> wood-look planks that resist water. Rigid-core versions are stable and comfortable underfoot. Popular for basements and kitchens.</li>
<li><strong>Porcelain and ceramic tile:</strong> waterproof and very durable. Hard and cool underfoot; grout lines need occasional sealing or cleaning.</li>
<li><strong>Engineered wood:</strong> a real wood surface over a stable core. More tolerant of humidity changes than solid wood; check whether a product is rated for below-grade use.</li>
<li><strong>Solid hardwood:</strong> beautiful and refinishable, but sensitive to moisture. Not recommended below grade or in bathrooms.</li>
</ul>`,
      },
      {
        id: 'by-room',
        h: 'Room by room',
        html: `<div class="table-wrap"><table class="spec-table spec-table--wide">
<caption>Typical flooring fit by room</caption>
<thead><tr><th scope="col">Room</th><th scope="col">Good choices</th><th scope="col">Watch out for</th></tr></thead>
<tbody>
<tr><th scope="row">Basement</th><td>LVP, tile, below-grade-rated engineered</td><td>Slab moisture; solid hardwood</td></tr>
<tr><th scope="row">Bathroom</th><td>Tile, waterproof vinyl</td><td>Slippery finishes; materials that swell when wet</td></tr>
<tr><th scope="row">Kitchen</th><td>LVP, tile, engineered wood</td><td>Standing water at the sink and dishwasher</td></tr>
<tr><th scope="row">Living areas</th><td>Any, including solid hardwood</td><td>Sun fading; heavy furniture on soft surfaces</td></tr>
</tbody></table></div>`,
      },
      {
        id: 'subfloor',
        h: 'What’s underneath matters most',
        toc: 'Subfloor prep',
        html: `<p>Most flooring failures start below the floor:</p>
<ul>
<li><strong>Flatness:</strong> manufacturers set flatness tolerances, often as a maximum dip over a set distance. High spots get ground down; low spots get filled.</li>
<li><strong>Moisture:</strong> concrete slabs should be checked for moisture before flooring goes down, and a vapor barrier or underlayment used where the product calls for it.</li>
<li><strong>Soundness:</strong> squeaky or springy wood subfloors get fastened or reinforced first.</li>
<li><strong>Acclimation:</strong> some products need to sit in the room before installation; follow the manufacturer’s instructions.</li>
</ul>
<p>Following the manufacturer’s installation instructions also protects the warranty.</p>`,
      },
      {
        id: 'transitions',
        h: 'Transitions and trim',
        html: `<p>Plan where one floor meets another — at doorways, between rooms, and at stairs — and how heights line up. Good transitions and trim are what make a new floor look finished.</p>`,
      },
    ],
    faqs: [
      { q: 'Can flooring go over my existing floor?', a: '<p>Sometimes. It depends on the existing floor’s condition, how flat it is, and door and appliance clearances. We check at the estimate.</p>' },
      { q: 'Do you install flooring on its own?', a: '<p>Yes — on its own, or as part of a basement, kitchen or bathroom remodel.</p>' },
    ],
  },
  {
    slug: 'planning-a-new-garage-monroe-county-lucas-county',
    service: 'garages',
    date: PUBLISHED,
    topic: 'Garage construction',
    title: 'Planning a New Garage in Monroe & Lucas Counties | DK Quality',
    h1: 'Planning a new garage in Monroe County, MI or Lucas County, OH',
    short: 'Planning a new garage',
    description: 'Permits, setbacks and accessory-building rules for a new garage in Monroe County, MI and Lucas County, OH, plus attached vs. detached and what to decide first.',
    lede: 'A garage is a building, and it’s regulated like one. Here’s what to work out before you pick a size.',
    image: null,
    places: ['temperance-mi', 'ottawa-lake-mi', 'toledo-oh', 'oregon-oh', 'holland-oh', 'sylvania-oh'],
    relatedServices: ['garages', 'decks'],
    ctaNoun: 'a new garage',
    intro: `<p>Whether you’re adding a detached garage, replacing an old one or building an attached garage, the first questions aren’t about doors and siding. They’re about what your lot allows: how big, how close to the property lines, and which permits apply.</p>`,
    takeaways: [
      'A new garage needs a building permit and must meet local zoning: setbacks, height and lot coverage.',
      'Rules for detached “accessory” buildings differ from rules for attached garages.',
      'Attached garages need fire-resistant separation from the living space.',
      'Decide size, location and use before choosing a design.',
    ],
    sections: [
      {
        id: 'permits',
        h: 'Permits: what the local rules say',
        toc: 'Permits',
        html: `<p>A garage is a structure, and garages are large enough to need a building permit nearly everywhere. Examples from around our area:</p>
<ul>
<li><strong>Lucas County:</strong> Lucas County Building Regulations requires building permits for all structures over 200 square feet, along with zoning approval from the local township, village or city.</li>
<li><a href="/service-area/toledo-oh/"><strong>Toledo</strong></a>: accessory buildings under 200 square feet don’t need a building permit but do need a Certificate of Zoning Compliance — a garage will almost always be larger.</li>
<li><a href="/service-area/holland-oh/"><strong>Holland</strong></a> and <a href="/service-area/sylvania-oh/"><strong>Sylvania</strong></a>: the local zoning permit comes before the county building permit.</li>
<li><strong>Monroe County:</strong> your city, village or township issues the permit. Bedford Township (<a href="/service-area/temperance-mi/">Temperance</a>, <a href="/service-area/lambertville-mi/">Lambertville</a>) publishes a separate administrative application for accessory buildings of 200 square feet or less; a full-size garage goes through its building permit process with a site plan and drawings.</li>
</ul>`,
      },
      {
        id: 'zoning',
        h: 'Zoning: setbacks, size and coverage',
        toc: 'Zoning limits',
        html: `<p>Zoning decides where a garage can go and how big it can be. Examples:</p>
<ul>
<li><a href="/service-area/oregon-oh/"><strong>Oregon</strong></a>: accessory structures go in the rear yard, at least 3 feet from property lines and from the house, with a 30% coverage limit.</li>
<li><a href="/service-area/ottawa-lake-mi/"><strong>Whiteford Township</strong></a>: a building counts as accessory only if it’s structurally separate, total accessory building area is capped by lot size and rear-yard share, and anything attached to the house must meet the rules for the house itself.</li>
</ul>
<p>Corner lots, easements and utility lines can narrow the buildable area further. A site plan drawn from real measurements settles it.</p>`,
      },
      {
        id: 'attached-detached',
        h: 'Attached or detached?',
        html: `<ul>
<li><strong>Attached:</strong> convenient in bad weather and can share a wall with the house. It’s treated as part of the house under zoning, and the code requires a fire-resistant separation — typically drywall — between the garage and the living space.</li>
<li><strong>Detached:</strong> more flexibility on placement and design, and space for a workshop away from the house. It’s regulated as an accessory building, with its own size and setback limits.</li>
</ul>`,
      },
      {
        id: 'decide-first',
        h: 'Decide these before the design',
        toc: 'What to decide first',
        html: `<ol>
<li><strong>Use:</strong> parking only, or also a workshop, storage or hobby space?</li>
<li><strong>Size:</strong> how many vehicles, and what else needs room?</li>
<li><strong>Utilities:</strong> electrical, lighting, heat or water? Running them is easiest when planned from the start.</li>
<li><strong>Driveway and drainage:</strong> how vehicles reach it, and where roof and surface water goes.</li>
<li><strong>Matching the house:</strong> roof pitch, siding and trim so it looks like it belongs.</li>
</ol>`,
      },
    ],
    faqs: [
      { q: 'How close to the property line can I build a garage?', a: '<p>It depends on your zoning district and community. Some allow accessory buildings close to rear and side lines; others require more distance. We confirm the setbacks for your lot before design.</p>' },
      { q: 'Do I need a permit to replace an old garage on the same spot?', a: '<p>Generally yes — a new structure needs a building permit even where an old one stood, and current zoning applies.</p>' },
    ],
  },
];

export const postBySlug = (slug) => posts.find((p) => p.slug === slug);
export const postsForService = (slug) => posts.filter((p) => p.service === slug);
