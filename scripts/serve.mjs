#!/usr/bin/env node
// Minimal static server for previewing dist/ locally (mirrors Netlify's pretty URLs + 404).
//   node scripts/serve.mjs [port]
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.argv[2] || process.env.PORT || 8080);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml',
  '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};

createServer((req, res) => {
  if (req.method === 'POST') {
    // Simulates Netlify Forms accepting a submission (local preview only).
    req.resume();
    req.on('end', () => { res.writeHead(200, { 'content-type': 'text/plain' }); res.end('ok'); });
    return;
  }
  const url = new URL(req.url, 'http://x');
  let p = normalize(join(DIST, decodeURIComponent(url.pathname)));
  if (!p.startsWith(DIST.replace(/\/$/, ''))) { res.writeHead(403); return res.end(); }
  if (existsSync(p) && statSync(p).isDirectory()) {
    if (!url.pathname.endsWith('/')) { res.writeHead(301, { location: `${url.pathname}/` }); return res.end(); }
    p = join(p, 'index.html');
  }
  if (!existsSync(p)) {
    res.writeHead(404, { 'content-type': types['.html'] });
    return res.end(readFileSync(join(DIST, '404.html')));
  }
  const type = types[extname(p)] || 'application/octet-stream';
  let body = readFileSync(p);
  const headers = { 'content-type': type };
  // Compress text like Netlify's CDN does, so local lab tests are representative.
  if (/text|javascript|json|xml|svg|manifest/.test(type) && /gzip/.test(req.headers['accept-encoding'] || '')) {
    body = gzipSync(body);
    headers['content-encoding'] = 'gzip';
  }
  res.writeHead(200, headers);
  res.end(body);
}).listen(port, () => console.log(`Serving dist/ at http://localhost:${port}`));
