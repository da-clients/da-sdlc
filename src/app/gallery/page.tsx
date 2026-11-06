'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { IMPACT_TIMELINE_EVENTS, ImpactTimelineEvent } from '@/data/sdlcData';
import NextStepBanner from '@/components/NextStepBanner';

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'schools' | 'tournaments' | 'wellness' | 'community';
  dateLabel: string;
  location: string;
}

const ALL_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'lotus-1',
    src: '/assets/gallery/lotusville-primary-grounding.jpg',
    alt: 'Learner practicing somatic heart-chest grounding at Lotusville Primary School',
    caption: 'Somatic heart-chest grounding technique taught to learners during Courage Crew™ assembly.',
    category: 'schools',
    dateLabel: 'August 2026',
    location: 'Lotusville Primary, Verulam (KZN)',
  },
  {
    id: 'padel-1',
    src: '/assets/gallery/padel-tournament-group.jpg',
    alt: 'Tournament participants on court at Padel 365 Greenstone',
    caption: 'Fundraising Padel Tournament participants and supporters united for the In-a-Box initiative.',
    category: 'tournaments',
    dateLabel: '25 October 2025',
    location: 'Padel 365, Greenstone (Gauteng)',
  },
  {
    id: 'lotus-2',
    src: '/assets/gallery/lotusville-primary-breathing.jpg',
    alt: 'Balloon breathing exercise for emotional regulation',
    caption: 'Mindful balloon breathing activity helping students regulate anxious nervous systems.',
    category: 'schools',
    dateLabel: 'August 2026',
    location: 'Lotusville Primary, Verulam (KZN)',
  },
  {
    id: 'stanger-1',
    src: '/assets/gallery/stanger-1.jpg',
    alt: 'Stanger Special Needs learners grounding at Buzz Barn Ballito',
    caption: 'Equine-assisted therapy and grounding breathwork with Stanger Special Needs learners.',
    category: 'wellness',
    dateLabel: 'Q1 2026',
    location: 'Buzz Barn, Ballito (KZN)',
  },
  {
    id: 'padel-2',
    src: '/assets/gallery/padel-tournament-trophy.jpg',
    alt: 'Tournament winners receiving trophies and SDLC kits',
    caption: 'Championship winners celebrating courtside at the Greenstone In-a-Box fundraiser.',
    category: 'tournaments',
    dateLabel: '25 October 2025',
    location: 'Padel 365, Greenstone (Gauteng)',
  },
  {
    id: 'lotus-3',
    src: '/assets/gallery/lotusville-primary-hall.jpg',
    alt: 'Lotusville Primary School hall assembly',
    caption: 'Full school assembly participating in the Courage Crew™ emotional mastery framework.',
    category: 'schools',
    dateLabel: 'August 2026',
    location: 'Lotusville Primary, Verulam (KZN)',
  },
  {
    id: 'youth-econ-1',
    src: '/assets/gallery/youth-econ-1.jpg',
    alt: 'SDLC exhibition stand at eThekwini Youth Economic Development Programme',
    caption: 'Simonia and mentors exhibiting at the eThekwini Municipality Youth Economic Development summit.',
    category: 'community',
    dateLabel: '20 March 2026',
    location: 'Durban Exhibition Centre (KZN)',
  },
  {
    id: 'lotus-4',
    src: '/assets/gallery/lotusville-primary-team.jpg',
    alt: 'SDLC facilitators with Lotusville Primary educators',
    caption: 'SDLC facilitation team in signature M.E.E.T. colours partnering with educators.',
    category: 'schools',
    dateLabel: 'August 2026',
    location: 'Lotusville Primary, Verulam (KZN)',
  },
  {
    id: 'padel-3',
    src: '/assets/gallery/padel-tournament-court.jpg',
    alt: 'Action on court during Padel 365 tournament',
    caption: 'Doubles match underway during the In-a-Box fundraiser at Greenstone Shopping Centre.',
    category: 'tournaments',
    dateLabel: '25 October 2025',
    location: 'Padel 365, Greenstone (Gauteng)',
  },
  {
    id: 'lotus-5',
    src: '/assets/gallery/lotusville-primary-simonia.jpg',
    alt: 'Simonia Buys Marimuthoo presenting to learners',
    caption: 'Executive Director Simonia guiding learners through emotional self-regulation.',
    category: 'schools',
    dateLabel: 'August 2026',
    location: 'Lotusville Primary, Verulam (KZN)',
  },
  {
    id: 'stanger-2',
    src: '/assets/gallery/stanger-2.jpg',
    alt: 'Equine movement session with SDLC in Ballito',
    caption: 'Sensory grounding and hippo-therapy movement at Fairview Estate.',
    category: 'wellness',
    dateLabel: 'Q1 2026',
    location: 'Buzz Barn, Ballito (KZN)',
  },
  {
    id: 'tongaat-1',
    src: '/assets/gallery/tongaat-1.jpg',
    alt: 'Seatides Combined School learners at Tongaat Beach Library',
    caption: 'Fostering reading comprehension and curiosity at eThekwini Municipality library.',
    category: 'community',
    dateLabel: '2026 Literacy Drive',
    location: 'Tongaat Beach Library (KZN)',
  },
  {
    id: 'padel-4',
    src: '/assets/gallery/padel-tournament-poster.jpg',
    alt: 'Official Padel Tournament poster co-hosted with TNT Creative Solutions',
    caption: 'Official event poster for the 2025 Greenstone In-a-Box fundraising championship.',
    category: 'tournaments',
    dateLabel: '25 October 2025',
    location: 'Greenstone Shopping Centre (Gauteng)',
  },
  {
    id: 'lotus-6',
    src: '/assets/gallery/lotusville-primary-cards.jpg',
    alt: 'Learners engaging with Courage Crew character cards',
    caption: 'Hands-on engagement with Courage Crew™ character traits and emotional flashcards.',
    category: 'schools',
    dateLabel: 'August 2026',
    location: 'Lotusville Primary, Verulam (KZN)',
  },
  {
    id: 'youth-econ-2',
    src: '/assets/gallery/youth-econ-2.jpg',
    alt: 'Mentoring young entrepreneurs in Durban',
    caption: 'One-on-one enterprise consulting and financial planning advice for youth founders.',
    category: 'community',
    dateLabel: '20 March 2026',
    location: 'Durban (KZN)',
  },
  {
    id: 'palesa-1',
    src: '/assets/gallery/palesa-1.jpg',
    alt: 'Palesa Pads and SDLC Menstrual Dignity outreach',
    caption: 'Distributing washable, reusable sanitary pads to prevent school absenteeism.',
    category: 'community',
    dateLabel: 'Ongoing Campaign',
    location: 'KwaZulu-Natal & Gauteng Outreaches',
  },
  {
    id: 'stanger-3',
    src: '/assets/gallery/stanger-3.jpg',
    alt: 'Group celebration at Fairview Estate Ballito with Stanger learners',
    caption: 'Celebration of connection and sensory grounding at Fairview Estate Ballito.',
    category: 'wellness',
    dateLabel: 'Q1 2026',
    location: 'Buzz Barn, Ballito (KZN)',
  },
  {
    id: 'youth-econ-3',
    src: '/assets/gallery/youth-econ-3.jpg',
    alt: 'Youth Economic Development Programme community connections',
    caption: 'Connecting young entrepreneurs with sustainable enterprise resources.',
    category: 'community',
    dateLabel: 'March 2026',
    location: 'Durban Exhibition Centre (KZN)',
  },
  {
    id: 'tongaat-2',
    src: '/assets/gallery/tongaat-2.jpg',
    alt: 'Interactive reading and youth development workshop with SDLC',
    caption: 'Interactive reading session empowering young minds with Seatides Combined School.',
    category: 'community',
    dateLabel: '2026 Literacy Drive',
    location: 'Tongaat Beach Library (KZN)',
  },
  {
    id: 'tongaat-3',
    src: '/assets/gallery/tongaat-3.jpg',
    alt: 'Students and facilitators celebrating reading at Tongaat Beach Library',
    caption: 'Fostering lifelong literacy and academic confidence in learners.',
    category: 'community',
    dateLabel: '2026 Literacy Drive',
    location: 'Tongaat Beach Library (KZN)',
  },
  {
    id: 'palesa-2',
    src: '/assets/gallery/palesa-2.jpg',
    alt: 'Sanitary pad sponsorship distribution for learners',
    caption: 'Palesa washable menstrual dignity pack distributions restoring classroom attendance.',
    category: 'community',
    dateLabel: 'Ongoing Campaign',
    location: 'KwaZulu-Natal & Gauteng Outreaches',
  },
];

export default function GalleryTimelinePage() {
  const [activeModalEvent, setActiveModalEvent] = useState<ImpactTimelineEvent | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'schools' | 'tournaments' | 'wellness' | 'community'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [mobileTab, setMobileTab] = useState<'milestones' | 'gallery'>('milestones');

  const timelineTrackRef = useRef<HTMLDivElement>(null);

  // Modal keyboard Escape listener and background body scroll lock
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxPhoto) {
          setLightboxPhoto(null);
        } else if (activeModalEvent) {
          setActiveModalEvent(null);
        }
      }
    };

    if (activeModalEvent || lightboxPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalEvent, lightboxPhoto]);

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineTrackRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      timelineTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredPhotos =
    galleryFilter === 'all'
      ? ALL_GALLERY_PHOTOS
      : ALL_GALLERY_PHOTOS.filter((p) => p.category === galleryFilter);

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Hero Header */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-[#1e6a7e] dark:text-[#84CEE2] border border-[#84CEE2]/30">
            Verified Community Track Record &bull; NPO 301-712
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Community Timeline &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-rose-600 dark:from-[#84CEE2] dark:via-[#90D1BB] dark:to-[#DA8688]">
              Visual Impact Gallery
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From our 2025 Gauteng sports tournament fundraisers to our 2026 school emotional regulation rollouts, explore our authentic journey across South Africa.
          </p>
        </div>
      </section>

      {/* MOBILE 2-BUTTON NAVIGATION / TAB TOGGLE (< 640px) */}
      <div className="sm:hidden px-4 pt-3 pb-2 sticky top-0 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <button
            type="button"
            onClick={() => {
              setMobileTab('milestones');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mobileTab === 'milestones'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Milestones</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {IMPACT_TIMELINE_EVENTS.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileTab('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mobileTab === 'gallery'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Photo Gallery</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {ALL_GALLERY_PHOTOS.length}
            </span>
          </button>
        </div>
      </div>

      {/* SECTION 1: INTERACTIVE HORIZONTAL TIMELINE */}
      <section className={`py-12 sm:py-16 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden ${
        mobileTab === 'milestones' ? 'block' : 'hidden sm:block'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2c8fa8] dark:text-[#84CEE2]">
                Chronological Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Milestone Timeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Click any milestone to view full event context and high-resolution photo documentation.
              </p>
            </div>

            {/* Desktop Left / Right Navigation Chevrons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTimeline('left')}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-xs transition-all focus:outline-hidden focus:ring-2 focus:ring-[#84CEE2]"
                title="Scroll timeline left"
                aria-label="Scroll timeline left"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollTimeline('right')}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-xs transition-all focus:outline-hidden focus:ring-2 focus:ring-[#84CEE2]"
                title="Scroll timeline right"
                aria-label="Scroll timeline right"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* DESKTOP & TABLET: Horizontal Rail (Samuel's Excalidraw Spec) */}
          <div
            ref={timelineTrackRef}
            className="hidden sm:block overflow-x-auto pb-8 pt-4 select-none scroll-smooth scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700"
          >
            <div className="relative min-w-[1660px] px-8">
              {/* ROW 1: Top Cards (Date + Event Summary) */}
              <div className="grid grid-cols-6 gap-8 items-end relative z-10">
                {IMPACT_TIMELINE_EVENTS.map((event) => (
                  <div key={`top-${event.id}`} className="flex justify-center">
                    <div
                      onClick={() => setActiveModalEvent(event)}
                      className="w-60 h-[260px] p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#84CEE2] dark:hover:border-[#84CEE2] cursor-pointer transition-all transform hover:-translate-y-1 group flex flex-col justify-between"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveModalEvent(event);
                        }
                      }}
                      aria-label={`Open event details: ${event.title}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {event.dateLabel}
                          </span>
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: `${event.pillarColor}20`, color: event.pillarColor }}
                          >
                            {event.region}
                          </span>
                        </div>

                        <div className="h-24 w-full rounded-xl overflow-hidden mb-2.5 bg-slate-100 dark:bg-slate-800">
                          <img
                            src={event.heroImage}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-sky-600 dark:group-hover:text-[#84CEE2]">
                          {event.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                          {event.location}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-semibold text-sky-600 dark:text-[#84CEE2]">
                        <span>View Story &amp; Photos ({event.images.length})</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ROW 2: Central Axis Line, Stems & Interactive Node Dots */}
              <div className="relative h-[72px]">
                {/* Continuous Central Axis Line passing through dot equators */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-teal-400 to-rose-400 rounded-full" />

                {/* Stems and Node Dots Grid matching the 6 columns */}
                <div className="grid grid-cols-6 gap-8 relative z-10 h-full">
                  {IMPACT_TIMELINE_EVENTS.map((event) => (
                    <div key={`stem-${event.id}`} className="flex flex-col items-center justify-between h-full">
                      {/* Upper Stem Connector (Top Card to Axis Dot) */}
                      <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-700" />

                      {/* Interactive Axis Node Dot */}
                      <button
                        type="button"
                        onClick={() => setActiveModalEvent(event)}
                        className="w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center shadow-md cursor-pointer hover:scale-125 transition-transform duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#84CEE2]"
                        style={{ backgroundColor: event.pillarColor }}
                        aria-label={`Open milestone: ${event.title}`}
                        title={`Open milestone: ${event.title}`}
                      />

                      {/* Lower Stem Connector (Axis Dot to Bottom Card) */}
                      <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-700" />
                    </div>
                  ))}
                </div>
              </div>

              {/* ROW 3: Bottom Cards (Specific Moment Stem Cards) */}
              <div className="grid grid-cols-6 gap-8 items-start relative z-10">
                {IMPACT_TIMELINE_EVENTS.map((event, idx) => (
                  <div key={`bottom-${event.id}`} className="flex justify-center">
                    <div
                      onClick={() => setActiveModalEvent(event)}
                      className="w-60 min-h-[115px] p-3.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-[#84CEE2] dark:hover:border-[#84CEE2] hover:bg-white dark:hover:bg-slate-800/90 shadow-2xs hover:shadow-sm cursor-pointer transition-all text-center flex flex-col justify-between"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveModalEvent(event);
                        }
                      }}
                      aria-label={`Open specific moment: ${event.title}`}
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                          Specific Moment #{idx + 1}
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed">
                          {event.summary}
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-sky-600 dark:text-[#84CEE2] mt-2 block">
                        Read full story &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE PHONE (< 640px): Compact Horizontal Swipe Reel (~260px Portrait Spec) */}
          <div className="block sm:hidden">
            <div
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pt-1 px-4 -mx-4 scrollbar-none select-none touch-pan-x"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {IMPACT_TIMELINE_EVENTS.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setActiveModalEvent(event)}
                  className="w-[82vw] max-w-[290px] shrink-0 snap-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md active:scale-[0.98] transition-all p-3.5 flex flex-col justify-between cursor-pointer"
                  style={{ height: '240px' }}
                >
                  {/* Top Header: Date & Region */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      {event.dateLabel}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full truncate"
                      style={{ backgroundColor: `${event.pillarColor}20`, color: event.pillarColor }}
                    >
                      {event.pillar} &bull; {event.region}
                    </span>
                  </div>

                  {/* Thumbnail & Title/Summary */}
                  <div className="flex gap-3 items-center my-1.5">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                      <img
                        src={event.heroImage}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
                        {event.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {event.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Location & Modal Tap Hint */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 truncate max-w-[130px]">
                      {event.location.split(',')[0]}
                    </span>
                    <span className="font-semibold text-sky-600 dark:text-[#84CEE2] flex items-center gap-1 shrink-0">
                      <span>Story &amp; Photos ({event.images.length})</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Reel Indicator & Thumb Swipe Prompt */}
            <div className="flex items-center justify-between px-1 mt-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <svg className="w-3.5 h-3.5 text-sky-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Swipe sideways with thumb
              </span>
              <span className="font-medium text-slate-500 dark:text-slate-400">
                {IMPACT_TIMELINE_EVENTS.length} Milestones
              </span>
            </div>

            {/* Direct Mobile Jump Banner */}
            <div className="mt-4 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                Want to explore all {ALL_GALLERY_PHOTOS.length} photos?
              </span>
              <button
                type="button"
                onClick={() => {
                  setMobileTab('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-bold text-sky-600 dark:text-[#84CEE2] flex items-center gap-1 shrink-0 ml-2"
              >
                <span>Photo Gallery</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CURATED VISUAL IMPACT GALLERY */}
      <section className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${
        mobileTab === 'gallery' ? 'block' : 'hidden sm:block'
      }`}>
        {/* Mobile Return to Milestones Quick Banner */}
        <div className="mb-4 sm:hidden flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
          <span>Visual Archive ({ALL_GALLERY_PHOTOS.length} photos)</span>
          <button
            type="button"
            onClick={() => {
              setMobileTab('milestones');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-bold text-sky-600 dark:text-[#84CEE2] flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Milestones</span>
          </button>
        </div>

        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold tracking-widest text-[#DA8688] uppercase">
            Curated Visual Archive
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Community Moments in Focus
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Showing verified moments of learner engagement, emotional regulation, community sport, and mentorship. Tap any photo for high-resolution view.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { id: 'all', label: `All Photos (${ALL_GALLERY_PHOTOS.length})` },
              { id: 'schools', label: 'School Outreaches' },
              { id: 'tournaments', label: 'Milestone Tournaments' },
              { id: 'wellness', label: 'Equine & Wellness' },
              { id: 'community', label: 'Youth Enterprise & Literacy' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setGalleryFilter(f.id as any);
                  setVisibleCount(8);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  galleryFilter === f.id
                    ? 'bg-slate-900 text-white dark:bg-[#84CEE2] dark:text-slate-950 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-medium text-white">
                  {photo.dateLabel}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="truncate">{photo.location}</span>
                  <span className="text-sky-600 dark:text-[#84CEE2] font-semibold shrink-0 ml-2">Enlarge &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 8, filteredPhotos.length))}
              className="px-8 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-all shadow-sm"
            >
              Show More (+{Math.min(8, filteredPhotos.length - visibleCount)})
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Viewing {visibleCount} of {filteredPhotos.length} photographs
            </p>
          </div>
        )}
      </section>

      {/* MODAL 1: EVENT DETAIL DRAWER / MODAL */}
      {activeModalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalEvent(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                {activeModalEvent.dateLabel}
              </span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-md"
                style={{ backgroundColor: `${activeModalEvent.pillarColor}20`, color: activeModalEvent.pillarColor }}
              >
                {activeModalEvent.pillar}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                &bull; {activeModalEvent.location}
              </span>
            </div>

            {/* Title & Partner */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {activeModalEvent.title}
            </h3>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-4">
              Partner: {activeModalEvent.partner}
            </p>

            {/* Detailed Story */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
              {activeModalEvent.detailedStory}
            </p>

            {/* Photos Grid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Event Photographs ({activeModalEvent.images.length})
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeModalEvent.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      const category: GalleryPhoto['category'] =
                        activeModalEvent.pillar === 'Mental Health'
                          ? 'wellness'
                          : activeModalEvent.pillar === 'Entrepreneurship'
                          ? 'community'
                          : activeModalEvent.pillar === 'Education'
                          ? 'schools'
                          : 'tournaments';

                      setLightboxPhoto({
                        id: `event-photo-${i}`,
                        src: img.src,
                        alt: img.alt,
                        caption: img.alt,
                        category,
                        dateLabel: activeModalEvent.dateLabel,
                        location: activeModalEvent.location,
                      });
                    }}
                    className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalEvent(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold hover:opacity-90"
              >
                Close Milestone
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: IMAGE LIGHTBOX */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              className="absolute -top-12 right-0 inline-flex items-center gap-1.5 text-white text-sm font-semibold px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Close image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Close</span>
            </button>
            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.alt}
              className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain"
            />
            <div className="mt-4 text-center max-w-xl">
              <p className="text-sm font-medium text-white">{lightboxPhoto.caption}</p>
              <p className="text-xs text-slate-400 mt-1">
                {lightboxPhoto.location} &bull; {lightboxPhoto.dateLabel}
              </p>
            </div>
          </div>
        </div>
      )}

      <NextStepBanner
        stepLabel="Support Registered NPO 301-712"
        title="Support Our Community Footprint"
        description="Help us bring the Courage Crew™ curriculum and In-a-Box toolkits to more schools across South Africa."
        primaryHref="/donate"
        primaryLabel="Sponsor an In-a-Box"
        secondaryHref="/partners"
        secondaryLabel="Explore Enterprise Partnerships"
      />
    </div>
  );
}
