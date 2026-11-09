import React from 'react';
import Link from 'next/link';
import {
  MEET_PILLARS,
  SPONSOR_IN_A_BOX_TIERS,
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

      {/* All 4 M.E.E.T. Pillars Detailed Breakdown */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {MEET_PILLARS.map((pillar, index) => {
          const inaboxTier = SPONSOR_IN_A_BOX_TIERS.find(
            (b) => b.pillarId === pillar.id
          );

          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className="scroll-mt-40 rounded-3xl bg-white dark:bg-slate-900 border-2 p-7 sm:p-10 shadow-sm space-y-8"
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
                      Pillar 0{index + 1} • Official Framework Colour
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
                      {pillar.title} — {pillar.subtitle}
                    </h2>
                  </div>
                </div>
                <Link
                  href={`/donate?box=${pillar.id}#in-a-box`}
                  className="self-start sm:self-center px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 shadow-xs hover:opacity-90 transition-all shrink-0"
                  style={{ backgroundColor: pillar.color }}
                >
                  Sponsor {pillar.title} In-a-Box →
                </Link>
              </div>

              {/* Data Stat Banner */}
              <div
                className="p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                style={{ backgroundColor: pillar.bgSoft }}
              >
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  Why This Matters: {pillar.statHighlight}
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
                            className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
                            style={{ backgroundColor: pillar.color }}
                          />
                          <span>{prog}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* PALESA-STYLE "SDLC IN-A-BOX" SHOWCASE CARD FOR THIS PILLAR */}
              {inaboxTier && (
                <div
                  className="rounded-3xl overflow-hidden border-2 bg-[#FAF9F6] dark:bg-slate-950/90 shadow-xs transition-all"
                  style={{ borderColor: pillar.borderSoft }}
                >
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    {/* Left: Authentic In-a-Box Photograph */}
                    <div className="lg:col-span-5">
                      <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <img
                          src={inaboxTier.image}
                          alt={inaboxTier.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                        <span
                          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-extrabold text-slate-950 shadow-sm"
                          style={{ backgroundColor: pillar.color }}
                        >
                          R{inaboxTier.amountZAR} / Box
                        </span>
                      </div>
                    </div>

                    {/* Right: Description, Kit Items & Direct Link to Donate Page In-a-Box Selector */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold text-slate-950"
                          style={{ backgroundColor: pillar.color }}
                        >
                          SDLC In-a-Box Framework
                        </span>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                          &bull; Sponsor a Child with a Box (R{inaboxTier.amountZAR})
                        </span>
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white">
                          {inaboxTier.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                          {inaboxTier.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {inaboxTier.impactDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {inaboxTier.kitItems.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800"
                          >
                            <span
                              className="w-2 h-2 rounded-full shrink-0 mt-1"
                              style={{ backgroundColor: pillar.color }}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/donate?box=${pillar.id}#in-a-box`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 shadow-sm hover:opacity-90 transition-all"
                          style={{ backgroundColor: pillar.color }}
                        >
                          <span>
                            Sponsor a {pillar.title} Box (R{inaboxTier.amountZAR}) &rarr;
                          </span>
                        </Link>
                        <Link
                          href="/partners#in-a-box-partner"
                          className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          View All Partnerships
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Embed for Mental Health Pillar */}
              {pillar.id === 'mental-health' && (
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-10">
                  {/* A. SDLC Courage Crew™ Flagship School Programme */}
                  <div
                    id="courage-crew"
                    className="scroll-mt-40 rounded-3xl bg-gradient-to-br from-[#84CEE2]/15 via-[#FAF9F6] to-[#90D1BB]/15 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-[#84CEE2]/50 p-6 sm:p-8 space-y-6"
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
                      <Link
                        href="/programs#courage-crew"
                        className="px-4 py-2 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 shadow-xs hover:bg-slate-50"
                      >
                        View Full Programme Page →
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          The <strong>SDLC Courage Crew™</strong> equips children (Foundation, Intermediate &amp; Senior Primary) with practical nervous-system regulation tools to understand their feelings, calm their bodies, build resilience, and form healthy relationships.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#84CEE2]/14 via-white to-[#FAF9F6] dark:from-[#84CEE2]/15 dark:via-slate-900 dark:to-slate-950 border border-[#84CEE2]/50 border-l-4 border-l-[#84CEE2] shadow-2xs">
                            <div className="font-bold text-slate-900 dark:text-white mb-1">1. Connection Before Correction</div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Adults respond with empathy, safety, and co-regulation first.</p>
                          </div>
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#DA8688]/14 via-white to-[#FAF9F6] dark:from-[#DA8688]/15 dark:via-slate-900 dark:to-slate-950 border border-[#DA8688]/50 border-l-4 border-l-[#DA8688] shadow-2xs">
                            <div className="font-bold text-slate-900 dark:text-white mb-1">2. Safety Before Solutions</div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Calm Corner kits, Feelings Check-In posters &amp; non-shaming language.</p>
                          </div>
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#90D1BB]/14 via-white to-[#FAF9F6] dark:from-[#90D1BB]/15 dark:via-slate-900 dark:to-slate-950 border border-[#90D1BB]/50 border-l-4 border-l-[#90D1BB] shadow-2xs">
                            <div className="font-bold text-slate-900 dark:text-white mb-1">3. Regulation Before Reasoning</div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Butterfly, Balloon, Snail &amp; 4-7-8 breathing + 5-Senses grounding.</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2.5 mb-2.5">
                            <span className="h-2 w-8 rounded-full bg-gradient-to-r from-[#84CEE2] via-[#DA8688] via-[#90D1BB] to-[#F2CB6F]" />
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                              Meet the 8 Courage Crew™ Guides:
                            </h4>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {COURAGE_CREW_CHARACTERS.map((char, idx) => {
                              const accentColors = ['#84CEE2', '#DA8688', '#90D1BB', '#F2CB6F'];
                              const accent = accentColors[idx % accentColors.length];
                              return (
                                <div
                                  key={char.name}
                                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs text-xs"
                                  style={{
                                    borderLeftWidth: '4px',
                                    borderLeftColor: accent,
                                    backgroundImage: `linear-gradient(135deg, ${accent}18 0%, transparent 75%)`,
                                  }}
                                >
                                  <div className="font-bold text-slate-900 dark:text-white">
                                    {char.name}
                                  </div>
                                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                                    {char.trait}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5">
                        <Link
                          href="/programs#courage-crew"
                          className="block rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md"
                        >
                          <img
                            src="/assets/courage-crew-poster.jpg"
                            alt="SDLC Courage Crew Poster"
                            className="w-full h-auto object-contain"
                          />
                        </Link>
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
                        <span>Download Full Helpline Report (PDF)</span>
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
                            {line.number}
                          </div>
                          <div className="text-[11px] text-slate-300 mt-1">{line.note}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>
          );
        })}

        {/* 5th Section: Corporate & CSI / Social Impact Partnerships */}
        <section
          id="csi-partnerships"
          className="scroll-mt-40 rounded-3xl bg-white dark:bg-slate-900 border-2 p-7 sm:p-10 shadow-sm space-y-6"
          style={{ borderColor: CSI_PARTNERSHIP_TRACK.borderSoft }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Institutional &amp; Corporate Partnerships
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
                {CSI_PARTNERSHIP_TRACK.title}
              </h2>
            </div>
            <Link
              href="/contact"
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
                  className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
                  style={{ backgroundColor: CSI_PARTNERSHIP_TRACK.color }}
                />
                <span>{off}</span>
              </div>
            ))}
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
