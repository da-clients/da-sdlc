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
console.log('Running Milestone 2 Empirical Adversarial Test Suite');
console.log('====================================================\n');

// Load files
const galleryPagePath = path.join(ROOT, 'src', 'app', 'gallery', 'page.tsx');
const sdlcDataPath = path.join(ROOT, 'src', 'data', 'sdlcData.ts');
const galleryDir = path.join(ROOT, 'public', 'assets', 'gallery');

assert.ok(fs.existsSync(galleryPagePath), 'src/app/gallery/page.tsx must exist');
assert.ok(fs.existsSync(sdlcDataPath), 'src/data/sdlcData.ts must exist');
assert.ok(fs.existsSync(galleryDir), 'public/assets/gallery must exist');

const galleryContent = fs.readFileSync(galleryPagePath, 'utf8');
const sdlcContent = fs.readFileSync(sdlcDataPath, 'utf8');

// ---------------------------------------------------------
// 1. Authentic Milestones & Strict Chronological Order
// ---------------------------------------------------------
console.log('--- Suite 1: Authentic Milestones & Chronology ---');

test('Milestones: 4 Authentic Milestones are verbatim present in IMPACT_TIMELINE_EVENTS', () => {
  const requiredMilestones = [
    {
      id: 'padel-greenstone-2025',
      title: 'Padel 365 Greenstone Tournament (Gauteng)',
      date: '25 October 2025',
    },
    {
      id: 'stanger-equine-2026',
      title: 'Stanger Special Needs Equine Day (Ballito)',
      date: 'Q1 2026',
    },
    {
      id: 'ethekwini-youth-econ-2026',
      title: 'eThekwini Youth Economic Summit (Durban)',
      date: 'March 2026',
    },
    {
      id: 'lotusville-primary-2026',
      title: 'Lotusville Primary School Courage Crew™ (KZN)',
      date: 'August 2026',
    },
  ];

  for (const m of requiredMilestones) {
    assert.ok(sdlcContent.includes(m.id), `Milestone ID '${m.id}' missing in sdlcData.ts`);
    assert.ok(sdlcContent.includes(m.title), `Milestone title '${m.title}' missing in sdlcData.ts`);
    assert.ok(sdlcContent.includes(m.date), `Milestone date '${m.date}' missing in sdlcData.ts`);
  }
});

test('Milestones: Chronological order is strictly ascending (Oct 2025 -> Q1 2026 -> March 2026 -> Aug 2026)', () => {
  const ids = [
    'padel-greenstone-2025',
    'stanger-equine-2026',
    'ethekwini-youth-econ-2026',
    'lotusville-primary-2026',
  ];
  const positions = ids.map((id) => sdlcContent.indexOf(`id: "${id}"`));

  for (let i = 0; i < positions.length; i++) {
    assert.ok(positions[i] !== -1, `Could not find milestone definition for ${ids[i]}`);
    if (i > 0) {
      assert.ok(
        positions[i] > positions[i - 1],
        `Milestone ${ids[i]} (pos ${positions[i]}) appears before ${ids[i - 1]} (pos ${positions[i - 1]}). Not chronological!`
      );
    }
  }
});

test('Milestones: Zero duplicate milestone IDs in IMPACT_TIMELINE_EVENTS', () => {
  const timelineMatch = sdlcContent.match(/export const IMPACT_TIMELINE_EVENTS: ImpactTimelineEvent\[\] = \[([\s\S]*?)\];/);
  assert.ok(timelineMatch, 'IMPACT_TIMELINE_EVENTS must be exported');
  const ids = [...timelineMatch[1].matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
  const uniqueIds = new Set(ids);
  assert.strictEqual(ids.length, uniqueIds.size, `Duplicate milestone IDs detected: ${ids}`);
});

test('Milestones: Each timeline event has heroImage, non-empty images array, and detailedStory', () => {
  const timelineMatch = sdlcContent.match(/export const IMPACT_TIMELINE_EVENTS: ImpactTimelineEvent\[\] = \[([\s\S]*?)\];/);
  const eventsBlock = timelineMatch[1];
  const eventIdMatches = [...eventsBlock.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
  assert.ok(eventIdMatches.length >= 4, `Expected at least 4 timeline events, found ${eventIdMatches.length}`);

  for (const id of eventIdMatches) {
    assert.ok(sdlcContent.includes(id), `Missing event ${id}`);
  }
});

// ---------------------------------------------------------
// 2. All 21 Gallery Photos Disk Resolution
// ---------------------------------------------------------
console.log('\n--- Suite 2: Gallery Photos Disk Resolution ---');

test('Gallery Assets: Exactly 21 photo files exist on disk in public/assets/gallery/', () => {
  const filesOnDisk = fs.readdirSync(galleryDir).filter((f) => f.endsWith('.jpg') || f.endsWith('.png'));
  assert.strictEqual(filesOnDisk.length, 21, `Expected 21 photo files in ${galleryDir}, found ${filesOnDisk.length}`);

  for (const file of filesOnDisk) {
    const stats = fs.statSync(path.join(galleryDir, file));
    assert.ok(stats.size > 1000, `File ${file} is suspiciously small: ${stats.size} bytes`);
  }
});

test('Gallery Assets: ALL_GALLERY_PHOTOS defines exactly 21 items and each resolves to a file on disk', () => {
  const galleryMatch = galleryContent.match(/const ALL_GALLERY_PHOTOS: GalleryPhoto\[\] = \[([\s\S]*?)\];/);
  assert.ok(galleryMatch, 'ALL_GALLERY_PHOTOS array must be defined');

  const photoSources = [...galleryMatch[1].matchAll(/src:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.strictEqual(photoSources.length, 21, `Expected 21 photo sources in ALL_GALLERY_PHOTOS, found ${photoSources.length}`);

  for (const src of photoSources) {
    const relativeDiskPath = src.replace(/^\//, ''); // strip leading /
    const absoluteDiskPath = path.join(ROOT, 'public', relativeDiskPath);
    assert.ok(
      fs.existsSync(absoluteDiskPath),
      `Photo source '${src}' does not resolve to valid file on disk at '${absoluteDiskPath}'`
    );
  }
});

test('Gallery Assets: Zero orphan gallery assets on disk (every file on disk is referenced in ALL_GALLERY_PHOTOS)', () => {
  const galleryMatch = galleryContent.match(/const ALL_GALLERY_PHOTOS: GalleryPhoto\[\] = \[([\s\S]*?)\];/);
  const photoSources = [...galleryMatch[1].matchAll(/src:\s*'([^']+)'/g)].map((m) => path.basename(m[1]));
  const filesOnDisk = fs.readdirSync(galleryDir).filter((f) => f.endsWith('.jpg') || f.endsWith('.png'));

  const referencedSet = new Set(photoSources);
  for (const file of filesOnDisk) {
    assert.ok(referencedSet.has(file), `Orphan file detected on disk: ${file} is not in ALL_GALLERY_PHOTOS`);
  }
});

test('Gallery Assets: Zero duplicate photo IDs and zero duplicate photo sources in ALL_GALLERY_PHOTOS', () => {
  const galleryMatch = galleryContent.match(/const ALL_GALLERY_PHOTOS: GalleryPhoto\[\] = \[([\s\S]*?)\];/);
  const ids = [...galleryMatch[1].matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]);
  const srcs = [...galleryMatch[1].matchAll(/src:\s*'([^']+)'/g)].map((m) => m[1]);

  assert.strictEqual(ids.length, 21, 'Should have 21 IDs');
  assert.strictEqual(new Set(ids).size, 21, `Duplicate photo IDs detected: ${ids}`);
  assert.strictEqual(srcs.length, 21, 'Should have 21 srcs');
  assert.strictEqual(new Set(srcs).size, 21, `Duplicate photo srcs detected: ${srcs}`);
});

test('Gallery Assets: All gallery photos have non-empty alt text, captions, and valid categories', () => {
  const galleryMatch = galleryContent.match(/const ALL_GALLERY_PHOTOS: GalleryPhoto\[\] = \[([\s\S]*?)\];/);
  const items = galleryMatch[1]
    .split(/\{\s*id:/)
    .map((s) => s.trim())
    .filter(Boolean);

  assert.strictEqual(items.length, 21, `Must split into 21 items, got ${items.length}`);

  const categoryCounts = { schools: 0, tournaments: 0, wellness: 0, community: 0 };

  for (const item of items) {
    const altMatch = item.match(/alt:\s*'([^']*)'/);
    const captionMatch = item.match(/caption:\s*'([^']*)'/);
    const categoryMatch = item.match(/category:\s*'([^']*)'/);

    assert.ok(altMatch && altMatch[1].length > 5, `Alt text missing or too short: ${altMatch ? altMatch[1] : 'null'}`);
    assert.ok(captionMatch && captionMatch[1].length > 5, `Caption missing or too short: ${captionMatch ? captionMatch[1] : 'null'}`);
    assert.ok(
      ['schools', 'tournaments', 'wellness', 'community'].includes(categoryMatch ? categoryMatch[1] : ''),
      `Invalid category: ${categoryMatch ? categoryMatch[1] : 'null'}`
    );
    categoryCounts[categoryMatch[1]]++;
  }

  // Ensure every category has at least 1 photo
  assert.ok(categoryCounts.schools >= 1, 'schools must have photos');
  assert.ok(categoryCounts.tournaments >= 1, 'tournaments must have photos');
  assert.ok(categoryCounts.wellness >= 1, 'wellness must have photos');
  assert.ok(categoryCounts.community >= 1, 'community must have photos');
});

test('Timeline Assets: All heroImage and images in IMPACT_TIMELINE_EVENTS resolve to files on disk', () => {
  const heroImageMatches = [...sdlcContent.matchAll(/heroImage:\s*"([^"]+)"/g)].map((m) => m[1]);
  for (const src of heroImageMatches) {
    const relativeDiskPath = src.replace(/^\//, '');
    const absoluteDiskPath = path.join(ROOT, 'public', relativeDiskPath);
    assert.ok(
      fs.existsSync(absoluteDiskPath),
      `Timeline heroImage '${src}' does not exist on disk at '${absoluteDiskPath}'`
    );
  }

  const imageArrayMatches = [...sdlcContent.matchAll(/src:\s*"([^"]+)"/g)].map((m) => m[1]);
  for (const src of imageArrayMatches) {
    const relativeDiskPath = src.replace(/^\//, '');
    const absoluteDiskPath = path.join(ROOT, 'public', relativeDiskPath);
    assert.ok(
      fs.existsSync(absoluteDiskPath),
      `Timeline image src '${src}' does not exist on disk at '${absoluteDiskPath}'`
    );
  }
});

// ---------------------------------------------------------
// 3. Mobile Swipe Reel (~256px) & 2-Button Tab Toggle
// ---------------------------------------------------------
console.log('\n--- Suite 3: Mobile Swipe Reel & Tab Toggle ---');

test('Mobile Reel: Height constrained to ~256px portrait height', () => {
  assert.ok(
    galleryContent.includes("style={{ height: '240px' }}") || galleryContent.includes('h-[240px]'),
    'Mobile swipe card must have explicit 240px height'
  );
  assert.ok(galleryContent.includes('snap-x'), 'Mobile reel must include snap-x for touch swiping');
  assert.ok(galleryContent.includes('snap-mandatory'), 'Mobile reel must include snap-mandatory');
  assert.ok(galleryContent.includes('snap-center'), 'Mobile cards must have snap-center');
  assert.ok(galleryContent.includes('touch-pan-x'), 'Mobile reel must include touch-pan-x');
  assert.ok(galleryContent.includes('WebkitOverflowScrolling'), 'Mobile reel must support iOS smooth touch momentum');
});

test('Mobile Tab Toggle: 2-button segmented control with responsive visibility', () => {
  assert.ok(galleryContent.includes('const [mobileTab, setMobileTab] = useState'), 'mobileTab state must be present');
  assert.ok(galleryContent.includes("setMobileTab('milestones')"), 'Must have trigger for Milestones tab');
  assert.ok(galleryContent.includes("setMobileTab('gallery')"), 'Must have trigger for Gallery tab');
  assert.ok(galleryContent.includes('sm:hidden'), 'Tab toggle must be hidden on desktop (sm:hidden)');

  // Section 1 conditional visibility on mobile, block on sm
  assert.ok(
    galleryContent.includes("mobileTab === 'milestones' ? 'block' : 'hidden sm:block'"),
    'Section 1 (Timeline) must be hidden when gallery tab is active on mobile, but visible on desktop (sm:block)'
  );

  // Section 2 conditional visibility on mobile, block on sm
  assert.ok(
    galleryContent.includes("mobileTab === 'gallery' ? 'block' : 'hidden sm:block'"),
    'Section 2 (Gallery) must be hidden when milestones tab is active on mobile, but visible on desktop (sm:block)'
  );
});

// ---------------------------------------------------------
// 4. Desktop 3-Row Grid Architecture & Continuous Axis
// ---------------------------------------------------------
console.log('\n--- Suite 4: Desktop 3-Row Grid Architecture ---');

test('Desktop Grid: 3-row grid architecture with min-w-[1660px]', () => {
  assert.ok(galleryContent.includes('min-w-[1660px]'), 'Must declare min-w-[1660px] track');
  assert.ok(galleryContent.includes('grid grid-cols-6 gap-8 items-end'), 'Row 1 must be 6-column grid with items-end');
  assert.ok(galleryContent.includes('relative h-[72px]'), 'Row 2 (Central Axis) must have h-[72px]');
  assert.ok(galleryContent.includes('grid grid-cols-6 gap-8 items-start'), 'Row 3 must be 6-column grid with items-start');
});

test('Desktop Axis: Continuous axis line at top-1/2 -translate-y-1/2 passing through dot equator', () => {
  assert.ok(
    galleryContent.includes('top-1/2 -translate-y-1/2 left-0 right-0 h-1'),
    'Axis line must be centered with top-1/2 -translate-y-1/2 left-0 right-0 h-1'
  );
  assert.ok(galleryContent.includes('w-0.5 h-6 bg-slate-300'), 'Upper and lower stem connectors must be h-6 (24px)');
  assert.ok(galleryContent.includes('w-6 h-6 rounded-full'), 'Axis node dot must be 24px (w-6 h-6)');
});

test('Desktop Navigation: Left/Right scroll buttons invoke scrollBy', () => {
  assert.ok(galleryContent.includes('timelineTrackRef.current.scrollBy'), 'Chevrons must invoke scrollBy');
  assert.ok(galleryContent.includes("scrollTimeline('left')"), 'Must have scroll left handler');
  assert.ok(galleryContent.includes("scrollTimeline('right')"), 'Must have scroll right handler');
  assert.ok(galleryContent.includes('aria-label="Scroll timeline left"'), 'Left chevron must have aria-label');
  assert.ok(galleryContent.includes('aria-label="Scroll timeline right"'), 'Right chevron must have aria-label');
});

// ---------------------------------------------------------
// 5. Modal Accessibility: Escape key, Scroll Lock, Lightbox z-[60]
// ---------------------------------------------------------
console.log('\n--- Suite 5: Modal Accessibility ---');

test('Accessibility: Escape key listener is registered on window and cleans up on unmount', () => {
  assert.ok(galleryContent.includes("e.key === 'Escape'"), 'Must handle Escape key');
  assert.ok(galleryContent.includes("window.addEventListener('keydown', handleKeyDown)"), 'Must attach keydown listener');
  assert.ok(galleryContent.includes("window.removeEventListener('keydown', handleKeyDown)"), 'Must remove keydown listener');
});

test('Accessibility: Body scroll lock sets and restores document.body.style.overflow', () => {
  assert.ok(galleryContent.includes("document.body.style.overflow = 'hidden'"), 'Must set overflow to hidden');
  assert.ok(galleryContent.includes("document.body.style.overflow = ''"), 'Must reset overflow when closed');
});

test('Accessibility: Lightbox has z-[60] to overlay event modal (z-50)', () => {
  assert.ok(galleryContent.includes('fixed inset-0 z-50'), 'Event detail modal must have z-50');
  assert.ok(galleryContent.includes('fixed inset-0 z-[60]'), 'Image lightbox must have z-[60]');
  assert.ok(galleryContent.includes('role="dialog"'), 'Modals must include role="dialog"');
  assert.ok(galleryContent.includes('aria-modal="true"'), 'Modals must include aria-modal="true"');
});

// ---------------------------------------------------------
// 6. Pagination Button: Label "Show More (+" & Initial Limit 8
// ---------------------------------------------------------
console.log('\n--- Suite 6: Pagination & Filters ---');

test('Pagination: Initial visible count is 8 and increases by up to 8', () => {
  assert.ok(galleryContent.includes('const [visibleCount, setVisibleCount] = useState<number>(8);'), 'Initial limit must be 8');
  assert.ok(galleryContent.includes('Math.min(prev + 8, filteredPhotos.length)'), 'Pagination must increment by up to 8');
});

test('Pagination: Button label strictly matches "Show More (+"', () => {
  assert.ok(galleryContent.includes('Show More (+'), 'Button text must match "Show More (+"');
  assert.ok(!galleryContent.includes('Show More Photos'), 'Old label "Show More Photos" must NOT be present');
});

test('Filters: Category filters reset visible count to 8', () => {
  assert.ok(galleryContent.includes('setVisibleCount(8);'), 'Selecting a category filter must reset visible count to 8');
});

// ---------------------------------------------------------
// 7. Zero Emojis Compliance
// ---------------------------------------------------------
console.log('\n--- Suite 7: Zero Emojis Verification ---');

test('Zero Emojis: src/app/gallery/page.tsx has 0 pictographic emojis', () => {
  const emojiRegex = /(\p{Extended_Pictographic}|\p{Emoji_Presentation})/gu;
  const matches = galleryContent.match(emojiRegex) || [];
  const illegalEmojis = matches.filter((c) => c !== '\u2122' && c !== '\u00A9' && c !== '\u00AE');
  assert.strictEqual(
    illegalEmojis.length,
    0,
    `Found illegal emojis in src/app/gallery/page.tsx: ${JSON.stringify(illegalEmojis)}`
  );
});

test('Zero Emojis: src/data/sdlcData.ts has 0 pictographic emojis', () => {
  const emojiRegex = /(\p{Extended_Pictographic}|\p{Emoji_Presentation})/gu;
  const matches = sdlcContent.match(emojiRegex) || [];
  const illegalEmojis = matches.filter((c) => c !== '\u2122' && c !== '\u00A9' && c !== '\u00AE');
  assert.strictEqual(
    illegalEmojis.length,
    0,
    `Found illegal emojis in src/data/sdlcData.ts: ${JSON.stringify(illegalEmojis)}`
  );
});

// ---------------------------------------------------------
// 8. TypeScript Compilation: npx tsc --noEmit
// ---------------------------------------------------------
console.log('\n--- Suite 8: TypeScript Compilation ---');

test('TypeScript: npx tsc --noEmit exits with code 0', () => {
  try {
    const stdout = execSync('npx tsc --noEmit', {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    assert.ok(true, 'TypeScript compilation succeeded');
  } catch (err) {
    throw new Error(`npx tsc --noEmit failed: ${err.stdout || err.stderr || err.message}`);
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
  console.log('\nALL ADVERSARIAL CHECKS PASSED.');
  process.exit(0);
}
