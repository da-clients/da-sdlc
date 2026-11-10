const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'out');

console.log('========================================================');
console.log('SDLC INDEPENDENT ADVERSARIAL VERIFICATION HARNESS');
console.log(`Target: ${OUT}`);
console.log('========================================================\n');

if (!fs.existsSync(OUT)) {
  console.error('FATAL: out/ does not exist!');
  process.exit(1);
}

const htmlFiles = fs.readdirSync(OUT).filter(f => f.endsWith('.html'));
console.log(`Discovered ${htmlFiles.length} HTML static files to audit.\n`);

const anomalies = [];
let totalAnchors = 0;
let internalLinksCount = 0;
let hashLinksCount = 0;
let externalLinksCount = 0;
let mailtoLinksCount = 0;
let whatsappLinksCount = 0;
let snapscanLinksCount = 0;
let imageRefsCount = 0;

// 1. Index all DOM IDs and anchors across all pages
const pageMap = new Map();
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(OUT, file), 'utf8');
  const ids = new Set();
  
  const idRegex = /\bid\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = idRegex.exec(content)) !== null) {
    ids.add(m[1]);
  }
  
  const nameRegex = /\bname\s*=\s*["']([^"']+)["']/gi;
  while ((m = nameRegex.exec(content)) !== null) {
    ids.add(m[1]);
  }

  pageMap.set(file, { content, ids });
}

// 2. Adversarial Parse of every Anchor Tag across all HTML files
for (const file of htmlFiles) {
  const { content, ids } = pageMap.get(file);

  const aRegex = /<a\b([\s\S]*?)>/gi;
  let m;
  while ((m = aRegex.exec(content)) !== null) {
    totalAnchors++;
    const fullTag = m[0];
    const attrs = m[1];

    const hrefMatch = attrs.match(/\bhref\s*=\s*["']([^"']*)["']/i);
    if (!hrefMatch) {
      anomalies.push({ file, type: 'MISSING_HREF', tag: fullTag.slice(0, 80) });
      continue;
    }

    const href = hrefMatch[1].trim();
    if (!href) {
      anomalies.push({ file, type: 'EMPTY_HREF', tag: fullTag.slice(0, 80) });
      continue;
    }

    // A. External Links
    if (/^https?:\/\//i.test(href)) {
      externalLinksCount++;
      if (/^http:\/\//i.test(href)) {
        anomalies.push({ file, type: 'INSECURE_HTTP', href, tag: fullTag.slice(0, 80) });
      }

      const targetMatch = attrs.match(/\btarget\s*=\s*["']([^"']*)["']/i);
      const target = targetMatch ? targetMatch[1].toLowerCase() : null;
      if (target !== '_blank') {
        anomalies.push({ file, type: 'MISSING_TARGET_BLANK', href, target });
      }

      const relMatch = attrs.match(/\brel\s*=\s*["']([^"']*)["']/i);
      const rel = relMatch ? relMatch[1].toLowerCase() : '';
      const relTokens = rel.split(/\s+/);
      if (!relTokens.includes('noopener') || !relTokens.includes('noreferrer')) {
        anomalies.push({ file, type: 'INSECURE_REL', href, rel });
      }

      // WhatsApp link format verification
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        whatsappLinksCount++;
        if (href !== 'https://wa.me/27740444098' && !href.startsWith('https://wa.me/27740444098?')) {
          anomalies.push({ file, type: 'INVALID_WHATSAPP_LINK', href });
        }
      }

      // SnapScan link format verification
      if (href.includes('snapscan')) {
        snapscanLinksCount++;
        if (href !== 'https://pos.snapscan.io/qr/Kwc3UjHr') {
          anomalies.push({ file, type: 'INVALID_SNAPSCAN_URL', href });
        }
        if (file === 'index.html') {
          anomalies.push({ file, type: 'SNAPSCAN_ON_INDEX', href });
        }
      }
    }
    // B. Mailto Links
    else if (href.startsWith('mailto:')) {
      mailtoLinksCount++;
      const email = href.slice(7).split('?')[0].trim().toLowerCase();
      if (email !== 'info@sdlc.org.za') {
        anomalies.push({ file, type: 'INVALID_MAILTO_RECIPIENT', href });
      }
    }
    // C. Local Anchor Hashes (#...)
    else if (href.startsWith('#')) {
      hashLinksCount++;
      const targetId = href.slice(1);
      if (targetId && !ids.has(targetId)) {
        anomalies.push({ file, type: 'UNRESOLVED_LOCAL_ANCHOR', href, file });
      }
    }
    // D. Internal Relative / Absolute Routes
    else if (href.startsWith('/') && !href.startsWith('//')) {
      internalLinksCount++;
      const [pathAndQuery, hashPart] = href.split('#');
      const cleanPath = pathAndQuery.split('?')[0];

      let targetHtmlFile;
      if (cleanPath === '/' || cleanPath === '') {
        targetHtmlFile = 'index.html';
      } else {
        const withoutSlash = cleanPath.slice(1);
        if (pageMap.has(`${withoutSlash}.html`)) {
          targetHtmlFile = `${withoutSlash}.html`;
        } else if (pageMap.has(path.join(withoutSlash, 'index.html').replace(/\\/g, '/'))) {
          targetHtmlFile = path.join(withoutSlash, 'index.html').replace(/\\/g, '/');
        } else if (fs.existsSync(path.join(OUT, withoutSlash))) {
          targetHtmlFile = withoutSlash;
        } else {
          anomalies.push({ file, type: 'UNRESOLVED_INTERNAL_ROUTE', href, cleanPath });
          continue;
        }
      }

      if (hashPart && targetHtmlFile && targetHtmlFile.endsWith('.html')) {
        const targetPage = pageMap.get(targetHtmlFile);
        if (!targetPage || !targetPage.ids.has(hashPart)) {
          anomalies.push({
            file,
            type: 'UNRESOLVED_CROSS_PAGE_ANCHOR',
            href,
            hashPart,
            targetHtmlFile
          });
        }
      }
    } else {
      anomalies.push({ file, type: 'UNEXPECTED_PROTOCOL', href });
    }
  }

  // 3. Inspect Image Sources
  const imgRegex = /<img\b([\s\S]*?)>/gi;
  let imgM;
  while ((imgM = imgRegex.exec(content)) !== null) {
    imageRefsCount++;
    const srcMatch = imgM[1].match(/\bsrc\s*=\s*["']([^"']*)["']/i);
    if (srcMatch) {
      const src = srcMatch[1];
      if (src.startsWith('/') && !src.startsWith('//')) {
        const cleanSrc = src.split('?')[0];
        const localImgPath = path.join(OUT, cleanSrc.slice(1));
        if (!fs.existsSync(localImgPath)) {
          anomalies.push({ file, type: 'MISSING_IMAGE_ASSET', src, localImgPath });
        }
      }
    }
  }
}

// 4. In-depth Audit of Palesa Pads & SnapScan Restructuring

// A. Check out/donate.html
const donateContent = pageMap.get('donate.html').content;
if (!donateContent.includes('https://pos.snapscan.io/qr/Kwc3UjHr')) {
  anomalies.push({ file: 'donate.html', type: 'MISSING_SNAPSCAN_ON_DONATE' });
}
if (!donateContent.includes('/assets/sponsors/palesa-pads-logo.png')) {
  anomalies.push({ file: 'donate.html', type: 'MISSING_PALESA_LOGO_ON_DONATE' });
}
if (!donateContent.includes('Sponsor a Girl with Pads')) {
  anomalies.push({ file: 'donate.html', type: 'MISSING_PALESA_TITLE_ON_DONATE' });
}
if (!donateContent.includes('guarantee of 5 years')) {
  anomalies.push({ file: 'donate.html', type: 'MISSING_PALESA_VERBATIM_COPY_ON_DONATE' });
}
if (!donateContent.includes('href="/partners"') || !donateContent.includes('href="/contact"')) {
  anomalies.push({ file: 'donate.html', type: 'MISSING_CSI_LINKS_ON_DONATE' });
}

// B. Check out/index.html
const indexContent = pageMap.get('index.html').content;
// 1. Entire index.html must NOT contain SnapScan link
if (indexContent.includes('https://pos.snapscan.io/qr/Kwc3UjHr')) {
  anomalies.push({ file: 'index.html', type: 'SNAPSCAN_PRESENT_ON_INDEX_HTML' });
}

// 2. Partnership section on homepage ("Want to See What Our Partners Offer?") must be streamlined
const partnerSectionHeading = 'Want to See What Our Partners Offer?';
const headingPos = indexContent.indexOf(partnerSectionHeading);
if (headingPos === -1) {
  anomalies.push({ file: 'index.html', type: 'MISSING_HOMEPAGE_PARTNERSHIP_SECTION' });
} else {
  const sectionStart = indexContent.lastIndexOf('<section', headingPos);
  const sectionEnd = indexContent.indexOf('</section>', headingPos) + 10;
  const partnershipHtml = indexContent.slice(sectionStart, sectionEnd);

  if (partnershipHtml.includes('/assets/sponsors/palesa-pads-logo.png')) {
    anomalies.push({
      file: 'index.html',
      type: 'PALESA_LOGO_STILL_IN_PARTNERSHIP_SECTION',
      detail: 'Palesa Pads logo found in homepage partnership section'
    });
  }
  if (partnershipHtml.includes('https://pos.snapscan.io/qr/Kwc3UjHr')) {
    anomalies.push({
      file: 'index.html',
      type: 'SNAPSCAN_STILL_IN_PARTNERSHIP_SECTION',
      detail: 'SnapScan link found in homepage partnership section'
    });
  }
  if (partnershipHtml.includes('guarantee of 5 years') || partnershipHtml.includes('reusable cloth sanitary pads')) {
    anomalies.push({
      file: 'index.html',
      type: 'PALESA_COPY_STILL_IN_PARTNERSHIP_SECTION',
      detail: 'Palesa pads description found in homepage partnership section'
    });
  }
  if (!partnershipHtml.includes('href="/partners"')) {
    anomalies.push({
      file: 'index.html',
      type: 'MISSING_PARTNERS_CTA_IN_PARTNERSHIP_SECTION',
      detail: 'CTA button linking to /partners is missing from partnership section'
    });
  }
}

// 5. Audit Pre-Flight Server & Metadata Assets in out/
// A. .htaccess
const htaccessPath = path.join(OUT, '.htaccess');
if (!fs.existsSync(htaccessPath)) {
  anomalies.push({ file: '.htaccess', type: 'MISSING_HTACCESS_IN_OUT' });
} else {
  const htContent = fs.readFileSync(htaccessPath, 'utf8');
  const requiredDirectives = [
    'RewriteEngine On',
    'RewriteCond %{REQUEST_FILENAME} !-f',
    'RewriteCond %{REQUEST_FILENAME} !-d',
    'RewriteCond %{REQUEST_FILENAME}.html -f',
    'RewriteRule ^(.*)$ $1.html [L]',
    'X-Content-Type-Options "nosniff"',
    'X-Frame-Options "SAMEORIGIN"',
    'Referrer-Policy "strict-origin-when-cross-origin"',
    'Permissions-Policy "camera=(), microphone=(), geolocation=()"',
    'no-cache'
  ];
  for (const d of requiredDirectives) {
    if (!htContent.includes(d)) {
      anomalies.push({ file: '.htaccess', type: 'MISSING_HTACCESS_DIRECTIVE', directive: d });
    }
  }
}

// B. sitemap.xml
const sitemapPath = path.join(OUT, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  anomalies.push({ file: 'sitemap.xml', type: 'MISSING_SITEMAP_IN_OUT' });
} else {
  const smContent = fs.readFileSync(sitemapPath, 'utf8');
  const expectedRoutes = [
    { route: 'https://www.sdlc.org.za/', priority: '1.0' },
    { route: 'https://www.sdlc.org.za/about', priority: '0.95' },
    { route: 'https://www.sdlc.org.za/leadership', priority: '0.95' },
    { route: 'https://www.sdlc.org.za/pillars', priority: '0.95' },
    { route: 'https://www.sdlc.org.za/donate', priority: '0.95' },
    { route: 'https://www.sdlc.org.za/partners', priority: '0.85' },
    { route: 'https://www.sdlc.org.za/programs', priority: '0.85' },
    { route: 'https://www.sdlc.org.za/gallery', priority: '0.85' },
    { route: 'https://www.sdlc.org.za/organisation', priority: '0.85' },
    { route: 'https://www.sdlc.org.za/contact', priority: '0.80' },
    { route: 'https://www.sdlc.org.za/rules-of-engagement', priority: '0.80' },
    { route: 'https://www.sdlc.org.za/privacy', priority: '0.50' },
    { route: 'https://www.sdlc.org.za/terms', priority: '0.50' }
  ];
  for (const { route, priority } of expectedRoutes) {
    if (!smContent.includes(route)) {
      anomalies.push({ file: 'sitemap.xml', type: 'MISSING_SITEMAP_ROUTE', route });
    }
    const prioRegex = new RegExp(`<loc>${route.replace(/\//g, '\\/')}<\\/loc>\\s*<priority>${priority}<\\/priority>`);
    if (!prioRegex.test(smContent)) {
      anomalies.push({ file: 'sitemap.xml', type: 'INCORRECT_ROUTE_PRIORITY', route, priority });
    }
  }
}

// C. robots.txt
const robotsPath = path.join(OUT, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  anomalies.push({ file: 'robots.txt', type: 'MISSING_ROBOTS_IN_OUT' });
} else {
  const rbContent = fs.readFileSync(robotsPath, 'utf8');
  const bots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'OAI-SearchBot'];
  for (const bot of bots) {
    if (!rbContent.includes(`User-agent: ${bot}`)) {
      anomalies.push({ file: 'robots.txt', type: 'MISSING_AI_CRAWLER_DIRECTIVE', bot });
    }
  }
  if (!rbContent.includes('Sitemap: https://www.sdlc.org.za/sitemap.xml')) {
    anomalies.push({ file: 'robots.txt', type: 'MISSING_SITEMAP_DIRECTIVE' });
  }
}

// D. llms.txt
const llmsPath = path.join(OUT, 'llms.txt');
if (!fs.existsSync(llmsPath)) {
  anomalies.push({ file: 'llms.txt', type: 'MISSING_LLMS_IN_OUT' });
} else {
  const llContent = fs.readFileSync(llmsPath, 'utf8');
  const expectedTokens = [
    'info@sdlc.org.za',
    'R350',
    'R450',
    'R500',
    'R650',
    'https://pos.snapscan.io/qr/Kwc3UjHr',
    '+27 74 044 4098'
  ];
  for (const tok of expectedTokens) {
    if (!llContent.toLowerCase().includes(tok.toLowerCase())) {
      anomalies.push({ file: 'llms.txt', type: 'MISSING_LLMS_TOKEN', token: tok });
    }
  }
}

console.log('--- ADVERSARIAL SCAN STATISTICS ---');
console.log(`Total HTML files examined: ${htmlFiles.length}`);
console.log(`Total Anchor (<a...>) tags parsed: ${totalAnchors}`);
console.log(`  - Internal route links: ${internalLinksCount}`);
console.log(`  - Local hash anchor links: ${hashLinksCount}`);
console.log(`  - External HTTP(S) links: ${externalLinksCount}`);
console.log(`  - Mailto links: ${mailtoLinksCount}`);
console.log(`  - WhatsApp links: ${whatsappLinksCount}`);
console.log(`  - SnapScan links: ${snapscanLinksCount}`);
console.log(`Total Image references verified on disk: ${imageRefsCount}`);

console.log('\n========================================================');
console.log(`Audit Verdict: ${anomalies.length === 0 ? 'CLEAN (0 Anomalies)' : `FAILED (${anomalies.length} Anomalies)`}`);
console.log('========================================================\n');

if (anomalies.length > 0) {
  console.error('List of anomalies:');
  console.error(JSON.stringify(anomalies, null, 2));
  process.exit(1);
} else {
  console.log('ALL EMPIRICAL ADVERSARIAL VERIFICATIONS PASSED WITH ZERO ANOMALIES.');
  process.exit(0);
}
