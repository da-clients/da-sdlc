import React from 'react';
import Link from 'next/link';
import { COURAGE_CREW_CHARACTERS } from '@/data/sdlcData';
import NextStepBanner from '@/components/NextStepBanner';

export default function ProgramsPage() {
  const communityProgrammes = [
    {
      id: 'equine-breathwork',
      pillar: 'Mental Health',
      color: '#84CEE2',
      audience: 'Special-Needs Learners, Youth & Community Groups',
      title: 'Equine-Assisted Grounding, Breathwork & Somatic Regulation Days',
      description:
        'Held in partnership with local equestrian estates in KwaZulu-Natal, these trauma-informed outdoor sessions combine gentle grounding breathwork, somatic movement, and equine-assisted connection to help learners and survivors regulate their nervous systems in a calm, supportive setting.',
      outcomes: [
        'Guided grounding breathwork & nervous-system calming',
        'Somatic movement & emotional safety',
        'Inclusive support for special-needs and neurodivergent learners',
      ],
    },
    {
      id: 'school-literacy',
      pillar: 'Education',
      color: '#DA8688',
      audience: 'Primary & Combined Schools, Municipal Libraries',
      title: 'Community Reading & Youth Life-Skills Drives',
      description:
        'Delivered alongside municipal libraries and local schools, our literacy and life-skills workshops inspire a lifelong love for reading, critical thinking, and personal leadership among learners and young mothers.',
      outcomes: [
        'Interactive reading comprehension & storytelling sessions',
        'Life-skills mentorship for young women and learners',
        'School & municipal library collaboration',
      ],
    },
    {
      id: 'women-youth-enterprise',
      pillar: 'Entrepreneurship',
      color: '#90D1BB',
      audience: 'Aspiring Women Founders & Youth Entrepreneurs',
      title: 'Micro-Enterprise & Economic Readiness Workshops',
      description:
        'Practical business mentorship, financial literacy, and market-readiness sessions designed to help women and youth launch sustainable micro-enterprises and step into economic independence.',
      outcomes: [
        'Foundational business planning & customer discovery',
        'Mentorship led by experienced corporate & business leaders',
        'Youth economic exhibition & networking readiness',
      ],
    },
    {
      id: 'digital-ai-literacy',
      pillar: 'Technology',
      color: '#F2CB6F',
      audience: 'Women, Youth & Community Learners',
      title: 'Digital Literacy, Online Safety & Responsible AI Workshops',
      description:
        'Hands-on technology sessions equipped with printed digital literacy workbooks, online safety and scam-prevention training, and practical introductions to responsible Artificial Intelligence use.',
      outcomes: [
        'Printed Digital Literacy Workbooks for take-home learning',
        'Online safety, privacy & scam-prevention training',
        'Responsible AI awareness & workplace digital skills',
      ],
    },
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-slate-900 dark:text-[#84CEE2]">
            SDLC Programmes &amp; Initiatives • NPO 301-712
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Our <span className="text-[#84CEE2]">Programmes</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Every SDLC programme is built on our four M.E.E.T. pillars — delivering trauma-informed school curriculums, youth literacy drives, enterprise mentorship, and digital skills across South Africa.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* FLAGSHIP PROGRAMME: SDLC COURAGE CREW™ */}
        <section
          id="courage-crew"
          className="scroll-mt-28 rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#84CEE2]/60 p-6 sm:p-10 shadow-sm space-y-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#84CEE2] text-slate-950 mb-2">
                Flagship School Mental Health Programme • Ages 6–14 Years
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
                SDLC Courage Crew™ — One Brave Breath at a Time
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
                Trauma-Informed Mental Health &amp; Emotional Wellbeing Initiative for South African Schools
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#84CEE2] text-slate-950 hover:opacity-90 transition-all shadow-xs"
              >
                Book or Sponsor Courage Crew™ →
              </Link>
              <a
                href="/assets/courage-crew-poster.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 transition-colors"
              >
                Open Full Poster
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <blockquote className="p-4 rounded-2xl border-l-4 border-[#84CEE2] bg-slate-50 dark:bg-slate-800/60 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                &ldquo;Big feelings are not bad behaviour. They are messages from a child&apos;s nervous system asking for connection, safety, and support.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                The <strong>SDLC Courage Crew™</strong> is a South African, trauma-informed, evidence-aligned emotional wellbeing programme that equips children (Foundation, Intermediate, and Senior Primary) with practical tools to understand their feelings, regulate their emotions, build resilience, and form healthy relationships.
              </p>

              {/* 3 Trauma-Informed Pillars of the Approach */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
                <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-[#84CEE2]/12 via-white to-[#FAF9F6] dark:from-[#84CEE2]/15 dark:via-slate-900 dark:to-slate-950 border border-[#84CEE2]/50 border-l-4 border-l-[#84CEE2] shadow-2xs">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">
                    1. Connection Before Correction
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Adults respond with empathy, safety, and co-regulation before addressing behaviour.
                  </p>
                </div>
                <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-[#DA8688]/12 via-white to-[#FAF9F6] dark:from-[#DA8688]/15 dark:via-slate-900 dark:to-slate-950 border border-[#DA8688]/50 border-l-4 border-l-[#DA8688] shadow-2xs">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">
                    2. Safety Before Solutions
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Calm Corner kits, Feelings Check-In posters, and non-shaming classroom communication.
                  </p>
                </div>
                <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-[#90D1BB]/14 via-white to-[#FAF9F6] dark:from-[#90D1BB]/15 dark:via-slate-900 dark:to-slate-950 border border-[#90D1BB]/50 border-l-4 border-l-[#90D1BB] shadow-2xs">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">
                    3. Regulation Before Reasoning
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Butterfly, Balloon, Snail, and 4-7-8 breathing plus Monie&apos;s 5-Senses grounding.
                  </p>
                </div>
              </div>

              {/* What Schools Receive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <h3 className="font-serif text-lg text-slate-900 dark:text-white">
                    What Participating Schools Receive
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li>• Classroom Feelings Check-In Posters &amp; Teacher Desk Guides</li>
                    <li>• Calm Corner Essentials Guide &amp; 2-Minute Classroom Reset Activities</li>
                    <li>• Parent Guide Posters &amp; Home Calm Corner Toolkits</li>
                    <li>• Learner Activity Pages &amp; Emotional Regulation Practice Cards</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <h3 className="font-serif text-lg text-slate-900 dark:text-white">
                    Programme Delivery Options
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li>• Teacher Orientation &amp; Co-Regulation Workshops</li>
                    <li>• Learner Emotional Wellbeing &amp; School Wellness Days</li>
                    <li>• Parent Workshops &amp; Community Mental Health Events</li>
                    <li>• Classroom Calm Corner Setup Support</li>
                  </ul>
                </div>
              </div>

              {/* Meet the 8 Courage Crew Guides */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="h-2 w-8 rounded-full bg-gradient-to-r from-[#84CEE2] via-[#DA8688] via-[#90D1BB] to-[#F2CB6F]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Meet the 8 Courage Crew™ Character Guides
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {COURAGE_CREW_CHARACTERS.map((char, idx) => {
                    const accentColors = ['#84CEE2', '#DA8688', '#90D1BB', '#F2CB6F'];
                    const accent = accentColors[idx % accentColors.length];
                    return (
                      <div
                        key={char.name}
                        className="relative overflow-hidden p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-2xs text-xs"
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
              <a
                href="/assets/courage-crew-poster.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md"
              >
                <img
                  src="/assets/courage-crew-poster.jpg"
                  alt="SDLC Courage Crew Official Programme Poster"
                  className="w-full h-auto object-contain"
                />
              </a>
            </div>
          </div>
        </section>

        {/* ONGOING & UPCOMING M.E.E.T. COMMUNITY PROGRAMMES */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DA8688]">
              Across All 4 M.E.E.T. Pillars
            </span>
            <h2 className="font-serif text-3xl text-slate-900 dark:text-white">
              Community &amp; Skills Development Programmes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Alongside our flagship school curriculum, SDLC delivers ongoing community programmes across Mental Health, Education, Entrepreneurship, and Technology:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityProgrammes.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-slate-950"
                      style={{ backgroundColor: prog.color }}
                    >
                      {prog.pillar} Pillar
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {prog.audience}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-slate-900 dark:text-white">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {prog.description}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-2">
                    {prog.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: prog.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-slate-900 dark:text-[#84CEE2] hover:underline"
                  >
                    Enquire or Partner on This Programme →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <NextStepBanner
        stepLabel="Bring a Programme to Your Community"
        title="Want to Host or Sponsor an SDLC Programme?"
        description="Connect with our team to bring SDLC Courage Crew™ or a M.E.E.T. skills workshop to your school, community centre, or organisation."
        primaryHref="/contact"
        primaryLabel="Contact & Volunteer"
        secondaryHref="/donate"
        secondaryLabel="Support Our Mission"
      />
    </div>
  );
}
