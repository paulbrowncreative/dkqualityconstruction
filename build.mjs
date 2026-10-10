#!/usr/bin/env node
// Static site build. Zero dependencies — Node 20+ only.
//   node build.mjs            → dist/
// Environment: SITE_URL, GA4_MEASUREMENT_ID, GOOGLE_SITE_VERIFICATION (see .env.example)
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, business } from './site.config.mjs';
import { renderPage } from './src/lib/layout.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, 'src');
const DIST = join(ROOT, 'dist');

const pageModules = [
  'home', 'services', 'services-decks', 'services-fencing', 'services-basement',
  'services-bathroom', 'services-kitchen', 'projects', 'service-area', 'about', 'contact',
  'thank-you', 'privacy', 'not-found',
];

const log = (...a) => console.log('[build]', ...a);
const hash = (buf) => createHash('sha256').update(buf).digest('hex').slice(0, 10);

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

async function build() {
  const started = Date.now();
  if (!site.siteUrlExplicit) {
    log(`WARNING: SITE_URL is not set — canonical URLs and sitemap use ${site.url}`);
  }
  log(`context=${site.context} url=${site.url} indexable=${site.indexable} ga4=${site.analytics.ga4Id ? 'on' : 'off'}`);

  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(DIST, { recursive: true });

  // Static root files + assets.
  cpSync(join(SRC, 'static'), DIST, { recursive: true });
  cpSync(join(SRC, 'assets'), join(DIST, 'assets'), {
    recursive: true,
    filter: (p) => !/assets[\\/](css|js)[\\/]main\.(css|js)$/.test(p),
  });

  // Fingerprinted CSS + JS (long-term cacheable).
  const css = minifyCss(readFileSync(join(SRC, 'assets/css/main.css'), 'utf8'));
  const cssName = `/assets/css/main.${hash(css)}.css`;
  writeFileSync(join(DIST, cssName), css);
  const js = readFileSync(join(SRC, 'assets/js/main.js'), 'utf8');
  const jsName = `/assets/js/main.${hash(js)}.js`;
  writeFileSync(join(DIST, jsName), js);

  // Pages.
  const pages = [];
  // QA fixtures are opt-in and never part of a production build.
  const modules = pageModules.map((n) => `./src/pages/${n}.mjs`);
  if (process.env.BUILD_FIXTURES === '1' && site.context !== 'production') modules.push('./src/fixtures/compare.mjs');
  for (const modPath of modules) {
    const mod = await import(modPath);
    const page = mod.default;
    const html = renderPage(page).replace('{{css}}', cssName).replace('{{js}}', jsName);
    const out = page.outFile || join(page.path.replace(/^\//, ''), 'index.html');
    mkdirSync(dirname(join(DIST, out)), { recursive: true });
    writeFileSync(join(DIST, out), html);
    pages.push({ ...page, out, html });
  }
  log(`rendered ${pages.length} pages`);

  // sitemap.xml + robots.txt
  const today = new Date().toISOString().slice(0, 10);
  const indexable = pages.filter((p) => !p.noindex && p.sitemap !== false);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
  writeFileSync(join(DIST, 'sitemap.xml'), sitemap);
  writeFileSync(
    join(DIST, 'robots.txt'),
    site.indexable
      ? `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`
      : `# Non-production build (${site.context}) — not for indexing.\nUser-agent: *\nDisallow: /\n`,
  );
  writeFileSync(
    join(DIST, 'site.webmanifest'),
    JSON.stringify(
      {
        name: business.name,
        short_name: 'DK Quality',
        start_url: '/',
        display: 'browser',
        background_color: '#121214',
        theme_color: '#121214',
        icons: [
          { src: '/assets/img/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/assets/img/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      null,
      2,
    ),
  );

  // Integrity check: every internal link/asset must resolve, every #fragment must exist.
  const errors = [];
  const idsByFile = new Map();
  const idsOf = (file) => {
    if (!idsByFile.has(file)) {
      const html = readFileSync(file, 'utf8');
      idsByFile.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
    }
    return idsByFile.get(file);
  };
  const resolveTarget = (urlPath) => {
    const p = join(DIST, decodeURIComponent(urlPath));
    if (urlPath.endsWith('/')) return join(p, 'index.html');
    return p;
  };
  for (const page of pages) {
    const file = join(DIST, page.out);
    const refs = [...page.html.matchAll(/\s(?:href|src|srcset|imagesrcset)="([^"]+)"/g)].flatMap((m) =>
      m[1].split(',').map((s) => s.trim().split(/\s+/)[0]),
    );
    for (const ref of refs) {
      if (!ref || /^(https?:|mailto:|tel:|data:)/.test(ref)) {
        if (ref.startsWith(site.url) && site.url.startsWith('http://localhost')) continue;
        continue;
      }
      const [pathPart, frag] = ref.split('#');
      const target = pathPart ? resolveTarget(pathPart.split('?')[0]) : file;
      if (!existsSync(target)) {
        errors.push(`${page.path}: broken reference ${ref}`);
        continue;
      }
      if (frag && target.endsWith('.html') && !idsOf(target).has(frag)) {
        errors.push(`${page.path}: missing #${frag} on ${relative(DIST, target)}`);
      }
    }
    // One H1 per page.
    const h1s = (page.html.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) errors.push(`${page.path}: expected 1 <h1>, found ${h1s}`);
    // Unique titles are checked below.
  }
  const titles = new Map();
  for (const p of pages) {
    if (titles.has(p.title)) errors.push(`duplicate <title>: ${p.path} and ${titles.get(p.title)}`);
    titles.set(p.title, p.path);
    if (p.title.length > 70) log(`note: long title (${p.title.length}) on ${p.path}`);
    if (p.description.length > 165) log(`note: long description (${p.description.length}) on ${p.path}`);
  }

  if (errors.length) {
    console.error('[build] FAILED integrity checks:\n  ' + errors.join('\n  '));
    process.exit(1);
  }

  const files = walk(DIST);
  const bytes = files.reduce((n, f) => n + statSync(f).size, 0);
  log(`ok — ${files.length} files, ${(bytes / 1024 / 1024).toFixed(1)} MB, ${Date.now() - started} ms`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
