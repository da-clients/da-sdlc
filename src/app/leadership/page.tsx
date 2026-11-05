import React from 'react';
import Link from 'next/link';
import { BOARD_MEMBERS } from '@/data/sdlcData';
import NextStepBanner from '@/components/NextStepBanner';

export default function LeadershipBoardPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#90D1BB]/25 text-slate-800 dark:text-[#90D1BB]">
            Governance &amp; Executive Leadership • NPO 301-712
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Founder &amp; <span className="text-[#90D1BB]">The Board</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            SDLC is governed by women leaders uniting corporate technology, biomedical engineering, informatics, and trauma-informed holistic wellness.
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <Link
              href="/about"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
            >
              ← 1. Mission, Vision &amp; Approach
            </Link>
            <span className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-[#90D1BB] dark:text-slate-950">
              2. Founder &amp; The Board
            </span>
          </div>
        </div>
      </section>

      {/* Board Profiles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        {BOARD_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div
                className="w-48 h-56 rounded-2xl overflow-hidden border-4 shadow-md bg-slate-100 dark:bg-slate-800"
                style={{ borderColor: member.badgeColor }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-slate-900 dark:text-white">
                  {member.name}
                </h2>
                <span
                  className="inline-block mt-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-slate-950"
                  style={{ backgroundColor: member.badgeColor }}
                >
                  {member.role}
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              {/* Credentials Pills */}
              <div className="flex flex-wrap gap-2">
                {member.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {member.bio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <NextStepBanner
        stepLabel="Next Step: Our Framework"
        title="See How Our Board's Expertise Powers the 4 M.E.E.T. Pillars"
        description="Explore our colour-coded M.E.E.T. pillars — including our flagship SDLC Courage Crew™ school mental health curriculum and digital literacy tracks."
        primaryHref="/pillars"
        primaryLabel="Explore the 4 M.E.E.T. Pillars"
        secondaryHref="/contact"
        secondaryLabel="Contact & Volunteer"
      />
    </div>
  );
}
