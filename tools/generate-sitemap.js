/**
 * Generates public/sitemap.xml and public/robots.txt from the routes
 * declared in src/App.jsx. Run automatically before `vite build`
 * (see the "build" script in package.json) or manually:
 *
 *   node tools/generate-sitemap.js
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const SITE_URL = 'https://urgentdentalcare.co.uk';

// Parse every `path="..."` from the router so the sitemap stays in sync
// with the actual routes without a second source of truth.
const appSource = readFileSync(path.join(root, 'src/App.jsx'), 'utf8');
const routeMatches = [...appSource.matchAll(/path="([^"]*)"/g)].map((m) => m[1]);

// "/" is the index route; drop the layout wildcard-ish empties and dedupe.
const paths = new Set(['/']);
for (const p of routeMatches) {
  if (!p || p === '/') continue;
  paths.add('/' + p.replace(/^\/+/, ''));
}

// Priority + change frequency heuristics.
const meta = (p) => {
  if (p === '/') return { priority: '1.0', changefreq: 'weekly' };
  if (['/services', '/pricing', '/contact', '/book-appointment'].includes(p))
    return { priority: '0.9', changefreq: 'monthly' };
  if (p === '/blog') return { priority: '0.8', changefreq: 'weekly' };
  return { priority: '0.7', changefreq: 'monthly' }; // blog posts
};

const today = new Date().toISOString().split('T')[0];

const urls = [...paths]
  .sort()
  .map((p) => {
    const { priority, changefreq } = meta(p);
    const loc = p === '/' ? SITE_URL + '/' : SITE_URL + p;
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(path.join(root, 'public/sitemap.xml'), sitemap);
writeFileSync(path.join(root, 'public/robots.txt'), robots);

console.log(`✓ sitemap.xml generated (${paths.size} URLs)`);
console.log('✓ robots.txt generated');
