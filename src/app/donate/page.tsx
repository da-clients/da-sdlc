'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import SponsorTrustBar from '@/components/SponsorTrustBar';

export default function DonatePartnerPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedRef, setSelectedRef] = useState<string>('SDLC-General-Impact');

  const copyText = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const impactTiers = [
    {
      title: '1. Sponsor a School Courage Crew™ Kit',
      badge: 'Mental Health Pillar',
      color: '#84CEE2',
      refCode: 'SDLC-MentalHealth',
      desc: 'Equips a classroom with Calm Corner guides, Feelings Check-In posters, and trauma-informed breathing tools for learners aged 6–14.',
    },
    {
      title: '2. Fund Youth Digital & Literacy Workbooks',
      badge: 'Education & Tech Pillars',
      color: '#F2CB6F',
      refCode: 'SDLC-EduTech',
      desc: 'Provides printed digital literacy, online safety, and reading workbooks for underserved learners and young mothers.',
    },
    {
      title: '3. Back Women & Youth Entrepreneurship',
      badge: 'Entrepreneurship Pillar',
      color: '#90D1BB',
      refCode: 'SDLC-Enterprise',
      desc: 'Supports business mentorship workshops and community economic development expos across KwaZulu-Natal.',
    },
    {
      title: '4. Corporate CSI / CSR Strategic Partnership',
      badge: 'Corporate & Institutional',
      color: '#A4A5C6',
      refCode: 'SDLC-Corporate-CSI',
      desc: 'Partner with SDLC for custom-designed corporate social investment programmes with full documentation and impact reporting.',
    },
  ];

  const whatsappPersonalUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi Simonia! I would love to support SDLC (NPO 301-712) under reference [${selectedRef}]. Please let me know if you need my details for an NPO receipt or partnership chat!`
  )}`;

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#90D1BB]/25 text-slate-800 dark:text-[#90D1BB]">
            Partner With Registered NPO 301-712
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Make a Lasting Difference With <span className="text-[#90D1BB]">SDLC</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Every contribution — whether a corporate CSI partnership, a direct EFT towards a pillar you care about, or volunteering your time — directly empowers women and children in our communities.
          </p>
        </div>
      </section>

      {/* STEP 1: Choose Your Personal Impact Focus + Automated EFT Card */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Named Impact Pathways (Makes Giving Personal Without Manual Admin!) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#84CEE2]">
                Step 1 • Choose Where Your Support Goes
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
                Select a Programme Reference (Optional)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Clicking a pathway below sets your recommended EFT reference so Simonia and the Board know exactly which pillar you are championing:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impactTiers.map((tier) => {
                const active = selectedRef === tier.refCode;
                return (
                  <button
                    key={tier.refCode}
                    type="button"
                    onClick={() => setSelectedRef(tier.refCode)}
                    className={`text-left p-5 rounded-2xl border-2 transition-all ${
                      active
                        ? 'bg-white dark:bg-slate-900 shadow-md ring-2 ring-[#84CEE2]/40'
                        : 'bg-white/70 dark:bg-slate-900/60 hover:bg-white border-slate-200 dark:border-slate-800'
                    }`}
                    style={{ borderColor: active ? tier.color : undefined }}
                  >
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold text-slate-950 mb-2"
                      style={{ backgroundColor: tier.color }}
                    >
                      {tier.badge}
                    </span>
                    <h3 className="font-serif text-lg text-slate-900 dark:text-white">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                      {tier.desc}
                    </p>
                    <div className="mt-3 text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                      EFT Reference: <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">{tier.refCode}</code>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Warm Personal Connection Box — Zero Extra Work for Simonia, Maximum Warmth for Donor */}
            <div className="rounded-3xl p-6 bg-gradient-to-r from-[#84CEE2]/15 via-white to-[#90D1BB]/15 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-[#84CEE2]/40 space-y-3">
              <h3 className="font-serif text-xl text-slate-900 dark:text-white">
                💬 Want a Personal Connection or Official NPO Receipt?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                You can complete your EFT automatically at any time using the official Standard Bank details on the right. If you would like to say hello to Simonia, request an official NPO acknowledgement letter, or discuss a Corporate CSI partnership, tap below to send a pre-filled WhatsApp or email:
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={whatsappPersonalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-[#90D1BB] text-white dark:text-slate-950 hover:opacity-90 transition-all"
                >
                  <span>💬 Message Simonia on WhatsApp</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`SDLC Support / CSI Partnership (${selectedRef})`)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                >
                  <span>✉️ Email {siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 1-Click Copy Official NPO Standard Bank EFT Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-950 text-white p-7 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#84CEE2]">
                    Step 2 • Direct NPO Deposit (EFT)
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-0.5">
                    Official NPO Banking Details
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#90D1BB]/20 text-[#90D1BB] border border-[#90D1BB]/40">
                  NPO 301-712
                </span>
              </div>

              <div className="space-y-3 text-sm">
                {[
                  { label: 'Bank', value: siteConfig.banking.bankName },
                  { label: 'Account Holder', value: siteConfig.banking.accountHolder },
                  { label: 'Account Number', value: siteConfig.banking.accountNumber, copyable: true },
                  { label: 'Branch Code', value: siteConfig.banking.branchCode, copyable: true },
                  { label: 'Swift Code', value: siteConfig.banking.swiftCode, copyable: true },
                  { label: 'NPO Registration', value: siteConfig.banking.npoReg },
                  { label: 'Recommended Reference', value: selectedRef, copyable: true },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800/90"
                  >
                    <div>
                      <div className="text-[11px] text-slate-400">{row.label}</div>
                      <div className="font-semibold text-white">{row.value}</div>
                    </div>
                    {row.copyable && (
                      <button
                        type="button"
                        onClick={() => copyText(row.label, row.value)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-[#84CEE2] transition-colors shrink-0"
                      >
                        {copiedField === row.label ? '✓ Copied!' : 'Copy'}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                All direct deposits go strictly to the registered non-profit account of{' '}
                <strong className="text-slate-200">Simonia Development &amp; Learning Centre (NPO 301-712)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLEARLY SEPARATED IN-KIND COMMUNITY SUPPLY DRIVE (Palesa Pads Partnership) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#DA8688]/40 p-7 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <img
              src="/assets/sponsors/palesa-pads-qr.jpg"
              alt="Palesa Pads Dedicated SnapScan QR Code for SDLC"
              className="w-52 h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
            />
            <span className="text-[11px] text-slate-500 mt-2">
              Scan with SnapScan or your banking app
            </span>
          </div>
          <div className="md:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#DA8688]/20 text-slate-900 dark:text-[#DA8688] border border-[#DA8688]/50">
              In-Kind Supply Campaign • Partner Initiative
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Prefer to Donate Tangible Supplies? Sponsor Sanitary Pads via Palesa Pads
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Separate from direct NPO cash donations, SDLC has partnered with <strong>Palesa Pads</strong> to end period poverty in KwaZulu-Natal schools. When you use our dedicated Palesa Pads SnapScan link or QR code, your purchase funds reusable sanitary pad packs distributed directly to learners during our school outreach drives.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={siteConfig.banking.snapScanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#DA8688] text-slate-950 hover:opacity-90 transition-all shadow-xs"
              >
                Sponsor Pads via Palesa Pads SnapScan ↗
              </a>
              <Link
                href="/gallery"
                className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                See Our Palesa Pads Drive Photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SponsorTrustBar />
    </div>
  );
}
