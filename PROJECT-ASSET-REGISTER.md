# Project asset register

The readable companion to `project-assets-manifest.json`, which is the source of truth. This register is updated after every batch.

**Last updated:** October 10, 2026
**Workflow status:** waiting for batch 1. No client files have been received yet.

## Totals

| | Count |
|---|---|
| Files received (all batches) | 0 |
| Inspected | 0 |
| Integrated on the website | 0 |
| Confirmed before-and-after pairs | 0 |
| Possible pairs awaiting your confirmation | 0 |
| Reviews transcribed | 0 |
| Reviews published | 0 |
| Needing clarification | 0 |
| Could not be processed | 0 |

## Batches

| Batch | Received | Files | Asset IDs | Notes |
|---|---|---|---|---|
| — | — | — | — | No files received yet |

## Projects

_None yet._

## Before-and-after pairs

_None yet._ Pairs are matched only on visual evidence: the same fixtures, structure, materials and camera position. Upload order and file names are not used as evidence. Uncertain matches are listed here for your confirmation.

## Reviews

_None yet._ Reviews are transcribed word for word. Uncertain words are marked `[?]` and listed for your review. Nothing is published until the transcription is confirmed.

## Open questions for you

_None yet._

## How files are handled

- **Originals:** copied byte for byte to `assets-src/uploads/batch-NN/` and never edited. Each file gets a stable ID (`DKQ-<batch>-<seq>`), and exact duplicates are detected by SHA-256.
- **Website copies:** resized responsive versions in AVIF with a JPEG fallback. Corrections are conservative (exposure, white balance, mild sharpening). Nothing in a photo is added, removed or changed. No AI upscaling, because no such tool is available.
- **Reviews:** shown as accessible text. Screenshots are used only where they add authenticity, and any private details in them are redacted first. No `aggregateRating` or review schema is added for the company's own pages, following Google's guidelines on self-serving reviews.
