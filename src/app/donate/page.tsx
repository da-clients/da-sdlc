'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import SponsorTrustBar from '@/components/SponsorTrustBar';
import NextStepBanner from '@/components/NextStepBanner';

export default function DonatePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyText = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const whatsappNotificationUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hi Simonia! I have made a direct contribution to SDLC (NPO 301-712) via Standard Bank EFT. Please find our details / Proof of Payment attached!'
  )}`;

  const emailNotificationUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    'SDLC Donation / Proof of Payment — NPO 301-712'
  )}&body=${encodeURIComponent(
    'Hi Simonia & SDLC Team,\n\nI am contacting you regarding our direct contribution to Simonia Development & Learning Centre (NPO 301-712).\n\nPlease find our details / Proof of Payment (POP) attached for your records.\n\nDonor Name / Organization:\nContact Number:\nContribution Details / Allocation:\n\nThank you for your impactful work in the community!'
  )}`;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* 1. HERO HEADER */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#90D1BB]/20 text-[#22725a] dark:text-[#90D1BB] border border-[#90D1BB]/30">
            Registered Non-Profit Organisation &bull; NPO 301-712
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Direct &amp; Transparent Giving to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-rose-600 dark:from-[#84CEE2] dark:via-[#90D1BB] dark:to-[#DA8688]">
              Empower South African Youth
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Every South African child deserves the emotional, educational, and digital tools to thrive. Make a direct contribution via Standard Bank EFT, scan instantly via SnapScan, or connect directly with our leadership team for custom donor support.
          </p>

          <div className="pt-2">
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-[#84CEE2] transition-colors"
            >
              <span>Looking for corporate CSI or cause-driven product partnerships instead?</span>
              <span className="font-bold underline underline-offset-4">Explore Our Partners Page &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <SponsorTrustBar />

      {/* 3. OFFICIAL BANKING COORDINATES & SNAPSCAN SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Standard Bank EFT Coordinates */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2c8fa8] dark:text-[#84CEE2]">
                  Direct Bank Transfer
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Standard Bank Official Details
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Verified as per Standard Bank Confirmation Letter &bull; Universal Branch (000205) &bull; NPO 301-712
                </p>
              </div>

              {/* Bank Details Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Account Holder</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white text-right">
                    {siteConfig.banking.accountHolder}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Bank Name</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {siteConfig.banking.bankName}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Account Type</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {siteConfig.banking.accountType}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Account Number</span>
                    <span className="text-base sm:text-lg font-mono font-black text-slate-900 dark:text-white tracking-wider">
                      {siteConfig.banking.accountNumber}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyText('account', siteConfig.banking.accountNumber)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedField === 'account' ? (
                      <span className="inline-flex items-center gap-1 text-teal-600 dark:text-[#90D1BB]">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Copied
                      </span>
                    ) : (
                      'Copy Account'
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between pr-2">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Branch Code</span>
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                        {siteConfig.banking.branchCode}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText('branch', siteConfig.banking.branchCode)}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      {copiedField === 'branch' ? (
                        <span className="inline-flex items-center gap-0.5 text-teal-600 dark:text-[#90D1BB]">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Copied
                        </span>
                      ) : (
                        'Copy'
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between pl-2 border-l border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[11px] text-slate-500 block">SWIFT / International</span>
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                        {siteConfig.banking.swiftCode}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText('swift', siteConfig.banking.swiftCode)}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      {copiedField === 'swift' ? (
                        <span className="inline-flex items-center gap-0.5 text-teal-600 dark:text-[#90D1BB]">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Copied
                        </span>
                      ) : (
                        'Copy'
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs text-slate-500">NPO Registration</span>
                  <span className="text-xs font-bold text-teal-700 dark:text-[#90D1BB]">
                    {siteConfig.npoNumber}
                  </span>
                </div>
              </div>

              {/* WhatsApp & Email Direct Connect Card */}
              <div className="p-6 rounded-3xl bg-teal-50/70 dark:bg-slate-900/80 border border-teal-200/80 dark:border-teal-800/60 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-teal-950 dark:text-teal-200">
                    Proof of Payment &amp; Custom Donor Support
                  </h3>
                  <p className="text-xs text-teal-800 dark:text-teal-400 mt-1 leading-relaxed">
                    Need Section 18A tax documentation, custom donor agreements, or want to send your Proof of Payment (POP) directly to Simonia? Reach out via WhatsApp or email:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                  <a
                    href={whatsappNotificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Send POP via WhatsApp</span>
                  </a>

                  <a
                    href={emailNotificationUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xs border border-slate-300 dark:border-slate-700 shadow-xs transition-colors shrink-0"
                  >
                    <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email Simonia (sdlc.npo@gmail.com)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: SnapScan Instant Giving & Transparency */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#DA8688]">
                  Mobile &amp; Card Giving
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Scan via SnapScan
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Support SDLC instantly using your SnapScan app or South African bank card.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center flex flex-col items-center">
                <div className="w-48 h-48 rounded-2xl bg-sky-50 dark:bg-slate-800 p-4 border-2 border-dashed border-sky-300 dark:border-slate-700 flex items-center justify-center mb-6">
                  {/* Clean SVG QR Illustration (Zero Emojis) */}
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                    <svg className="w-14 h-14 text-sky-600 dark:text-[#84CEE2] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    <span className="text-[10px] font-bold text-slate-500">Tap Below to Open SnapScan App</span>
                  </div>
                </div>

                <a
                  href={siteConfig.banking.snapScanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm transition-all shadow-sm text-center"
                >
                  Open SnapScan Donation Portal &rarr;
                </a>

                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                  Secured by SnapScan South Africa. Supports Masterpass, Visa, and Mastercard with instant digital receipt generation.
                </p>
              </div>

              {/* Tax & Governance Transparency */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white block">
                  NPO Governance &amp; Section 18A Transparency
                </span>
                <p className="leading-relaxed">
                  Simonia Development Learning Centre is registered with the Department of Social Development under NPO Registration 301-712. We maintain full financial transparency with an independent board. For donor agreements or institutional grants, please contact <a href={`mailto:${siteConfig.email}`} className="text-sky-600 dark:text-[#84CEE2] underline">{siteConfig.email}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <NextStepBanner
        stepLabel="Enterprise &amp; Brand Collaborations"
        title="Looking for Corporate CSI or Cause Partnerships?"
        description="Discover how your business can co-sponsor community sports days, support reusable sanitary towel drives with Palesa Pads, or back our 4 M.E.E.T. empowerment pillars."
        primaryHref="/partners"
        primaryLabel="Explore Enterprise Partnerships"
        secondaryHref="/contact"
        secondaryLabel="Contact SDLC Team"
      />
    </div>
  );
}
