// Validates every JSON-LD block in dist/ against the schema.org vocabulary:
// types exist, properties exist, and each property is allowed on the type (incl. inherited domains).
//   node schema-check.mjs   (needs vendor/schemaorg.jsonld — https://schema.org/version/latest/schemaorg-current-https.jsonld)
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const vocab = JSON.parse(readFileSync('vendor/schemaorg.jsonld', 'utf8'))['@graph'];
const id = (x) => (x || '').replace('schema:', '');
const arr = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);
const classes = new Map(); const props = new Map();
for (const n of vocab) {
  const t = arr(n['@type']);
  if (t.includes('rdfs:Class')) classes.set(id(n['@id']), arr(n['rdfs:subClassOf']).map((s) => id(s['@id'])));
  if (t.includes('rdf:Property')) props.set(id(n['@id']), arr(n['schema:domainIncludes']).map((s) => id(s['@id'])));
}
const ancestors = (c, seen = new Set()) => { if (seen.has(c)) return seen; seen.add(c); (classes.get(c) || []).forEach((p) => ancestors(p, seen)); return seen; };

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const errors = []; let nodes = 0;
function check(node, where) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) return node.forEach((n) => check(n, where));
  const type = node['@type'];
  if (type) {
    nodes++;
    if (!classes.has(type)) errors.push(`${where}: unknown type ${type}`);
    const anc = ancestors(type);
    for (const [k, v] of Object.entries(node)) {
      if (k.startsWith('@')) continue;
      if (!props.has(k)) { errors.push(`${where}: unknown property ${k} on ${type}`); continue; }
      const dom = props.get(k);
      if (!dom.some((d) => anc.has(d))) errors.push(`${where}: ${k} not expected on ${type} (domain: ${dom.join(', ')})`);
      check(v, where);
    }
  } else Object.values(node).forEach((v) => check(v, where));
}
for (const f of walk('../dist').filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(m[1]);
    check(data['@graph'] || data, f.replace('../dist', ''));
  }
}
console.log(errors.length ? errors.join('\n') : `OK — ${nodes} typed nodes validated against schema.org vocabulary`);
process.exit(errors.length ? 1 : 0);
