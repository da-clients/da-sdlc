'use client';

import React, { useState, useRef } from 'react';
import { IMPACT_TIMELINE_EVENTS, ImpactTimelineEvent } from '@/data/sdlcData';
import NextStepBanner from '@/components/NextStepBanner';

interface LightboxPhotoState {
  src: string;
  alt: string;
  eventTitle: string;
  dateLabel: string;
  location: string;
}

export default function GalleryTimelinePage() {
  // Inline expandable event detail section directly beneath the timeline (null = hidden)
  const [selectedEvent, setSelectedEvent] = useState<ImpactTimelineEvent | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  // Gallery grouping filter & pagination by event group
  const [pillarFilter, setPillarFilter] = useState<string>('All');
  const [visibleEventGroupsCount, setVisibleEventGroupsCount] = useState<number>(4);

  // Fullscreen image lightbox
  const [lightboxPhoto, setLightboxPhoto] = useState<LightboxPhotoState | null>(null);

  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const inlineDetailRef = useRef<HTMLDivElement>(null);
  const gallerySectionRef = useRef<HTMLElement>(null);

  const totalPhotosCount = IMPACT_TIMELINE_EVENTS.reduce(
    (sum, ev) => sum + ev.images.length,
    0
  );

  // Keyboard navigation for lightbox and inline carousel
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxPhoto) {
          setLightboxPhoto(null);
        } else if (selectedEvent) {
          setSelectedEvent(null);
        }
      } else if (selectedEvent && !lightboxPhoto) {
        if (e.key === 'ArrowRight') {
          setCarouselIndex((prev) => (prev + 1) % selectedEvent.images.length);
        } else if (e.key === 'ArrowLeft') {
          setCarouselIndex((prev) =>
            prev === 0 ? selectedEvent.images.length - 1 : prev - 1
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent, lightboxPhoto]);

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineTrackRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      timelineTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleToggleEventDetail = (event: ImpactTimelineEvent) => {
    if (selectedEvent?.id === event.id) {
      setSelectedEvent(null);
      return;
    }
    setSelectedEvent(event);
    setCarouselIndex(0);
    setTimeout(() => {
      inlineDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
  };

  // Gallery displays events grouped by Event & Date (newest to oldest)
  const chronologicalReversedEvents = [...IMPACT_TIMELINE_EVENTS].reverse();
  const filteredEventGroups =
    pillarFilter === 'All'
      ? chronologicalReversedEvents
      : pillarFilter === 'Gauteng'
      ? chronologicalReversedEvents.filter((ev) => ev.region === 'Gauteng')
      : chronologicalReversedEvents.filter((ev) => ev.pillar === pillarFilter);

  const visibleEventGroups = filteredEventGroups.slice(0, visibleEventGroupsCount);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* HERO HEADER */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-[#1e6a7e] dark:text-[#84CEE2] border border-[#84CEE2]/30">
            Verified Community Track Record &bull; KwaZulu-Natal &amp; Johannesburg &bull; NPO 301-712
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
            Impact Timeline &amp;{' '}
            <span className="text-[#DA8688]">Event Gallery</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Scroll horizontally through our chronological milestones across KwaZulu-Natal and Johannesburg. Select any moment on the timeline to open its interactive photo carousel and story directly below.
          </p>

          {/* Quick Jump Buttons for Mobile & Desktop Convenience */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#timeline-section"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950 hover:opacity-90 transition-all shadow-xs"
            >
              Explore Timeline ({IMPACT_TIMELINE_EVENTS.length} Milestones)
            </a>
            <button
              type="button"
              onClick={() =>
                gallerySectionRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              Jump to Event Gallery ({totalPhotosCount} Photos) ↓
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: UNIFIED HORIZONTAL TIMELINE (Matches Excalidraw on Both Desktop & Mobile) */}
      <section
        id="timeline-section"
        className="py-12 sm:py-16 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2c8fa8] dark:text-[#84CEE2]">
                Chronological Journey (2025 – 2026)
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
                Interactive Milestone Timeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Swipe or scroll horizontally along the timeline line. Click &ldquo;More Info &amp; Photos&rdquo; on any card to expand its carousel right below the timeline.
              </p>
            </div>

            {/* Left / Right Scroll Controls (Visible on Both Mobile & Desktop) */}
            <div className="flex items-center justify-between sm:justify-end gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 sm:hidden">
                Swipe sideways along the line &rarr;
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollTimeline('left')}
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-xs transition-all cursor-pointer"
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
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-xs transition-all cursor-pointer"
                  title="Scroll timeline right"
                  aria-label="Scroll timeline right"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* UNIFIED HORIZONTAL TIMELINE TRACK (Identical Structure on Mobile & Desktop) */}
          <div
            ref={timelineTrackRef}
            className="overflow-x-auto pb-6 pt-2 select-none scroll-smooth snap-x snap-mandatory touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="inline-flex items-stretch min-w-max px-2 sm:px-4">
              {IMPACT_TIMELINE_EVENTS.map((event) => {
                const isSelected = selectedEvent?.id === event.id;
                return (
                  <div
                    key={event.id}
                    className="w-[270px] sm:w-[300px] shrink-0 snap-center flex flex-col items-center px-2.5 sm:px-3"
                  >
                    {/* 1. DATE ABOVE THE TIMELINE LINE */}
                    <div className="mb-2 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                          isSelected
                            ? 'bg-slate-900 text-white dark:bg-[#84CEE2] dark:text-slate-950 border-slate-900 dark:border-[#84CEE2] shadow-xs'
                            : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                        }`}
                      >
                        {event.dateLabel}
                      </span>
                    </div>

                    {/* 2. HORIZONTAL TIMELINE LINE + VERTICAL INTERSECTING TICK ( ───┼─── ) */}
                    <div className="relative w-full h-12 flex items-center justify-center">
                      {/* Continuous Horizontal Axis Line Across the Full Width of Each Column */}
                      <div
                        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-slate-300 dark:bg-slate-700"
                        aria-hidden="true"
                      />
                      {/* Vertical Tick Mark Crossing the Horizontal Line */}
                      <div
                        className="relative z-10 w-[3px] h-10 rounded-full transition-colors"
                        style={{
                          backgroundColor: isSelected ? event.pillarColor : '#64748b',
                        }}
                        aria-hidden="true"
                      />
                      {/* Intersection Node Dot */}
                      <button
                        type="button"
                        onClick={() => handleToggleEventDetail(event)}
                        className="absolute z-20 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 shadow-xs transition-transform hover:scale-125 cursor-pointer"
                        style={{ backgroundColor: event.pillarColor }}
                        aria-label={`Inspect ${event.title}`}
                        title={event.title}
                      />
                    </div>

                    {/* 3. CARD BELOW THE VERTICAL TICK: Image + Short Description + Button for More Info */}
                    <div
                      className={`w-full flex-1 rounded-2xl bg-white dark:bg-slate-900 border-2 p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-slate-900 dark:border-[#84CEE2] ring-2 ring-[#84CEE2]/40'
                          : 'border-slate-200/90 dark:border-slate-800'
                      }`}
                    >
                      <div>
                        {/* Single Cover Image */}
                        <div
                          onClick={() => handleToggleEventDetail(event)}
                          className="relative h-36 sm:h-40 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-3 cursor-pointer group"
                        >
                          <img
                            src={event.heroImage}
                            alt={event.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span
                            className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-950 shadow-xs"
                            style={{ backgroundColor: event.pillarColor }}
                          >
                            {event.pillar}
                          </span>
                          <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/75 text-white text-[10px] font-semibold">
                            {event.images.length} {event.images.length === 1 ? 'Photo' : 'Photos'}
                          </span>
                        </div>

                        {/* Region & Title */}
                        <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-1 truncate">
                          {event.region} &bull; {event.location.split(',')[0]}
                        </div>
                        <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 mb-1.5">
                          {event.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                          {event.summary}
                        </p>
                      </div>

                      {/* Button for More Info */}
                      <button
                        type="button"
                        onClick={() => handleToggleEventDetail(event)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white dark:bg-[#84CEE2] dark:text-slate-950'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-[#84CEE2]/30 dark:hover:bg-slate-700'
                        }`}
                      >
                        <span>
                          {isSelected
                            ? 'Hide Event Details ▲'
                            : `More Info & Photos (${event.images.length}) ▼`}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TEMPORARY INLINE EXPANDABLE EVENT DETAIL SECTION (Appears Directly Beneath Timeline When a Button is Pressed) */}
          {selectedEvent && (
            <div
              ref={inlineDetailRef}
              className="mt-8 scroll-mt-24 rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#84CEE2] shadow-xl p-5 sm:p-8 animate-fade-in"
            >
              {/* Top Bar: Selected Milestone Indicator & Close Button */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-slate-950"
                    style={{ backgroundColor: selectedEvent.pillarColor }}
                  >
                    {selectedEvent.pillar}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    {selectedEvent.dateLabel}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    &bull; {selectedEvent.location}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Close Event Details ✕
                </button>
              </div>

              {/* 1. CAROUSEL OF IMAGES UP TOP */}
              <div className="space-y-4 mb-8">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-16/10 sm:aspect-16/9 max-h-[520px] w-full flex items-center justify-center border border-slate-200 dark:border-slate-800">
                  <img
                    src={selectedEvent.images[carouselIndex]?.src || selectedEvent.heroImage}
                    alt={selectedEvent.images[carouselIndex]?.alt || selectedEvent.title}
                    className="max-h-full max-w-full object-contain cursor-zoom-in"
                    onClick={() =>
                      setLightboxPhoto({
                        src:
                          selectedEvent.images[carouselIndex]?.src ||
                          selectedEvent.heroImage,
                        alt:
                          selectedEvent.images[carouselIndex]?.alt ||
                          selectedEvent.title,
                        eventTitle: selectedEvent.title,
                        dateLabel: selectedEvent.dateLabel,
                        location: selectedEvent.location,
                      })
                    }
                  />

                  {/* Slide Counter Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-semibold backdrop-blur-xs">
                    Photo {carouselIndex + 1} of {selectedEvent.images.length}
                  </div>

                  {/* Enlarge Button */}
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxPhoto({
                        src:
                          selectedEvent.images[carouselIndex]?.src ||
                          selectedEvent.heroImage,
                        alt:
                          selectedEvent.images[carouselIndex]?.alt ||
                          selectedEvent.title,
                        eventTitle: selectedEvent.title,
                        dateLabel: selectedEvent.dateLabel,
                        location: selectedEvent.location,
                      })
                    }
                    className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-semibold hover:bg-slate-900 cursor-pointer"
                  >
                    Enlarge Fullscreen
                  </button>

                  {/* Previous / Next Carousel Arrows */}
                  {selectedEvent.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setCarouselIndex((prev) =>
                            prev === 0 ? selectedEvent.images.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
                        aria-label="Previous event photo"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setCarouselIndex(
                            (prev) => (prev + 1) % selectedEvent.images.length
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
                        aria-label="Next event photo"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Carousel Thumbnail Strip */}
                {selectedEvent.images.length > 1 && (
                  <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1">
                    {selectedEvent.images.map((img, idx) => (
                      <button
                        key={img.src + idx}
                        type="button"
                        onClick={() => setCarouselIndex(idx)}
                        className={`relative h-16 w-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          carouselIndex === idx
                            ? 'border-[#84CEE2] ring-2 ring-[#84CEE2]/50 scale-105'
                            : 'border-transparent opacity-65 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. DESCRIPTION & CLEAR TIMES BENEATH THE CAROUSEL */}
              <div className="max-w-4xl space-y-3">
                <div className="text-xs sm:text-sm font-semibold text-[#2c8fa8] dark:text-[#84CEE2]">
                  {selectedEvent.dateLabel} &bull; {selectedEvent.partner}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {selectedEvent.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedEvent.detailedStory}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: GALLERY GROUPED BY EVENT AND DATE */}
      <section
        ref={gallerySectionRef}
        className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#DA8688] uppercase">
              Structured Visual Archive ({totalPhotosCount} Photographs)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
              Gallery Grouped by Event &amp; Date
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Every outreach, workshop, and community drive is organised into its own dated event collection below so you can browse clearly through each milestone. Click any photograph to enlarge.
            </p>
          </div>

          {/* Pillar / Region Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'All', label: `All Events (${IMPACT_TIMELINE_EVENTS.length})` },
              { id: 'Mental Health', label: 'Mental Health' },
              { id: 'Education', label: 'Education' },
              { id: 'Entrepreneurship', label: 'Entrepreneurship' },
              { id: 'Community Drive', label: 'Community Drives' },
              { id: 'Gauteng', label: 'Johannesburg (Gauteng)' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setPillarFilter(f.id);
                  setVisibleEventGroupsCount(4);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  pillarFilter === f.id
                    ? 'bg-slate-900 text-white dark:bg-[#84CEE2] dark:text-slate-950 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Event Groups Stack */}
        <div className="space-y-12">
          {visibleEventGroups.map((eventGroup) => (
            <div
              key={`gallery-group-${eventGroup.id}`}
              className="rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 space-y-6"
            >
              {/* Event Group Header (Date, Location, Title, Description & Photo Count) */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-200/80 dark:border-slate-800">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950">
                      {eventGroup.dateLabel}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-slate-950"
                      style={{ backgroundColor: eventGroup.pillarColor }}
                    >
                      {eventGroup.pillar}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      &bull; {eventGroup.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    {eventGroup.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {eventGroup.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                    {eventGroup.images.length}{' '}
                    {eventGroup.images.length === 1 ? 'Photograph' : 'Photographs'}
                  </span>
                </div>
              </div>

              {/* Event Group Photo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {eventGroup.images.map((img, idx) => (
                  <div
                    key={`${eventGroup.id}-img-${idx}`}
                    onClick={() =>
                      setLightboxPhoto({
                        src: img.src,
                        alt: img.alt,
                        eventTitle: eventGroup.title,
                        dateLabel: eventGroup.dateLabel,
                        location: eventGroup.location,
                      })
                    }
                    className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 flex items-center justify-between gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                      <span className="line-clamp-1">{img.alt}</span>
                      <span className="text-sky-600 dark:text-[#84CEE2] font-semibold shrink-0">
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Event Groups Pagination Button */}
        {visibleEventGroupsCount < filteredEventGroups.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() =>
                setVisibleEventGroupsCount((prev) =>
                  Math.min(prev + 4, filteredEventGroups.length)
                )
              }
              className="px-8 py-4 rounded-full bg-slate-900 text-white dark:bg-[#84CEE2] dark:text-slate-950 font-bold text-sm hover:opacity-90 transition-all shadow-md cursor-pointer"
            >
              Show More Event Collections (+
              {Math.min(4, filteredEventGroups.length - visibleEventGroupsCount)} Events)
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Showing {visibleEventGroupsCount} of {filteredEventGroups.length} event collections
            </p>
          </div>
        )}
      </section>

      {/* LIGHTBOX FOR FULLSCREEN PHOTO VIEW */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-h-[75vh] w-full flex items-center justify-center bg-black p-2 sm:p-4">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-[#84CEE2] mb-1">
                  {lightboxPhoto.dateLabel} &bull; {lightboxPhoto.location}
                </div>
                <div className="font-serif text-lg text-white">
                  {lightboxPhoto.eventTitle}
                </div>
                <p className="text-xs text-slate-300 mt-0.5">{lightboxPhoto.alt}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                className="px-5 py-2 rounded-full text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white shrink-0 cursor-pointer"
              >
                Close Photo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NEXT STEP CTA BANNER */}
      <NextStepBanner
        stepLabel="Partner With Us"
        title="Bring SDLC Programmes to Your School or Community"
        description="Partner with Simonia Development Learning Centre (NPO 301-712) to host an emotional regulation workshop, youth literacy drive, or enterprise tournament."
        primaryHref="/donate"
        primaryLabel="Support Our Mission"
        secondaryHref="/contact"
        secondaryLabel="Contact & Volunteer"
      />
    </div>
  );
}
