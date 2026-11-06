# Project: Simonia Development & Learning Centre (`da-sdlc`)

## Architecture
- Framework: Next.js 16.3.4 (App Router, Turbopack)
- Core Libraries: React 19.2.8, React-DOM 19.2.8
- Styling: Tailwind CSS v4 (`@tailwindcss/postcss`, `postcss: ^8`)
- Output Target: Static HTML Export (`output: "export"`, output directory `out/`)
- Deployment Platform: Vercel (`vercel.json`)
- Target Git Branch: `draft-3-dev` across both `da-sdlc` and `template-base-shell`
- Dual-Repository Boundary: `da-sdlc` (active production client application) and `template-base-shell` (golden master base skeleton).

## Code Layout
- `src/app/`: Next.js App Router routes
  - `src/app/page.tsx`: Home landing page
  - `src/app/layout.tsx`: Root layout with font definitions and metadata
  - `src/app/donate/page.tsx`: Transparent donation portal (EFT, SnapScan, direct contact)
  - `src/app/gallery/page.tsx`: Timeline (desktop central axis & mobile ~260px swipe reel with tab toggle) and photo gallery
  - `src/app/partners/page.tsx`: Dedicated Social Enterprise & Brand Partnerships page
  - `src/app/pillars/page.tsx`: M.E.E.T. framework details
  - `src/app/leadership/page.tsx`: Founder & Board
  - `src/app/programs/page.tsx`: Programmes
- `src/components/`:
  - `src/components/layout/HeaderBase.tsx`: Header navigation, social links, clipboard email copy with toast notification
  - `src/components/layout/FooterBase.tsx`: Footer links (llms.txt link removed), social links, NPO credentials
  - `src/components/SponsorTrustBar.tsx`: Trust bar rendering partner logos (including Palesa Pads)
  - `src/components/ThemeToggle.tsx`: Clean SVG theme toggle (Zero Emojis)
  - `src/components/ui/ThemeToggle.tsx`: Deprecated/redundant component with emojis (to be replaced or sanitized)
- `src/config/`:
  - `src/config/site.config.ts`: Global configuration (banking coordinates, socials, sponsor registry, contact details)
- `src/data/`:
  - `src/data/sdlcData.ts`: Canonical datasets (`MEET_PILLARS`, `IMPACT_TIMELINE_EVENTS`, `CSI_PARTNERSHIP_TRACK`, etc.)
- `public/`:
  - `public/llms.txt`: Active background knowledge index for AI crawlers
  - `public/assets/sponsors/palesa-pads-logo.png`: Verified Palesa Pads logo
  - `public/assets/gallery/`: High-resolution authentic event photographs

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Zero Emojis Compliance | Replace any Unicode emojis (`☀️`, `🌙`, etc.) with inline SVGs across all components | M1 | Survey / R1 |
| 2 | Bank Details Ground Truth | Strictly match Standard Bank (Acc `10216589418`, Branch `000205`, SWIFT `SBZAJJ`, SnapScan `https://pos.snapscan.io/qr/Kwc3UjHr`, Acc Holder `Simonia Development & Learning Centre`, NPO `301-712`) | M1 | Survey / R1 |
| 3 | AI Crawling (`llms.txt`) Verification | Confirm visible link is removed in `FooterBase.tsx` while `/llms.txt` route remains active | M1 | Survey / R1 |
| 4 | Desktop Email Bug & Socials | Header email click copies `sdlc.npo@gmail.com` with toast and prevents default mailto navigation; TikTok, IG, FB links verified | M1 | Survey / R1 |
| 5 | Donation Page Refactor | Remove multi-tier payment selector from `/donate`; display simple EFT details, SnapScan QR portal link, and direct WhatsApp/email contact button | M1 | Survey / R2 |
| 6 | Build Blocker Resolutions | Re-export `CSI_PARTNERSHIP_TRACK` in `sdlcData.ts`, fix `NextStepBanner` props in `gallery/page.tsx`, and font offline fallback in `layout.tsx` | M1 | Survey / R5 |
| 7 | Desktop Horizontal Timeline | Retain Excalidraw central axis, top Date+Event cards, bottom Specific Moment stem cards, and click modal | M2 | Survey / R3 |
| 8 | Mobile Horizontal Swipe Reel | Compact horizontal swipe reel (~260px portrait height) for thumb swipe navigation | M2 | Survey / R3 |
| 9 | Mobile Tab Toggle | 2-button navigation toggle (`[ Milestones ]` \| `[ Photo Gallery ]`) to jump straight to photos | M2 | Survey / R3 |
| 10 | Photo Gallery & Filter | Filterable by category, initial limit of 8 photos, and "+8" pagination button | M2 | Survey / R3 |
| 11 | Authentic Milestones | 4 authentic milestones verified: Padel 365 Oct 2025, Lotusville Primary Aug 2026, eThekwini Summit March 2026, Stanger Equine Q1 2026 | M2 | Survey / R3 |
| 12 | Dedicated Partners Page | Complete Social Enterprise & Brand Partnerships page (`/partners`) with Palesa Pads, sports tournaments, and CSI | M3 | Survey / R4 |
| 13 | Trust Bar & Sponsors | Render Palesa Pads logo (`public/assets/sponsors/palesa-pads-logo.png`) across sponsor trust bars | M3 | Survey / R4 |
| 14 | Build Verification | `npm run build` exits 0 with zero TypeScript errors | M4 | Survey / R5 |
| 15 | Git Branch Compliance | Both `da-sdlc` and `template-base-shell` on `draft-3-dev`; zero commits/pushes to `main` | M4 | Survey / R5 |
| 16 | Git Push & Vercel Preview | Push `draft-3-dev` to GitHub remote and deploy preview on Vercel | M4 | Survey / R5 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Core Constraints, Bank Details, Build Blockers & /donate Refactor | R1 (zero emojis, bank details, header email preventDefault, socials, llms.txt), R2 (/donate single-focus refactor), and build blocker fixes (`CSI_PARTNERSHIP_TRACK`, font fallback, NextStepBanner prop fix) | None | DONE |
| M2 | Gallery Horizontal Timeline & Mobile Swipe Reel Refactor | R3 (desktop timeline verify, mobile swipe reel ~260px, mobile 2-button tab toggle, category filters, +8 pagination, 4 authentic milestones) | M1 | DONE |
| M3 | Partners Page & Sponsor Trust Bar Verification | R4 (verify `/partners` page copy, CTAs, and Palesa Pads logo rendering in SponsorTrustBar) | M1 | DONE |
| M4 | Build Verification, Emoji Sweep, Git Push & Vercel Preview Deployment | R5 (`npm run build` exits 0, zero emojis across website, push `draft-3-dev` to GitHub remote, deploy preview to Vercel) | M1, M2, M3 | IN_PROGRESS |

## Interface Contracts
### `src/config/site.config.ts`
- `banking.bankName`: `"Standard Bank"`
- `banking.accountHolder`: `"Simonia Development & Learning Centre"`
- `banking.accountNumber`: `"10216589418"`
- `banking.branchCode`: `"000205"`
- `banking.swiftCode`: `"SBZAJJ"`
- `banking.snapScanUrl`: `"https://pos.snapscan.io/qr/Kwc3UjHr"`
- `banking.npoReg`: `"301-712"`
- `email`: `"sdlc.npo@gmail.com"`
- `whatsappNumber`: `"27769624784"`

### `src/data/sdlcData.ts`
- Export `CSI_PARTNERSHIP_TRACK` must be available for `src/app/pillars/page.tsx`.
- Export `IMPACT_TIMELINE_EVENTS` must contain all 4 authentic milestones.

### `src/components/NextStepBanner.tsx`
- Props: `{ stepLabel: string; title: string; description: string; primaryHref: string; primaryLabel: string; secondaryHref?: string; secondaryLabel?: string; }`
