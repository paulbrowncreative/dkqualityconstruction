# DK Quality Construction: website QA and launch report

| | |
|---|---|
| **Report date** | October 11, 2026 (final photo reconciliation) |
| **Project** | Production website for DK Quality Construction LLC, Monroe, MI |
| **Branch** | `claude/brave-bohr-tad6w7` |
| **Deliverable** | `DK-Quality-Construction-Website.zip` |
| **Companion files** | `PROJECT-ASSET-REGISTER.md`, `project-assets-manifest.json`, `docs/research.md`, `docs/asset-inventory.md`, `README.md` |

**About the results in this report.** Every result was produced by a test actually run in this environment unless it is marked **NOT TESTED** or **REQUIRES ACCESS**. Performance figures are local Lighthouse lab runs, not data from real visitors.

---

## 1. Executive summary

**What was built.** A complete, custom-designed, mobile-first static website for Netlify, with:

- 12 indexable pages, plus a thank-you page and a 404 page
- 73 of DK Quality Construction's own project photos, organized into a 52-project portfolio
- aerial deck shots as every page hero
- an estimate form that emails leads to **dkqconstruction@gmail.com**
- click-to-call on every page
- local-SEO structured data, security headers and an automated QA toolkit

**Stock photography.** None remains. Every photo on the site is DK's own work.

**Test results.**

| Check | Result |
|---|---|
| Functional, responsive, accessibility and SEO tests | **44 of 44 passed** across 39 pages (2 cross-engine smoke tests skipped: engines not installed) |
| Before/after slider tests | **17 of 17 passed** |
| Accessibility scan (axe-core, WCAG 2.2 AA), 14 pages, mobile and desktop | 0 violations |
| HTML validation (html-validate) | Valid |
| Structured data | 225 typed nodes valid against schema.org |
| Lighthouse, mobile | 99–100 on every page; Accessibility, Best Practices and SEO 100 |
| Lighthouse, desktop | 100 across the board |
| Mobile LCP | 1.3–2.1 s |
| Layout shift (CLS) | 0 |
| Dependency vulnerabilities | 0 |

### Launch status: not yet live-ready

Three things are outside my access (section 16, P0):

1. **Activate lead delivery.** Someone must click the FormSubmit "Activate Form" email already sent to dkqconstruction@gmail.com. Until then, no lead emails are delivered, and visitors see an error that points them to the phone number.
2. **Set the production domain** (`SITE_URL`).
3. **Get owner sign-off** on the facts and project captions.

**Never supplied, so not built:**

- **Before/after photo pairs.** The comparison slider is built and fully tested, but it isn't placed on any live page.

## 2. Research completed

The full report is in `docs/research.md`. Its main sources:

- **BBB profile:** fetched twice, most recently October 11, 2026.
- **Facebook metadata and logo.**
- **Searches:** directories and review sites.
- **Competitors:** 7 reviewed.
- **Your confirmation:** on October 11, 2026, you confirmed the company is **licensed and insured**. The company trailer, visible in the photos, also reads "LICENSED AND INSURED".

Keyword research is qualitative only. No search volumes are claimed.

## 3. Verified company information

| Item | Value | Source |
|---|---|---|
| Legal name | DK Quality Construction LLC | BBB |
| Owner | David Kelly | BBB |
| Phone | (734) 497-6773 | BBB; company trailer in photos |
| Location | Monroe, MI 48161 (service-area business; no street address) | BBB |
| Founded | December 9, 2021 | BBB; logo |
| BBB | Accredited since March 2, 2023, A+, 0 complaints in 3 years, 4 reviews counted (no review text shown) | BBB |
| Licensed and insured | Yes | Your confirmation; trailer signage |
| Services | Decks, garages, basements, bathrooms, fencing, kitchens, flooring | BBB; trailer reads "Home Remodeling • Decks • Kitchens • Baths" |
| Service area | Monroe County, MI and Lucas County, OH | BBB; Facebook |
| Lead email | dkqconstruction@gmail.com | Your instruction. It's used for form delivery; it isn't displayed on the site. |

**Still not published:**

- license number (not supplied)
- business hours
- warranties
- review quotes
- star ratings

## 4. Pages and features

### Pages

| URL | Purpose |
|---|---|
| `/` | Aerial hero; credentials strip (BBB A+, licensed and insured, owner-led, local); deck specialty; recent work; 3 customer reviews; services; process; "Why DK"; service area; FAQ; estimate form |
| `/services/` | All 7 services. Garages is shown as text only because there's no DK photo. |
| `/services/decks/` | Aerial hero; real composite vs. pressure-treated comparison; build guidance; recent projects; Todd S. review; FAQ |
| `/services/fencing/` | Text-only hero, because there's no DK fence photo |
| `/services/basement-finishing/` | DK basement hero, 2 basement projects and the Nikky B. review |
| `/services/bathroom-remodeling/` | DK bathroom hero and project |
| `/services/kitchen-remodeling/` | DK kitchen hero and project |
| `/projects/` | **Portfolio: 52 projects, 73 photos.** Grouped into Decks, Kitchen Remodeling, Bathroom Remodeling, Basement Remodeling, Covered Patios, and Interior Trim & Carpentry, with category jump links. Strongest projects appear first. Each card opens an accessible full-size photo viewer. |
| `/testimonials/` | **5 customer reviews** (batch 16), quoted word for word, with names shortened to first name and last initial. Each card has 5 stars, the project and the source. Two cards link to their portfolio project. Linked in the desktop nav, mobile menu and footer. |
| `/service-area/{community}/` | **24 community pages**, one per community on the service-area page (16 in Monroe County, 8 in Lucas County). Each is built around verified local facts: the permit office (linked to the official site), the township or county it sits in, ZIP codes, the state's frost depth and call-before-you-dig service, distance from Monroe, and local planning issues such as flood zones, historic districts and fence limits. Each also has local FAQs and links to the 5 nearest communities. Sources are in `docs/locations-research.md`. Text is 36–53% unique to each page, and no page shares more than 60% with any other. |
| `/service-area/`, `/about/`, `/contact/`, `/privacy-policy/` | Supporting pages. The service-area hub, the homepage area list and the footer now link to the community pages. |
| `/thank-you/` (noindex), `/404.html` | Confirmation and error pages |

**Portfolio groups without a service claim.** "Covered Patios" and "Interior Trim & Carpentry" appear in the portfolio only, with no service page and no service claim. These services aren't on the BBB list, so the groups link to the estimate form until the owner confirms.

### Components built in this phase

- **Before/after comparison slider.** It's a layered clip-path reveal and an accessible ARIA slider. It supports mouse, touch, pen and keyboard, and vertical swipes still scroll the page on touch screens. It's ready for when pairs are supplied (`compareSlider()` in `src/lib/components.mjs`).
- **Multi-photo project cards.** Each card has a cover photo, thumbnails, a photo count and a native `<dialog>` viewer with keyboard paging and focus return.

## 5. Estimate form and lead delivery

| Item | Detail |
|---|---|
| Delivery | FormSubmit.co sends a **background AJAX POST**, so the visitor never leaves the site. Submissions are emailed to **dkqconstruction@gmail.com** with the optional photo attached (up to 8 MB). The email has a table layout, the subject "New estimate request — DK Quality Construction website", and a Reply-To set to the customer's email. |
| No-JS fallback | A standard POST to FormSubmit redirects back to `/thank-you/` |
| Spam protection | FormSubmit `_honey` honeypot |
| Error handling | FormSubmit reports activation and failures as `success:"false"`. The site treats that as a failure and shows "Sorry — your request didn't go through. Please try again, or call (734) 497-6773." It never shows a false confirmation. |
| Content-Security-Policy | `form-action` and `connect-src` now allow `https://formsubmit.co` only. CSP test: 0 violations. |
| Automated tests | Confirm the request goes to `https://formsubmit.co/ajax/dkqconstruction%40gmail.com` as multipart with `_honey`, `_subject`, `_replyto` and the field values. They also check the redirect to `/thank-you/`, that `generate_lead` fires exactly once, and the failure and activation-needed path. In tests FormSubmit is **mocked**, so automated runs never send real email. |

### Live test, October 11, 2026

I sent one test submission (every field "test", plus a test photo) to **dkqconstruction@gmail.com**, and, as you requested for this one time, a second to **paulbrowncreative@gmail.com**. Both returned:

```
{"success":"false","message":"This form needs Activation. We've sent you an email containing an 'Activate Form' link. Just click it and your form will be actived!"}
```

**What that means:**

- **The backend is reachable and accepts the submissions.** FormSubmit requires each recipient inbox to confirm once before it delivers anything.
- **To confirm it works end to end:**
  1. Open the "Activate Form" email in paulbrowncreative@gmail.com and click the link.
  2. Submit the live form, or ask me to resend the test. The email should arrive with the photo attached.
- **For the client inbox:** the client must click the same link in dkqconstruction@gmail.com before real leads are delivered.
- **REQUIRES ACCESS:** I can't see either inbox, so actual email arrival is **not verified**.

**Optional after activation.** FormSubmit emails a random alias string. Set it as `FORMSUBMIT_ALIAS` in Netlify and redeploy, so the raw email address isn't visible in the page source.

## 6. Photography and asset reconciliation

| Item | Count |
|---|---|
| Client uploads received (15 batches) | 75 |
| Unique photos published | **73, all in use** |
| Duplicates found and removed | **2**: DKQ-10-02 is a byte-identical copy of DKQ-06-03, and DKQ-11-02 is a recompressed copy of DKQ-05-05. The kept copies stay published. |
| Final duplicate scan | All 75 uploads checked with SHA-256 checksums and a 256-bit perceptual hash. No other matches. |
| Projects | 52. 13 have 2–4 photos showing the same job from different angles. |
| Before/after pairs | 0 (none supplied) |
| Stock photos remaining | **0**. All 13 originals were retired as real photos arrived; the last three were removed in batch 15. |
| Grouping and scope questions for the owner | Listed in `PROJECT-ASSET-REGISTER.md` (32 items, none blocking) |

**Heroes, following your aerial-first rule:**

| Page | Hero |
|---|---|
| Home | DKQ-06-03, wraparound deck aerial (also the social share image) |
| Decks | DKQ-05-01, built-in benches aerial |
| Projects | DKQ-04-05, lakeside deck over a screened room |
| Kitchen, Bathroom, Basement | DK's own work |
| Fencing | Text hero (no DK fence photo) |

**On phones and tablets,** the homepage hero shows the full aerial above the headline, so the deck is never hidden behind text.

**Processing:**

- **Originals:** preserved unchanged in `assets-src/uploads/`.
- **Sizes:** derivatives at 320, 640, 768 (heroes), 1024, 1600 and 2000 w, in AVIF with JPEG fallback.
- **Edits:** resizing plus light sharpening only. No AI upscaling, no retouching, no content changes.

**Captions** describe only what's visible. No locations, brands, costs or timelines are stated, and "built-in", roof or porch construction is never attributed to DK without confirmation.

## 7. SEO and local SEO

- **Every indexable page** has a unique title (66 characters or fewer) and description (160 or fewer), one H1, a canonical URL, Open Graph tags and JSON-LD. All of this is verified by automated tests.
- **Sitemap:** 37 URLs, including `/projects/`, `/testimonials/` and the 24 community pages. Previews and branch deploys are `noindex` with a `Disallow: /` robots.txt.
- **Projects page** carries `ImageGallery` structured data, with an `ImageObject` for each photo.
- **No review markup.** The reviews are shown as visible text only. There is no `aggregateRating` or `Review` schema, in line with Google's guidelines on self-serving reviews.
- **NAP consistency:** name, address and phone come from one config file. It's a service-area business, with no street address or coordinates. "Licensed & insured" appears in the credentials strip, "Why DK", the estimate panel, the About facts, the Contact credentials card and the footer.

## 8. Accessibility

| Check | Result |
|---|---|
| axe-core, WCAG 2.2 AA plus best practice, every page on mobile and desktop | 0 violations |
| Lighthouse Accessibility | 100 on every run |
| Keyboard: skip link, Services dropdown, mobile menu | Pass |
| Photo viewer: Escape closes it, arrow keys page through, focus returns | Pass |
| Slider: ARIA slider role, Home/End/arrows, visible focus | Pass |
| Form: labels, `aria-invalid`, error summary, focus on the first error | Pass |
| Tap targets 44 px or larger | Pass |
| `prefers-reduced-motion` | Pass |

**NOT TESTED:** manual screen-reader passes (VoiceOver, NVDA, TalkBack).

## 9. Performance (Lighthouse 13.5.0 lab, final run)

| Page | Mobile Perf | Mobile LCP | Mobile transfer | Desktop Perf | Desktop LCP |
|---|---|---|---|---|---|
| `/` | 100 | 1.8 s | 158 KB | 100 | 0.6 s |
| `/services/decks/` | 100 | 1.6 s | 107 KB | 100 | 0.5 s |
| `/projects/` | 99 | 2.1 s | 248 KB | 100 | 0.7 s |
| `/contact/` | 100 | 1.3 s | 66 KB | 100 | 0.3 s |
| `/services/` | 100 | 1.5 s | 160 KB | 100 | 0.4 s |
| `/about/` | 100 | 1.5 s | 102 KB | 100 | 0.3 s |
| `/testimonials/` | 100 | 1.8 s | 145 KB | 100 | 0.4 s |

Accessibility, Best Practices and SEO scored 100 on every run, and CLS was 0 everywhere.

**Optimizations made during the photo phase:**

- 320 w thumbnails for card strips. This brought Projects LCP from 2.6 s to under 2.2 s.
- 768 w hero variants for phones.
- An art-directed hero layout on mobile.

**NOT MEASURED:** field Core Web Vitals and INP. These need real traffic after launch.

## 10. Security

- No secrets in the code.
- Zero runtime dependencies. QA tooling has 0 vulnerabilities (`npm audit`).
- **Security headers** in `src/static/_headers`: CSP with no `unsafe-inline`, HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy and COOP. The CSP is enforced in-browser on every page, with 0 violations.
- **Inline styles** were found blocked by the CSP during the photo phase and replaced with classes and data attributes.
- **Third parties:** FormSubmit is the only one, and the privacy policy is updated to disclose it.
- **Personal data:** the lead email appears in the form endpoint until a FormSubmit alias is set.

## 11. Functional and regression testing

Final run, October 11, 2026, against the built `dist/`:

- **Layout:** no horizontal overflow, every image loads and no console errors, at 320, 375, 414, 768, 1024, 1280, 1440 and 1920 px on all 39 pages.
- **Navigation:** desktop dropdown, mobile menu and skip link all pass. The desktop nav appears at 1152 px and up; below that, the mobile menu is used. It was rechecked with the Testimonials item added; a compact spacing step from 1152 to 1279 px keeps it on one line with no overflow.
- **Photo viewer:** pass.
- **Community pages:** pass. The test checks that every page is linked from the hub, has `Service` schema whose `areaServed` is the city or place within its county, links to the official permit office, has 5 nearby links and a correct canonical, and has no review markup.
- **Testimonials:** pass. The test covers nav and footer links, 3 cards on the homepage and 5 on the page, labelled stars in the correct contrasting color per section, shortened names, and no Review schema.
- **Form:** validation, background FormSubmit submission (mocked), the activation and failure path, and `generate_lead` firing once all pass.
- **Analytics:** a phone click records `click_call` once.
- **Other checks:** the 404 status, CSP and reduced-motion all pass.
- **Production build:** canonicals and `_next` use the production domain, with no localhost references.

**NOT TESTED:**

- real Safari, Firefox or Edge, and real devices
- live Netlify deploy
- email arrival (requires inbox access)

## 12. Deployment

1. **Deploy to Netlify.** Import the repository; the build settings are already in `netlify.toml` (`node build.mjs` → `dist`). Alternatively, build locally with `CONTEXT=production SITE_URL=https://yourdomain node build.mjs` and drag `dist/` into Netlify.
2. **Set `SITE_URL`** in Netlify environment variables. Optionally also set `GA4_MEASUREMENT_ID`, `GOOGLE_SITE_VERIFICATION` and `FORMSUBMIT_ALIAS`.
3. **Activate FormSubmit** by clicking the link in dkqconstruction@gmail.com. Then submit a live test and confirm the email arrives with the photo.
4. **Connect the domain.** HTTPS is issued automatically. Turn on Force HTTPS.
5. **Search Console:** verify via DNS, then submit `/sitemap.xml`.
6. **GA4:** set the ID, redeploy, and mark `generate_lead` as a key event.
7. **Post-launch checks:**
   - robots.txt
   - canonical tags
   - a 404 test
   - the `/decks` → `/services/decks/` redirect
   - PageSpeed Insights
   - securityheaders.com

## 13. Production build

```
$ CONTEXT=production SITE_URL=https://www.example-dkq.com node build.mjs
[build] ok — 668 files, 82.9 MB
localhost refs: 0 · sitemap URLs: 12 · _next=https://www.example-dkq.com/thank-you/
```

The size is almost entirely responsive photo variants. Pages transfer 66–632 KB.

## 14. Known limitations

1. **Two of the five reviews are Facebook recommendations,** which have no star rating. They show 5 stars at the client's instruction; see the register.
2. **No before/after pairs were supplied.** The slider is built and tested but isn't on any public page.
3. **Lead email delivery depends on FormSubmit activation,** and email arrival hasn't been verified.
4. **No DK fence or garage photos,** so those use text-only layouts.
5. **The logo source is a 720 px Facebook image.**
6. **Testing:** Chromium only; no real-device testing.

## 15. Outstanding issues

### P0: launch blockers

| # | Issue | Fix | Needs |
|---|---|---|---|
| P0-1 | FormSubmit not yet activated for dkqconstruction@gmail.com, so leads aren't delivered | Click "Activate Form" in that inbox, then send a live test | **Client inbox access** |
| P0-2 | Production domain unknown | Set `SITE_URL` and redeploy | **Your input + Netlify** |
| P0-3 | Owner sign-off on published facts and captions | Review the site and `PROJECT-ASSET-REGISTER.md` open questions | **Owner** |

### P1: high priority

| # | Issue | Needs |
|---|---|---|
| P1-1 | ~~Customer reviews~~ Done: 5 published. More can be added in `src/data/reviews.mjs` (one entry each). Optional: which portfolio project R-05 ("elevated deck") is. | Owner / you |
| P1-2 | Michigan Residential Builder license number. A single config value (`licenseNumber`) shows it site-wide. | Owner |
| P1-3 | Google Business Profile: verify it and request reviews | Owner's Google account |
| P1-4 | GA4 and Search Console | IDs and access |
| P1-5 | Business hours | Owner |
| P1-6 | Real-device and browser testing (iOS Safari especially, including photo upload) | Devices |
| P1-7 | Vector or high-resolution logo | Owner |

### P2: recommended

- **Before/after photo pairs:** add homepage and portfolio comparisons.
- **A DK fence photo and a garage photo.**
- **Owner answers to the photo questions:** materials and brands, scope (roofs, pergolas, pavilions, planters, interior trim), and the flagged groupings.
- **Decide** whether covered patios and porch roofs, and interior trim and carpentry, become advertised services with their own pages.
- **Optional:** set `FORMSUBMIT_ALIAS` to hide the email address.
- **Manual screen-reader passes.**

### P3: future

- Deck content cluster: cost, materials, permits.
- City pages, but only with real local projects.
- CRM and autoresponder for leads.
- A financing page, if offered.

## 16. Business-owner checklist

- [ ] **Click "Activate Form"** in dkqconstruction@gmail.com.
- [ ] **paulbrowncreative@gmail.com:** click its own "Activate Form" link, then resubmit the test to confirm delivery.
- [ ] **Production domain.**
- [ ] **Michigan Residential Builder license number,** plus any Ohio registration.
- [x] **Customer reviews:** 5 published. Send more anytime.
- [ ] **Before/after photo pairs,** if any exist.
- [ ] **Answers to the photo questions** in `PROJECT-ASSET-REGISTER.md`: scope, materials and groupings.
- [ ] **Business hours,** a vector logo, and GA4 and Search Console access.
