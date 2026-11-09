import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { SPONSOR_IN_A_BOX_TIERS } from '@/data/sdlcData';
import SponsorTrustBar from '@/components/SponsorTrustBar';

export const metadata = {
  title: 'Social Enterprise & Brand Partnerships | SDLC',
  description:
    'Discover win-win social enterprise and corporate partnerships where cause-driven purchases and brand collaborations directly fund community empowerment across South Africa.',
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-sky-50/60 via-white to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#A4A5C6]/15 text-[#6b6c8a] dark:text-[#c4c5e2] border border-[#A4A5C6]/30 mb-6">
              <span>Cause Enterprise &amp; Shared Value</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Partnerships Where <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84CEE2] via-[#DA8688] via-[#90D1BB] to-[#F2CB6F]">
                Every Purchase Creates Impact
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              We partner with forward-thinking businesses, venue operators, and social enterprises on initiatives that generate sustainable economic value while directly funding trauma-informed wellness, literacy, and child development in South African schools.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#enterprise-initiatives"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition-all shadow-sm"
              >
                Explore Partner Initiatives
              </a>
              <Link
                href="/donate#in-a-box"
                className="px-6 py-3 rounded-xl bg-[#84CEE2]/20 dark:bg-slate-900 text-slate-900 dark:text-[#84CEE2] font-bold text-sm border border-[#84CEE2]/60 hover:bg-[#84CEE2]/30 transition-all"
              >
                Sponsor a Child with an In-a-Box &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vibrant Rainbow Brand Line */}
      <div
        className="h-1.5 sm:h-2 w-full bg-gradient-to-r from-[#ff3b30] via-[#ff9500] via-[#ffcc00] via-[#34c759] via-[#00c7be] via-[#007aff] via-[#5856d6] via-[#af52de] to-[#ff2d55]"
        aria-hidden="true"
      />

      {/* Core Philosophy: The Win-Win Model */}
      <section className="py-16 bg-slate-50/60 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block h-1 w-20 rounded-full bg-gradient-to-r from-[#ff3b30] via-[#ff9500] via-[#ffcc00] via-[#34c759] via-[#007aff] to-[#af52de] mb-3" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Cause-Driven Enterprise Works
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Our shared-value model unites community empowerment with sustainable South African enterprise, practical school essentials, and active community events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#DA8688]/15 text-[#DA8688] flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Essential Care for Learners
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Items like our SDLC In-a-Box toolkits and Palesa washable sanitary towels provide practical, lasting support for uninterrupted school attendance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#90D1BB]/15 text-[#4ea88d] dark:text-[#90D1BB] flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Ethical Business Growth
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                By purchasing through SDLC campaigns, supporters back ethical South African manufacturers and venue operators, fostering local employment and enterprise.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#84CEE2]/15 text-[#2c8fa8] dark:text-[#84CEE2] flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Auditable Social ROI
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Corporate sponsors receive complete photo documentation, school validation letters, and B-BBEE Socio-Economic Development (SED) compliance reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section id="enterprise-initiatives" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold tracking-widest text-[#2c8fa8] dark:text-[#84CEE2] uppercase">
              Current Collaborations &amp; Sponsorship Frameworks
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Featured Enterprise &amp; Sponsorship Initiatives
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Explore how our flagship In-a-Box kits, Palesa Pads partnership, and community collaborations translate into verified frontline impact.
            </p>
          </div>

          <div className="space-y-12">
            {/* Initiative 1: SDLC In-a-Box Child Sponsorship Framework */}
            <div
              id="in-a-box-partner"
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#84CEE2]/70 hover:border-[#84CEE2] transition-all shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 shadow-md border border-slate-200 dark:border-slate-800">
                    <img
                      src="/assets/inabox/inabox-entrepreneurship.jpg?v=2"
                      alt="SDLC In-a-Box Kits across all 4 M.E.E.T. Pillars"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#84CEE2]/20 text-slate-900 dark:text-[#84CEE2] mb-2">
                    Core SDLC Framework &bull; 4 M.E.E.T. Pillars
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Sponsor a Child with an SDLC In-a-Box
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    From R350 to R650 across all 4 M.E.E.T. Pillars
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    Our signature <strong>SDLC In-a-Box</strong> initiative equips vulnerable children and youth with physical, pillar-specific empowerment kits. Each of our four M.E.E.T. pillars has its own curated box containing breathing and emotional regulation tools, school stationery, entrepreneurship guides, or digital literacy workbooks.
                  </p>

                  {/* 4 Pillar Box Quick Links */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SPONSOR_IN_A_BOX_TIERS.map((box) => (
                      <Link
                        key={box.id}
                        href={`/donate?box=${box.pillarId}#in-a-box`}
                        className="group p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all flex items-center justify-between gap-3"
                        style={{
                          borderLeftWidth: '4px',
                          borderLeftColor: box.color,
                        }}
                      >
                        <div>
                          <div className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:underline">
                            {box.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                            {box.tagline}
                          </div>
                        </div>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-extrabold text-slate-950 shrink-0"
                          style={{ backgroundColor: box.color }}
                        >
                          R{box.amountZAR} &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/donate#in-a-box"
                      className="px-6 py-3 rounded-xl bg-[#84CEE2] text-slate-950 font-extrabold text-sm hover:opacity-95 transition-all shadow-xs"
                    >
                      Sponsor an In-a-Box on Our Donation Page &rarr;
                    </Link>
                    <Link
                      href="/pillars"
                      className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                      Explore All 4 M.E.E.T. Pillars
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Initiative 2: Palesa Pads */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200/80 dark:border-slate-800 hover:border-[#DA8688]/60 transition-all shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-40 h-40 rounded-2xl bg-black p-4 flex items-center justify-center mb-6 shadow-md border border-slate-800">
                    <img
                      src="/assets/sponsors/palesa-pads-logo.png"
                      alt="Palesa Pads Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#DA8688]/15 text-[#b04f51] dark:text-[#DA8688] mb-2">
                    Social Enterprise Collaboration
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Palesa Pads Reusable Sanitary Towels
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Washable, Reusable Sanitary Towels Lasting 5 Years
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    Palesa Pads are high-quality, reusable cloth sanitary pads made in South Africa. They are more comfortable than disposable pads, can be worn for longer with no odour and fewer menstrual cramps due to the absence of chemicals. They are leak-free, easy to wash, and come with a guarantee of 5 years — because her period shouldn&apos;t hold her back.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-[#DA8688]">
                        For the School &amp; Learner
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Comfortable, chemical-free protection with a 5-year guarantee so young women never have to miss school days.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-[#90D1BB]">
                        For South African Manufacturing
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Supports local South African manufacturing and eco-friendly reusable care that reduces disposable waste.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={siteConfig.banking.snapScanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#DA8688] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-xs"
                    >
                      Sponsor Palesa Pads via SnapScan
                    </a>
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                      Corporate School-Wide Pack Sponsorship
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Initiative 3: Padel 365 & Sports Tournaments */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200/80 dark:border-slate-800 hover:border-[#90D1BB]/60 transition-all shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-200 dark:border-slate-800">
                    <img
                      src="/assets/gallery/padel-tournament-group.jpg"
                      alt="Padel 365 Tournament Group"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#90D1BB]/15 text-[#3b8c73] dark:text-[#90D1BB] mb-2">
                    Sports &amp; Event Fundraisers
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Padel 365 &amp; Community Tournaments
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Co-Hosted with TNT Creative Solutions &bull; Modderfontein, Gauteng
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    Our milestone sports events unite sports enthusiasts, lifestyle brands, and corporate teams around active wellness. In October 2025, our Greenstone Padel 365 tournament raised dedicated proceeds to manufacture and distribute In-a-Box toolkits for children in need.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-[#90D1BB]">
                        For Community Programs
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Every court registration fee directly purchases child learning materials, emotional support workbooks, and sports kits.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-[#84CEE2]">
                        For Brand &amp; Venue Partners
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Provides prominent courtside branding, corporate wellness participation, and direct high-value consumer engagement.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/gallery"
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition-all"
                    >
                      View Tournament Photo Highlights
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                      Host a Fundraiser with SDLC
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Initiative 4: Corporate CSI */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200/80 dark:border-slate-800 hover:border-[#84CEE2]/60 transition-all shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-200 dark:border-slate-800">
                    <img
                      src="/assets/gallery/lotusville-primary-team.jpg"
                      alt="SDLC Corporate CSI Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/15 text-[#247c94] dark:text-[#84CEE2] mb-2">
                    Corporate Social Investment (CSI / SED)
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Turnkey School Wellness &amp; Tech Rollouts
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    B-BBEE Socio-Economic Development Aligned
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    We design and implement custom, multi-week programs inside South African primary and secondary schools. From training teachers in nervous-system regulation to equipping digital labs, SDLC manages every logistic step with verified compliance reporting.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-[#84CEE2]">
                        Frontline Impact
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Direct delivery to hundreds of learners per school with pre/post emotional regulation assessments and literacy tracking.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-[#A4A5C6]">
                        Executive Reporting
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Comprehensive stakeholder packs including audited NPO financial allocations, school letters, and professional photography.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition-all"
                    >
                      Book a Corporate Partnership Discovery Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Have a Product or Corporate Initiative in Mind?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            Speak directly with our Executive Director Simonia Buys Marimuthoo to structure a cause-driven enterprise partnership that elevates both your brand and our communities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-[#84CEE2] text-slate-950 font-bold text-sm hover:opacity-90 transition-all shadow-sm"
            >
              Get in Touch with Our Executive Team
            </Link>
            <Link
              href="/donate#in-a-box"
              className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-50 transition-all"
            >
              Sponsor an In-a-Box Kit Directly
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors & Institutional Partners Trust Bar */}
      <SponsorTrustBar />
    </div>
  );
}
