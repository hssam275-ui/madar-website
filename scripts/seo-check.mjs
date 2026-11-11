#!/usr/bin/env node
// Technical SEO check for the built site. Run after `npm run build`:
//   node scripts/seo-check.mjs            (reads ./dist)
//   node scripts/seo-check.mjs path/to/dist
// Reports per page: title/description length, h1 count, canonical, hreflang, JSON-LD types,
// images without alt, broken internal links. Also checks the blog markdown for FAQ sections,
// internal-link count and length. Exit code 1 when an ERROR is found.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = process.argv[2] ?? 'dist';
if (!existsSync(dist)) {
  console.error(`No ${dist}/ folder. Run "npm run build" first.`);
  process.exit(2);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(dist);
const pages = files.filter((f) => f.endsWith('.html'));
const routes = new Set(
  files.map((f) => '/' + relative(dist, f).replace(/\\/g, '/').replace(/index\.html$/, '')),
);

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attr = (html, re) => decode(html.match(re)?.[1] ?? '');

let errors = 0;
let warnings = 0;
const titles = new Map();
const descs = new Map();

for (const file of pages.sort()) {
  const html = readFileSync(file, 'utf8');
  const route = '/' + relative(dist, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  if (route === '/404.html') continue;
  const issues = [];
  const err = (m) => (issues.push(`  ERROR ${m}`), errors++);
  const warn = (m) => (issues.push(`  warn  ${m}`), warnings++);

  const title = attr(html, /<title>([^<]*)<\/title>/);
  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  const types = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => {
    try {
      const j = JSON.parse(m[1]);
      return [].concat(j).map((x) => x['@type']);
    } catch {
      err('invalid JSON-LD');
      return [];
    }
  });

  if (!title) err('missing <title>');
  else if (title.length > 65) warn(`title is ${title.length} chars (aim for <= 60)`);
  if (!desc) err('missing meta description');
  else if (desc.length < 70 || desc.length > 170) warn(`description is ${desc.length} chars (aim for 120-160)`);
  if (h1 !== 1) err(`${h1} <h1> tags (need exactly 1)`);
  if (!canonical) err('missing canonical');
  if (!/hreflang=/.test(html)) warn('no hreflang links');
  if (title) titles.set(title, [...(titles.get(title) ?? []), route]);
  if (desc) descs.set(desc, [...(descs.get(desc) ?? []), route]);

  if (route.startsWith('/blog/') && route !== '/blog/') {
    if (!types.includes('BlogPosting')) err('article without BlogPosting schema');
    if (/أسئلة شائعة|الأسئلة الشائعة/.test(html) && !types.includes('FAQPage'))
      warn('article has an FAQ section but no FAQPage schema');
    if (!types.includes('BreadcrumbList')) warn('article without BreadcrumbList schema');
  }

  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const noAlt = imgs.filter((i) => !/\balt=/.test(i)).length;
  if (noAlt) err(`${noAlt} <img> without alt attribute`);

  for (const [, href] of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)) {
    const h = decodeURI(href);
    const ok = routes.has(h) || routes.has(h.endsWith('/') ? h : h + '/') || routes.has(h.replace(/\/$/, ''));
    if (!ok) err(`broken internal link ${href}`);
  }

  console.log(`${issues.length ? '✗' : '✓'} ${route}  [${types.join(', ') || 'no schema'}]`);
  issues.forEach((i) => console.log(i));
}

for (const [t, r] of titles) if (r.length > 1) (console.log(`ERROR duplicate title "${t}": ${r.join(', ')}`), errors++);
for (const [d, r] of descs) if (r.length > 1) (console.log(`warn  duplicate description on ${r.join(', ')}`), warnings++);

// Blog source checks (markdown)
const blogDir = 'src/content/blog';
if (existsSync(blogDir)) {
  console.log('\nBlog articles (words / internal links / FAQ / cover):');
  for (const f of readdirSync(blogDir).filter((f) => f.endsWith('.md')).sort()) {
    const md = readFileSync(join(blogDir, f), 'utf8');
    const body = md.replace(/^---[\s\S]*?---/, '');
    const words = body.split(/\s+/).filter(Boolean).length;
    const links = (body.match(/\]\(\//g) ?? []).length;
    const faq = /^## (أسئلة شائعة|الأسئلة الشائعة)/m.test(body);
    const cover = md.match(/^cover:\s*(\S+)/m)?.[1];
    const coverOk = cover ? existsSync(join('public', cover)) : false;
    const flags = [];
    if (words < 500) flags.push('short (<500 words)');
    if (links < 3) flags.push('few internal links (<3)');
    if (!faq) flags.push('no FAQ section');
    if (!coverOk) flags.push(cover ? 'cover file missing' : 'no cover');
    if (!/\*\*باختصار:?\*\*/.test(body)) flags.push('no "باختصار" answer-first summary');
    console.log(`${flags.length ? '•' : '✓'} ${f.replace('.md', '')}  ${words}w / ${links} links${flags.length ? '  -> ' + flags.join(', ') : ''}`);
  }
}

console.log(`\n${pages.length} pages, ${errors} errors, ${warnings} warnings`);
process.exit(errors ? 1 : 0);
