# Project: Simonia Development & Learning Centre (SDLC) - Palesa Pads Restructure & Pre-cPanel Preflight

## Architecture
- Framework: Next.js 16.3.4 (App Router) with React 19 and Tailwind CSS v4.
- Build mode: Static Export (`output: 'export'`) generating static HTML/CSS/JS in `out/`.
- Hosting Target: Apache / cPanel production server.
- Key Configuration: `trailingSlash: false`, requiring Apache `mod_rewrite` clean URL handling.
- Branch: `draft-3-dev` (all commits strictly on this branch).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Git Branch Checkout | Switch and verify working branch is `draft-3-dev` | M1 | R1 |
| 2 | Homepage Partnership Section | Remove Palesa image, copy, SnapScan button; retain partnership framing & CTA to `/partners` | M1 | R2 |
| 3 | Donation Page Palesa Pads Section | Replace generic CSI banner with dedicated "Sponsor a Girl with Pads" section, verbatim copy, logo, SnapScan & CSI links | M1 | R3 |
| 4 | Apache Clean URL Rewrites | Add `mod_rewrite` rules to `public/.htaccess` mapping extensionless requests to `.html` | M2 | R4 |
| 5 | Security Response Headers | Add `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy` to `public/.htaccess` | M2 | R4 |
| 6 | Zero-Cache Preservation | Retain zero-cache headers for HTML files in `public/.htaccess` | M2 | R4 |
| 7 | XML Sitemap Update | Update `public/sitemap.xml` with all 13 indexable routes and specified priority ratings | M2 | R5 |
| 8 | AI Crawler Robots Verification | Verify `public/robots.txt` permits all 5 AI crawlers and references sitemap | M2 | R5 |
| 9 | LLMs.txt Enrichment | Update `public/llms.txt` with In-a-Box pricing, `Info@sdlc.org.za`, SnapScan link, and key URLs | M2 | R5 |
| 10 | Automated Preflight Audit Script | Author `scripts/audit_preflight.cjs` validating routes, element IDs, link attributes, SnapScan, and comms | M3 | R6 |
| 11 | Package.json Script Integration | Add `"audit": "node scripts/audit_preflight.cjs"` to `package.json` | M3 | R6 |
| 12 | Static Build & Audit Verification | Execute `npm run build` and `npm run audit` verifying 100% pass | M3 | R6 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Palesa Pads Restructuring | Branch `draft-3-dev`, `src/app/page.tsx`, `src/app/donate/page.tsx` | none | DONE |
| M2 | Pre-cPanel Apache & Discoverability | `public/.htaccess`, `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt` | M1 | DONE |
| M3 | Build & Automated Audit Verification | `scripts/audit_preflight.cjs`, `package.json`, `npm run build`, audit execution | M2 | DONE |
| M4 | Gate & Final Verification | Reviewer, Challenger, Forensic Auditor verification & final handoff | M3 | DONE |

## Interface Contracts
### Homepage (`src/app/page.tsx`) ↔ Partners Page (`src/app/partners/page.tsx`)
- CTA button links to `/partners`.
- No lingering SnapScan button or Palesa image on `/`.

### Donation Page (`src/app/donate/page.tsx`) ↔ Palesa Sponsorship & CSI
- Palesa Pads logo points to `/assets/sponsors/palesa-pads-logo.png`.
- Primary CTA points to `https://pos.snapscan.io/qr/Kwc3UjHr` with `target="_blank" rel="noopener noreferrer"`.
- Secondary CTAs link to `/partners` and `/contact`.

### Apache `.htaccess` ↔ Static Next.js Export
- Clean URLs: Requests for `/path` rewritten to `/path.html` if `/path.html` exists.
- Headers: Injected via `mod_headers.c`.

## Code Layout
- `src/app/page.tsx`: Owned by M1 Worker (DONE)
- `src/app/donate/page.tsx`: Owned by M1 Worker (DONE)
- `public/.htaccess`: Owned by M2 Worker / Worker Fix (DONE)
- `public/sitemap.xml`: Owned by M2 Worker (DONE)
- `public/robots.txt`: Owned by M2 Worker (DONE)
- `public/llms.txt`: Owned by M2 Worker (DONE)
- `scripts/audit_preflight.cjs`: Owned by M3 Worker (DONE)
- `package.json`: Owned by M3 Worker (DONE)
