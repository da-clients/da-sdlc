'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';

const VOLUNTEER_GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/1b6xqjuCAx0Qw88FNeoehFW33t6JgozzLMcC25PA7_Ds/viewform';

type InquiryTopic =
  | 'Partner With SDLC / CSI'
  | 'Book SDLC Courage Crew for a School'
  | 'General Enquiry';

export default function ContactVolunteerPage() {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [topic, setTopic] = useState<InquiryTopic>('Partner With SDLC / CSI');
  const [message, setMessage] = useState('');
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const formSectionRef = useRef<HTMLDivElement>(null);

  const openFormWithTopic = (selectedTopic: InquiryTopic) => {
    setTopic(selectedTopic);
    setShowMessageForm(true);
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Simonia! My name is ${name}${org ? ` (${org})` : ''}. Enquiry Topic: [${topic}]. ${message}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmailCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(siteConfig.email).catch(() => {});
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-slate-800 dark:text-[#84CEE2]">
          Contact Us • Volunteer • Partner With SDLC
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 dark:text-white">
          Contact, Volunteer &amp; <span className="text-[#84CEE2]">Partner</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Choose how you would like to connect with Simonia Development Learning Centre (NPO 301-712) below — whether signing up via our official Volunteer Form, partnering on a CSI initiative, or booking a programme for your school.
        </p>
      </div>

      {/* 1. TOP 3 ACTION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1: Volunteer With Us -> Google Form */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#90D1BB]/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5">
          <div className="space-y-2.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#90D1BB] text-slate-950">
              Volunteer With Us
            </span>
            <h2 className="font-serif text-2xl text-slate-900 dark:text-white">
              Share Your Time &amp; Skills
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We welcome educators, mental wellness practitioners, mentors, technology facilitators, and community volunteers across KwaZulu-Natal and Johannesburg.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={VOLUNTEER_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-950 shadow-xs hover:opacity-90 transition-all"
              style={{ backgroundColor: '#90D1BB' }}
            >
              <span>Complete Volunteer Form</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Card 2: Partner With Us -> Reveals Message Form Below */}
        <div
          className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border-2 transition-all flex flex-col justify-between space-y-5 ${
            showMessageForm && topic === 'Partner With SDLC / CSI'
              ? 'border-[#A4A5C6] ring-2 ring-[#A4A5C6]/40 shadow-md'
              : 'border-[#A4A5C6]/60 shadow-xs hover:shadow-md'
          }`}
        >
          <div className="space-y-2.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#A4A5C6] text-slate-950">
              Partner With Us
            </span>
            <h2 className="font-serif text-2xl text-slate-900 dark:text-white">
              Organisational &amp; CSI Partnerships
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Collaborate with SDLC on youth empowerment, women&apos;s enterprise workshops, or Corporate Social Investment (CSI) community programmes.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => openFormWithTopic('Partner With SDLC / CSI')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-950 shadow-xs hover:opacity-90 transition-all cursor-pointer"
              style={{ backgroundColor: '#A4A5C6' }}
            >
              <span>Enquire About Partnering</span>
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        </div>

        {/* Card 3: Schools & Communities -> Reveals Message Form Below */}
        <div
          className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border-2 transition-all flex flex-col justify-between space-y-5 ${
            showMessageForm && topic === 'Book SDLC Courage Crew for a School'
              ? 'border-[#84CEE2] ring-2 ring-[#84CEE2]/40 shadow-md'
              : 'border-[#84CEE2]/60 shadow-xs hover:shadow-md'
          }`}
        >
          <div className="space-y-2.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#84CEE2] text-slate-950">
              Schools &amp; Communities
            </span>
            <h2 className="font-serif text-2xl text-slate-900 dark:text-white">
              Book a Programme
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Invite SDLC to bring the Courage Crew™ emotional wellbeing curriculum, reading drives, or digital literacy workshops to your school.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => openFormWithTopic('Book SDLC Courage Crew for a School')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-950 shadow-xs hover:opacity-90 transition-all cursor-pointer"
              style={{ backgroundColor: '#84CEE2' }}
            >
              <span>Book a School Programme</span>
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC "SEND US A MESSAGE" FORM (Hidden Initially; Appears Below the 3 Cards When Partner or Schools Clicked) */}
      {showMessageForm && (
        <div ref={formSectionRef} className="mb-10 scroll-mt-28 animate-fade-in">
          <form
            onSubmit={handleWhatsAppSubmit}
            className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#84CEE2]/60 p-7 sm:p-9 shadow-md space-y-5 relative"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#84CEE2]/20 text-slate-900 dark:text-[#84CEE2] mb-1.5">
                  Direct Partnership &amp; School Booking Enquiry
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  Send Us a Message
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowMessageForm(false)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Close Form ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Thandi Nkosi"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  School / Organisation (Optional)
                </label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="e.g. Buffelsdale Primary / ABC Company"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                How Would You Like to Connect?
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value as InquiryTopic)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              >
                <option value="Partner With SDLC / CSI">
                  Partner With SDLC / Corporate Social Investment (CSI)
                </option>
                <option value="Book SDLC Courage Crew for a School">
                  Book SDLC Courage Crew™ or a Workshop for a School
                </option>
                <option value="General Enquiry">General NPO Enquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                Your Message *
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your school, organisation, or how you would like to partner with SDLC..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950 hover:opacity-90 transition-all cursor-pointer"
              >
                Send via WhatsApp →
              </button>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`[${topic}] ${name}`)}&body=${encodeURIComponent(message)}`}
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 transition-all"
              >
                Or Send via Email App
              </a>
            </div>
          </form>
        </div>
      )}

      {/* 3. DIRECT CONTACT DETAILS (Directly Below the 3 Options / Popup Form) */}
      <div className="space-y-6">
        <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Direct Contact Details
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Reach out directly to Simonia and the SDLC administration team via email or WhatsApp.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 relative">
              <div className="text-xs text-slate-400 mb-1">Official NPO Email (Click to Copy)</div>
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={handleEmailCopy}
                className="font-semibold text-slate-900 dark:text-white hover:text-[#84CEE2] transition-colors break-all"
              >
                {siteConfig.email}
              </a>
              {copiedEmail && (
                <span className="mt-1.5 inline-block px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold">
                  Email copied to clipboard!
                </span>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
              <div className="text-xs text-slate-400 mb-1">Phone &amp; WhatsApp (Simonia)</div>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-900 dark:text-white hover:text-[#90D1BB] transition-colors"
              >
                {siteConfig.phoneDisplay} / {siteConfig.phoneAltDisplay}
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
              <div className="text-xs text-slate-400 mb-1">Registration Status</div>
              <div className="font-semibold text-slate-900 dark:text-white">
                Simonia Development Learning Centre • NPO 301-712
              </div>
            </div>
          </div>
        </div>

        {/* 4. LOOKING TO MAKE A DIRECT DONATION? (Right Beneath Direct Contact Details) */}
        <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif text-2xl text-[#84CEE2]">
              Looking to Make a Direct Donation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Visit our dedicated Donations page for our official Standard Bank NPO 301-712 EFT details and our Palesa Pads school sanitary supply drive.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#84CEE2] text-slate-950 hover:opacity-90 transition-all"
            >
              <span>View Banking &amp; Donation Details →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
