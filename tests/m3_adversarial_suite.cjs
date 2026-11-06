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
console.log('Running Milestone 3 Empirical Adversarial Test Suite');
console.log('Requirement R4: Dedicated Partners Page & Trust Bar');
console.log('====================================================\n');

// Target file paths
const partnersPagePath = path.join(ROOT, 'src', 'app', 'partners', 'page.tsx');
const sponsorTrustBarPath = path.join(ROOT, 'src', 'components', 'SponsorTrustBar.tsx');
const digitalArchitectLogoPath = path.join(ROOT, 'src', 'components', 'DigitalArchitectLogo.tsx');
const siteConfigPath = path.join(ROOT, 'src', 'config', 'site.config.ts');
const sdlcDataPath = path.join(ROOT, 'src', 'data', 'sdlcData.ts');
const palesaLogoPath = path.join(ROOT, 'public', 'assets', 'sponsors', 'palesa-pads-logo.png');

// ---------------------------------------------------------
// 1. Target Files & Route Exports
// ---------------------------------------------------------
console.log('--- Suite 1: Target Files & Route Exports ---');

test('File Existence: All required Milestone 3 source files exist', () => {
  assert.ok(fs.existsSync(partnersPagePath), 'src/app/partners/page.tsx must exist');
  assert.ok(fs.existsSync(sponsorTrustBarPath), 'src/components/SponsorTrustBar.tsx must exist');
  assert.ok(fs.existsSync(digitalArchitectLogoPath), 'src/components/DigitalArchitectLogo.tsx must exist');
  assert.ok(fs.existsSync(siteConfigPath), 'src/config/site.config.ts must exist');
  assert.ok(fs.existsSync(sdlcDataPath), 'src/data/sdlcData.ts must exist');
  assert.ok(fs.existsSync(palesaLogoPath), 'public/assets/sponsors/palesa-pads-logo.png must exist');
});

const partnersContent = fs.readFileSync(partnersPagePath, 'utf8');
const sponsorBarContent = fs.readFileSync(sponsorTrustBarPath, 'utf8');
const digitalLogoContent = fs.readFileSync(digitalArchitectLogoPath, 'utf8');
const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');
const sdlcDataContent = fs.readFileSync(sdlcDataPath, 'utf8');

test('Route Export: src/app/partners/page.tsx has default export PartnersPage', () => {
  assert.ok(
    partnersContent.includes('export default function PartnersPage()'),
    'src/app/partners/page.tsx must export default function PartnersPage()'
  );
});

test('Metadata Export: src/app/partners/page.tsx exports valid metadata object', () => {
  assert.ok(partnersContent.includes('export const metadata = {'), 'Must export metadata');
  assert.ok(partnersContent.includes('Social Enterprise & Brand Partnerships'), 'Metadata title must describe partnerships');
  assert.ok(partnersContent.includes('description:'), 'Metadata must include description');
});

test('Trust Bar Export: src/components/SponsorTrustBar.tsx has default export SponsorTrustBar', () => {
  assert.ok(
    sponsorBarContent.includes('export default function SponsorTrustBar()'),
    'src/components/SponsorTrustBar.tsx must export default function SponsorTrustBar()'
  );
});

// ---------------------------------------------------------
// 2. Requirement R4 Core Sections & Content Parity
// ---------------------------------------------------------
console.log('\n--- Suite 2: Requirement R4 Core Sections & Content Parity ---');

test('Partners Page: Embeds SponsorTrustBar component', () => {
  assert.ok(
    partnersContent.includes("import SponsorTrustBar from '@/components/SponsorTrustBar'"),
    'Must import SponsorTrustBar'
  );
  assert.ok(
    partnersContent.includes('<SponsorTrustBar />') || partnersContent.includes('<SponsorTrustBar/>'),
    'Must render <SponsorTrustBar />'
  );
});

test('Section 1 - Palesa Pads: Dedicated menstrual dignity pack section with 5-year washable pads', () => {
  assert.ok(
    partnersContent.includes('Palesa Pads Menstrual Dignity Packs'),
    'Must feature Palesa Pads Menstrual Dignity Packs heading'
  );
  assert.ok(
    partnersContent.includes('Washable, Reusable Sanitary Towels Lasting 5 Years') ||
    partnersContent.includes('5 continuous years') ||
    partnersContent.includes('5 years'),
    'Must specify 5-year washable / reusable sanitary towel duration'
  );
  assert.ok(
    partnersContent.includes('period poverty') || partnersContent.includes('sanitary pads'),
    'Must address period poverty or sanitary pad need'
  );
  assert.ok(
    partnersContent.includes('siteConfig.banking.snapScanUrl'),
    'Must integrate SnapScan donation link for Palesa Dignity Kits'
  );
  assert.ok(
    partnersContent.includes('/contact'),
    'Must link to contact page for corporate school-wide sponsorships'
  );
  assert.ok(
    partnersContent.includes('/assets/sponsors/palesa-pads-logo.png'),
    'Must render Palesa Pads logo in the section'
  );
});

test('Section 2 - Sports Tournaments: Padel 365 and community tournament fundraisers', () => {
  assert.ok(
    partnersContent.includes('Padel 365 &amp; Community Tournaments') ||
    partnersContent.includes('Padel 365 & Community Tournaments') ||
    partnersContent.includes('Padel 365'),
    'Must feature Padel 365 sports tournaments'
  );
  assert.ok(
    partnersContent.includes('TNT Creative Solutions'),
    'Must reference tournament co-host TNT Creative Solutions'
  );
  assert.ok(
    partnersContent.includes('Modderfontein') || partnersContent.includes('Gauteng'),
    'Must reference tournament location Modderfontein, Gauteng'
  );
  assert.ok(
    partnersContent.includes('In-a-Box'),
    'Must specify proceeds fund In-a-Box toolkits for children'
  );
  assert.ok(
    partnersContent.includes('/gallery'),
    'Must link to /gallery for tournament photos'
  );
});

test('Section 3 - Corporate CSI: Turnkey School Wellness & Tech Rollouts (SED Aligned)', () => {
  assert.ok(
    partnersContent.includes('Corporate Social Investment') ||
    partnersContent.includes('CSI / SED') ||
    partnersContent.includes('Corporate CSI'),
    'Must feature Corporate CSI / SED track'
  );
  assert.ok(
    partnersContent.includes('B-BBEE') && partnersContent.includes('Socio-Economic Development'),
    'Must explicitly state B-BBEE Socio-Economic Development (SED) alignment'
  );
  assert.ok(
    partnersContent.includes('Turnkey School Wellness') || partnersContent.includes('wellness'),
    'Must detail school wellness and educational rollouts'
  );
  assert.ok(
    partnersContent.includes('Executive Reporting') || partnersContent.includes('compliance reporting'),
    'Must mention verifiable audit and reporting capabilities'
  );
  assert.ok(
    partnersContent.includes('/contact'),
    'Must link to /contact for corporate discovery calls'
  );
});

test('Core Philosophy: Win-win cause enterprise model with 3 pillars', () => {
  assert.ok(
    partnersContent.includes('Why Cause-Driven Enterprise Works'),
    'Must contain core philosophy section heading'
  );
  assert.ok(
    partnersContent.includes('Dignity Products for Learners'),
    'Must define Pillar 1: Dignity Products for Learners'
  );
  assert.ok(
    partnersContent.includes('Ethical Business Growth'),
    'Must define Pillar 2: Ethical Business Growth'
  );
  assert.ok(
    partnersContent.includes('Auditable Social ROI'),
    'Must define Pillar 3: Auditable Social ROI'
  );
});

test('Call to Action & Navigation: Links to /contact and /donate', () => {
  assert.ok(
    partnersContent.includes('href="/contact"'),
    'Must have button linking to /contact'
  );
  assert.ok(
    partnersContent.includes('href="/donate"'),
    'Must have button linking to /donate'
  );
  assert.ok(
    partnersContent.includes('Simonia Buys Marimuthoo'),
    'Must reference Executive Director Simonia Buys Marimuthoo'
  );
});

// ---------------------------------------------------------
// 3. Sponsor Trust Bar & Logo Asset Verification
// ---------------------------------------------------------
console.log('\n--- Suite 3: Sponsor Trust Bar & Logo Assets ---');

test('Sponsor Config: Palesa Pads is configured in siteConfig.sponsors', () => {
  assert.ok(
    siteConfigContent.includes('name: "Palesa Pads"'),
    'Palesa Pads must be listed in siteConfig.sponsors'
  );
  assert.ok(
    siteConfigContent.includes('logo: "/assets/sponsors/palesa-pads-logo.png"'),
    'Palesa Pads logo path must match /assets/sponsors/palesa-pads-logo.png'
  );
  assert.ok(
    siteConfigContent.includes('Menstrual Dignity Campaign Partner'),
    'Palesa Pads role must describe Menstrual Dignity Campaign Partner'
  );
});

test('Palesa Pads Logo: Asset on disk exists, is non-empty, and has valid PNG header', () => {
  assert.ok(fs.existsSync(palesaLogoPath), 'Palesa Pads logo must exist on disk');
  const stat = fs.statSync(palesaLogoPath);
  assert.ok(stat.size > 10000, `Palesa Pads logo size (${stat.size} bytes) should be > 10KB`);

  const buffer = fs.readFileSync(palesaLogoPath);
  const pngHeader = buffer.subarray(0, 8).toString('hex');
  assert.strictEqual(pngHeader, '89504e470d0a1a0a', 'Palesa Pads logo must be a genuine PNG file');
});

test('Image-rendered Sponsors: All logo assets on disk exist with valid image headers', () => {
  const imageSponsors = [
    { name: 'eThekwini Municipality', file: 'ethekwini.jpg', type: 'jpg', minSize: 10000 },
    { name: 'Enterprise iLembe', file: 'ilembe.png', type: 'png', minSize: 10000 },
    { name: 'Buzz Barn (Fairview Estate)', file: 'buzz-barn.jpg', type: 'jpg', minSize: 10000 },
    { name: 'TNT Creative Solutions', file: 'gauteng-tech.jpg', type: 'jpg', minSize: 5000 },
    { name: 'Print Centre', file: 'print-centre.png', type: 'png', minSize: 10000 },
    { name: 'Palesa Pads', file: 'palesa-pads-logo.png', type: 'png', minSize: 50000 },
  ];

  for (const s of imageSponsors) {
    const fullPath = path.join(ROOT, 'public', 'assets', 'sponsors', s.file);
    assert.ok(fs.existsSync(fullPath), `Logo file for ${s.name} (${s.file}) must exist on disk`);
    const stat = fs.statSync(fullPath);
    assert.ok(
      stat.size >= s.minSize,
      `Logo file for ${s.name} size (${stat.size} bytes) is below minimum expected ${s.minSize} bytes`
    );

    const buf = fs.readFileSync(fullPath);
    if (s.type === 'png') {
      const header = buf.subarray(0, 4).toString('hex');
      assert.strictEqual(header, '89504e47', `${s.file} must have PNG header`);
    } else if (s.type === 'jpg') {
      const header = buf.subarray(0, 3).toString('hex');
      assert.strictEqual(header, 'ffd8ff', `${s.file} must have JPEG header`);
    }
  }
});

test('Digital Architect Sponsor: Handled via official SVG brand emblem component without broken img tag', () => {
  assert.ok(
    sponsorBarContent.includes("s.name === 'Digital Architect'"),
    'SponsorTrustBar must branch conditionally for Digital Architect'
  );
  assert.ok(
    sponsorBarContent.includes('<DigitalArchitectLogo'),
    'Must render DigitalArchitectLogo component for Digital Architect'
  );
  assert.ok(
    digitalLogoContent.includes('export default function DigitalArchitectLogo'),
    'DigitalArchitectLogo.tsx must export default function'
  );
  assert.ok(
    digitalLogoContent.includes('points="24,4 41.32,14 41.32,34 24,44 6.68,34 6.68,14"'),
    'DigitalArchitectLogo must contain regular hexagonal code core polygon'
  );
  assert.ok(
    digitalLogoContent.includes('DIGITAL') && digitalLogoContent.includes('ARCHITECT'),
    'DigitalArchitectLogo must render brand typography'
  );
});

// ---------------------------------------------------------
// 4. Partner Page Media Assets Integrity
// ---------------------------------------------------------
console.log('\n--- Suite 4: Partner Page Media Assets Integrity ---');

test('Gallery Assets: Images referenced on /partners page exist with valid binary headers', () => {
  const images = [
    { file: 'padel-tournament-group.jpg', minSize: 50000 },
    { file: 'lotusville-primary-team.jpg', minSize: 100000 },
  ];

  for (const img of images) {
    const fullPath = path.join(ROOT, 'public', 'assets', 'gallery', img.file);
    assert.ok(fs.existsSync(fullPath), `Gallery image ${img.file} must exist on disk`);
    const stat = fs.statSync(fullPath);
    assert.ok(
      stat.size >= img.minSize,
      `Image ${img.file} size (${stat.size} bytes) below minimum ${img.minSize}`
    );
    const buf = fs.readFileSync(fullPath);
    const header = buf.subarray(0, 3).toString('hex');
    assert.strictEqual(header, 'ffd8ff', `${img.file} must have valid JPEG header`);
  }
});

// ---------------------------------------------------------
// 5. Data Model Integrity in sdlcData.ts
// ---------------------------------------------------------
console.log('\n--- Suite 5: Data Model Integrity in sdlcData.ts ---');

test('Data Model: CAUSE_ENTERPRISE_PARTNERSHIPS contains all 3 core tracks', () => {
  assert.ok(
    sdlcDataContent.includes('export const CAUSE_ENTERPRISE_PARTNERSHIPS: CauseEnterpriseItem[] = ['),
    'sdlcData.ts must export CAUSE_ENTERPRISE_PARTNERSHIPS'
  );
  assert.ok(
    sdlcDataContent.includes('id: "palesa-pads"'),
    'Must include palesa-pads in CAUSE_ENTERPRISE_PARTNERSHIPS'
  );
  assert.ok(
    sdlcDataContent.includes('id: "padel-tournaments"'),
    'Must include padel-tournaments in CAUSE_ENTERPRISE_PARTNERSHIPS'
  );
  assert.ok(
    sdlcDataContent.includes('id: "corporate-csi-rollouts"'),
    'Must include corporate-csi-rollouts in CAUSE_ENTERPRISE_PARTNERSHIPS'
  );
});

test('Data Model: CSI_PARTNERSHIP_TRACK is exported with B-BBEE alignment details', () => {
  assert.ok(
    sdlcDataContent.includes('export const CSI_PARTNERSHIP_TRACK: CsiPartnershipTrack = {'),
    'sdlcData.ts must export CSI_PARTNERSHIP_TRACK'
  );
  assert.ok(
    sdlcDataContent.includes('Corporate & CSI / Social Impact Partnerships'),
    'Must have correct title in CSI_PARTNERSHIP_TRACK'
  );
});

// ---------------------------------------------------------
// 6. Zero Unicode Emojis Verification
// ---------------------------------------------------------
console.log('\n--- Suite 6: Zero Unicode Emojis Verification ---');

const emojiRegex = /(\p{Extended_Pictographic}|\p{Emoji_Presentation})/gu;

test('Zero Emojis: src/app/partners/page.tsx has 0 Unicode emojis', () => {
  const matches = partnersContent.match(emojiRegex) || [];
  const illegal = matches.filter((c) => c !== '\u2122' && c !== '\u00A9' && c !== '\u00AE');
  assert.strictEqual(
    illegal.length,
    0,
    `Found emojis in src/app/partners/page.tsx: ${JSON.stringify(illegal)}`
  );
});

test('Zero Emojis: src/components/SponsorTrustBar.tsx has 0 Unicode emojis', () => {
  const matches = sponsorBarContent.match(emojiRegex) || [];
  const illegal = matches.filter((c) => c !== '\u2122' && c !== '\u00A9' && c !== '\u00AE');
  assert.strictEqual(
    illegal.length,
    0,
    `Found emojis in src/components/SponsorTrustBar.tsx: ${JSON.stringify(illegal)}`
  );
});

test('Zero Emojis: src/components/DigitalArchitectLogo.tsx has 0 Unicode emojis', () => {
  const matches = digitalLogoContent.match(emojiRegex) || [];
  const illegal = matches.filter((c) => c !== '\u2122' && c !== '\u00A9' && c !== '\u00AE');
  assert.strictEqual(
    illegal.length,
    0,
    `Found emojis in src/components/DigitalArchitectLogo.tsx: ${JSON.stringify(illegal)}`
  );
});

test('Zero Emojis: src/config/site.config.ts has 0 Unicode emojis', () => {
  const matches = siteConfigContent.match(emojiRegex) || [];
  const illegal = matches.filter((c) => c !== '\u2122' && c !== '\u00A9' && c !== '\u00AE');
  assert.strictEqual(
    illegal.length,
    0,
    `Found emojis in src/config/site.config.ts: ${JSON.stringify(illegal)}`
  );
});

test('Zero Emojis: src/data/sdlcData.ts has 0 illegal pictographic emojis', () => {
  const matches = sdlcDataContent.match(emojiRegex) || [];
  const illegal = matches.filter((c) => c !== '\u2122' && c !== '\u00A9' && c !== '\u00AE');
  assert.strictEqual(
    illegal.length,
    0,
    `Found emojis in src/data/sdlcData.ts: ${JSON.stringify(illegal)}`
  );
});

// ---------------------------------------------------------
// 7. TypeScript Compilation (npx tsc --noEmit)
// ---------------------------------------------------------
console.log('\n--- Suite 7: TypeScript Static Verification ---');

test('TypeScript Compilation: npx tsc --noEmit exits 0 with zero type errors', () => {
  try {
    const stdout = execSync('npx tsc --noEmit', {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    assert.ok(true, 'TypeScript check passed');
  } catch (err) {
    throw new Error(`TypeScript compilation failed:\n${err.stdout || ''}\n${err.stderr || ''}`);
  }
});

// ---------------------------------------------------------
// Summary Report
// ---------------------------------------------------------
console.log('\n====================================================');
console.log(`Results: ${passedTests}/${totalTests} Passed (${failedTests} Failed)`);
console.log('====================================================');

if (failedTests > 0) {
  console.error('\nFailures detected:');
  for (const f of failures) {
    console.error(`- ${f.name}: ${f.error}`);
  }
  process.exit(1);
} else {
  console.log('\nALL REQUIREMENT R4 ADVERSARIAL CHECKS PASSED.');
  process.exit(0);
}
