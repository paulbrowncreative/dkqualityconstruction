# DK Quality Construction: website QA and launch report

| | |
|---|---|
| **Report date** | October 10, 2026 |
| **Project** | Production website for DK Quality Construction LLC (Monroe, MI) |
| **Repository branch** | `claude/brave-bohr-tad6w7` |
| **Deliverable ZIP** | `DK-Quality-Construction-Website.zip` |

**How to read this report.** Every result below comes from a test that was actually run in this environment, unless it is explicitly marked **NOT TESTED** or **REQUIRES ACCESS**. Lab metrics are local Lighthouse runs, not field data from real users.

---

## 1. Executive summary

**What was built.** A complete, custom-designed, mobile-first static website: 11 indexable pages, plus a thank-you page and a 404 page. It is built for Netlify, with:

- a working Netlify Forms estimate-request flow
- click-to-call on every page
- local-SEO structured data
- security headers
- an automated QA toolkit

**How it tested.** The built site passes every automated check that was run:

| Check | Result |
|---|---|
| Functional, responsive and accessibility tests (Playwright) | 41 of 41 passed (2 cross-engine smoke tests skipped: engines not installed) |
| axe-core, WCAG 2.2 AA + best practice | 0 violations, 13 pages, mobile and desktop |
| HTML validation (html-validate) | Valid, 0 errors |
| JSON-LD | 141 typed nodes valid against the schema.org vocabulary |
| Lighthouse, mobile lab | Performance 99–100; Accessibility, Best Practices and SEO 100 |
| Lighthouse, desktop lab | 100 in all four categories |
| Mobile LCP (lab) | 1.4–2.3 s |
| CLS (lab) | 0 |
| Dependency audit | 0 runtime dependencies; QA tooling has 0 known vulnerabilities |

**Launch status: NOT YET READY for production.** The code is complete and tested, but three launch blockers need your input or account access (section 16, P0):

1. The production domain (`SITE_URL`)
2. Netlify form detection and notification setup, followed by a live test submission
3. Business-owner approval of the published facts and copy

No company facts, reviews, credentials, test results or metrics were invented. The site uses licensed stock photography, disclosed as such, because none of DK's own project photos were publicly accessible.

---

## 2. Research completed

The full report, with sources, is in [`docs/research.md`](docs/research.md).

### Sources checked

| Source | Result |
|---|---|
| BBB profile | Fetched directly. This is the primary source of facts. |
| Facebook page | Metadata and logo retrieved. Posts, photos and reviews are behind the login wall. |
| Web searches | Run for Google-indexed listings, Yelp, Angi, HomeAdvisor, Houzz, Thumbtack, Instagram and Nextdoor. No DK Quality Construction listings were found on those platforms. |
| Likely domains | `dkqualityconstruction.com` and variants do not resolve. There is no existing website. |

**Name disambiguation:** "Quality Construction & General Repair" (Monroe) and "DK Quality Construction" (Temecula, CA) are separate companies.

### Competitors reviewed

- **Two websites analyzed in depth:** Custom Deck Creations and Bendelow Building Co.
- **Five more businesses reviewed through directory listings:** Decks Unlimited, SpaceStars, Buckwood Builders, Harris McClain, and Wolverine/Matrix.

### Keyword research

This was qualitative only. No keyword tool was available, because the Ahrefs and Similarweb connectors need authorization. **No search volumes, difficulty scores or rankings are claimed anywhere.** The intent-to-page map is in `docs/research.md` §7.

**Limitations:**

- Google Business Profile data could not be accessed directly.
- Review text on BBB and Facebook could not be retrieved.

## 3. Verified company information

| Item | Value | Source |
|---|---|---|
| Legal name | DK Quality Construction LLC | BBB |
| Owner | David Kelly | BBB |
| Phone | (734) 497-6773 | BBB |
| Location | Monroe, MI 48161 (no street address published) | BBB |
| Founded | Business start date December 9, 2021 ("Est. 2021" on the logo) | BBB, logo |
| BBB | Accredited since March 2, 2023, A+ rating | BBB, as of Oct 10, 2026 |
| Services | Decks, Garages, Basement Remodeling, Bathrooms, Fencing, Kitchens, Flooring | BBB |
| Service area | Monroe County, MI and Lucas County, OH | BBB, Facebook |
| Decking specialty, treated and composite | Corroborated by search summaries; **owner to confirm** | Facebook (via search index) |

**Withheld from the site because they are unverified:**

- email address
- review quotes and counts
- the "98% recommend" figure
- licensing and insurance
- warranties
- financing
- business hours
- street address

## 4. Pages and features implemented

### Pages

| URL | Purpose | Primary conversion |
|---|---|---|
| `/` | Hero, credentials strip, deck specialty with material comparison, service index, 4-step process, "Why DK", service area, FAQ, inline estimate form | Estimate form, call |
| `/services/` | All 7 services, including the Flooring and Garages sections | Service pages, estimate |
| `/services/decks/` | Flagship page: materials comparison tables, build considerations (frost depth, ledger, joists, guards and permits), gallery, FAQ | Estimate |
| `/services/fencing/` | Fencing, with property line, MISS DIG 811 / OHIO811, local rules and pool barriers | Estimate |
| `/services/basement-finishing/` | Basement remodeling | Estimate |
| `/services/bathroom-remodeling/` | Bathroom remodeling | Estimate |
| `/services/kitchen-remodeling/` | Kitchen remodeling | Estimate |
| `/service-area/` | Both counties with community lists and two-state code notes | Call, estimate |
| `/about/` | Owner-led story, facts list, link to the Facebook work feed | Estimate |
| `/contact/` | Full estimate form, phone, what to include | Form submission |
| `/privacy-policy/` | Covers form data, Netlify processing and analytics. The analytics wording adapts to whether GA4 is enabled. | — |
| `/thank-you/` | Confirmation page, `noindex`, fires `generate_lead` | — |
| `/404.html` | Custom 404, `noindex`, links to services | — |

### Features

**Design system**

- The palette comes from the logo: black, chrome and a brass rule.
- One self-hosted variable font, Archivo, subset to 37 KB.
- A dimension-line motif borrowed from construction drawings.

**Navigation**

- Sticky header with click-to-call.
- An accessible Services disclosure dropdown.
- A full-screen mobile menu.
- A sticky mobile Call / Estimate bar. It hides itself while a form is on screen and while the menu is open.

**Estimate form (Netlify Forms)**

- 5 required fields; an optional project description; preferred contact method; an optional photo upload of up to 8 MB.
- Honeypot spam trap.
- Client-side validation with inline, accessible error messages and an error summary.
- AJAX submission, with a no-JS fallback POST to `/thank-you/`.
- Loading and failure states, with a phone number as the fallback.

**Analytics**

- Event tracking: `generate_lead` (deduplicated), `form_start`, `click_call`.
- GA4 is wired but off until an ID is provided.

**Build integrity**

The build fails on any of the following:

- a broken link, asset or `#anchor`
- a page with more or fewer than one H1
- a duplicate title

## 5. SEO implementation

| Element | Status | Evidence |
|---|---|---|
| Unique titles (≤ 66 chars) and meta descriptions (≤ 160) | Done | Automated SEO check passed on all pages |
| One H1 per page; no heading-level skips | Done | Build check + automated test |
| Canonical URLs | Done | Driven by `SITE_URL`. Verified a production build emits `https://<domain>/…` with 0 localhost references. |
| Open Graph + Twitter cards | Done | 1200×630 branded OG image |
| XML sitemap | Done | 11 indexable URLs; excludes `/thank-you/` and the 404 |
| robots.txt | Done | Production: `Allow: /` + Sitemap. Previews and branch deploys: `Disallow: /` + meta `noindex`. All three contexts were tested. |
| Structured data | Done | `WebSite`, `GeneralContractor` (`@id`-linked), `WebPage`, `BreadcrumbList` on inner pages, `Service` on service pages. Validated against the schema.org vocabulary: 0 errors. |
| No fabricated ratings or reviews in schema | Confirmed | No `aggregateRating` or `review` |
| FAQPage schema | Deliberately omitted | Google limits FAQ rich results to authoritative government and health sites. The FAQ content still serves users. |
| Internal linking | Done | Contextual links between related services, the FAQ, the service area and contact. Every page is reachable; there are no orphans. |
| Image SEO | Done | Descriptive file names, descriptive alt text, explicit dimensions, AVIF |
| Redirects | Done | `/contact-us`, `/estimate`, `/decks`, `/fencing`, `/privacy`, `/service-areas` → canonical pages (301, `_redirects`) |
| 404 status | Done | Unknown URLs return a real 404 with the custom page (tested on the local server; Netlify behaves the same with `404.html`) |

## 6. Local SEO implementation

- **NAP consistency.** The name, phone and "Monroe, MI 48161" come from a single config file and appear identically in the footer, contact page and JSON-LD.
- **Service-area business.** No street address, no geo-coordinates, no fake office. `areaServed` lists both counties as `AdministrativeArea`.
- **Local content.** It is written specifically for the area, not a city-name swap:
  - Michigan's 42-inch frost depth
  - MISS DIG 811 and OHIO811
  - two-state permit and code differences
  - the River Raisin and Maumee River references
  - spring-to-fall deck season
- **No city doorway pages.** There is one Service Area page, with community lists for each county.
- **`sameAs`** links to the verified Facebook and BBB profiles.
- **Google Business Profile.** None could be confirmed. Creating or verifying one is the single biggest local-SEO lever (P1-3).

## 7. Photography and asset inventory

The full inventory, with source URLs, photographers and licenses, is in [`docs/asset-inventory.md`](docs/asset-inventory.md).

### Photos

- **What's used:** 13 Unsplash-licensed photos plus one derived mobile crop. Originals are stored separately in `assets-src/`.
- **Optimized output:** 640, 1024 and 1600 w (2000 w for the hero), in AVIF and JPEG.
- **Disclosure:** the photos are never captioned as DK projects. The footer says: "Photography on this site is licensed stock imagery used for illustration."
- **Other contractors' work:** some images were uploaded by other contractors (Proper Construction, Smart Renovations). One basement image carried that company's watermark, which was cropped out (the Unsplash License permits modification). **Replacing these with DK's own photos is P1-1.**
- **No AI upscaling or generative edits were made.** No such tool was available, and the 2400 px sources didn't need it.

### Logo

- Taken from the company's Facebook profile image (720 px JPG).
- The black field was converted to transparency, which produced the header emblem, footer logo, favicons, apple-touch icon and OG image.
- **A vector or high-resolution original is still needed (P1-5).**

## 8. Accessibility testing

| Test | Result | Evidence |
|---|---|---|
| axe-core 4.11, tags wcag2a/aa, wcag21a/aa, wcag22aa, best-practice; 13 pages × mobile + desktop | **0 violations** (after fixes) | `qa/reports/test-results.json` |
| Lighthouse Accessibility | 100 on all 10 runs | `qa/reports/lighthouse/` |
| Keyboard: skip link first, visible, moves focus to `<main>` | Pass | test.mjs |
| Keyboard: Services dropdown opens, Tab moves into it, Esc closes and returns focus | Pass | test.mjs |
| Mobile menu: `aria-expanded`, Esc closes, focus returns to the toggle | Pass | test.mjs |
| Form: labels, `aria-describedby` hints and errors, `aria-invalid`, focus moved to the first invalid field, `role="alert"` summary; errors marked with icon + text, not color alone | Pass | test.mjs + screenshot `docs/screenshots/form-validation-errors.jpg` |
| Tap targets ≥ 44 px (buttons, inputs, CTAs) | Pass | test.mjs |
| `prefers-reduced-motion` | Transitions disabled | test.mjs |
| Contrast | Tokens chosen for AA. Brass `#C4903F` is used only on dark backgrounds or as a button fill with dark text; `#8A5A1C` is used for text on light backgrounds. | axe color-contrast passes |

**Defects found and fixed**

- **Brass step numbers failed contrast on light backgrounds (axe, serious).** Changed to the darker brass.
- **The mobile CTA bar was outside any landmark.** Wrapped in `<nav aria-label="Quick contact">`.
- **Nested `<aside>` elements tripped the complementary-landmark rule.** Changed to `<div>`.
- **The `hidden` attribute was overridden by CSS on error messages, so error icons showed on load.** Added a global `[hidden]` rule.

**Not tested:**

- Manual screen-reader passes (VoiceOver, NVDA, TalkBack). Automated tools do not replace these. This is P2-6.

## 9. Performance testing

### Lighthouse 13.5.0 lab results

These are local runs: mobile uses simulated slow 4G with 4× CPU throttling; desktop uses the desktop preset. The local server gzips text, as Netlify does.

| Page | Device | Perf | A11y | BP | SEO | LCP | CLS | TBT | Transfer |
|---|---|---|---|---|---|---|---|---|---|
| `/` | Mobile | 99 | 100 | 100 | 100 | 2.3 s | 0 | 0 ms | 277 KB |
| `/services/decks/` | Mobile | 100 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms | 147 KB |
| `/contact/` | Mobile | 100 | 100 | 100 | 100 | 1.4 s | 0 | 0 ms | 63 KB |
| `/services/` | Mobile | 99 | 100 | 100 | 100 | 2.1 s | 0 | 0 ms | 298 KB |
| `/about/` | Mobile | 100 | 100 | 100 | 100 | 1.4 s | 0 | 0 ms | 99 KB |
| `/` | Desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms | 294 KB |
| `/services/decks/` | Desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms | 328 KB |
| `/contact/` | Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0 | 0 ms | 100 KB |
| `/services/` | Desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms | 181 KB |
| `/about/` | Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0 | 0 ms | 115 KB |

**Why the SEO scores are 100 here.** These runs used an indexable build (`FORCE_INDEXABLE`). A default local build is intentionally `noindex` and scores 69 on SEO.

### Optimizations made

The first run showed a mobile home LCP of 2.9 s. These changes brought it to 2.3 s:

1. **Font subset and axis limits:** 90 KB → 37 KB.
2. **Art-directed 4:5 hero crop for phones,** with media-specific preloads.
3. **Header emblem replaced with a 160 px WebP:** 59 KB PNG → 7 KB.
4. **Footer logo resized:** 54 KB → 37 KB.

### Other performance measures

- 8 KB of JavaScript in total, with no framework and no third-party scripts unless GA4 is enabled.
- CSS and JS file names are fingerprinted for immutable caching.
- Explicit image dimensions everywhere.
- Lazy loading below the fold.

**Not measured:**

- Field Core Web Vitals (CrUX). These need real traffic after launch.
- INP. Lighthouse lab runs cannot measure it; TBT (0 ms) is the lab proxy.

## 10. Security review

| Check | Result |
|---|---|
| Secrets, API keys or tokens in the code | None. Grep scan was clean. GA4 and GSC IDs come from environment variables only, and neither is secret. |
| Runtime dependencies | **Zero.** The build uses only Node built-ins. |
| QA tooling dependencies (`qa/`, never deployed) | `npm audit`: **0 vulnerabilities** after upgrading Lighthouse 12.8.2 → 13.5.0. The earlier version pulled in 27 transitive advisories. |
| Security headers (`_headers`) | HSTS, CSP, X-Content-Type-Options, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, COOP |
| Content-Security-Policy | No `unsafe-inline` and no `unsafe-eval`. Enforced in-browser on all 13 pages with **0 violations** (test.mjs). GA4 hosts are pre-allowed. |
| Unsafe HTML or user-input rendering | None. Form input is never rendered back into the page; Netlify stores submissions. |
| Mixed content and `http://` references | 0 in the production build |
| Source maps, debug code, `console.*` | None shipped |
| Form spam | Netlify honeypot (`company_website`) plus Netlify's built-in filtering. Add reCAPTCHA only if spam appears (P2-3). |
| Personal data | Only what an estimate needs is collected. The privacy policy discloses the Netlify processing. |

## 11. Functional testing

All Playwright tests below ran against the built `dist/` on the local server.

| Test | Result |
|---|---|
| All internal links, assets and anchors resolve (13 pages) | Pass. Enforced by the build integrity check, plus HTTP 200 on every internal URL. |
| External links | Facebook 200 and Netlify privacy page 200. BBB returns 403 to command-line HTTP clients (bot protection) but loads normally in a browser and via a fetch tool during research. |
| Desktop dropdown, mobile menu, skip link | Pass |
| Telephone links | `tel:+17344976773`: 96 links across 13 pages (10 on the homepage); the `click_call` event fires once per click |
| Email links | None published, because no email is verified |
| Empty form submission | Pass: 5 fields flagged, focus moved to the first, summary announced |
| Invalid email | Pass: inline message |
| Valid submission | Pass: multipart POST containing `form-name=estimate` → redirect to `/thank-you/` → `generate_lead` fired **exactly once**. A reload fires 0. |
| Server error during submission | Pass: error message with the phone fallback; button re-enabled |
| GA4 loader (with a test ID) | Pass: `gtag/js` loads, `config` is queued, a page_view hit is sent to `google-analytics.com/g/collect` |
| 404 | Pass: unknown URL → 404 status + custom page |
| **Live Netlify form submission and email notification** | **REQUIRES ACCESS.** Not testable without the business's Netlify account (P0-2). The local server only simulates Netlify's 200 response. |

## 12. Responsive and visual QA

**Automated checks.** Every page was tested at **320, 375, 414, 768, 1024, 1280, 1440 and 1920 px**:

- no horizontal overflow
- all images load
- no console or JS errors

All passed.

**Manual review.** Full-page screenshots of every page were reviewed at 375 and 1440 px, plus these interactive states:

- mobile menu open
- desktop dropdown open
- form errors
- 320 px home

Samples are in `docs/screenshots/`.

**Defects found and fixed**

| Defect | Fix |
|---|---|
| The header overflowed to 358 px at a 320 px viewport | Small-phone header sizing |
| The hero eyebrow broke into columns on mobile, because flex items were split into separate text runs | Changed to block layout |
| The eyebrow over the photo was hard to read on phones | Stronger mobile overlay |
| The sticky CTA label wrapped at 320 px | `nowrap` and tighter padding |
| The composite-decking card showed a hardwood deck | Swapped for a composite deck photo |
| Error icons showed before validation | Fixed by the `[hidden]` rule (section 8) |

**Cross-browser coverage**

- **Tested:** Chromium only. WebKit and Firefox engines are not installed here; the test suite includes smoke tests that run where they are installed.
- **NOT TESTED:** real Safari (iOS/macOS), Firefox and Edge, and real devices (P1-8).
- **Why risk is low:** the code uses widely supported features (CSS grid, `<picture>`/AVIF with a JPEG fallback, `<details>`, `fetch` + `FormData`).

## 13. Production build results

```
$ CONTEXT=production SITE_URL=https://www.example-dkq.com node build.mjs
[build] context=production url=https://www.example-dkq.com indexable=true ga4=off
[build] rendered 13 pages
[build] ok — 117 files, 12.1 MB, ~85 ms
```

- The build is reproducible with no `npm install`, using Node ≥ 20 (Netlify is pinned to Node 22).
- **Size:** 12.1 MB, almost all of it responsive image variants. A typical page transfers 63–330 KB.
- **Output:** `dist/`. It contains the HTML, `assets/`, `sitemap.xml`, `robots.txt`, `site.webmanifest`, `_headers`, `_redirects` and `favicon.ico`.

**Verified build modes**

| Mode | Result |
|---|---|
| Production with `SITE_URL` | Indexable; canonicals use the domain; 0 localhost references |
| Production without `SITE_URL` | Falls back to Netlify's `URL`, with a warning |
| deploy-preview | `noindex` + Disallow |
| GA4 on | Analytics script and privacy text switch on |

## 14. Deployment readiness

| Area | Status |
|---|---|
| Code, build and Netlify config | ✅ Complete |
| Headers and redirects (Git and ZIP deploys) | ✅ Complete (`_headers` and `_redirects` live in the publish folder) |
| Production domain / `SITE_URL` | ⛔ Needs your input (P0-1) |
| Netlify Forms detection, notification, live test | ⛔ Needs Netlify access (P0-2) |
| Owner approval of facts and copy | ⛔ Needs the business owner (P0-3) |
| GA4, Search Console | ⏳ Optional at launch; needs IDs and access (P1-6) |

### Deployment instructions (Deliverable D)

**Already done in this project:**

- build command, publish directory and Node version (`netlify.toml`)
- security headers, caching and redirects (`_headers`, `_redirects`)
- form markup, honeypot and success page
- sitemap and robots logic
- noindex for previews
- GA4 and GSC hooks

**Steps that need your access:**

1. **Extract the ZIP.**

   ```bash
   unzip DK-Quality-Construction-Website.zip
   ```

   You get a `DK-Quality-Construction-Website/` project folder. A Node build is required (`node build.mjs`); there is no `npm install`.

2. **Choose a deploy method.**
   - **Recommended: Git.** Push the folder to a GitHub repo (or use this repository). In Netlify, choose Add new site → Import an existing project. The build command `node build.mjs` and publish directory `dist` are read from `netlify.toml`.
   - **Manual.** Run this locally (Node 20+):

     ```bash
     CONTEXT=production SITE_URL=https://www.yourdomain.com node build.mjs
     ```

     Then drag `dist/` into Netlify → Sites → Deploy manually.

3. **Set environment variables.** In Site configuration → Environment variables:
   - `SITE_URL=https://www.yourdomain.com` (required)
   - `GA4_MEASUREMENT_ID` (optional)
   - `GOOGLE_SITE_VERIFICATION` (optional; prefer DNS verification)

   Then trigger a redeploy.

4. **Set up forms.**
   1. In Forms, click **Enable form detection**, then redeploy.
   2. Confirm that a form named `estimate` appears.
   3. In Forms → Form notifications → Email notification, send to the business inbox.
   4. Uploaded photos appear as links in each submission. Netlify caps each request at 8 MB, which the form already enforces.

5. **Connect the domain and HTTPS.**
   1. In Domain management → Add domain, follow the DNS instructions.
   2. Once DNS resolves, Netlify provisions a Let's Encrypt certificate automatically.
   3. Enable **Force HTTPS**.
   4. Pick `www` or the apex domain as primary, and make `SITE_URL` match it.

6. **Verify forms.** On the live site, submit a real test request with a photo, then confirm all three:
   - it appears under Forms → estimate
   - the notification email arrives
   - `/thank-you/` loads

7. **Connect Google Search Console.**
   1. Add a Domain property and verify it with a DNS TXT record.
   2. Submit `https://www.yourdomain.com/sitemap.xml` under Sitemaps.
   3. Use URL Inspection on `/` and `/services/decks/` to request indexing.

8. **Set up GA4.**
   1. Create a GA4 property and web stream, and copy the `G-…` ID.
   2. Set `GA4_MEASUREMENT_ID` in Netlify and redeploy.
   3. In GA4 → Admin → Events, mark `generate_lead` as a key event; optionally also `click_call`.
   4. Check DebugView while submitting a test lead.

9. **Post-launch verification.**
   1. Check `https://yourdomain/robots.txt`. It must show `Allow: /` and the Sitemap line.
   2. View the page source. The canonical must point to your domain, and `meta robots` must say `index`.
   3. Visit an unknown URL; it should return the 404 page.
   4. Visit `/decks`; it should 301 to `/services/decks/`.
   5. Run the Rich Results Test and PageSpeed Insights on `/`.
   6. Check the headers at securityheaders.com.
   7. Re-run `qa/test.mjs` against the live URL:

      ```bash
      node test.mjs https://www.yourdomain.com
      ```

      The form-submission tests will create real submissions there; delete them afterwards.

## 15. Known limitations

1. **No authentic DK project photography.** The Facebook photos are behind the login wall and there is no reuse permission. The stock imagery is clearly disclosed, but it is the biggest gap in persuasiveness.
2. **No customer reviews are displayed.** BBB lists 4 reviews and Facebook reportedly shows a recommendation rate, but the review text wasn't accessible and there's no permission to reuse it. The site links to both profiles instead.
3. **License, insurance, warranty and hours are absent.** They couldn't be verified, and competitors display them.
4. **The logo source is a 720 px JPG** from Facebook. It is adequate for the web at current sizes, but not for print or large display.
5. **Keyword research is qualitative.** No volume data was available.
6. **Testing gaps.** Only Chromium was tested; there was no real-device testing and no live Netlify Forms test.
7. **Community lists** on the Service Area page are representative municipalities within the verified counties, not an owner-confirmed list.

## 16. Outstanding issues register (Deliverable C)

### P0: launch blockers

| # | Problem | Why it matters | Affected | Fix | Needs |
|---|---|---|---|---|---|
| P0-1 | The production domain is unknown, so `SITE_URL` is unset | Canonical tags, the sitemap, OG URLs and JSON-LD would point at the Netlify subdomain, which splits SEO signals when the domain is added later | `site.config.mjs` (env), all pages | Register or choose the domain, set `SITE_URL` in Netlify, redeploy | **Your input** + Netlify access |
| P0-2 | Lead capture hasn't been verified on Netlify | Netlify form detection must be enabled and a notification recipient set. Until a live submission arrives by email, the site may not deliver leads. | `/contact/`, homepage form | Steps 4 and 6 in section 14 | **Netlify account access** + business inbox |
| P0-3 | The owner hasn't approved the published facts and copy | The site represents a real business. These statements need sign-off: "owner-led / talk directly with David Kelly"; "decks are our specialty", treated and composite; the community lists; the 4-step process (site visit, estimate with scope and materials, walkthrough); "No obligation"; deck replacement; the fence/pool scope; the garage wording. Use of the logo also needs the business's authorization. | All pages, mainly `/`, `/about/`, `/services/*` | Owner reviews and confirms or corrects; edit `site.config.mjs` and `src/pages/*` | **Business-owner approval** |

### P1: high priority

| # | Problem | Why it matters | Affected | Fix | Needs |
|---|---|---|---|---|---|
| P1-1 | Stock photos instead of DK's own work. Some show other contractors' projects, including a cropped watermark. | Real project photos are the strongest trust and conversion asset for a contractor | All service pages, home | Supply 15–40 project photos (decks first), then run `scripts/process-images.py`. Add a Projects gallery (P2-1). | **Owner photos** + permission |
| P1-2 | No license or insurance information | Michigan homeowners and competitors expect a Residential Builder license number. It is a major trust signal near the form. | Footer, `/about/`, contact | Confirm the MI license # (and OH registration, if any) and insurance; add them to `site.config.mjs` and the footer | **Owner** |
| P1-3 | No verified Google Business Profile | The single most important local-SEO asset (map pack, reviews) | Off-site; `sameAs` in JSON-LD | Create or verify a GBP as a service-area business with matching NAP; add its URL to `sameAs`; start requesting reviews | **Owner Google account** |
| P1-4 | Business email unconfirmed | Some users prefer email, and email adds NAP completeness | `site.config.mjs` → `business.email` | Confirm `DKQConstruction@gmail.com` (or another), set it in config | **Owner** |
| P1-5 | Low-resolution logo only | Limits sharpness on high-DPI screens and in print | Header, footer, OG | Supply the original vector or ≥ 2000 px PNG; rerun the brand step | **Owner/designer** |
| P1-6 | GA4 and Search Console not connected | No conversion measurement or indexing visibility | Env vars | Section 14, steps 7–8 | **IDs + Google account access** |
| P1-7 | Business hours unknown | Users and GBP expect hours. They were left out of schema rather than guessed. | Footer, contact, JSON-LD (`openingHoursSpecification`) | Owner provides hours; add them to config and schema | **Owner** |
| P1-8 | Not tested on real Safari, Firefox, Edge or devices | iOS Safari form and file-upload behavior especially | Whole site | Test on iPhone Safari, Android Chrome, desktop Firefox/Edge. Run `qa/test.mjs` where WebKit and Firefox are installed. | **Devices / tools** |

### P2: recommended improvements

| # | Item | Why | Needs |
|---|---|---|---|
| P2-1 | A **Projects** gallery page (decks first) with location (city), material and scope | Proof of work. The `picture()` helper and `service-template` gallery are ready. | Owner photos + project details |
| P2-2 | A **Reviews** section with permissioned quotes linking to Google, Facebook or BBB | Social proof near CTAs. Never add `aggregateRating` schema unless the reviews are first-party and shown on the page. | Owner + reviewer permission |
| P2-3 | Spam monitoring. Add Netlify reCAPTCHA (`data-netlify-recaptcha`) only if spam appears. | Keeps lead quality high without adding friction now | Netlify access |
| P2-4 | A warranty statement, if one exists | A competitive differentiator; competitors display theirs | Owner |
| P2-5 | Manufacturer certifications (Trex, TimberTech, etc.), if held | Composite-deck credibility | Owner |
| P2-6 | Manual screen-reader passes (VoiceOver iOS/macOS, NVDA, TalkBack) | Automated tools miss some issues | Tools/devices |
| P2-7 | Fence material options and deck color lines offered | Lets the copy be more specific | Owner |
| P2-8 | A static service-area map (SVG, no third-party embed) | Faster "am I covered?" scanning | Design time |

### P3: future enhancements

| # | Item |
|---|---|
| P3-1 | Content cluster linked to the decks page: "Deck cost in Monroe County", "Composite vs. treated: a 10-year cost view", "Do I need a deck permit in Monroe County / Toledo?", "Best time to build a deck in SE Michigan" |
| P3-2 | City pages (e.g. Temperance/Lambertville, Toledo/Sylvania), **only** with real local projects and unique content |
| P3-3 | CRM or email automation for leads (Netlify Forms → Zapier/Make → CRM), with an instant autoresponder |
| P3-4 | Call tracking with a dedicated number, keeping NAP consistent on GBP |
| P3-5 | Conversion experiments: hero headline variants; a two-step form (project type first) |
| P3-6 | Financing page, if the owner offers financing |
| P3-7 | Before-and-after slider for real projects (CSS-first, accessible) |

## 17. Recommended next steps

1. **Owner review (P0-3).** Walk the owner through the site; collect corrections, the license #, email, hours and photos. Use the checklist below.
2. **Domain and Netlify (P0-1, P0-2).** Set up the domain, `SITE_URL` and form detection and notifications, then make a live test submission.
3. **Launch.** Then run the GSC and GA4 setup and the post-launch checks in section 14.
4. **Within 30 days:**
   - verify the GBP (P1-3)
   - replace stock with real photos and add the Projects page (P1-1, P2-1)
   - start a review request routine
5. **Within 90 days:** publish the first two P3-1 articles and add permissioned reviews (P2-2).

---

## Business-owner information checklist (Deliverable E)

Please confirm or provide only the following. Everything else is already verified.

- [ ] **Production domain.** Which domain should the site use? Is one already registered?
- [ ] **Netlify access.** Account access or deployment authorization, plus the inbox that should receive estimate requests.
- [ ] **Business email** to publish. Is it DKQConstruction@gmail.com?
- [ ] **Approval of the site copy and facts** (list in P0-3), including:
  - "decks are our specialty"
  - "talk directly with the owner"
  - the 4-step process
  - deck replacement
  - garage and flooring scope
- [ ] **Service area.** Confirm the community lists, and say whether there are areas within either county you don't serve.
- [ ] **Licensing and insurance.** MI Residential Builder license #, any Ohio/Toledo registration, liability insurance.
- [ ] **Warranty** on workmanship, if any. Manufacturer certifications, if any.
- [ ] **Business hours,** for the website and the Google Business Profile.
- [ ] **Logo file:** vector (AI/EPS/SVG/PDF) or a high-resolution PNG.
- [ ] **Project photos** you own, with the city and project type for each (decks first).
- [ ] **Customer reviews** you have permission to quote, and your Google Business Profile URL if one exists.
- [ ] **Analytics:** a GA4 measurement ID, or permission to create one, plus Search Console access.

---

### Evidence index

| Evidence | Location |
|---|---|
| Automated test results (JSON + console output) | `qa/reports/test-results.json`, `qa/reports/test-output.txt`. Regenerate with `qa/test.mjs`. |
| Lighthouse summary and full HTML reports | `qa/reports/lighthouse/summary.json` (in the repo) and the full HTML reports (in the ZIP) |
| Screenshots | `docs/screenshots/` |
| Research sources | `docs/research.md` |
| Asset licensing | `docs/asset-inventory.md` |
