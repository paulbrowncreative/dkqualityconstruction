# Project asset register

The readable companion to `project-assets-manifest.json`, which is the source of truth. This register is updated after every batch.

**Last updated:** October 10, 2026, after batch 1
**Workflow status:** batch 1 is processed and integrated. Waiting for batch 2. The project stays open until you confirm all batches have been uploaded.

## Hero image rule (client instruction)

Page heroes use DK's own photos in this order of preference:

1. **Aerial views of completed decks.** Decks are the main revenue source, so these always come first.
2. Wide-angle views of completed decks.
3. Wide-angle views of other completed projects.

Within each tier, the most visually compelling shot wins. These photos replace the stock heroes on the homepage first, then the Decks page, then other pages as suitable photos arrive.

## Totals

| | Count |
|---|---|
| Files received (all batches) | 5 |
| Inspected | 5 |
| Integrated on the website | 5 |
| Confirmed before-and-after pairs | 0 |
| Possible pairs awaiting your confirmation | 0 |
| Reviews transcribed | 0 |
| Reviews published | 0 |
| Needing clarification (details only, all already in use) | 5 |
| Could not be processed | 0 |

## Batches

| Batch | Received | Files | Asset IDs | Notes |
|---|---|---|---|---|
| 1 | 2026-10-10 | 5 | DKQ-01-01 to DKQ-01-05 | 4 completed decks (1 aerial), 1 completed basement. No EXIF data, no duplicates, no before-and-after photos, no reviews. |

## Assets

| ID | Original | Stored as | Type | Project | Original px | Where it's used |
|---|---|---|---|---|---|---|
| DKQ-01-01 | 1.jpg | project-basement-remodel-built-ins | Completed basement | P-005 | 1500×2000 | Projects; Home (Recent work); Basement page hero + Recent projects; Services |
| DKQ-01-02 | 2.jpg | project-deck-waterfront-covered | Completed deck, wide angle | P-002 | 2000×1500 | Projects; Home (deck specialty); **Decks page hero**; Services |
| DKQ-01-03 | 3.jpg | project-deck-aerial-privacy-screen | Completed deck, **aerial** | P-001 | 2000×1500 | **Homepage hero** (desktop + phone crop); Projects hero + card; Decks (Recent projects); social share image |
| DKQ-01-04 | 4.jpg | project-deck-cedar-tone-stairs | Completed deck | P-004 | 1500×2000 | Projects; Home (Recent work); Decks (composite card + Recent projects) |
| DKQ-01-05 | 5.jpg | project-deck-gray-corner-stairs | Completed deck | P-003 | 1500×2000 | Projects; Home (Recent work); Decks (Recent projects); About |

Each photo has responsive versions in AVIF and JPEG (640, 1024, and 1500/1600/2000 w). Thumbnail cards crop to a consistent 4:3, and selecting a card opens the full, uncropped photo.

## Projects

| Project | Title (describes only what is visible) | Category | Assets |
|---|---|---|---|
| P-001 | Raised deck with privacy screen and wide stairs | Decks | DKQ-01-03 |
| P-002 | Waterfront deck with a covered section | Decks | DKQ-01-02 |
| P-003 | Deck with wraparound corner stairs | Decks | DKQ-01-05 |
| P-004 | Deck with stairs down to a paver patio | Decks | DKQ-01-04 |
| P-005 | Basement remodel with built-in cabinets | Basement remodeling | DKQ-01-01 |

**Grouping check:** DKQ-01-02 and DKQ-01-03 have similar white-and-black railings, but I judged them to be **different projects**:

- **DKQ-01-02:** warm tan-gray boards, and the neighbor has white siding with shutters.
- **DKQ-01-03:** cool light-gray boards with a dark border and a privacy screen, and the neighbor has beige siding.

Tell me if they're actually the same job and I'll merge them.

## Before-and-after pairs

_None yet._ All five batch 1 photos show finished work. Pairs are matched only on visual evidence: the same fixtures, structure, materials and camera position. Upload order and file names are not used as evidence.

## Reviews

_None yet._ Testimonials and the Testimonials page will be added when review files arrive. Neither is published empty.

## Open questions for you

None of these block anything; the photos are already live with neutral captions.

1. **Materials.** The decks look like composite boards with aluminum or composite railings. Can you confirm, and name the brands if you'd like them mentioned? DKQ-01-04 sits on the Decks page "Composite decking" card, so that one matters most.
2. **Basement scope (DKQ-01-01).** Which parts did DK do: flooring, built-ins, ceiling paint, lighting?
3. **Locations.** Do you want city names in the captions? This is optional.
4. **DKQ-01-02 vs DKQ-01-03.** Are they separate projects? See the grouping check above.

## Stock imagery retired

Eight stock photos were removed from the site because real project photos replaced them:

- `deck-multilevel-cedar` and its portrait crop
- `deck-aerial-cedar`
- `deck-composite-black-rail`
- `deck-railing-evening`
- `deck-hardwood-modern`
- `basement-living-room`, the one with another company's watermark cropped out
- `carpentry-measuring-board`

**Still stock, until real photos arrive:**

- the fencing hero
- the bathroom and kitchen heroes
- the flooring and garages rows on Services
- the pressure-treated card on the Decks page

The footer now says that project photos are DK's own work and the remaining photos are licensed stock.

## How files are handled

- **Originals:** copied byte for byte to `assets-src/uploads/batch-NN/` and never edited. Each file gets a stable ID (`DKQ-<batch>-<seq>`), and exact duplicates are detected by SHA-256.
- **Website copies:** resized responsive versions in AVIF with a JPEG fallback. Corrections are conservative (exposure, white balance, mild sharpening). Nothing in a photo is added, removed or changed. No AI upscaling, because no such tool is available.
- **Reviews:** shown as accessible text. Screenshots are used only where they add authenticity, and any private details in them are redacted first. No `aggregateRating` or review schema is added for the company's own pages, following Google's guidelines on self-serving reviews.
