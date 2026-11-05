import React from 'react';
import { siteConfig } from '@/config/site.config';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#84CEE2]">
          Legal &amp; Regulatory Compliance • NPO 301-712
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
          POPIA Privacy &amp; Beneficiary Protection Policy
        </h1>
        <p className="text-xs text-slate-500">
          Effective Date: November 2026 • Governed under the Protection of Personal Information Act (POPIA), Act 4 of 2013 (Republic of South Africa)
        </p>
      </div>

      <div className="space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl text-slate-900 dark:text-white">
            1. Responsible Party &amp; NPO Mandate
          </h2>
          <p>
            <strong>{siteConfig.legalName} ({siteConfig.npoNumber})</strong> (&ldquo;SDLC&rdquo;) is a registered South African Non-Profit Organisation dedicated to empowering women and children. We are committed to protecting the privacy and personal information of our donors, corporate CSI partners, volunteers, and programme beneficiaries in strict accordance with the Protection of Personal Information Act (POPIA).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-slate-900 dark:text-white">
            2. Information We Collect &amp; Why
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Donor &amp; Corporate Sponsor Information:</strong> Names, contact details, and EFT proof-of-payment references voluntarily provided to issue NPO acknowledgement letters and CSI impact reports.</li>
            <li><strong>Volunteer &amp; School Booking Enquiries:</strong> Contact details submitted via WhatsApp or email to coordinate school workshops (including SDLC Courage Crew™) and community outreach.</li>
            <li><strong>Anonymized Website Telemetry:</strong> We use privacy-safe analytics (Google Analytics &amp; Microsoft Clarity) to understand how visitors navigate our educational resources so we can improve accessibility. We never sell or rent personal data.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-slate-900 dark:text-white">
            3. Child &amp; Beneficiary Photography Protection
          </h2>
          <p>
            SDLC conducts school and community outreach involving minors and vulnerable groups. All event photographs published in our Impact Timeline are shared strictly for non-profit impact reporting in partnership with participating schools and municipal bodies. Any parent, guardian, or school representative may request the immediate removal of any photograph by contacting <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-slate-900 dark:text-white">
            4. Information Officer Contact
          </h2>
          <p>
            To exercise your POPIA rights (access, correction, or deletion of personal records), contact our Information Officer at <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a> or call {siteConfig.phoneDisplay}.
          </p>
        </section>
      </div>
    </div>
  );
}
