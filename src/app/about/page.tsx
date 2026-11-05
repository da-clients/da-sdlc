import React from 'react';
import Link from 'next/link';
import SponsorTrustBar from '@/components/SponsorTrustBar';
import NextStepBanner from '@/components/NextStepBanner';

export default function AboutOrganisationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-slate-800 dark:text-[#84CEE2]">
            About Simonia Development Learning Centre • NPO 301-712
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Our Mission, Vision &amp; <span className="text-[#84CEE2]">Approach</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We believe every woman and child deserves the opportunity to reach their full potential — breaking cycles of disadvantage through holistic, hands-on development.
          </p>

          {/* Clean Sub-Nav Pill to switch between Mission and Leadership */}
          <div className="pt-4 flex justify-center gap-3">
            <span className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-[#84CEE2] dark:text-slate-950">
              1. Mission, Vision &amp; Approach
            </span>
            <Link
              href="/leadership"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
            >
              2. Meet Our Founder &amp; Board →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="rounded-3xl p-8 bg-white dark:bg-slate-900 border-2 border-[#84CEE2]/50 shadow-sm space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#84CEE2] text-slate-950">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl text-slate-900 dark:text-white">
              Holistic Empowerment Across Four Pillars
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To empower women and children through holistic programmes that promote growth, resilience, and opportunity across our four M.E.E.T. pillars: Mental Health, Education, Entrepreneurship, and Technology.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300 pt-2">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#84CEE2] mt-2 shrink-0" />
                <span>Foster mental health and emotional well-being through supportive, trauma-informed initiatives.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#DA8688] mt-2 shrink-0" />
                <span>Expand educational access and life-skills development to create lasting knowledge and opportunity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#90D1BB] mt-2 shrink-0" />
                <span>Enable entrepreneurship and economic independence with tools, mentorship, and business resources.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F2CB6F] mt-2 shrink-0" />
                <span>Bridge the digital divide through technology, online safety, and responsible AI literacy programmes.</span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="rounded-3xl p-8 bg-white dark:bg-slate-900 border-2 border-[#90D1BB]/50 shadow-sm space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#90D1BB] text-slate-950">
              Our Vision
            </span>
            <h2 className="font-serif text-3xl text-slate-900 dark:text-white">
              A Resilient, Inclusive South Africa
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We envision a South Africa where women and children are empowered to lead fulfilling, independent, and resilient lives.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              By fostering strong minds, access to quality education, entrepreneurial pathways, and digital literacy, we enhance the social and economic well-being of communities across the country.
            </p>
            <div className="p-4 rounded-2xl bg-[#90D1BB]/15 border border-[#90D1BB]/40 text-sm text-slate-800 dark:text-slate-200">
              <strong>Rooted in Diversity, Inclusion &amp; Equity:</strong> Ensuring every individual, regardless of background, has the support to thrive, be heard, and uplift future generations.
            </div>
          </div>
        </div>
      </section>

      {/* The Goal: Programs, Goals & Impact */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DA8688]">
              The Goal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Together, We Build a Just &amp; Equitable Society
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              How our daily work translates from structured programmes into measurable community transformation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#84CEE2]" />
                Programs
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                <li>• Skills development programmes for women and children</li>
                <li>• Interactive learning in education, technology, entrepreneurship &amp; mental wellness</li>
                <li>• Holistic mentorship and school/community outreach initiatives</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#DA8688]" />
                Goals
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                <li>• Promote diversity, equity, and inclusion across all programmes</li>
                <li>• Transform lives through practical skills, education &amp; digital empowerment</li>
                <li>• Support mental health, economic independence, and lifelong learning</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F2CB6F]" />
                Impact
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                <li>• Strengthened social and economic well-being for women and children</li>
                <li>• Increased access to education, digital skills &amp; entrepreneurial opportunities</li>
                <li>• Safer, emotionally regulated school communities for future generations</li>
              </ul>
            </div>
          </div>

          {/* Our 3-Part Approach */}
          <div className="mt-12 rounded-3xl p-8 bg-[#FAF9F6] dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-6 text-center">
              Our 3-Pillar Delivery Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">1. Holistic &amp; Hands-On</div>
                <p className="text-slate-600 dark:text-slate-400">
                  Combining classroom instruction, somatic/breathwork regulation, practical exercises, and ongoing mentorship.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">2. Interactive &amp; Culturally Relevant</div>
                <p className="text-slate-600 dark:text-slate-400">
                  Designed specifically for South African learners and communities, encouraging collaboration across cultures and industries.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">3. Inclusive &amp; Accessible</div>
                <p className="text-slate-600 dark:text-slate-400">
                  Prioritizing neurodiversity, special-needs inclusion, and welcoming spaces for participants from every background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors & Partners */}
      <SponsorTrustBar />

      {/* Progressive Funnel Step -> Meet Leadership */}
      <NextStepBanner
        stepLabel="Next Step: Governance & Leadership"
        title="Meet the Women Leading SDLC NPO 301-712"
        description="Explore the executive profiles and credentials of Founder Simonia Buys Marimuthoo and Board Members Nicole Naidoo and Deandre Vanmali."
        primaryHref="/leadership"
        primaryLabel="Meet Our Founder & Board"
        secondaryHref="/pillars"
        secondaryLabel="Explore M.E.E.T. Pillars"
      />
    </div>
  );
}
