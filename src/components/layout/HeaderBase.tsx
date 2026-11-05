'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site.config';
import ThemeToggle from '@/components/ThemeToggle';

export default function HeaderBase() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Our Mission' },
    { href: '/leadership', label: 'Founder & Board' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-colors">
      {/* Top Verification & One-Click Contact Micro-Bar */}
      <div className="bg-slate-900 dark:bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#84CEE2]/20 text-[#84CEE2] border border-[#84CEE2]/40">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Registered South African NPO 301-712</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-200">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#84CEE2] transition-colors font-medium"
              title="Send us an email"
            >
              <svg
                className="w-3.5 h-3.5 text-[#84CEE2] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#90D1BB] transition-colors font-medium"
              title="Message or call us on WhatsApp"
            >
              <svg
                className="w-3.5 h-3.5 text-[#90D1BB] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row: [Left: Light/Dark Toggle] | [Centre: Standalone Readable Logo] | [Right: Burger Menu] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 grid grid-cols-3 items-center">
        {/* Left: Light/Dark Mode Toggle */}
        <div className="flex items-center justify-start">
          <ThemeToggle />
        </div>

        {/* Centre: Standalone Cropped SDLC Logo (Sized for 60+ Readability, No Redundant Text Attached) */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-2xl bg-white px-3 py-1.5 shadow-xs border border-slate-200/70 dark:border-slate-700 hover:opacity-95 transition-opacity"
            aria-label="Simonia Development Learning Centre Home"
          >
            <img
              src="/assets/sdlc-logo-transparent.png"
              alt="Simonia Development Learning Centre — Skills & Learning (NPO 301-712)"
              loading="eager"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right: Unified Burger Menu Button (Mobile & Desktop) */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            <span className="hidden sm:inline text-xs font-semibold">Menu</span>
          </button>
        </div>
      </div>

      {/* Unified Navigation Drawer (Clean 4 Options + Blue Contact & Volunteer Button) */}
      {menuOpen && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-4 pb-6 shadow-xl">
          <nav className="max-w-md mx-auto space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#84CEE2]/20 text-slate-950 dark:text-[#84CEE2] font-semibold'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-5 py-3.5 rounded-xl text-base font-semibold bg-[#84CEE2] text-slate-950 hover:opacity-95 transition-all shadow-sm"
              >
                Contact &amp; Volunteer
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
