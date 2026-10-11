#!/usr/bin/env python3
"""Build the ampersand-only font files (src/assets/fonts/amp-*.woff2).
Archivo's '&' is an unusual 'Et' form that reads oddly at text sizes, so the site draws
just that one glyph from Inter (SIL OFL 1.1) via a unicode-range @font-face. One file
per weight the CSS uses; each holds a single glyph. Source: system Inter statics
(fonts-inter package) or pass a directory: python3 scripts/subset-amp.py /path/to/inter
Requires: pip install fonttools brotli"""
import sys
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("/usr/share/fonts/opentype/inter")
WEIGHTS = {300: "Light", 400: "Regular", 500: "Medium", 600: "SemiBold", 700: "Bold", 800: "ExtraBold"}
for w, name in WEIGHTS.items():
    font = TTFont(SRC / f"Inter-{name}.otf")
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = []
    opts.name_IDs = [0, 1, 2, 13, 14]  # keep copyright and licence names
    opts.notdef_outline = True
    sub = subset.Subsetter(opts)
    sub.populate(text="&")
    sub.subset(font)
    font.flavor = "woff2"
    out = ROOT / f"src/assets/fonts/amp-{w}.woff2"
    font.save(out)
    print(out.name, out.stat().st_size, "bytes")
