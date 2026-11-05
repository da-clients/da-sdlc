import React from 'react';
import Link from 'next/link';
import {
  MEET_PILLARS,
  CSI_PARTNERSHIP_TRACK,
  COURAGE_CREW_CHARACTERS,
  MENTAL_HEALTH_HELPLINES,
} from '@/data/sdlcData';
import NextStepBanner from '@/components/NextStepBanner';

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
            Our Pillars: <span className="text-[#DA8688]">M.E.E.T.</span> for Impact
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Each pillar at SDLC is colour-coded and interconnected — addressing immediate emotional wellbeing alongside education, entrepreneurship, and digital empowerment.
          </p>
        </div>
      </section>

      {/* Sticky Jump Bar — Instant Navigation to Every Single Pillar (No Broken Links!) */}
      <div className="sticky top-20 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 px-4">
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
            <span>🤝 Corporate CSI</span>
          </a>
        </div>
      </div>

      {/* All 4 M.E.E.T. Pillars Detailed Breakdown */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {MEET_PILLARS.map((pillar, index) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className="scroll-mt-36 rounded-3xl bg-white dark:bg-slate-900 border-2 p-7 sm:p-10 shadow-sm space-y-8"
            style={{ borderColor: pillar.borderSoft }}
          >
            {/* Pillar Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-serif text-3xl font-bold text-slate-950 shadow-sm shrink-0"
                  style={{ backgroundColor: pillar.color }}
                >
                  {pillar.letter}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Pillar 0{index + 1} • Official Sticker Colour
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
                    {pillar.title} — {pillar.subtitle}
                  </h2>
                </div>
              </div>
              <Link
                href="/donate"
                className="self-start sm:self-center px-4 py-2 rounded-full text-xs font-semibold text-slate-950 shrink-0"
                style={{ backgroundColor: pillar.color }}
              >
                Sponsor This Pillar →
              </Link>
            </div>

            {/* Data Stat Banner */}
            <div
              className="p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              style={{ backgroundColor: pillar.bgSoft }}
            >
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                📌 Why This Matters: {pillar.statHighlight}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 italic">
                Source: {pillar.statSource}
              </div>
            </div>

            {/* Narrative + Core Programmes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <blockquote
                  className="p-4 rounded-2xl border-l-4 font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50"
                  style={{ borderLeftColor: pillar.color }}
                >
                  &ldquo;{pillar.outcomeQuote}&rdquo;
                </blockquote>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl p-6 bg-[#FAF9F6] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                  <h3 className="font-serif text-xl text-slate-900 dark:text-white">
                    {pillar.title} Focus Areas
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    {pillar.programmes.map((prog) => (
                      <li key={prog} className="flex items-start gap-2.5">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-slate-950 shrink-0 mt-0.5"
                          style={{ backgroundColor: pillar.color }}
                        >
                          ✓
                        </span>
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SPECIAL EMBED FOR MENTAL HEALTH PILLAR:
                1. Flagship School Programme: SDLC Courage Crew™
                2. Relocated Mental Health Helpline Directory & PDF (MEETingNeeds.pdf) */}
            {pillar.id === 'mental-health' && (
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-10">
                {/* A. SDLC Courage Crew™ Flagship School Programme */}
                <div
                  id="courage-crew"
                  className="scroll-mt-36 rounded-3xl bg-gradient-to-br from-[#84CEE2]/15 via-[#FAF9F6] to-[#90D1BB]/15 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-[#84CEE2]/50 p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#84CEE2] text-slate-950 mb-2">
                        Flagship School Programme • Ages 6–14 Years
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        SDLC Courage Crew™ — One Brave Breath at a Time
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        Trauma-Informed Mental Health &amp; Emotional Wellbeing Initiative for South African Schools
                      </p>
                    </div>
                    <a
                      href="/assets/courage-crew-poster.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 shadow-xs hover:bg-slate-50"
                    >
                      🔍 View Full Programme Poster
                    </a>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        The <strong>SDLC Courage Crew™</strong> equips children (Foundation, Intermediate &amp; Senior Primary) with practical nervous-system regulation tools to understand their feelings, calm their bodies, build resilience, and form healthy relationships.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <div className="font-bold text-slate-900 dark:text-white mb-1">1. Connection Before Correction</div>
                          <p className="text-slate-600 dark:text-slate-400">Adults respond with empathy, safety, and co-regulation first.</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <div className="font-bold text-slate-900 dark:text-white mb-1">2. Safety Before Solutions</div>
                          <p className="text-slate-600 dark:text-slate-400">Calm Corner kits, Feelings Check-In posters &amp; non-shaming language.</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <div className="font-bold text-slate-900 dark:text-white mb-1">3. Regulation Before Reasoning</div>
                          <p className="text-slate-600 dark:text-slate-400">Butterfly, Balloon, Snail &amp; 4-7-8 breathing + 5-Senses grounding.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                          Meet the 8 Courage Crew™ Guides:
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {COURAGE_CREW_CHARACTERS.map((char) => (
                            <div
                              key={char.name}
                              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs"
                            >
                              <div className="font-semibold text-slate-900 dark:text-white">
                                {char.emoji} {char.name}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                                {char.trait}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <a
                        href="/assets/courage-crew-poster.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md"
                      >
                        <img
                          src="/assets/courage-crew-poster.jpg"
                          alt="SDLC Courage Crew Poster"
                          className="w-full h-auto object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* B. Relocated Mental Health Helpline & Resource Directory (MEETingNeeds.pdf) */}
                <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-[#84CEE2] border border-[#84CEE2]/40 mb-2">
                        Immediate Support &amp; Helpline Directory
                      </span>
                      <h3 className="font-serif text-2xl text-white">
                        South African Mental Health &amp; Crisis Helplines
                      </h3>
                      <p className="text-sm text-slate-300 mt-1">
                        We make help visible and accessible so no survivor, parent, or learner has to search alone. Download our full printable directory or call a 24-hour line below:
                      </p>
                    </div>
                    <a
                      href="/assets/docs/MEETingNeeds.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#84CEE2] text-slate-950 hover:opacity-90 transition-all shrink-0"
                    >
                      <span>📄 Download Full Helpline Report (PDF)</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {MENTAL_HEALTH_HELPLINES.map((line) => (
                      <a
                        key={line.name}
                        href={`tel:${line.number.replace(/\s+/g, '')}`}
                        className="p-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-colors"
                      >
                        <div className="text-xs text-slate-400">{line.name}</div>
                        <div className="font-serif text-xl font-bold text-[#84CEE2] mt-1">
                          📞 {line.number}
                        </div>
                        <div className="text-[11px] text-slate-300 mt-1">{line.note}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* 5th Section: Corporate & CSI / Social Impact Partnerships */}
        <section
          id="csi-partnerships"
          className="scroll-mt-36 rounded-3xl bg-white dark:bg-slate-900 border-2 p-7 sm:p-10 shadow-sm space-y-6"
          style={{ borderColor: CSI_PARTNERSHIP_TRACK.borderSoft }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0"
                style={{ backgroundColor: CSI_PARTNERSHIP_TRACK.color }}
              >
                🤝
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Institutional &amp; Corporate Partnerships
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
                  {CSI_PARTNERSHIP_TRACK.title}
                </h2>
              </div>
            </div>
            <Link
              href="/donate"
              className="self-start sm:self-center px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 shrink-0"
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
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-slate-950 shrink-0 mt-0.5"
                  style={{ backgroundColor: CSI_PARTNERSHIP_TRACK.color }}
                >
                  ✓
                </span>
                <span>{off}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Progressive Funnel Step -> Impact Timeline */}
      <NextStepBanner
        stepLabel="Next Step: Real-World Proof"
        title="See Our 4 Pillars in Action Across KwaZulu-Natal"
        description="Browse our 2026 Impact Timeline & Photo Collage from Ballito, Durban, and Tongaat to see how SDLC transforms lives on the ground."
        primaryHref="/gallery"
        primaryLabel="View 2026 Impact Timeline & Gallery"
        secondaryHref="/donate"
        secondaryLabel="Support a Pillar"
      />
    </div>
  );
}
