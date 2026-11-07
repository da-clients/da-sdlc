import React from 'react';
import Link from 'next/link';
import SponsorTrustBar from '@/components/SponsorTrustBar';
import NextStepBanner from '@/components/NextStepBanner';
import { MEET_PILLARS, IMPACT_TIMELINE_EVENTS } from '@/data/sdlcData';

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION — Clean, Focused & Free of Redundant Clutter */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAF9F6] to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/70 dark:border-slate-800/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-900 dark:text-white">
            Empowering Women &amp; Children Through{' '}
            <span className="inline-block whitespace-nowrap">
              <span className="text-[#84CEE2]">M.</span>
              <span className="text-[#DA8688]">E.</span>
              <span className="text-[#90D1BB]">E.</span>
              <span className="text-[#F2CB6F]">T.</span>
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            We empower through{' '}
            <strong className="font-semibold text-slate-900 dark:text-white">Mental health support</strong>,{' '}
            <strong className="font-semibold text-slate-900 dark:text-white">Education</strong>,{' '}
            <strong className="font-semibold text-slate-900 dark:text-white">Entrepreneurship</strong>, and{' '}
            <strong className="font-semibold text-slate-900 dark:text-white">Technology</strong> (M.E.E.T.).
          </h2>
          <div className="pt-2">
            <a
              href="#meet-section"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950 hover:opacity-90 transition-all shadow-md"
            >
              <span>Explore How We Work</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. BRIDGE DESCRIPTION + VERTICAL M | E | E | T CONNECTED SPINE */}
      <section id="meet-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24">
        {/* Two-Paragraph Bridge Description */}
        <div className="space-y-4 text-center sm:text-left mb-12 bg-white dark:bg-slate-900/70 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
            Our work focuses on empowering women and children through education, skills development, technology, entrepreneurship, and psychosocial support — addressing both immediate needs and sustainable outcomes.
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            At Simonia Development Learning Centre (SDLC), we build our work on four pillars for measurable impact in our communities.{' '}
            <strong className="font-semibold text-slate-900 dark:text-white">M.E.E.T.</strong> is how we organise everything we do — Mental Health, Education, Entrepreneurship, and Technology, working together.
          </p>
        </div>

        {/* Vertical M | E | E | T Spine Layout */}
        <div className="space-y-0">
          {MEET_PILLARS.map((pillar, index) => {
            const isLast = index === MEET_PILLARS.length - 1;
            return (
              <div key={pillar.id} className="flex items-stretch gap-4 sm:gap-7">
                {/* Left Column: Connected M | E | E | T Letter & Vertical Line */}
                <div className="flex flex-col items-center shrink-0 w-14 sm:w-16">
                  <Link
                    href={`/pillars#${pillar.id}`}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold text-slate-950 shadow-sm shrink-0 hover:scale-105 transition-transform"
                    style={{ backgroundColor: pillar.color }}
                    aria-label={`${pillar.letter} — ${pillar.title}`}
                  >
                    {pillar.letter}
                  </Link>
                  {!isLast && (
                    <div
                      className="w-1 flex-1 my-2 rounded-full bg-slate-300 dark:bg-slate-700 min-h-[2.5rem]"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Right Column: Pillar Box (Title + Link on Top, Concise Description Below) */}
                <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-6 sm:pb-8'}`}>
                  <div
                    className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900 border-2 shadow-xs hover:shadow-md transition-all"
                    style={{ borderColor: pillar.borderSoft }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <Link
                        href={`/pillars#${pillar.id}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: pillar.color }}
                      >
                        <span>Explore {pillar.title}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SIMPLIFIED IMPACT / OUTREACH TEASER */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#90D1BB]">
                Community Proof
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
                Want to See Our Impact in Action?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                From equine-assisted breathwork for special-needs learners in Ballito to youth economic expos in Durban and literacy drives in Tongaat, explore our verified community timeline.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900 dark:bg-[#90D1BB] text-white dark:text-slate-950 hover:opacity-90 transition-all shadow-sm"
              >
                <span>View Impact Timeline &amp; Gallery</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Compact 3-Photo Preview Strip (Eager-loaded & Compressed for Instant Rendering) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {IMPACT_TIMELINE_EVENTS.slice(0, 3).map((ev) => (
              <Link
                key={ev.id}
                href="/gallery"
                className="group relative h-56 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 shadow-xs"
              >
                <img
                  src={ev.images[0].src}
                  alt={ev.images[0].alt}
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-4">
                  <span
                    className="inline-block self-start px-2.5 py-0.5 rounded-full text-[11px] font-bold text-slate-950 mb-1.5"
                    style={{ backgroundColor: ev.pillarColor }}
                  >
                    {ev.pillar}
                  </span>
                  <h3 className="font-serif text-base text-white leading-snug line-clamp-2">
                    {ev.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SPONSORS STRIP */}
      <SponsorTrustBar />

      {/* 5. SIMPLIFIED "OUR PROGRAMMES" TEASER BOX (Cropped Courage Crew Preview -> /programs) */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#84CEE2]/45 p-6 sm:p-9 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-slate-900 dark:text-[#84CEE2]">
              Our Programmes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Practical Programmes Built for Schools &amp; Communities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore our structured community and school programmes — featuring our flagship{' '}
              <strong className="text-slate-900 dark:text-white">SDLC Courage Crew™</strong> emotional wellbeing curriculum for learners aged 6–14, youth literacy workshops, and digital skills training.
            </p>
            <div className="pt-2">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950 hover:opacity-90 transition-all shadow-sm"
              >
                <span>Explore Our Programmes</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Cropped Preview Window of Courage Crew™ (Links directly to /programs#courage-crew) */}
          <div className="lg:col-span-5">
            <Link
              href="/programs#courage-crew"
              className="group block relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md"
              title="View the SDLC Courage Crew Programme"
            >
              <img
                src="/assets/courage-crew-poster.jpg"
                alt="SDLC Courage Crew School Mental Health Programme Preview"
                loading="eager"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between text-white">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#84CEE2]">
                    Flagship School Programme
                  </div>
                  <div className="font-serif text-lg">SDLC Courage Crew™</div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#84CEE2] text-slate-950">
                  View Details →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CAUSE PARTNERSHIPS DISCOVERY BOX (Palesa Pads + Enterprise Partners) */}
      <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#DA8688]/45 p-6 sm:p-9 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Palesa Pads Logo Image Up Top on Mobile / Left-Right on Desktop (Matching Practical Programmes Box) */}
          <div className="lg:col-span-5 order-first lg:order-last">
            <a
              href="https://pos.snapscan.io/qr/Kwc3UjHr"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative h-52 sm:h-60 rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center p-6"
              title="Sponsor Palesa Pads via SnapScan"
            >
              <img
                src="/assets/sponsors/palesa-pads-logo.png"
                alt="Palesa Pads — Washable, reusable sanitary towels"
                loading="lazy"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-3.5 flex items-center justify-between text-white">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#DA8688]">
                    Featured Cause Partner
                  </div>
                  <div className="font-serif text-base">Palesa Pads Dignity Drive</div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DA8688] text-slate-950">
                  R129 / Pack →
                </span>
              </div>
            </a>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#DA8688]/20 text-slate-900 dark:text-[#DA8688]">
              Cause &amp; Enterprise Partnerships
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Want to See What Our Partners Offer?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We collaborate with purpose-driven South African enterprises and community organisations to multiply our impact. Sponsor a set of 3 washable, reusable{' '}
              <strong className="text-slate-900 dark:text-white">Palesa Pads</strong> (5-year guarantee) for a schoolgirl for just R129, or explore our broader network of corporate, sports, and municipal partnerships.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="https://pos.snapscan.io/qr/Kwc3UjHr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-950 hover:opacity-90 transition-all shadow-sm"
                style={{ backgroundColor: '#DA8688' }}
              >
                <span>Sponsor Palesa Pads (SnapScan)</span>
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900 dark:bg-slate-800 text-white hover:opacity-90 transition-all shadow-sm"
              >
                <span>Check Out Our Other Partnerships</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMBINED PARTNER, VOLUNTEER, OR DONATE CTA BANNER */}
      <NextStepBanner
        stepLabel="Support Registered NPO 301-712"
        title="Want to Partner, Volunteer, or Donate?"
        description="Whether you want to fund trauma-informed school kits and youth literacy drives, volunteer your skills in our communities, or partner with SDLC across KwaZulu-Natal and Johannesburg, we would love to connect."
        primaryHref="/donate"
        primaryLabel="Support Our Mission"
        secondaryHref="/contact"
        secondaryLabel="Contact & Volunteer"
      />
    </div>
  );
}
