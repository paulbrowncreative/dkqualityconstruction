#!/usr/bin/env python3
"""Register a batch of client-supplied files without altering them.

    python3 scripts/intake.py <batch-number> <file> [<file> ...]

Copies each file byte-for-byte to assets-src/uploads/batch-NN/, assigns a stable
asset ID, records dimensions, format, size and SHA-256 (for duplicate detection)
in project-assets-manifest.json, and flags exact duplicates of earlier uploads.
Classification, pairing, alt text and integration are filled in after inspection.
"""
import hashlib, json, re, shutil, sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "project-assets-manifest.json"

def main():
    batch, files = int(sys.argv[1]), [Path(f) for f in sys.argv[2:]]
    m = json.loads(MANIFEST.read_text())
    if any(b["batch"] == batch for b in m["batches"]):
        sys.exit(f"batch {batch} already registered — refusing to duplicate")
    dest = ROOT / "assets-src" / "uploads" / f"batch-{batch:02d}"
    dest.mkdir(parents=True, exist_ok=True)
    by_hash = {a["sha256"]: a["id"] for a in m["assets"]}
    ids = []
    for seq, f in enumerate(files, 1):
        data = f.read_bytes()
        sha = hashlib.sha256(data).hexdigest()
        safe = re.sub(r"[^A-Za-z0-9._-]+", "-", f.name).strip("-")
        out = dest / safe
        shutil.copyfile(f, out)
        info = {"width": None, "height": None, "format": f.suffix.lower().lstrip(".")}
        try:
            from PIL import Image, ImageOps
            with Image.open(out) as im:
                im2 = ImageOps.exif_transpose(im)
                info = {"width": im2.width, "height": im2.height, "format": (im.format or info["format"]).lower()}
        except Exception as e:  # unreadable/unsupported: recorded, flagged, not discarded
            info["error"] = str(e)
        aid = f"DKQ-{batch:02d}-{seq:02d}"
        ids.append(aid)
        m["assets"].append({
            "id": aid, "batch": batch, "originalFilename": f.name,
            "original": str(out.relative_to(ROOT)), "sha256": sha, "bytes": len(data),
            "originalDimensions": [info["width"], info["height"]], "format": info["format"],
            "duplicateOf": by_hash.get(sha), "type": None, "classification": None,
            "projectId": None, "pairId": None, "reviewId": None, "storedFilename": None,
            "optimized": [], "altText": None, "caption": None, "websiteLocations": [],
            "status": "needs-clarification" if info.get("error") else "received",
            "questions": [f"Could not open: {info['error']}"] if info.get("error") else [],
            "approval": "pending",
        })
        by_hash.setdefault(sha, aid)
        print(aid, f.name, info, "DUPLICATE of " + by_hash[sha] if by_hash[sha] != aid else "")
    m["batches"].append({"batch": batch, "received": str(date.today()), "assetIds": ids})
    m["updated"] = str(date.today())
    MANIFEST.write_text(json.dumps(m, indent=2, ensure_ascii=False) + "\n")

if __name__ == "__main__":
    main()
