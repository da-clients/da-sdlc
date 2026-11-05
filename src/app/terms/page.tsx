import React from 'react';
import { siteConfig } from '@/config/site.config';

export default function TermsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#90D1BB]">
          NPO Governance &amp; Donor Terms • NPO 301-712
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Website Terms of Use &amp; Donor Governance
        </h1>
        <p className="text-xs text-slate-500">
          Effective Date: November 2026 • Simonia Development Learning Centre (NPO 301-712)
        </p>
      </div>

      <div className="space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl text-slate-900 dark:text-white">
            1. Non-Profit Status &amp; Financial Stewardship
          </h2>
          <p>
            <strong>{siteConfig.legalName}</strong> is registered with the South African Department of Social Development under registration number <strong>{siteConfig.npoNumber}</strong>. All monetary contributions deposited into our official Standard Bank account ({siteConfig.banking.accountNumber}) are governed by the SDLC Board and applied towards our four M.E.E.T. pillars (Mental Health, Education, Entrepreneurship, and Technology).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-slate-900 dark:text-white">
            2. Third-Party In-Kind Campaigns (Palesa Pads &amp; SnapScan)
          </h2>
          <p>
            Where supporters choose to purchase sanitary pad packs through our dedicated Palesa Pads SnapScan link, transactions are processed securely via SnapScan under our partner campaign.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-slate-900 dark:text-white">
            3. Mental Health Resources Disclaimer
          </h2>
          <p>
            Educational resources on this website (including the SDLC Courage Crew™ framework and downloadable helpline directories) are provided for psychosocial education and community support and do not replace emergency medical or psychiatric care. In a life-threatening emergency, please call 10111 or the 24-hour GBV Command Centre at 0800 428 428.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-slate-900 dark:text-white">
            4. Intellectual Property
          </h2>
          <p>
            The M.E.E.T. For Impact framework, SDLC Courage Crew™ characters and materials, and official SDLC logos are the intellectual property of Simonia Development Learning Centre (NPO 301-712). Website architecture sponsored and engineered by <a href="https://www.digitalarchitectagency.co.za" target="_blank" rel="noopener noreferrer" className="underline">Digital Architect</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
