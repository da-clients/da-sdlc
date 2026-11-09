import React from 'react';
import Link from 'next/link';
import {
  MEET_PILLARS,
  CSI_PARTNERSHIP_TRACK,
} from '@/data/sdlcData';
import NextStepBanner from '@/components/NextStepBanner';

function getPillarProgramLink(pillarId: string): string {
  switch (pillarId) {
    case 'mental-health':
      return '/programs#courage-crew';
    case 'education':
      return '/programs#school-literacy';
    case 'entrepreneurship':
      return '/programs#women-youth-enterprise';
    case 'technology':
      return '/programs#digital-ai-literacy';
    default:
      return '/programs';
  }
}

export default function PillarsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#DA8688]/20 text-slate-800 dark:text-[#DA8688]">
            About Our Pillars • M.E.E.T. For Impact
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Our Pillars:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84CEE2] via-[#DA8688] via-[#90D1BB] to-[#F2CB6F]">
              M.E.E.T.
            </span>{' '}
            for Impact
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Each pillar at SDLC is colour-coded and interconnected — addressing immediate emotional wellbeing alongside education, entrepreneurship, and digital empowerment.
          </p>
        </div>
      </section>

      {/* Static Pillar Jump Bar (Non-sticky so it never detaches from the header on scroll) */}
      <div className="bg-slate-50/90 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2 hidden sm:inline">
            Jump to Pillar:
          </span>
          {MEET_PILLARS.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-950 shadow-xs hover:opacity-90 transition-all"
              style={{ backgroundColor: p.color }}
            >
              <span className="font-serif font-bold">{p.letter}</span>
              <span>{p.title}</span>
            </a>
          ))}
          <a
            href="#csi-partnerships"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-950 shadow-xs hover:opacity-90 transition-all"
            style={{ backgroundColor: CSI_PARTNERSHIP_TRACK.color }}
          >
            <span>Corporate &amp; CSI Partnerships</span>
          </a>
        </div>
      </div>

      {/* All 4 M.E.E.T. Pillars Focused Breakdown */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12 sm:space-y-14">
        {MEET_PILLARS.map((pillar, index) => {
          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className="scroll-mt-28 rounded-3xl bg-white dark:bg-slate-900 border-2 p-6 sm:p-8 md:p-10 shadow-sm space-y-6 sm:space-y-7"
              style={{ borderColor: pillar.borderSoft }}
            >
              {/* Asymmetric Modern Pillar Header: Separates Badge row from full-width title so text flows horizontally */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-serif text-2xl font-bold text-slate-950 shadow-xs shrink-0"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.letter}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      Pillar 0{index + 1}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      M.E.E.T. Framework
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                    {pillar.title}
                  </h2>
                  <p className="font-serif text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-1 italic leading-snug">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              {/* Data Stat Banner */}
              <div
                className="p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                style={{ backgroundColor: pillar.bgSoft }}
              >
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  <span className="font-bold">Why This Matters:</span> {pillar.statHighlight}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 italic shrink-0">
                  Source: {pillar.statSource}
                </div>
              </div>

              {/* Tactic & Methodology Narrative (Explaining why this methodology is used) */}
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <blockquote
                  className="p-4 sm:p-5 rounded-2xl border-l-4 font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50"
                  style={{ borderLeftColor: pillar.color }}
                >
                  &ldquo;{pillar.outcomeQuote}&rdquo;
                </blockquote>
              </div>

              {/* Concise Action Hub for this Pillar: Support (In-a-Box), Programs, and Partners */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-3">
                  {/* 1. Support this Pillar (In-a-Box direct link to donation page) */}
                  <Link
                    href={`/donate?box=${pillar.id}#in-a-box`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold text-slate-950 shadow-sm hover:opacity-90 active:scale-[0.99] transition-all"
                    style={{ backgroundColor: pillar.color }}
                  >
                    <span>Want to support this pillar? Sponsor an In-a-Box →</span>
                  </Link>

                  {/* 2. Check out this Pillar's Programs */}
                  <Link
                    href={getPillarProgramLink(pillar.id)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-[0.99] transition-all"
                  >
                    <span>Want to check out this pillar&apos;s programs? →</span>
                  </Link>

                  {/* 3. Check out this Pillar's Partners */}
                  <Link
                    href="/partners#enterprise-initiatives"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.99] transition-all"
                  >
                    <span>Check out this pillar&apos;s partners →</span>
                  </Link>
                </div>
              </div>
            </section>
          );
        })}

        {/* 5th Section: Corporate & CSI / Social Impact Partnerships */}
        <section
          id="csi-partnerships"
          className="scroll-mt-28 rounded-3xl bg-white dark:bg-slate-900 border-2 p-6 sm:p-8 md:p-10 shadow-sm space-y-6"
          style={{ borderColor: CSI_PARTNERSHIP_TRACK.borderSoft }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Institutional &amp; Corporate Partnerships
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                {CSI_PARTNERSHIP_TRACK.title}
              </h2>
            </div>
            <Link
              href="/contact"
              className="self-start sm:self-center px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 shrink-0 hover:opacity-90 transition-all"
              style={{ backgroundColor: CSI_PARTNERSHIP_TRACK.color }}
            >
              Partner With SDLC →
            </Link>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {CSI_PARTNERSHIP_TRACK.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CSI_PARTNERSHIP_TRACK.offerings.map((off) => (
              <div
                key={off}
                className="p-4 rounded-2xl bg-[#FAF9F6] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
                  style={{ backgroundColor: CSI_PARTNERSHIP_TRACK.color }}
                />
                <span>{off}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span>Explore All Social Enterprise Partnerships →</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span>Request a CSI Proposal</span>
            </Link>
          </div>
        </section>
      </div>

      <NextStepBanner
        stepLabel="Next Step: Real-World Proof"
        title="See Our 4 Pillars in Action Across KwaZulu-Natal & Gauteng"
        description="Browse our Impact Timeline & Categorised Event Gallery to see how SDLC transforms lives on the ground."
        primaryHref="/gallery"
        primaryLabel="Explore Impact Gallery"
        secondaryHref="/donate#in-a-box"
        secondaryLabel="Sponsor an In-a-Box"
      />
    </div>
  );
}
