const fs = require('fs');
const path = require('path');
const assert = require('assert');

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
console.log('Running Milestone 1 Empirical Adversarial Test Suite');
console.log('====================================================\n');

// 1. Zero Emojis Compliance
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
          const nonLegalEmojis = matches.filter(m => m !== '\u2122' && m !== '\u00A9' && m !== '\u00AE');
          if (nonLegalEmojis.length > 0) {
            violatingFiles.push({ file: path.relative(ROOT, fullPath), emojis: nonLegalEmojis });
          }
        }
      }
    }
  }

  walk(path.join(ROOT, 'src'));
  assert.strictEqual(violatingFiles.length, 0, `Found emojis in files: ${JSON.stringify(violatingFiles)}`);
});

test('Zero Emojis: src/components/ui/ThemeToggle.tsx uses inline SVGs and zero emojis', () => {
  const themeTogglePath = path.join(ROOT, 'src', 'components', 'ui', 'ThemeToggle.tsx');
  assert.ok(fs.existsSync(themeTogglePath), 'ThemeToggle.tsx must exist');
  const content = fs.readFileSync(themeTogglePath, 'utf8');
  assert.ok(!content.includes('\u2600'), 'Must not contain raw sun emoji');
  assert.ok(!content.includes('\uD83C\uDF19'), 'Must not contain raw moon emoji');
  assert.ok(content.includes('<svg'), 'Must render SVG element');
  assert.ok(content.includes('<circle cx="12" cy="12" r="4"'), 'Must render Sun circle SVG');
  assert.ok(content.includes('d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"'), 'Must render Moon SVG path');
});

test('Zero Emojis: src/components/ThemeToggle.tsx uses inline SVGs and zero emojis', () => {
  const themeTogglePath = path.join(ROOT, 'src', 'components', 'ThemeToggle.tsx');
  assert.ok(fs.existsSync(themeTogglePath), 'ThemeToggle.tsx must exist');
  const content = fs.readFileSync(themeTogglePath, 'utf8');
  assert.ok(!content.includes('\u2600'), 'Must not contain raw sun emoji');
  assert.ok(!content.includes('\uD83C\uDF19'), 'Must not contain raw moon emoji');
  assert.ok(content.includes('<svg'), 'Must render SVG element');
});

// 2. Header Email Link & Desktop UX Bug
test('HeaderBase: handleEmailClick invokes e.preventDefault()', () => {
  const headerPath = path.join(ROOT, 'src', 'components', 'layout', 'HeaderBase.tsx');
  const content = fs.readFileSync(headerPath, 'utf8');
  assert.ok(content.includes('const handleEmailClick = (e: React.MouseEvent) =>'), 'handleEmailClick handler must exist');
  assert.ok(content.includes('e.preventDefault()'), 'Must call e.preventDefault() to suppress empty tabs');
});

test('HeaderBase: copies siteConfig.email with fallback and triggers toast status', () => {
  const headerPath = path.join(ROOT, 'src', 'components', 'layout', 'HeaderBase.tsx');
  const content = fs.readFileSync(headerPath, 'utf8');
  assert.ok(content.includes('navigator.clipboard.writeText(siteConfig.email)'), 'Must write email to clipboard');
  assert.ok(content.includes("document.execCommand('copy')"), 'Must have execCommand copy fallback');
  assert.ok(content.includes('role="status"'), 'Toast must have role="status"');
  assert.ok(content.includes('aria-live="polite"'), 'Toast must have aria-live="polite"');
  assert.ok(content.includes('Email copied to clipboard!'), 'Toast must show "Email copied to clipboard!"');
});

test('HeaderBase: renders external social links for TikTok, Instagram, and Facebook', () => {
  const headerPath = path.join(ROOT, 'src', 'components', 'layout', 'HeaderBase.tsx');
  const content = fs.readFileSync(headerPath, 'utf8');
  assert.ok(content.includes('siteConfig.socials.tiktok'), 'Must link to TikTok');
  assert.ok(content.includes('siteConfig.socials.instagram'), 'Must link to Instagram');
  assert.ok(content.includes('siteConfig.socials.facebook'), 'Must link to Facebook');
  assert.ok(content.includes('rel="noopener noreferrer"'), 'External social links must include rel="noopener noreferrer"');
});

// 3. AI Crawling Endpoint vs. Visible UI
test('FooterBase: contains NO visible link or reference to llms.txt', () => {
  const footerPath = path.join(ROOT, 'src', 'components', 'layout', 'FooterBase.tsx');
  const content = fs.readFileSync(footerPath, 'utf8');
  assert.ok(!content.includes('llms.txt'), 'FooterBase must not contain visible link to llms.txt');
  assert.ok(!content.includes('llms-full.txt'), 'FooterBase must not contain visible link to llms-full.txt');
});

test('AI Crawling: public/llms.txt exists and is formatted as valid markdown text for crawlers', () => {
  const llmsPath = path.join(ROOT, 'public', 'llms.txt');
  assert.ok(fs.existsSync(llmsPath), 'public/llms.txt must exist');
  const content = fs.readFileSync(llmsPath, 'utf8');
  assert.ok(content.startsWith('# Simonia Development Learning Centre'), 'Must have correct markdown title');
  assert.ok(content.includes('301-712'), 'Must include NPO 301-712');
  assert.ok(content.includes('Standard Bank'), 'Must include Standard Bank');
  assert.ok(content.includes('10216589418'), 'Must include Account Number 10216589418');
  assert.ok(content.includes('000205'), 'Must include Branch Code 000205');
  assert.ok(content.includes('SBZAJJ'), 'Must include SWIFT SBZAJJ');
  assert.ok(content.includes('/llms-full.txt'), 'Must reference full context route');
});

test('AI Crawling: public/llms-full.txt exists and provides full context', () => {
  const llmsFullPath = path.join(ROOT, 'public', 'llms-full.txt');
  assert.ok(fs.existsSync(llmsFullPath), 'public/llms-full.txt must exist');
  const content = fs.readFileSync(llmsFullPath, 'utf8');
  assert.ok(content.length > 500, 'public/llms-full.txt must contain comprehensive text');
});

// 4. Banking Coordinates Ground Truth
test('Banking Ground Truth: src/config/site.config.ts matches authoritative data verbatim', () => {
  const configPath = path.join(ROOT, 'src', 'config', 'site.config.ts');
  const content = fs.readFileSync(configPath, 'utf8');
  assert.ok(content.includes('bankName: "Standard Bank"'), 'bankName must be Standard Bank');
  assert.ok(content.includes('accountHolder: "Simonia Development & Learning Centre"'), 'accountHolder must match');
  assert.ok(content.includes('accountNumber: "10216589418"'), 'accountNumber must be 10216589418');
  assert.ok(content.includes('branchCode: "000205"'), 'branchCode must be 000205');
  assert.ok(content.includes('branchName: "Universal Branch"'), 'branchName must be Universal Branch');
  assert.ok(content.includes('swiftCode: "SBZAJJ"'), 'swiftCode must be SBZAJJ');
  assert.ok(content.includes('snapScanUrl: "https://pos.snapscan.io/qr/Kwc3UjHr"'), 'snapScanUrl must match');
  assert.ok(content.includes('npoReg: "301-712"'), 'npoReg must be 301-712');
  assert.ok(content.includes('email: "sdlc.npo@gmail.com"'), 'email must be sdlc.npo@gmail.com');
  assert.ok(content.includes('whatsappNumber: "27769624784"'), 'whatsappNumber must be 27769624784');
});

// 5. Donation Page Refactor
test('Donate Page: Multi-tier selector widget is completely removed', () => {
  const donatePath = path.join(ROOT, 'src', 'app', 'donate', 'page.tsx');
  const content = fs.readFileSync(donatePath, 'utf8');
  assert.ok(!content.includes('SPONSOR_IN_A_BOX_TIERS'), 'Must not contain SPONSOR_IN_A_BOX_TIERS');
  assert.ok(!content.includes('SponsorBoxOption'), 'Must not contain SponsorBoxOption');
  assert.ok(!content.includes('selectedBox'), 'Must not contain selectedBox');
  assert.ok(!content.includes('donorName'), 'Must not contain donorName');
  assert.ok(!content.includes('calculatedRef'), 'Must not contain calculatedRef');
});

test('Donate Page: Features Standard Bank details with copy buttons, SnapScan link, and direct contacts', () => {
  const donatePath = path.join(ROOT, 'src', 'app', 'donate', 'page.tsx');
  const content = fs.readFileSync(donatePath, 'utf8');
  assert.ok(content.includes('siteConfig.banking.accountNumber'), 'Must render account number');
  assert.ok(content.includes('siteConfig.banking.branchCode'), 'Must render branch code');
  assert.ok(content.includes('siteConfig.banking.swiftCode'), 'Must render swift code');
  assert.ok(content.includes('copyText(\'account\''), 'Must have copy account action');
  assert.ok(content.includes('copyText(\'branch\''), 'Must have copy branch action');
  assert.ok(content.includes('copyText(\'swift\''), 'Must have copy swift action');
  assert.ok(content.includes('siteConfig.banking.snapScanUrl'), 'Must link to SnapScan URL');
  assert.ok(content.includes('https://wa.me/'), 'Must link to WhatsApp POP notification');
  assert.ok(content.includes('mailto:'), 'Must link to Email POP notification');
});

// 6. Data Integrity & Prop Contracts
test('Data Integrity: src/data/sdlcData.ts exports CSI_PARTNERSHIP_TRACK', () => {
  const dataPath = path.join(ROOT, 'src', 'data', 'sdlcData.ts');
  const content = fs.readFileSync(dataPath, 'utf8');
  assert.ok(content.includes('export const CSI_PARTNERSHIP_TRACK'), 'Must export CSI_PARTNERSHIP_TRACK');
  assert.ok(content.includes('export interface CsiPartnershipTrack'), 'Must export CsiPartnershipTrack interface');
});

test('Prop Contracts: src/app/gallery/page.tsx NextStepBanner invocation conforms to interface', () => {
  const galleryPath = path.join(ROOT, 'src', 'app', 'gallery', 'page.tsx');
  const content = fs.readFileSync(galleryPath, 'utf8');
  assert.ok(content.includes('<NextStepBanner'), 'Must render NextStepBanner');
  assert.ok(content.includes('stepLabel='), 'Must pass stepLabel');
  assert.ok(content.includes('title='), 'Must pass title');
  assert.ok(content.includes('description='), 'Must pass description');
  assert.ok(content.includes('primaryHref='), 'Must pass primaryHref');
  assert.ok(content.includes('primaryLabel='), 'Must pass primaryLabel');
});

console.log('\n====================================================');
console.log(`Results: ${passedTests} passed, ${failedTests} failed, out of ${totalTests} tests.`);
console.log('====================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
