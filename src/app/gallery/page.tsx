'use client';

import React, { useState } from 'react';
import { IMPACT_TIMELINE_EVENTS } from '@/data/sdlcData';
import NextStepBanner from '@/components/NextStepBanner';

export default function GalleryTimelinePage() {
  const [selectedPillar, setSelectedPillar] = useState<string>('All');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const filters = ['All', 'Mental Health', 'Entrepreneurship', 'Education', 'Community Drive'];

  const filteredEvents =
    selectedPillar === 'All'
      ? IMPACT_TIMELINE_EVENTS
      : IMPACT_TIMELINE_EVENTS.filter((e) => e.pillar === selectedPillar);

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#F2CB6F]/30 text-slate-900 dark:text-[#F2CB6F]">
            Verified Community Track Record • NPO 301-712
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 dark:text-white">
            2026 Impact <span className="text-[#DA8688]">Timeline &amp; Gallery</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Every photograph reflects real moments of growth, resilience, and transformation across Ballito, Durban, Tongaat, and KwaZulu-Natal. Click any photo to enlarge.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setSelectedPillar(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedPillar === f
                    ? 'bg-slate-900 text-white dark:bg-[#84CEE2] dark:text-slate-950 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Timeline + Collage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-14">
          {filteredEvents.map((event) => (
            <div key={event.id} className="relative">
              {/* Timeline Node Dot */}
              <div
                className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 shadow-sm"
                style={{ backgroundColor: event.pillarColor }}
              />

              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
                {/* Event Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="px-3.5 py-1 rounded-full text-xs font-bold text-slate-950"
                      style={{ backgroundColor: event.pillarColor }}
                    >
                      🗓️ {event.dateLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      📍 {event.location}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {event.partner}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    {event.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {event.summary}
                  </p>
                </div>

                {/* Fast-Loading Collage Grid */}
                <div
                  className={`grid gap-4 ${
                    event.images.length === 2
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : 'grid-cols-1 sm:grid-cols-3'
                  }`}
                >
                  {event.images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightboxImg(img)}
                      className="group relative h-64 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800 text-left focus:outline-none focus:ring-2 focus:ring-[#84CEE2]"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-medium text-white">
                          🔍 Click to enlarge photo
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Upcoming Node */}
          <div className="relative">
            <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-[#90D1BB]" />
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-700 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#90D1BB]">
                  Upcoming 2026 / 2027 Rollouts
                </div>
                <h3 className="font-serif text-2xl text-slate-900 dark:text-white mt-1">
                  Bring SDLC or Courage Crew™ to Your School or Organisation
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  We are actively scheduling school wellness days, digital literacy workshops, and CSI partnerships across KwaZulu-Natal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 text-white">
              <span className="text-xs sm:text-sm font-medium text-slate-300 line-clamp-1">
                {lightboxImg.alt}
              </span>
              <button
                type="button"
                onClick={() => setLightboxImg(null)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-4 flex items-center justify-center bg-black">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      <NextStepBanner
        stepLabel="Final Step: Partner & Support"
        title="Help Us Create the Next Chapter of Impact"
        description="Whether through a Corporate CSI partnership, sponsoring a school's Courage Crew™ toolkit, or contributing a pad pack, your support directly empowers women and children."
        primaryHref="/donate"
        primaryLabel="Partner or Support Our Mission"
        secondaryHref="/contact"
        secondaryLabel="Contact / Volunteer"
      />
    </div>
  );
}
