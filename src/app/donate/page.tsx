'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { SPONSOR_IN_A_BOX_TIERS, SponsorBoxOption } from '@/data/sdlcData';
import SponsorTrustBar from '@/components/SponsorTrustBar';
import NextStepBanner from '@/components/NextStepBanner';

export default function DonatePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedBox, setSelectedBox] = useState<SponsorBoxOption>(
    SPONSOR_IN_A_BOX_TIERS[0]
  );
  const [highlightInABox, setHighlightInABox] = useState<boolean>(false);
  const [expandedBoxIds, setExpandedBoxIds] = useState<Record<string, boolean>>({});

  const paymentActionRef = useRef<HTMLDivElement>(null);

  // Detect ?box=<pillarId> or #in-a-box from URL on mount so deep-links from /pillars and /partners
  // pre-select the exact In-a-Box option and highlight the In-a-Box section
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const boxParam = params.get('box');
    if (boxParam) {
      const matched = SPONSOR_IN_A_BOX_TIERS.find(
        (b) => b.pillarId === boxParam || b.id === boxParam
      );
      if (matched) {
        setSelectedBox(matched);
      }
      setHighlightInABox(true);
      const el = document.getElementById('in-a-box');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      const timer = setTimeout(() => setHighlightInABox(false), 3500);
      return () => clearTimeout(timer);
    } else if (window.location.hash === '#in-a-box') {
      setHighlightInABox(true);
      const timer = setTimeout(() => setHighlightInABox(false), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const copyText = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const toggleExpandBox = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedBoxIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectBox = (box: SponsorBoxOption) => {
    setSelectedBox(box);
    // Smoothly scroll down to the payment action panel so user can immediately purchase
    setTimeout(() => {
      paymentActionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
  };

  const whatsappNotificationUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi Simonia! I have made a contribution to SDLC (NPO 301-712) towards the ${selectedBox.title} (R${selectedBox.amountZAR} / Ref: ${selectedBox.eftReference}). Please find our details / Proof of Payment attached!`
  )}`;

  const emailNotificationUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `SDLC Donation / Proof of Payment (${selectedBox.title}) — NPO 301-712`
  )}&body=${encodeURIComponent(
    `Hi Simonia & SDLC Team,\n\nI am contacting you regarding our contribution to Simonia Development & Learning Centre (NPO 301-712).\n\nSelected Allocation: ${selectedBox.title} (R${selectedBox.amountZAR} — Reference: ${selectedBox.eftReference})\n\nPlease find our details / Proof of Payment (POP) attached for your records.\n\nDonor Name / Organization:\nContact Number:\n\nThank you for your impactful work in the community!`
  )}`;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* 1. HERO HEADER */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#90D1BB]/20 text-[#22725a] dark:text-[#90D1BB] border border-[#90D1BB]/30">
            Registered Non-Profit Organisation &bull; NPO 301-712
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Direct &amp; Transparent Giving to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84CEE2] via-[#DA8688] via-[#90D1BB] to-[#F2CB6F]">
              Empower South African Youth
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Sponsor a child with a pillar-specific <strong>SDLC In-a-Box</strong> kit and scan via SnapScan right away, or make a direct contribution via Standard Bank EFT below.
          </p>
        </div>
      </section>

      {/* 2. TOP SECTION: SDLC IN-A-BOX SELECTOR + COMPACT PAYMENT ACTION (SNAPSCAN + EFT) */}
      <section
        id="in-a-box"
        className="scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#84CEE2]/20 text-slate-900 dark:text-[#84CEE2] mb-2">
                <span>Step 1: Choose an SDLC In-a-Box to Sponsor</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
                Sponsor a Child with an SDLC In-a-Box
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
                Select a pillar box below to sponsor a child. Selecting an option automatically scrolls to the payment buttons:
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>Or make a general donation via SnapScan or EFT below</span>
            </div>
          </div>

          {/* Grid: 4 Pillar In-a-Box Options (Left 8 cols) + Selected Box & Payment Action Card (Right 4 cols) */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-3xl transition-all duration-500 ${
              highlightInABox
                ? 'ring-4 ring-[#84CEE2] p-2 sm:p-4 bg-[#84CEE2]/5'
                : ''
            }`}
          >
            {/* Left 8 Columns: 4 Pillar Box Cards (2x2 Grid) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SPONSOR_IN_A_BOX_TIERS.map((box) => {
                const isSelected = selectedBox.id === box.id;
                const isExpanded = !!expandedBoxIds[box.id];

                return (
                  <div
                    key={box.id}
                    onClick={() => handleSelectBox(box)}
                    className={`group text-left rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md ${
                      isSelected
                        ? 'ring-3 ring-offset-2 ring-offset-white dark:ring-offset-slate-950 scale-[1.01]'
                        : 'border-slate-200/90 dark:border-slate-800 opacity-90 hover:opacity-100'
                    }`}
                    style={{
                      borderColor: isSelected ? box.color : undefined,
                      boxShadow: isSelected ? `0 8px 25px -5px ${box.color}55` : undefined,
                    }}
                  >
                    <div>
                      {/* Box Photo Header */}
                      <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={box.image}
                          alt={box.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
                        <span
                          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-extrabold text-slate-950 shadow-xs"
                          style={{ backgroundColor: box.color }}
                        >
                          {box.pillar} Pillar
                        </span>
                        <span className="absolute bottom-3 right-3 px-3.5 py-1 rounded-full bg-white text-slate-950 font-extrabold text-sm sm:text-base shadow-sm">
                          R{box.amountZAR} / Box
                        </span>
                        {isSelected && (
                          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/85 text-white text-[10px] font-bold">
                            Selected ✓
                          </span>
                        )}
                      </div>

                      {/* Box Title, Tagline & Expandable Description */}
                      <div className="p-4 sm:p-5 space-y-2.5">
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                            {box.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                            {box.tagline}
                          </p>
                        </div>

                        {/* "Show More" / "Show Less" Toggle for Description & Kit Items */}
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={(e) => toggleExpandBox(box.id, e)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 dark:text-[#84CEE2] hover:underline cursor-pointer"
                          >
                            <span>
                              {isExpanded
                                ? 'Hide description & kit items ▲'
                                : 'Show more (description & items) ▼'}
                            </span>
                          </button>
                        </div>

                        {/* Collapsible Details */}
                        {isExpanded && (
                          <div className="pt-2 space-y-2.5 border-t border-slate-100 dark:border-slate-800 animate-fade-in">
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                              {box.impactDescription}
                            </p>

                            <ul className="space-y-1.5 pt-1">
                              {box.kitItems.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-300"
                                >
                                  <span
                                    className="w-2 h-2 rounded-full shrink-0 mt-1"
                                    style={{ backgroundColor: box.color }}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Action Selection Bar */}
                    <div className="px-4 sm:px-5 pb-4 pt-1">
                      <div
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold text-center transition-all shadow-xs"
                        style={{
                          backgroundColor: isSelected ? box.color : undefined,
                          color: isSelected ? '#0f172a' : undefined,
                        }}
                      >
                        {isSelected
                          ? `Selected: R${box.amountZAR} (Scroll to donate ↓)`
                          : `Select ${box.title} — R${box.amountZAR}`}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right 4 Columns: Compact Payment Action (SnapScan + EFT) */}
            <div
              id="payment-action"
              ref={paymentActionRef}
              className="lg:col-span-4 lg:sticky lg:top-24 scroll-mt-24 w-full"
            >
              <div
                className="rounded-3xl bg-white dark:bg-slate-900 border-2 p-5 sm:p-6 shadow-md space-y-5"
                style={{ borderColor: selectedBox.color }}
              >
                {/* Selected In-a-Box Summary Header */}
                <div
                  className="p-4 rounded-2xl border"
                  style={{
                    backgroundColor: `${selectedBox.color}22`,
                    borderColor: `${selectedBox.color}66`,
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Selected In-a-Box
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-extrabold text-slate-950"
                      style={{ backgroundColor: selectedBox.color }}
                    >
                      R{selectedBox.amountZAR}
                    </span>
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {selectedBox.title}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Payment / EFT Ref:{' '}
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      {selectedBox.eftReference}
                    </span>
                  </div>
                </div>

                {/* Instant Giving Actions */}
                <div className="text-center space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#DA8688]">
                      Ready to Complete
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                      Donate R{selectedBox.amountZAR} Now
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Choose your preferred payment method below:
                    </p>
                  </div>

                  {/* QR Code Container */}
                  <div className="mx-auto w-32 h-32 rounded-2xl bg-sky-50 dark:bg-slate-800 p-2.5 border-2 border-dashed border-sky-300 dark:border-slate-700 flex flex-col items-center justify-center">
                    <svg className="w-10 h-10 text-sky-600 dark:text-[#84CEE2] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      SnapScan QR
                    </span>
                  </div>

                  {/* Primary Action: SnapScan Instant Button */}
                  <a
                    href={siteConfig.banking.snapScanUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 transition-all shadow-sm hover:opacity-95"
                    style={{ backgroundColor: selectedBox.color }}
                  >
                    Donate R{selectedBox.amountZAR} via SnapScan &rarr;
                  </a>

                  {/* Secondary Action: Direct EFT Button */}
                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById('bank-details')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-950 transition-all shadow-sm hover:opacity-90 cursor-pointer"
                  >
                    Donate via EFT (Bank Transfer) ↓
                  </button>

                  <p className="text-[11px] text-slate-400 mt-2">
                    Secured by SnapScan &amp; Standard Bank South Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFICIAL STANDARD BANK EFT DETAILS */}
      <section
        id="bank-details"
        className="scroll-mt-24 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2c8fa8] dark:text-[#84CEE2]">
              Direct Bank Transfer (EFT)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Standard Bank Official Details
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Verified as per Standard Bank Confirmation Letter &bull; Universal Branch (000205) &bull; NPO 301-712
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200/70 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400">Account Holder</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white text-right">
                {siteConfig.banking.accountHolder}
              </span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-slate-200/70 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400">Bank Name &amp; Type</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {siteConfig.banking.bankName} ({siteConfig.banking.accountType})
              </span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-slate-200/70 dark:border-slate-800">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Account Number</span>
                <span className="text-base sm:text-lg font-mono font-black text-slate-900 dark:text-white tracking-wider">
                  {siteConfig.banking.accountNumber}
                </span>
              </div>
              <button
                type="button"
                onClick={() => copyText('account', siteConfig.banking.accountNumber)}
                className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {copiedField === 'account' ? 'Copied ✓' : 'Copy Account'}
              </button>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-slate-200/70 dark:border-slate-800">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  Recommended EFT Reference ({selectedBox.title} — R{selectedBox.amountZAR})
                </span>
                <span className="text-sm sm:text-base font-mono font-bold text-slate-900 dark:text-white">
                  {selectedBox.eftReference}
                </span>
              </div>
              <button
                type="button"
                onClick={() => copyText('reference', selectedBox.eftReference)}
                className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {copiedField === 'reference' ? 'Copied ✓' : 'Copy Reference'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-3 border-b border-slate-200/70 dark:border-slate-800">
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
                  className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {copiedField === 'branch' ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              <div className="flex items-center justify-between pl-2 border-l border-slate-200/70 dark:border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-500 block">SWIFT / International</span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                    {siteConfig.banking.swiftCode}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyText('swift', siteConfig.banking.swiftCode)}
                  className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {copiedField === 'swift' ? 'Copied ✓' : 'Copy'}
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
        </div>
      </section>

      {/* 4. WHATSAPP & EMAIL DONOR SUPPORT SECTION */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-teal-50/70 dark:bg-slate-900/80 border border-teal-200/80 dark:border-teal-800/60 space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-teal-950 dark:text-teal-200">
                Proof of Payment &amp; Custom Donor Support
              </h3>
              <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-400 mt-1 leading-relaxed">
                Need Section 18A tax documentation, custom donor agreements, or want to send your Proof of Payment (POP) directly to Simonia? Reach out via WhatsApp or email:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <a
                href={whatsappNotificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors shrink-0"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Send POP via WhatsApp</span>
              </a>

              <a
                href={emailNotificationUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 shadow-xs transition-colors shrink-0"
              >
                <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Simonia ({siteConfig.email})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIP / CORPORATE CSI SECTION */}
      <NextStepBanner
        stepLabel="Cause Enterprise & Corporate CSI"
        title="Looking for Corporate CSI or Cause Partnerships?"
        description="Explore our Palesa Pads school initiative, Padel 365 tournaments, and B-BBEE Socio-Economic Development (SED) school rollouts."
        primaryHref="/partners"
        primaryLabel="Explore Partnerships"
        secondaryHref="/contact"
        secondaryLabel="Contact Executive Team"
      />

      {/* 6. SPONSORS SECTION (Beneath Partnership Section) */}
      <SponsorTrustBar />
    </div>
  );
}
