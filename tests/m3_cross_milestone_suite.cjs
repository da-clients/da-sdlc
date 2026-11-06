const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

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

console.log('====================================================');
console.log('Running Milestone 3 Cross-Milestone System Suite');
console.log('====================================================\n');

// 1. Cross-Route Endpoint Existence
test('Route Endpoints: All major route pages exist on disk', () => {
  const routes = ['partners', 'donate', 'gallery', 'contact', 'pillars', 'leadership'];
  for (const r of routes) {
    const p = path.join(ROOT, 'src', 'app', r, 'page.tsx');
    assert.ok(fs.existsSync(p), `Route page must exist: ${r}`);
  }
});

// 2. Cross-Route Navigation Consistency
test('HeaderBase: Includes links to /partners, /gallery, /contact, and /donate', () => {
  const content = fs.readFileSync(path.join(ROOT, 'src', 'components', 'layout', 'HeaderBase.tsx'), 'utf8');
  assert.ok(content.includes("'/partners'"), 'Header navLinks must include /partners');
  assert.ok(content.includes("'/gallery'"), 'Header navLinks must include /gallery');
  assert.ok(content.includes("'/contact'"), 'Header navLinks must include /contact');
  assert.ok(content.includes('href="/donate"'), 'Header must have CTA button linking to /donate');
});

test('FooterBase: Includes links to /partners, /gallery, /contact, and /donate', () => {
  const content = fs.readFileSync(path.join(ROOT, 'src', 'components', 'layout', 'FooterBase.tsx'), 'utf8');
  assert.ok(content.includes('href="/partners"'), 'Footer must link to /partners');
  assert.ok(content.includes('href="/gallery"'), 'Footer must link to /gallery');
  assert.ok(content.includes('href="/contact"'), 'Footer must link to /contact');
  assert.ok(content.includes('href="/donate"'), 'Footer must link to /donate');
  assert.ok(!content.includes('llms.txt'), 'Footer must not contain visible link to llms.txt');
});

test('Partners Page: Links to /donate, /gallery, and /contact', () => {
  const content = fs.readFileSync(path.join(ROOT, 'src', 'app', 'partners', 'page.tsx'), 'utf8');
  assert.ok(content.includes('href="/donate"'), 'Partners page must link to /donate');
  assert.ok(content.includes('href="/gallery"'), 'Partners page must link to /gallery');
  assert.ok(content.includes('href="/contact"'), 'Partners page must link to /contact');
});

test('Donate Page: Links to /partners and /contact', () => {
  const content = fs.readFileSync(path.join(ROOT, 'src', 'app', 'donate', 'page.tsx'), 'utf8');
  assert.ok(
    content.includes('href="/partners"') || content.includes('primaryHref="/partners"'),
    'Donate page must link to /partners'
  );
  assert.ok(content.includes('secondaryHref="/contact"'), 'Donate page must link to /contact');
});

test('Gallery Page: Links to /donate and /partners via NextStepBanner', () => {
  const content = fs.readFileSync(path.join(ROOT, 'src', 'app', 'gallery', 'page.tsx'), 'utf8');
  assert.ok(content.includes('primaryHref="/donate"'), 'Gallery page must link to /donate');
  assert.ok(content.includes('secondaryHref="/partners"'), 'Gallery page must link to /partners');
});

test('Contact Page: Links to /donate', () => {
  const content = fs.readFileSync(path.join(ROOT, 'src', 'app', 'contact', 'page.tsx'), 'utf8');
  assert.ok(content.includes('href="/donate"'), 'Contact page must link to /donate');
});

// 3. Sponsors and Trust Bar
test('SponsorTrustBar: Palesa Pads logo file exists on disk and is referenced in siteConfig', () => {
  const logoPath = path.join(ROOT, 'public', 'assets', 'sponsors', 'palesa-pads-logo.png');
  assert.ok(fs.existsSync(logoPath), 'Palesa pads logo file must exist');
  assert.ok(fs.statSync(logoPath).size > 100, 'Logo file must not be empty');

  const siteConfigContent = fs.readFileSync(path.join(ROOT, 'src', 'config', 'site.config.ts'), 'utf8');
  assert.ok(siteConfigContent.includes('Palesa Pads'), 'siteConfig must list Palesa Pads');
  assert.ok(siteConfigContent.includes('/assets/sponsors/palesa-pads-logo.png'), 'siteConfig must point to palesa logo');

  const trustBarPath = path.join(ROOT, 'src', 'components', 'SponsorTrustBar.tsx');
  assert.ok(fs.existsSync(trustBarPath), 'SponsorTrustBar component must exist');
  const trustBarContent = fs.readFileSync(trustBarPath, 'utf8');
  assert.ok(trustBarContent.includes('siteConfig.sponsors'), 'SponsorTrustBar must render sponsors from siteConfig');
});

// 4. Zero Emojis in Customer Markup
test('Zero Emojis: src/ directory contains 0 pictographic emojis', () => {
  const emojiRegex = /(\p{Extended_Pictographic}|\p{Emoji_Presentation})/gu;
  const violatingFiles = [];

  function walk(dir) {
    for (const file of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (/\.(tsx?|jsx?|html|css|json)$/.test(file)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const matches = content.match(emojiRegex);
        if (matches) {
          const nonLegal = matches.filter(m => m !== '\u2122' && m !== '\u00A9' && m !== '\u00AE');
          if (nonLegal.length > 0) {
            violatingFiles.push({ file: path.relative(ROOT, fullPath), emojis: nonLegal });
          }
        }
      }
    }
  }

  walk(path.join(ROOT, 'src'));
  assert.strictEqual(violatingFiles.length, 0, `Found emojis in src/: ${JSON.stringify(violatingFiles)}`);
});

test('Zero Emojis: public text files contain 0 pictographic emojis', () => {
  const emojiRegex = /(\p{Extended_Pictographic}|\p{Emoji_Presentation})/gu;
  const violatingFiles = [];

  for (const file of fs.readdirSync(path.join(ROOT, 'public'))) {
    const fullPath = path.join(ROOT, 'public', file);
    if (fs.statSync(fullPath).isFile() && /\.(txt|json|svg|html|md)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(emojiRegex);
      if (matches) {
        const nonLegal = matches.filter(m => m !== '\u2122' && m !== '\u00A9' && m !== '\u00AE');
        if (nonLegal.length > 0) {
          violatingFiles.push({ file: path.relative(ROOT, fullPath), emojis: nonLegal });
        }
      }
    }
  }

  assert.strictEqual(violatingFiles.length, 0, `Found emojis in public text files: ${JSON.stringify(violatingFiles)}`);
});

// 5. TypeScript Compilation Check
test('TypeScript: npx tsc --noEmit exits with code 0', () => {
  const output = execSync('npx tsc --noEmit', { cwd: ROOT, encoding: 'utf8', stdio: 'pipe' });
  assert.strictEqual(output.trim(), '', 'tsc output should be empty');
});

console.log('\n====================================================');
console.log(`Results: ${passedTests}/${totalTests} Passed (${failedTests} Failed)`);
console.log('====================================================\n');

if (failedTests > 0) {
  console.error('FAILURES:');
  failures.forEach(f => console.error(`  - ${f.name}: ${f.error}`));
  process.exit(1);
} else {
  console.log('ALL CROSS-MILESTONE ADVERSARIAL CHECKS PASSED.');
  process.exit(0);
}
