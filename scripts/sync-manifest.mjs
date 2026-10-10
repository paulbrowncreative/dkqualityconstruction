// Syncs project-assets-manifest.json from src/data/projects.mjs + the image manifest:
// stored filename, optimized files, alt text, caption, project membership. Keeps
// per-asset fields set by hand (type, classification, questions, websiteLocations…).
import { readFileSync, writeFileSync, statSync, readdirSync } from 'node:fs';
import { projects } from '../src/data/projects.mjs';

const root = new URL('../', import.meta.url);
const m = JSON.parse(readFileSync(new URL('project-assets-manifest.json', root), 'utf8'));
const imgs = JSON.parse(readFileSync(new URL('src/data/images.json', root), 'utf8'));
const photoDir = new URL('src/assets/img/photos/', root);
const files = readdirSync(photoDir);

for (const p of projects) {
  for (const img of p.images) {
    const a = m.assets.find((x) => x.id === img.asset);
    if (!a) throw new Error(`Unknown asset ${img.asset}`);
    const meta = imgs[img.name];
    a.storedFilename = img.name;
    a.projectId = p.id;
    a.altText = img.alt;
    a.caption = p.caption;
    a.optimizedDimensions = { widths: meta.widths, aspect: `${meta.width}x${meta.height}` };
    a.optimized = files
      .filter((f) => f.startsWith(`${img.name}-`) && /-\d+\.(avif|jpg)$/.test(f) && f.replace(/-\d+\.(avif|jpg)$/, '') === img.name)
      .map((f) => ({ file: `src/assets/img/photos/${f}`, bytes: statSync(new URL(f, photoDir)).size }));
    a.status = a.status === 'received' ? 'integrated' : a.status;
  }
}
m.projects = projects.map((p) => ({ projectId: p.id, title: p.title, category: p.category, assets: p.images.map((i) => i.asset) }));
m.updated = new Date().toISOString().slice(0, 10);
writeFileSync(new URL('project-assets-manifest.json', root), JSON.stringify(m, null, 2) + '\n');
console.log(`synced ${m.assets.length} assets, ${m.projects.length} projects`);
