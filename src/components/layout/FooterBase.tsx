import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';

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
            <div className="flex items-center gap-3">
              <img
                src="/assets/sdlc-logo-transparent.png"
                alt="SDLC Logo"
                className="h-12 w-auto rounded-lg bg-white p-1"
              />
              <div>
                <div className="font-serif text-xl text-white">SDLC</div>
                <div className="text-xs text-[#84CEE2] font-semibold">Registered NPO 301-712</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Simonia Development Learning Centre empowers women and children across South Africa through Mental Health, Education, Entrepreneurship, and Technology (M.E.E.T.).
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <div>📍 KwaZulu-Natal & National Outreach, South Africa</div>
              <div>✉️ <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a></div>
              <div>📞 <a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="hover:text-white">{siteConfig.phoneDisplay}</a></div>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore SDLC
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#84CEE2] transition-colors">Home Overview</Link></li>
              <li><Link href="/about" className="hover:text-[#84CEE2] transition-colors">Our Mission & Vision</Link></li>
              <li><Link href="/leadership" className="hover:text-[#84CEE2] transition-colors">Founder & The Board</Link></li>
              <li><Link href="/gallery" className="hover:text-[#84CEE2] transition-colors">2026 Impact Timeline & Gallery</Link></li>
              <li><Link href="/donate" className="hover:text-[#90D1BB] transition-colors font-medium">Partner / Support Our Mission</Link></li>
              <li><Link href="/contact" className="hover:text-[#84CEE2] transition-colors">Contact & Volunteer</Link></li>
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
                  <span>M — Mental Health & Courage Crew™</span>
                </Link>
              </li>
              <li>
                <Link href="/pillars#education" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DA8688]" />
                  <span>E — Education & Youth Literacy</span>
                </Link>
              </li>
              <li>
                <Link href="/pillars#entrepreneurship" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#90D1BB]" />
                  <span>E — Entrepreneurship & Enterprise</span>
                </Link>
              </li>
              <li>
                <Link href="/pillars#technology" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F2CB6F]" />
                  <span>T — Technology & Responsible AI</span>
                </Link>
              </li>
              <li>
                <Link href="/pillars#csi-partnerships" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A4A5C6]" />
                  <span>Corporate & CSI Partnerships</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance, Policies & Official Digital Sponsor */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Governance & Policies
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#84CEE2] transition-colors">
                  POPIA Privacy & Child Protection Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#84CEE2] transition-colors">
                  NPO Governance, Donor & Website Terms
                </Link>
              </li>
              <li>
                <a href="/assets/docs/MEETingNeeds.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#84CEE2] transition-colors">
                  Mental Health Helpline Directory (PDF)
                </a>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  AI & LLM Knowledge Index (llms.txt)
                </a>
              </li>
            </ul>

            {/* Official Digital Sponsor Placement */}
            <div className="pt-2">
              <a
                href="https://www.digitalarchitectagency.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#84CEE2]/60 transition-all group"
              >
                <div className="text-[10px] uppercase tracking-widest text-[#84CEE2] font-semibold">
                  Official Technology & Web Sponsor
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-[#84CEE2] transition-colors mt-0.5">
                  Made by Digital Architect (DA) ↗
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Proudly sponsoring SDLC NPO 301-712
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Simonia Development Learning Centre (NPO 301-712). All rights reserved.
          </div>
          <div>
            Made by{' '}
            <a
              href="https://www.digitalarchitectagency.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#84CEE2] font-medium underline underline-offset-4"
            >
              Digital Architect
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
