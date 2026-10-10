import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
const ga = []; p.on('request', (r) => /googletagmanager|google-analytics/.test(r.url()) && ga.push(r.url().slice(0, 90)));
await p.goto('http://localhost:8080/'); await p.waitForTimeout(2500);
const dl = await p.evaluate(() => (window.dataLayer || []).map((a) => Array.from(a)[0] + ':' + (Array.from(a)[1] instanceof Date ? 'date' : Array.from(a)[1])));
console.log('dataLayer', dl, '\nrequests', ga);
await b.close();
