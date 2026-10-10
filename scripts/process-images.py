#!/usr/bin/env python3
"""Generate optimized, responsive website images from the originals in assets-src/.

Run from the project root:  python3 scripts/process-images.py
Requires Pillow >= 11 with AVIF support (pip install pillow).

Outputs (committed, so Netlify builds need no image tooling):
  src/assets/img/photos/<name>-<width>.{avif,jpg}
  src/assets/img/brand/*            logo, emblem, favicons
  src/assets/img/og-default.jpg     1200x630 social sharing image
  src/data/images.json              manifest consumed by the HTML build
"""
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC_PHOTOS = ROOT / "assets-src" / "photos"
SRC_BRAND = ROOT / "assets-src" / "brand"
OUT_PHOTOS = ROOT / "src" / "assets" / "img" / "photos"
OUT_BRAND = ROOT / "src" / "assets" / "img" / "brand"
MANIFEST = ROOT / "src" / "data" / "images.json"

DEFAULT_WIDTHS = [640, 1024, 1600]
HERO_WIDTHS = [640, 1024, 1600, 2000]

# Per-image processing. "crop" is (left, top, right, bottom) on the original.
PHOTOS = {
    "deck-treated-wooded-lot": {},
    "fence-backyard-gray": {},
    "bathroom-walk-in-shower": {},
    "kitchen-white-cabinets": {},
    "flooring-plank-install": {},
    # ---- DK Quality Construction's own project photos (client uploads; originals untouched) ----
    # Batch 1 — see project-assets-manifest.json for IDs.
    "project-deck-aerial-privacy-screen": {"src": "assets-src/uploads/batch-01/3.jpg", "widths": HERO_WIDTHS},
    "project-deck-aerial-privacy-screen-portrait": {"src": "assets-src/uploads/batch-01/3.jpg", "crop": (520, 0, 1720, 1500), "widths": [480, 720, 960]},
    "project-deck-waterfront-covered": {"src": "assets-src/uploads/batch-01/2.jpg", "widths": HERO_WIDTHS},
    "project-deck-cedar-tone-stairs": {"src": "assets-src/uploads/batch-01/4.jpg"},
    "project-deck-gray-corner-stairs": {"src": "assets-src/uploads/batch-01/5.jpg"},
    "project-basement-remodel-built-ins": {"src": "assets-src/uploads/batch-01/1.jpg"},
    "framing-new-construction": {},
}


def save_variants(im: Image.Image, name: str, widths: list[int]) -> dict:
    out = []
    # Sources narrower than the largest target also get a native-width variant (no upscaling).
    if im.width < max(widths) and im.width not in widths:
        widths = sorted([w for w in widths if w < im.width] + [im.width])
    for w in widths:
        if w > im.width:
            continue
        h = round(im.height * w / im.width)
        resized = im.resize((w, h), Image.LANCZOS)
        # Light output sharpening to offset downscale softness.
        resized = resized.filter(ImageFilter.UnsharpMask(radius=0.6, percent=40, threshold=2))
        base = OUT_PHOTOS / f"{name}-{w}"
        resized.save(f"{base}.avif", quality=52, speed=4)
        resized.save(f"{base}.jpg", quality=78, optimize=True, progressive=True)
        out.append(w)
    return {"widths": out, "width": im.width, "height": im.height}


def process_photos() -> dict:
    OUT_PHOTOS.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for name, opts in PHOTOS.items():
        src = ROOT / opts["src"] if "src" in opts else SRC_PHOTOS / f"{opts.get('source', name)}.jpg"
        im = Image.open(src)
        im = ImageOps.exif_transpose(im).convert("RGB")
        if "crop" in opts:
            im = im.crop(opts["crop"])
        manifest[name] = save_variants(im, name, opts.get("widths", DEFAULT_WIDTHS))
        print(f"photo {name}: {manifest[name]}")
    return manifest


def black_to_alpha(im: Image.Image) -> Image.Image:
    """The supplied logo is chrome artwork on solid black. Convert the black field
    to transparency (alpha = brightest channel, colour un-premultiplied) so the mark
    sits cleanly on any dark surface."""
    im = im.convert("RGB")
    px = im.load()
    out = Image.new("RGBA", im.size)
    opx = out.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b = px[x, y]
            a = max(r, g, b)
            a = 0 if a < 18 else min(255, int((a - 18) * 255 / 200))
            if a == 0:
                opx[x, y] = (0, 0, 0, 0)
            else:
                k = 255 / max(a, 1)
                opx[x, y] = (min(255, int(r * k)), min(255, int(g * k)), min(255, int(b * k)), a)
    return out


def process_brand():
    OUT_BRAND.mkdir(parents=True, exist_ok=True)
    src = Image.open(SRC_BRAND / "dk-logo-facebook-720.jpg").convert("RGB")
    logo = black_to_alpha(src)

    full = logo.crop(logo.getbbox())
    full.save(OUT_BRAND / "dk-logo-full.png", optimize=True)
    # Footer / about size (displayed ≤ 416 CSS px wide).
    full_md = full.resize((480, round(full.height * 480 / full.width)), Image.LANCZOS)
    full_md.save(OUT_BRAND / "dk-logo-480.webp", quality=80, method=6)
    print("logo-480", full_md.size)

    # Emblem: rooflines + crossed hammers (rows 177-343 of the original artwork).
    top = logo.crop((0, 170, 720, 346))
    emblem = top.crop(top.getbbox())
    # Header size: displayed ≤ 74 CSS px wide, so 2x = 160 px.
    em_small = emblem.resize((160, round(emblem.height * 160 / emblem.width)), Image.LANCZOS)
    em_small.save(OUT_BRAND / "dk-emblem-160.webp", quality=88, method=6)
    print("emblem-160", em_small.size)

    # Favicons: emblem centred on the brand's near-black, rounded square.
    def icon(size: int, pad: float = 0.14) -> Image.Image:
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        bg = Image.new("RGBA", (size, size), (17, 17, 19, 255))
        mask = Image.new("L", (size, size), 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius=size // 5, fill=255)
        canvas.paste(bg, (0, 0), mask)
        inner = int(size * (1 - 2 * pad))
        em = emblem.copy()
        em.thumbnail((inner, inner), Image.LANCZOS)
        canvas.alpha_composite(em, ((size - em.width) // 2, (size - em.height) // 2))
        return canvas

    icon(180, 0.08).convert("RGB").save(OUT_BRAND / "apple-touch-icon.png", optimize=True)
    icon(512, 0.07).save(OUT_BRAND / "icon-512.png", optimize=True)
    icon(192, 0.07).save(OUT_BRAND / "icon-192.png", optimize=True)
    icon(48, 0.03).save(ROOT / "src" / "static" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

    # Open Graph image: hero photo, darkened, with the full logo.
    hero = Image.open(ROOT / "assets-src/uploads/batch-01/3.jpg").convert("RGB")  # DKQ-01-03, aerial deck
    hero = ImageOps.fit(hero, (1200, 630), Image.LANCZOS, centering=(0.6, 0.6))
    shade = Image.new("RGBA", (1200, 630), (10, 10, 12, 0))
    # Darkest on the left where the logo sits, easing off to the right.
    grad = Image.linear_gradient("L").rotate(90).resize((1200, 630))
    shade.putalpha(grad.point(lambda v: int(235 - v * 0.6)))
    og = hero.convert("RGBA")
    og.alpha_composite(shade)
    lg = full.copy()
    lg.thumbnail((520, 300), Image.LANCZOS)
    og.alpha_composite(lg, (60, (630 - lg.height) // 2))
    og.convert("RGB").save(ROOT / "src" / "assets" / "img" / "og-default.jpg", quality=84, optimize=True, progressive=True)
    print("brand assets written")


if __name__ == "__main__":
    (ROOT / "src" / "static").mkdir(parents=True, exist_ok=True)
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    manifest = process_photos()
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    process_brand()
