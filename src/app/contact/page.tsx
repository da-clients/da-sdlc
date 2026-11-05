'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site.config';

export default function ContactVolunteerPage() {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [topic, setTopic] = useState('Corporate CSI / Sponsorship');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Simonia! My name is ${name}${org ? ` from ${org}` : ''}. Enquiry Topic: [${topic}]. ${message}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-slate-800 dark:text-[#84CEE2]">
          Get in Touch • Volunteer • Book a School Workshop
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 dark:text-white">
          Connect With <span className="text-[#84CEE2]">SDLC</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Whether you want to bring the <strong>SDLC Courage Crew™</strong> to your school, explore a Corporate CSI partnership, or volunteer your skills, we would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Direct Contact Channels */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
            <h2 className="font-serif text-2xl text-slate-900 dark:text-white">
              Direct Contact Details
            </h2>
            <div className="space-y-3 text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70">
                <div className="text-xs text-slate-400">Official NPO Email</div>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-slate-900 dark:text-white hover:text-[#84CEE2]">
                  {siteConfig.email}
                </a>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70">
                <div className="text-xs text-slate-400">Phone &amp; WhatsApp (Simonia)</div>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 dark:text-white hover:text-[#90D1BB]"
                >
                  {siteConfig.phoneDisplay} / {siteConfig.phoneAltDisplay}
                </a>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70">
                <div className="text-xs text-slate-400">Registration Status</div>
                <div className="font-semibold text-slate-900 dark:text-white">
                  Simonia Development Learning Centre • NPO 301-712
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3">
            <h3 className="font-serif text-xl text-[#90D1BB]">
              🙋‍♀️ Sign Up to Volunteer
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We welcome educators, mental wellness practitioners, mentors, technology facilitators, and community volunteers across KwaZulu-Natal. Select &ldquo;Volunteer Sign-Up&rdquo; in the form to join our next outreach!
            </p>
          </div>
        </div>

        {/* Zero-Friction Inquiry & Volunteer Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleWhatsAppSubmit}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-7 sm:p-9 shadow-sm space-y-5"
          >
            <h2 className="font-serif text-2xl text-slate-900 dark:text-white">
              Send Us a Direct Message
            </h2>

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
                  School / Company (Optional)
                </label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="e.g. Seatides Primary / ABC Corp"
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
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              >
                <option value="Corporate CSI / Sponsorship">🤝 Corporate CSI / Sponsorship Partnership</option>
                <option value="Book SDLC Courage Crew for a School">🏫 Book SDLC Courage Crew™ for a School</option>
                <option value="Volunteer Sign-Up">🙋‍♀️ Sign Up to Volunteer With SDLC</option>
                <option value="General Enquiry">💬 General NPO Enquiry</option>
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
                placeholder="Tell us how we can collaborate..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950 hover:opacity-90 transition-all"
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
      </div>
    </div>
  );
}
