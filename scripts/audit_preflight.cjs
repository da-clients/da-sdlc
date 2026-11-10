#!/usr/bin/env node
/**
 * Automated Pre-cPanel Link & Deployment Audit Script
 * Run after `npm run build` to verify the static export in `out/`.
 *
 * Verifies:
 * - Suite 1: Critical Deployment Assets in out/ (.htaccess, sitemap.xml, robots.txt, llms.txt, etc.)
 * - Suite 2: Internal Route & Anchor Integrity (HTML resolution, anchor IDs)
 * - Suite 3: External Links & Protocol Safety (target="_blank", rel="noopener noreferrer", wa.me, mailto)
 * - Suite 4: Palesa Pads & SnapScan Restructuring Audit (SnapScan on donate.html, absent from index.html)
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'out');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  [PASS] ${name}`);
  } catch (err) {
    failedTests++;
    failures.push({ name, error: err.message });
    console.error(`  [FAIL] ${name}: ${err.message}`);
  }
}

console.log('========================================================');
console.log('Running SDLC Pre-Flight & Static Export Audit Suite');
console.log(`Target Directory: ${OUT}`);
console.log('========================================================\n');

if (!fs.existsSync(OUT)) {
  console.error(`ERROR: Directory ${OUT} does not exist. Run "npm run build" first.`);
  process.exit(1);
}

// 1. Gather all HTML files and map element IDs and <a> links
const htmlFiles = fs.readdirSync(OUT).filter(f => f.endsWith('.html'));
const pageIds = new Map();
const pageLinks = new Map();

for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(OUT, file), 'utf8');

  // Collect element IDs: id="..." or id='...'
  const ids = new Set();
  const idRegex = /\bid=["']([^"']+)["']/gi;
  let m;
  while ((m = idRegex.exec(content)) !== null) {
    ids.add(m[1]);
  }
  pageIds.set(file, ids);

  // Collect <a> tags
  const links = [];
  const aRegex = /<a\s+([^>]+)>/gi;
  while ((m = aRegex.exec(content)) !== null) {
    const rawTag = m[0];
    const attrs = m[1];
    const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
    if (hrefMatch) {
      links.push({
        rawTag,
        attrs,
        href: hrefMatch[1],
      });
    }
  }
  pageLinks.set(file, links);
}

// Suite 1: Critical Deployment Assets in out/
console.log('--- Suite 1: Critical Deployment Assets in out/ ---');

test('File Existence: Pre-flight deployment assets exist in out/', () => {
  assert.ok(fs.existsSync(path.join(OUT, '.htaccess')), 'out/.htaccess must exist');
  assert.ok(fs.existsSync(path.join(OUT, 'sitemap.xml')), 'out/sitemap.xml must exist');
  assert.ok(fs.existsSync(path.join(OUT, 'robots.txt')), 'out/robots.txt must exist');
  assert.ok(fs.existsSync(path.join(OUT, 'llms.txt')), 'out/llms.txt must exist');
  assert.ok(fs.existsSync(path.join(OUT, 'index.html')), 'out/index.html must exist');
  assert.ok(fs.existsSync(path.join(OUT, 'donate.html')), 'out/donate.html must exist');
  assert.ok(fs.existsSync(path.join(OUT, 'partners.html')), 'out/partners.html must exist');
  assert.ok(fs.existsSync(path.join(OUT, '404.html')), 'out/404.html must exist');
});

test('Apache .htaccess: Contains rewrite rules and 4 security headers + zero-cache', () => {
  const htaccess = fs.readFileSync(path.join(OUT, '.htaccess'), 'utf8');
  assert.ok(htaccess.includes('RewriteEngine On'), '.htaccess must enable RewriteEngine');
  assert.ok(htaccess.includes('RewriteRule ^(.*)$ $1.html [L]'), '.htaccess must rewrite extensionless URLs to .html');
  assert.ok(htaccess.includes('X-Content-Type-Options "nosniff"'), 'Must set X-Content-Type-Options: nosniff');
  assert.ok(htaccess.includes('X-Frame-Options "SAMEORIGIN"'), 'Must set X-Frame-Options: SAMEORIGIN');
  assert.ok(htaccess.includes('Referrer-Policy "strict-origin-when-cross-origin"'), 'Must set Referrer-Policy: strict-origin-when-cross-origin');
  assert.ok(htaccess.includes('Permissions-Policy "camera=(), microphone=(), geolocation=()"'), 'Must set Permissions-Policy');
  assert.ok(htaccess.includes('no-cache'), 'Must retain zero-cache rule for HTML');
});

test('Sitemap.xml: Contains all 13 core site routes with designated priorities', () => {
  const sitemap = fs.readFileSync(path.join(OUT, 'sitemap.xml'), 'utf8');
  const expectedRoutesWithPriorities = [
    { url: 'https://www.sdlc.org.za/', priority: '1.0' },
    { url: 'https://www.sdlc.org.za/about', priority: '0.95' },
    { url: 'https://www.sdlc.org.za/leadership', priority: '0.95' },
    { url: 'https://www.sdlc.org.za/pillars', priority: '0.95' },
    { url: 'https://www.sdlc.org.za/donate', priority: '0.95' },
    { url: 'https://www.sdlc.org.za/partners', priority: '0.85' },
    { url: 'https://www.sdlc.org.za/programs', priority: '0.85' },
    { url: 'https://www.sdlc.org.za/gallery', priority: '0.85' },
    { url: 'https://www.sdlc.org.za/organisation', priority: '0.85' },
    { url: 'https://www.sdlc.org.za/contact', priority: '0.80' },
    { url: 'https://www.sdlc.org.za/rules-of-engagement', priority: '0.80' },
    { url: 'https://www.sdlc.org.za/privacy', priority: '0.50' },
    { url: 'https://www.sdlc.org.za/terms', priority: '0.50' },
  ];

  for (const { url, priority } of expectedRoutesWithPriorities) {
    assert.ok(sitemap.includes(url), `sitemap.xml must include route: ${url}`);
    // Check that url block contains the correct priority
    const urlBlockRegex = new RegExp(`<url>\\s*<loc>${url.replace(/\//g, '\\/')}<\\/loc>\\s*<priority>${priority}<\\/priority>\\s*<\\/url>`, 's');
    assert.ok(urlBlockRegex.test(sitemap), `sitemap.xml route ${url} must have priority ${priority}`);
  }
});

test('Robots.txt: Configures 5 AI crawlers and sitemap directive', () => {
  const robots = fs.readFileSync(path.join(OUT, 'robots.txt'), 'utf8');
  const bots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'OAI-SearchBot'];
  for (const bot of bots) {
    assert.ok(robots.includes(`User-agent: ${bot}`), `robots.txt must configure User-agent: ${bot}`);
  }
  assert.ok(robots.includes('Sitemap: https://www.sdlc.org.za/sitemap.xml'), 'robots.txt must point to sitemap.xml');
});

test('LLMS.txt: Contains In-a-Box pricing tiers, contact email, and SnapScan QR link', () => {
  const llms = fs.readFileSync(path.join(OUT, 'llms.txt'), 'utf8');
  assert.ok(llms.toLowerCase().includes('info@sdlc.org.za'), 'Must contain contact email Info@sdlc.org.za');
  assert.ok(llms.includes('R350'), 'Must include Education In-a-Box (R350)');
  assert.ok(llms.includes('R450'), 'Must include Mental Health In-a-Box (R450)');
  assert.ok(llms.includes('R500'), 'Must include Entrepreneurship In-a-Box (R500)');
  assert.ok(llms.includes('R650'), 'Must include Technology In-a-Box (R650)');
  assert.ok(llms.includes('https://pos.snapscan.io/qr/Kwc3UjHr'), 'Must include SnapScan QR donation link');
});

// Suite 2: Internal Route & Anchor Integrity
console.log('\n--- Suite 2: Internal Route & Anchor Integrity ---');

test('Internal Routes: 100% of internal hrefs resolve to physical static files', () => {
  const brokenRoutes = [];
  for (const [file, links] of pageLinks.entries()) {
    for (const { href, rawTag } of links) {
      if (href.startsWith('/') && !href.startsWith('//')) {
        const cleanPath = href.split('?')[0].split('#')[0];
        if (cleanPath === '' || cleanPath === '/') {
          if (!fs.existsSync(path.join(OUT, 'index.html'))) {
            brokenRoutes.push({ file, href, cleanPath, rawTag });
          }
        } else {
          const targetHtml = path.join(OUT, `${cleanPath.slice(1)}.html`);
          const targetDir = path.join(OUT, cleanPath.slice(1));
          const targetFile = path.join(OUT, cleanPath.slice(1));
          if (!fs.existsSync(targetHtml) && !fs.existsSync(targetDir) && !fs.existsSync(targetFile)) {
            brokenRoutes.push({ file, href, cleanPath, rawTag });
          }
        }
      }
    }
  }
  assert.strictEqual(brokenRoutes.length, 0, `Broken internal routes: ${JSON.stringify(brokenRoutes, null, 2)}`);
});

test('Anchor Links: 100% of local and cross-page anchor hashes resolve to existing DOM element IDs', () => {
  const brokenAnchors = [];
  for (const [file, links] of pageLinks.entries()) {
    for (const { href, rawTag } of links) {
      // Same-page hash: e.g. "#in-a-box"
      if (href.startsWith('#')) {
        const targetId = href.slice(1);
        if (targetId && !pageIds.get(file).has(targetId)) {
          brokenAnchors.push({ file, href, targetId, targetFile: file, rawTag });
        }
      }
      // Cross-page hash: e.g. "/programs#courage-crew" or "/partners#csi-partnerships"
      else if (href.startsWith('/') && href.includes('#')) {
        const [pathPart, hashPart] = href.split('#');
        const cleanRoute = pathPart.split('?')[0];
        const targetFile = (cleanRoute === '' || cleanRoute === '/') ? 'index.html' : `${cleanRoute.slice(1)}.html`;
        if (pageIds.has(targetFile)) {
          if (hashPart && !pageIds.get(targetFile).has(hashPart)) {
            brokenAnchors.push({ file, href, targetId: hashPart, targetFile, rawTag });
          }
        } else {
          // If the target HTML page itself doesn't exist, it's flagged as broken
          brokenAnchors.push({ file, href, targetId: hashPart, targetFile, error: 'Target HTML page not found', rawTag });
        }
      }
    }
  }
  assert.strictEqual(brokenAnchors.length, 0, `Broken anchor targets: ${JSON.stringify(brokenAnchors, null, 2)}`);
});

// Suite 3: External Links & Protocol Safety
console.log('\n--- Suite 3: External Links & Protocol Safety ---');

test('External Links: 100% of external hrefs have target="_blank" and rel="noopener noreferrer"', () => {
  const insecureLinks = [];
  for (const [file, links] of pageLinks.entries()) {
    for (const { href, attrs, rawTag } of links) {
      if (/^https?:\/\//i.test(href)) {
        const hasTargetBlank = /target=["']_blank["']/i.test(attrs);
        const hasNoopener = /rel=["'][^"']*noopener[^"']*["']/i.test(attrs);
        const hasNoreferrer = /rel=["'][^"']*noreferrer[^"']*["']/i.test(attrs);
        if (!hasTargetBlank || !hasNoopener || !hasNoreferrer) {
          insecureLinks.push({ file, href, rawTag, hasTargetBlank, hasNoopener, hasNoreferrer });
        }
      }
    }
  }
  assert.strictEqual(insecureLinks.length, 0, `Insecure external links: ${JSON.stringify(insecureLinks, null, 2)}`);
});

test('WhatsApp & Mailto: All communication links format correctly', () => {
  const invalidCommLinks = [];
  for (const [file, links] of pageLinks.entries()) {
    for (const { href, rawTag } of links) {
      if (href.startsWith('mailto:')) {
        if (!href.toLowerCase().startsWith('mailto:info@sdlc.org.za')) {
          invalidCommLinks.push({ file, href, rawTag, issue: 'Unexpected email recipient' });
        }
      }
      if (href.includes('wa.me')) {
        if (!href.startsWith('https://wa.me/27740444098')) {
          invalidCommLinks.push({ file, href, rawTag, issue: 'Unexpected WhatsApp phone number' });
        }
      }
    }
  }
  assert.strictEqual(invalidCommLinks.length, 0, `Invalid comm links: ${JSON.stringify(invalidCommLinks, null, 2)}`);
});

// Suite 4: Palesa Pads & SnapScan Restructuring Audit
console.log('\n--- Suite 4: Palesa Pads & SnapScan Restructuring Audit ---');

test('SnapScan & Palesa on Donate: SnapScan QR link and Palesa section exist on donate.html', () => {
  const donateContent = fs.readFileSync(path.join(OUT, 'donate.html'), 'utf8');
  assert.ok(
    donateContent.includes('https://pos.snapscan.io/qr/Kwc3UjHr'),
    'out/donate.html must contain SnapScan QR link https://pos.snapscan.io/qr/Kwc3UjHr'
  );
  assert.ok(
    donateContent.includes('/assets/sponsors/palesa-pads-logo.png'),
    'out/donate.html must contain Palesa Pads logo'
  );
  assert.ok(
    donateContent.includes('guarantee of 5 years'),
    'out/donate.html must contain verbatim 5-year guarantee description'
  );
  assert.ok(
    donateContent.includes('Sponsor a Girl with Pads'),
    'out/donate.html must contain section title "Sponsor a Girl with Pads"'
  );
});

test('Homepage Restructure: SnapScan CTA is absent from index.html and partnership section is streamlined', () => {
  const indexContent = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
  assert.ok(
    !indexContent.includes('https://pos.snapscan.io/qr/Kwc3UjHr'),
    'out/index.html must NOT contain SnapScan link after Phase 1 restructuring'
  );

  // Locate the partnership section ("Want to See What Our Partners Offer?")
  const headingIdx = indexContent.indexOf('Want to See What Our Partners Offer?');
  assert.ok(headingIdx !== -1, 'Partnership section heading must exist in out/index.html');
  const sectionStart = indexContent.lastIndexOf('<section', headingIdx);
  const sectionEnd = indexContent.indexOf('</section>', headingIdx) + 10;
  const partnershipSectionHtml = indexContent.slice(sectionStart, sectionEnd);

  assert.ok(
    !partnershipSectionHtml.includes('/assets/sponsors/palesa-pads-logo.png'),
    'Homepage partnership section must NOT contain Palesa Pads logo image after Phase 1 restructuring'
  );
  assert.ok(
    !partnershipSectionHtml.includes('https://pos.snapscan.io/qr/Kwc3UjHr'),
    'Homepage partnership section must NOT contain SnapScan CTA after Phase 1 restructuring'
  );
  assert.ok(
    partnershipSectionHtml.includes('href="/partners"'),
    'Homepage partnership section must retain partnership CTA button linking to /partners'
  );
});

console.log('\n========================================================');
console.log(`Results: ${passedTests}/${totalTests} Passed (${failedTests} Failed)`);
console.log('========================================================\n');

if (failedTests > 0) {
  console.error('AUDIT FAILED with errors.');
  process.exit(1);
} else {
  console.log('ALL PRE-FLIGHT VERIFICATION AUDIT CHECKS PASSED.');
  process.exit(0);
}
