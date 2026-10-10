# DK Quality Construction: research and verification report

**Compiled:** October 10, 2026
**Purpose:** This report records every business fact the website relies on, where each fact came from, and what is still unverified. Every claim published on the site traces back to this document.

Each fact carries one of three levels:

- **VERIFIED**: fetched directly from the source named.
- **CORROBORATED**: reported by search-engine summaries of a source that could not be fetched directly. It is used only in cautious wording and needs owner confirmation.
- **UNVERIFIED**: not published on the site.

---

## 1. Business identity

| Fact | Value | Level | Source |
|---|---|---|---|
| Legal name | DK Quality Construction LLC | VERIFIED | [BBB profile][bbb] |
| Trading name and branding | DK Quality Construction | VERIFIED | [BBB][bbb], [Facebook][fb] (`og:title`) |
| Owner | Mr. David Kelly, Owner | VERIFIED | [BBB][bbb] |
| Phone | (734) 497-6773 | VERIFIED | [BBB][bbb] |
| Location | Monroe, MI 48161-3960 (no street address published) | VERIFIED | [BBB][bbb] |
| Facebook location label | "South Monroe MI" | VERIFIED | [Facebook][fb] (`og:title`) |
| Business start date | December 9, 2021 | VERIFIED | [BBB][bbb] |
| "Est. 2021" | Printed on the logo | VERIFIED | Facebook profile image |
| BBB accreditation | Accredited since March 2, 2023, A+ rating | VERIFIED (as of Oct 10, 2026) | [BBB][bbb] |
| BBB complaints | 0 in the last 3 years | VERIFIED (not published, because the figure changes) | [BBB][bbb] |
| BBB customer reviews | 4 reviews counted; review text not retrievable | VERIFIED count only | [BBB][bbb] |
| Employees | 1 (BBB) | VERIFIED | [BBB][bbb] |
| BBB business description | "We are dedicated to providing our customers top notch quality." | VERIFIED | [BBB][bbb] |
| Facebook followers | 1,011 | VERIFIED (not published) | [Facebook][fb] meta description |
| Facebook intro | "We offer a wide range of building services to Monroe County, MI and Lucas County, OH." | VERIFIED | [Facebook][fb] meta description |
| Decking specialty, treated and composite | Decking described as the main specialty, in treated and composite systems | CORROBORATED | Two search-engine summaries of the Facebook page and BBB |
| Facebook recommendation rate | "98% recommend (54 reviews)" | CORROBORATED, **not published** | Search-engine summary only |
| Email | DKQConstruction@gmail.com | CORROBORATED, **not published** | Search-engine summary of the Facebook page only |
| Website | None found | VERIFIED absence | BBB lists none; DNS for likely domains does not resolve |

## 2. Services (VERIFIED: BBB "Products and Services")

Decks, Garages, Basement Remodeling, Bathrooms, Fencing, Kitchens, Flooring.
BBB categories also include General Contractor, Fence Contractors and Patios and Decks.

**Website treatment:**

- **Dedicated pages:** Decks (the specialty), Fencing, Basement Remodeling, Bathroom Remodeling, Kitchen Remodeling.
- **Sections on `/services/`:** Flooring and Garages. There was not enough verified detail to justify standalone pages without making them thin.

## 3. Service area (VERIFIED)

- BBB: "Monroe county, Lucas County and surrounding areas"
- Facebook: "Monroe County, MI and Lucas County, OH"

The site names both counties. The community lists on the site are municipalities and townships inside those two counties, used as examples ("communities we serve include"). It makes no claim to work in any specific community beyond the county-level service area. **Owner to confirm** the list and any exclusions.

## 4. Name disambiguation

These businesses are different companies and must not be confused with DK Quality Construction:

- **Quality Construction & General Repair**, 1718 Faulhaver Rd, Monroe, MI, (734) 243-8860. A separate family-owned company.
- **DK Quality Construction**, Temecula, California (Yelp). Unrelated.
- **DK Construction** businesses in IN, CO, UT and MI (Sanford), the UK, and **DKS Quality Construction** (NY). All unrelated.

## 5. Brand assets found

| Asset | Source | Use |
|---|---|---|
| Logo: chrome emblem with roofs and crossed hammers, "DK QUALITY CONSTRUCTION" with a brass rule, "EST. 2021", on black. 720×720 JPG | Facebook profile image | Converted to a transparent full logo, header emblem, favicons and an OG image. **A vector or original logo file is needed** (see the owner checklist). |
| Brand colors | Derived from the logo: near-black `#121214`, chrome/steel, brass `#C4903F` | Design tokens in `src/assets/css/main.css` |
| Project photography | Facebook photos exist but sit behind the login wall and could not be accessed | **None of DK's own photos are used.** Licensed stock is used and disclosed. |

## 6. Competitor research

The Monroe market splits into two kinds of competitor:

- Deck specialists headquartered in metro Detroit that list Monroe County as a service area.
- Local generalists whose web presence is mostly directory listings.

| Competitor | Presence reviewed | Strengths | Weaknesses and opportunity |
|---|---|---|---|
| Custom Deck Creations (Farmington Hills; lists Monroe, Temperance, Lambertville, Erie, Dundee) | [Website](https://customdeckcreations.com/service-area/) | Strong trust infrastructure: license # in the footer, warranty and price-lock offers, about 395 Google reviews, TrexPro, 25 city pages, an online estimator | Unsubstantiated superlatives; review text naming other companies; a long keyword list of about 100 towns; based about an hour from Monroe |
| Bendelow Building Co. (South Rockwood) | [Website](https://www.bendelowbuildingco.com/monroe-county-mi) | Clear headline; Trex and roofing certifications; Monroe County page; FAQ | No on-page quote form; typos; inconsistent radius (15 vs. 20 mi); unlabeled "Button" links (an accessibility problem) |
| Decks Unlimited (Flat Rock area) | BuildZoom and Yellow Pages listings only | MI Residential Builder license shown on BuildZoom; permit history | Inconsistent phone numbers across directories; no website found |
| SpaceStars Deck Builders | HomeAdvisor listing | 4.8 rating from 41 reviews (HomeAdvisor) | Directory-dependent |
| Buckwood Builders | HomeAdvisor and Angi | Positive reviews | No website found |
| Harris McClain Kitchen & Bath (Monroe) | HomeGuide listing | Design-build interiors; established in 1989 | Interiors only, no decks |
| Wolverine Contracting, Matrix Basement Finishing | HomeAdvisor | Many reviews (69 and 60) | Interiors only |

**Where DK can win**

1. **Own the "local, owner-led deck specialist" position.** No reviewed competitor combines a Monroe base, an owner you talk to directly, and both deck materials.
2. **Be the fastest site to request an estimate from.** The form is on every key page, there is click-to-call everywhere, and a sticky mobile CTA keeps both in reach.
3. **Explain more and claim less.** Competitors lean on superlatives. DK's pages explain frost depth, ledger flashing, composite joist spacing, permits and 811. That useful content builds trust and topical relevance.
4. **Cover both states.** Michigan–Ohio coverage is rare among the Monroe-based firms reviewed.

**Gaps DK must close to compete with the leaders.** These are owner actions; see the QA report:

- Michigan Residential Builder license number shown on the site
- Real project photos
- Google Business Profile with reviews
- Warranty statement
- Manufacturer certifications, if any (Trex, TimberTech and so on)

## 7. Keyword and search-intent map (qualitative)

No keyword-volume tool was available in this environment (the Ahrefs and Similarweb connectors were not authorized). **No search volumes, difficulty scores or rankings are claimed.** The map below rests on observed competitor targeting and on standard local-service intent patterns.

| Page | Primary intent / topic | Supporting terms (natural use, no stuffing) |
|---|---|---|
| `/` | deck builder / remodeling contractor Monroe MI (local, commercial) | contractor Monroe Michigan, Monroe County, Lucas County |
| `/services/decks/` | deck builder Monroe MI (transactional, local) | composite deck, pressure-treated deck, deck replacement, deck permit, Toledo deck builder |
| `/services/fencing/` | fence installation Monroe County (transactional) | privacy fence, pool fence, fence permit, MISS DIG 811 |
| `/services/basement-finishing/` | basement remodeling Monroe MI | basement finishing, egress window, basement flooring |
| `/services/bathroom-remodeling/` | bathroom remodeling Monroe MI | tub-to-shower conversion, shower tile, bathroom ventilation |
| `/services/kitchen-remodeling/` | kitchen remodeling Monroe MI | cabinets, countertops, layout |
| `/services/` | home improvement services Monroe (navigational, commercial) | flooring installation, garages |
| `/service-area/` | contractor serving Monroe County and Lucas County (local) | community names |
| `/about/` | brand and navigational: "DK Quality Construction", "David Kelly" | BBB accredited |
| `/contact/` | "DK Quality Construction phone / estimate" (navigational, transactional) | request an estimate |

**Cannibalization guard:** the homepage targets the brand plus a broad contractor query. Each service page owns its service-plus-Monroe query. There are no city-swapped doorway pages.

## 8. Sitemap

```
/                               Home
/services/                      Services overview (incl. #flooring, #garages)
/services/decks/                Decks (specialty)
/services/fencing/              Fencing
/services/basement-finishing/   Basement remodeling
/services/bathroom-remodeling/  Bathroom remodeling
/services/kitchen-remodeling/   Kitchen remodeling
/service-area/                  Monroe County MI + Lucas County OH
/about/                         About / owner
/contact/                       Request an estimate (form) + phone
/privacy-policy/                Privacy policy
/thank-you/                     Form confirmation (noindex)
/404.html                       Custom 404 (noindex)
```

**Pages deliberately not built:**

- **Projects/Gallery:** there are no authorized project photos yet.
- **Reviews:** no review text is reusable with permission.
- **Individual city pages:** there is no unique local content to support them yet.
- **Blog:** out of scope until content and owner input exist.

See the P2 and P3 items in the QA report for each of these.

## 9. Claims deliberately NOT published

| Claim | Reason |
|---|---|
| Licensed / insured, and license numbers | Not verifiable from any public source found |
| Warranties or guarantees | None found |
| Financing | None found |
| "Free" estimates | Not verified. The site says "Request an Estimate" and "No obligation" only |
| Years of experience beyond "Est. 2021" | Not verified |
| Review quotes, star ratings, review counts, the 98% figure | Review text was not accessible, and there is no reuse permission |
| Email address | Only corroborated by search summaries, not verified |
| Business hours | Not published anywhere found |
| Street address and geo-coordinates | Not published (service-area business). BBB coordinates are a ZIP centroid. |
| Manufacturer certifications (Trex, etc.) | None found |
| Project counts, customers served | None found |

[bbb]: https://www.bbb.org/us/mi/monroe/profile/general-contractor/dk-quality-construction-llc-0422-211007299
[fb]: https://www.facebook.com/DKQConstruction/
