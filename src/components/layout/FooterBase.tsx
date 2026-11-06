import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import DigitalArchitectLogo from '@/components/DigitalArchitectLogo';

export default function FooterBase() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Colour-Coded M.E.E.T. Accent Strip */}
      <div className="h-1.5 w-full grid grid-cols-5">
        <div style={{ backgroundColor: '#84CEE2' }} title="M — Mental Health" />
        <div style={{ backgroundColor: '#DA8688' }} title="E — Education" />
        <div style={{ backgroundColor: '#90D1BB' }} title="E — Entrepreneurship" />
        <div style={{ backgroundColor: '#F2CB6F' }} title="T — Technology" />
        <div style={{ backgroundColor: '#A4A5C6' }} title="Corporate & CSI Partnerships" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & NPO Identity */}
          <div className="space-y-4">
            <div className="inline-block rounded-xl bg-white px-3 py-1.5">
              <img
                src="/assets/sdlc-logo-transparent.png"
                alt="SDLC Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Simonia Development Learning Centre (NPO 301-712) empowers women and children across South Africa through Mental Health, Education, Entrepreneurship, and Technology (M.E.E.T.).
            </p>
            <div className="text-xs text-slate-400 space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#84CEE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>KwaZulu-Natal, Gauteng &amp; National Outreach, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#84CEE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#90D1BB] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Social Icons in Footer */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                title="SDLC on TikTok (@sdlc.npo)"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.34 6.34 0 0 0 6.33-6.32V8.9a8.2 8.2 0 0 0 4.91 1.6V7.05a4.84 4.84 0 0 1-1-.36z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="SDLC on Instagram (@sdlc.npo)"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#DA8688] hover:border-slate-700 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="SDLC on Facebook"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#84CEE2] hover:border-slate-700 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore SDLC
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#84CEE2] transition-colors">Home</Link></li>
              <li><Link href="/pillars" className="hover:text-[#84CEE2] transition-colors">Our Mission (M.E.E.T.)</Link></li>
              <li><Link href="/leadership" className="hover:text-[#84CEE2] transition-colors">Founder &amp; Board</Link></li>
              <li><Link href="/programs" className="hover:text-[#84CEE2] transition-colors">Our Programmes</Link></li>
              <li><Link href="/gallery" className="hover:text-[#84CEE2] transition-colors">Community Timeline &amp; Gallery</Link></li>
              <li><Link href="/partners" className="hover:text-[#84CEE2] transition-colors">Enterprise Partners</Link></li>
              <li><Link href="/donate" className="hover:text-[#90D1BB] transition-colors font-medium">Sponsor an In-a-Box</Link></li>
              <li><Link href="/contact" className="hover:text-[#84CEE2] transition-colors">Contact &amp; Volunteer</Link></li>
            </ul>
          </div>

          {/* Col 3: Direct Pillar Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              M.E.E.T. For Impact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pillars#mental-health" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#84CEE2]" />
                  <span>M — Mental Health</span>
                </Link>
              </li>
              <li>
                <Link href="/pillars#education" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DA8688]" />
                  <span>E — Education</span>
                </Link>
              </li>
              <li>
                <Link href="/pillars#entrepreneurship" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#90D1BB]" />
                  <span>E — Entrepreneurship</span>
                </Link>
              </li>
              <li>
                <Link href="/pillars#technology" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F2CB6F]" />
                  <span>T — Technology</span>
                </Link>
              </li>
              <li>
                <Link href="/partners" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A4A5C6]" />
                  <span>Corporate &amp; Brand Partners</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Policies */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Governance &amp; Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#84CEE2] transition-colors">
                  POPIA Privacy &amp; Child Protection Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#84CEE2] transition-colors">
                  NPO Governance, Donor &amp; Website Terms
                </Link>
              </li>
              <li>
                <a href="/assets/docs/MEETingNeeds.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#84CEE2] transition-colors">
                  Mental Health Helpline Directory (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Simonia Development Learning Centre (NPO 301-712). All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Made by</span>
            <a
              href="https://www.digitalarchitectagency.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#84CEE2] font-medium transition-colors"
            >
              <DigitalArchitectLogo size="sm" showText={true} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
