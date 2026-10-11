// AP-style title case for headings, applied to every <h1>–<h6> at build time so headings
// stay consistent as content grows. Rules:
//  - Capitalize the first and last word, and the first word after a colon or dash.
//  - Lowercase articles, coordinating conjunctions and prepositions of three letters or
//    fewer (a, an, the, and, but, or, nor, for, so, yet, as, at, by, in, of, off, on,
//    per, to, up, via, vs.).
//  - Capitalize each part of a hyphenated word (Pressure-Treated, Built-In).
//  - Leave words with capitals after the first letter alone (MI, DK, HOA, LaSalle, LVP).
//  - Drop a closing period from a heading; keep question and exclamation marks.
// Opt out by adding data-case="keep" to the heading (e.g. quoted review headlines).
const SMALL = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'as', 'at', 'by', 'in', 'of', 'off', 'on', 'per', 'to', 'up', 'via', 'vs', 'vs.']);

const capPart = (w) => (/^[a-z]/.test(w) ? w[0].toUpperCase() + w.slice(1) : w);
const keepAsIs = (w) => /[A-Z]/.test(w.slice(1)) || /^\d/.test(w) && !/-/.test(w);

function caseWord(word, force) {
  if (/^&[#a-z0-9]+;/i.test(word)) return word; // HTML entity such as &amp;
  const m = word.match(/^([^A-Za-z0-9]*)(.*?)([^A-Za-z0-9.’']*)$/);
  const [, pre, core, post] = m;
  if (!core || keepAsIs(core)) return word;
  const lower = core.toLowerCase();
  if (!force && SMALL.has(lower)) return pre + lower + post;
  return pre + core.split('-').map((part, i, all) => (i > 0 && i < all.length - 1 && SMALL.has(part.toLowerCase()) ? part.toLowerCase() : capPart(part))).join('-') + post;
}

export function titleCaseText(text, { first = true, last = true } = {}) {
  const tokens = text.split(/(\s+)/);
  const wordIdx = tokens.map((t, i) => (/\S/.test(t) ? i : -1)).filter((i) => i >= 0);
  let forceNext = first;
  return tokens
    .map((t, i) => {
      if (!/\S/.test(t)) return t;
      const isLast = last && i === wordIdx[wordIdx.length - 1];
      const out = caseWord(t, forceNext || isLast);
      forceNext = /[:—–]$/.test(t) || t === '—' || t === '–';
      return out;
    })
    .join('');
}

// Transform the visible text of every heading in an HTML document.
export function titleCaseHeadings(html) {
  return html.replace(/<(h[1-6])(\s[^>]*)?>([\s\S]*?)<\/\1>/g, (all, tag, attrs = '', inner) => {
    if (/data-case="keep"/.test(attrs)) return all;
    // Split into tags and text runs; case text runs, treating the heading as one phrase.
    const parts = inner.split(/(<[^>]+>)/);
    const textIdx = parts.map((p, i) => (p.startsWith('<') || !/\S/.test(p) ? -1 : i)).filter((i) => i >= 0);
    const lastIdx = textIdx[textIdx.length - 1];
    let seenText = false;
    let afterBreak = true;
    const cased = parts.map((p, i) => {
      if (p.startsWith('<') || !/\S/.test(p)) return p;
      let out = titleCaseText(p, { first: !seenText || afterBreak, last: i === lastIdx });
      if (i === lastIdx) out = out.replace(/(?<!\b[A-Z])\.(\s*)$/, '$1');
      seenText = true;
      afterBreak = /[:—–]\s*$/.test(p);
      return out;
    });
    return `<${tag}${attrs}>${cased.join('')}</${tag}>`;
  });
}
