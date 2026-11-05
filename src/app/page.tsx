import React from 'react';
import Link from 'next/link';
import SponsorTrustBar from '@/components/SponsorTrustBar';
import NextStepBanner from '@/components/NextStepBanner';
import { MEET_PILLARS, IMPACT_TIMELINE_EVENTS, CSI_PARTNERSHIP_TRACK } from '@/data/sdlcData';

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION — Curiosity & Mission First, Not Premature Hard Ask */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAF9F6] to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-slate-800 dark:text-[#84CEE2] border border-[#84CEE2]/40">
              <span>Simonia Development Learning Centre • NPO 301-712</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-900 dark:text-white">
              Empowering Women &amp; Children Through{' '}
              <span className="text-[#DA8688]">M.E.E.T.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              We build lasting resilience and socio-economic independence across South Africa by uniting four foundational pillars:{' '}
              <strong className="text-slate-900 dark:text-white">Mental Health</strong>,{' '}
              <strong className="text-slate-900 dark:text-white">Education</strong>,{' '}
              <strong className="text-slate-900 dark:text-white">Entrepreneurship</strong>, and{' '}
              <strong className="text-slate-900 dark:text-white">Technology</strong>.
            </p>

            {/* Colour-Coded Sticker Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href="/pillars#mental-health"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-slate-800 dark:text-white border border-[#84CEE2]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#84CEE2]" />
                M — Mental Health
              </Link>
              <Link
                href="/pillars#education"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#DA8688]/20 text-slate-800 dark:text-white border border-[#DA8688]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#DA8688]" />
                E — Education
              </Link>
              <Link
                href="/pillars#entrepreneurship"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#90D1BB]/25 text-slate-800 dark:text-white border border-[#90D1BB]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#90D1BB]" />
                E — Entrepreneurship
              </Link>
              <Link
                href="/pillars#technology"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F2CB6F]/25 text-slate-800 dark:text-white border border-[#F2CB6F]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2CB6F]" />
                T — Technology
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#meet-pillars"
                className="px-7 py-3.5 rounded-full text-sm font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950 hover:opacity-90 transition-all shadow-md"
              >
                Explore How We Work ↓
              </a>
              <Link
                href="/gallery"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-slate-400 transition-all"
              >
                See 2026 Impact Proof
              </Link>
            </div>
          </div>

          {/* Right Column: Official SDLC Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl border border-slate-200/80 dark:border-slate-800 text-center space-y-5">
              <img
                src="/assets/sdlc-logo.jpg"
                alt="SDLC — Simonia Development Learning Centre NPO 301-712"
                className="w-56 h-56 mx-auto object-contain rounded-2xl"
              />
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#DA8688]">
                  Together We Create Stronger Communities
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Access to trauma-informed wellness, practical education, business mentorship, and digital literacy breaks cycles of inequality for generations.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
                <div className="p-2">
                  <div className="font-serif text-xl font-bold text-slate-900 dark:text-white">4</div>
                  <div className="text-[11px] text-slate-500">Core M.E.E.T. Pillars</div>
                </div>
                <div className="p-2 border-x border-slate-100 dark:border-slate-800">
                  <div className="font-serif text-xl font-bold text-slate-900 dark:text-white">301-712</div>
                  <div className="text-[11px] text-slate-500">Verified SA NPO</div>
                </div>
                <div className="p-2">
                  <div className="font-serif text-xl font-bold text-slate-900 dark:text-white">KZN+</div>
                  <div className="text-[11px] text-slate-500">Schools & Communities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL & SPONSOR TRUST BAR — Immediate Credibility */}
      <SponsorTrustBar />

      {/* 3. CONCISE MISSION SECTION — Replaces AI Wall-of-Text With Clear, Human Purpose */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#84CEE2] bg-slate-900 px-3.5 py-1 rounded-full">
            Why Our Mission Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Practical Impact Built on Collaboration &amp; Accountability
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Meaningful social change happens when immediate emotional support is paired with long-term economic and digital skills. We partner with schools, municipalities, and corporate CSI leaders to deliver measurable community outcomes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#84CEE2]/20 text-slate-900 dark:text-[#84CEE2] flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-serif text-xl text-slate-900 dark:text-white mb-2">
              Wellbeing First
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Unaddressed trauma blocks learning and growth. We start with nervous-system regulation, breathwork, and safe school environments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#90D1BB]/25 text-slate-900 dark:text-[#90D1BB] flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-serif text-xl text-slate-900 dark:text-white mb-2">
              Skills That Pay Bills
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              From youth literacy to women-led entrepreneurship and responsible AI literacy, every programme teaches practical capabilities for the modern economy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#A4A5C6]/25 text-slate-900 dark:text-[#A4A5C6] flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-serif text-xl text-slate-900 dark:text-white mb-2">
              Transparent CSI Reporting
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We co-create initiatives with municipalities and corporate sponsors, providing clear documentation, field photography, and verifiable community impact.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-[#84CEE2] hover:underline"
          >
            <span>Read Our Full Mission, Vision &amp; Governance</span>
            <span>→</span>
          </Link>
          <span className="mx-3 text-slate-300 dark:text-slate-700">|</span>
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-[#84CEE2] hover:underline"
          >
            <span>Meet Our Founder &amp; Board of Directors</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* 4. THE M.E.E.T. PILLARS GRID — Every Link Works & Routes to Its Exact Anchor */}
      <section id="meet-pillars" className="py-16 sm:py-20 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#DA8688]">
                The Foundation of Every Programme
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
                Our 4 M.E.E.T. Pillars (Plus Corporate CSI)
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Each pillar is colour-coded according to our official SDLC framework. Click any pillar to explore its full programmes, South African data sources, and school initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MEET_PILLARS.map((pillar) => (
              <Link
                key={pillar.id}
                href={`/pillars#${pillar.id}`}
                className="group rounded-3xl p-7 bg-[#FAF9F6] dark:bg-slate-900 border-2 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                style={{ borderColor: pillar.borderSoft }}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <span
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-serif text-2xl font-bold text-slate-950 shadow-sm"
                        style={{ backgroundColor: pillar.color }}
                      >
                        {pillar.letter}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl text-slate-900 dark:text-white group-hover:underline">
                          {pillar.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full text-slate-900"
                      style={{ backgroundColor: pillar.color }}
                    >
                      Explore Pillar →
                    </span>
                  </div>

                  {/* Verified Source Stat */}
                  <div
                    className="p-3 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 mb-4"
                    style={{ backgroundColor: pillar.bgSoft }}
                  >
                    📊 {pillar.statHighlight}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {pillar.summary}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {pillar.programmes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: pillar.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>

          {/* 5th Track: Corporate & CSI / Social Impact Partnerships */}
          <div
            className="mt-6 rounded-3xl p-7 bg-[#FAF9F6] dark:bg-slate-900 border-2 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            style={{ borderColor: CSI_PARTNERSHIP_TRACK.borderSoft }}
          >
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-slate-950" style={{ backgroundColor: CSI_PARTNERSHIP_TRACK.color }}>
                🤝 Corporate &amp; CSI / Social Impact Track
              </div>
              <h3 className="font-serif text-2xl text-slate-900 dark:text-white">
                {CSI_PARTNERSHIP_TRACK.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {CSI_PARTNERSHIP_TRACK.summary}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/pillars#csi-partnerships"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-950 shadow-sm hover:opacity-90 transition-all"
                style={{ backgroundColor: CSI_PARTNERSHIP_TRACK.color }}
              >
                <span>View CSI Partnership Offerings</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FLAGSHIP SCHOOL PROGRAMME SPOTLIGHT: SDLC COURAGE CREW™ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#84CEE2]/15 via-white to-[#90D1BB]/15 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-[#84CEE2]/40 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#84CEE2] text-slate-950">
              Flagship School Mental Health Programme (Ages 6–14)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
              SDLC Courage Crew™ — One Brave Breath at a Time
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <em>&ldquo;Big feelings are not bad behaviour. They are messages from a child&apos;s nervous system asking for connection, safety, and support.&rdquo;</em>
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Our South African, trauma-informed school initiative equips Foundation, Intermediate, and Senior Primary learners with practical emotional regulation tools, Calm Corner classroom guides, and 8 relatable animal companions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/pillars#courage-crew"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950 hover:opacity-90 transition-all"
              >
                Explore the Courage Crew™ Programme →
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-full text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
              >
                Book for a School or Sponsor via CSI
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Link href="/pillars#courage-crew" className="block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:scale-[1.01] transition-transform">
              <img
                src="/assets/courage-crew-poster.jpg"
                alt="SDLC Courage Crew Trauma-Informed School Mental Health Programme"
                className="w-full h-80 object-cover object-top"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 2026 IMPACT HIGHLIGHTS PREVIEW — Proof Before the Ask */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#90D1BB]">
              Verified Community Proof
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
              2026 Outreach &amp; Impact Highlights
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-[#84CEE2] hover:underline"
          >
            <span>View Full 2026 Impact Timeline &amp; Photo Collage</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMPACT_TIMELINE_EVENTS.slice(0, 3).map((ev) => (
            <Link
              key={ev.id}
              href="/gallery"
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-52 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                <img
                  src={ev.images[0].src}
                  alt={ev.images[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-slate-950 shadow-sm"
                  style={{ backgroundColor: ev.pillarColor }}
                >
                  {ev.pillar} • {ev.dateLabel}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    📍 {ev.location}
                  </div>
                  <h3 className="font-serif text-lg text-slate-900 dark:text-white group-hover:text-[#0ea5e9] dark:group-hover:text-[#84CEE2] transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {ev.summary}
                  </p>
                </div>
                <div className="text-xs font-semibold text-slate-900 dark:text-[#84CEE2] pt-2">
                  View Event Photos →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. FINAL HIGH-TRUST CTA BANNER — Placed After Trust, Sources & Proof Are Established */}
      <NextStepBanner
        stepLabel="Step Into the Mission"
        title="Ready to Partner With SDLC or Sponsor a Programme?"
        description="Now that you've seen our M.E.E.T. framework, institutional partners, and 2026 community track record, explore our Pillars in detail or partner with us through Corporate CSI or direct programme support."
        primaryHref="/pillars"
        primaryLabel="Explore All 4 M.E.E.T. Pillars"
        secondaryHref="/donate"
        secondaryLabel="Partner / Support Our Mission"
      />
    </div>
  );
}
