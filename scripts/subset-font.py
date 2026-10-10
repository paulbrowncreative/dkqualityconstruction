#!/usr/bin/env python3
"""Rebuild src/assets/fonts/archivo-var.woff2 from the full Archivo variable font.
Limits axes to the ranges the CSS uses (wght 300–800, wdth 100–125) and subsets to
Latin + common typographic punctuation. Requires: pip install fonttools brotli"""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
font = TTFont(ROOT / "assets-src/fonts/archivo-latin-wdth-wght-full.woff2")
font = instancer.instantiateVariableFont(font, {"wght": (300, 800), "wdth": (100, 125)})
opts = subset.Options()
opts.flavor = "woff2"
opts.layout_features = ["kern", "liga", "calt", "ccmp", "locl", "mark", "mkmk", "tnum", "lnum"]
opts.name_IDs = ["*"]
opts.notdef_outline = True
text = "".join(chr(c) for c in range(0x20, 0x7F)) + "’‘“”—–·©®•…×→←€°½¼¾ ‑éèêëàâäôöûüçñíóúÉ"
sub = subset.Subsetter(opts)
sub.populate(text=text)
sub.subset(font)
font.flavor = "woff2"
font.save(ROOT / "src/assets/fonts/archivo-var.woff2")
print("wrote src/assets/fonts/archivo-var.woff2")
