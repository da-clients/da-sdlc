import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { CAUSE_ENTERPRISE_PARTNERSHIPS } from '@/data/sdlcData';
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-rose-600 dark:from-[#84CEE2] dark:via-[#90D1BB] dark:to-[#DA8688]">
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
                href="/donate"
                className="px-6 py-3 rounded-xl bg-sky-50 dark:bg-slate-900 text-sky-800 dark:text-[#84CEE2] font-semibold text-sm border border-sky-200/80 dark:border-slate-800 hover:bg-sky-100/60 transition-all"
              >
                Looking to Sponsor a Child In-a-Box Instead?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <SponsorTrustBar />

      {/* Core Philosophy: The Win-Win Model */}
      <section className="py-16 bg-slate-50/60 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Cause-Driven Enterprise Works
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Traditional charity often relies on one-off goodwill. Our shared-value model unites community needs with practical commercial products and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#DA8688]/15 text-[#DA8688] flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Dignity Products for Learners
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Items like Palesa washable sanitary towels provide 5 continuous years of hygiene, eradicating school absenteeism without recurring monthly financial burdens.
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
              Current Collaborations
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Featured Enterprise Initiatives
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Explore how our current commercial and community collaborations translate into verified frontline impact.
            </p>
          </div>

          <div className="space-y-12">
            {/* Initiative 1: Palesa Pads */}
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
                    Palesa Pads Menstrual Dignity Packs
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Washable, Reusable Sanitary Towels Lasting 5 Years
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    In South Africa, up to 7 million young women miss school every month because they cannot afford disposable sanitary pads. Disposable pads also create staggering non-biodegradable waste. Palesa Pads manufactures premium, reusable, washable cloth sanitary pads right here in South Africa.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-[#DA8688]">
                        For the School &amp; Learner
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Full menstrual autonomy for up to 5 years. Zero school days missed due to period poverty, paired with SDLC hygiene education.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-[#90D1BB]">
                        For Ethical Manufacturing
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Funds female manufacturing jobs in South Africa, eliminating tons of plastic sanitary waste from our landfills.
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
                      Sponsor a Palesa Dignity Kit via SnapScan
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

            {/* Initiative 2: Padel 365 & Sports Tournaments */}
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

            {/* Initiative 3: Corporate CSI */}
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
              href="/donate"
              className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-50 transition-all"
            >
              Sponsor an In-a-Box Kit Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
