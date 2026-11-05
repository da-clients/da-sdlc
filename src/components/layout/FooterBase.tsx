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
                <span>KwaZulu-Natal &amp; National Outreach, South Africa</span>
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
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore SDLC
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#84CEE2] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#84CEE2] transition-colors">Our Mission</Link></li>
              <li><Link href="/leadership" className="hover:text-[#84CEE2] transition-colors">Founder &amp; Board</Link></li>
              <li><Link href="/programs" className="hover:text-[#84CEE2] transition-colors">Our Programmes</Link></li>
              <li><Link href="/gallery" className="hover:text-[#84CEE2] transition-colors">Impact Timeline &amp; Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#84CEE2] transition-colors">Contact &amp; Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-[#90D1BB] transition-colors font-medium">Support Our Mission</Link></li>
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
              <li>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  AI &amp; LLM Knowledge Index (llms.txt)
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
