'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site.config';
import ThemeToggle from '@/components/ThemeToggle';

export default function HeaderBase() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-colors">
      {/* Top Verification Micro-Bar */}
      <div className="bg-slate-900 dark:bg-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#84CEE2]/20 text-[#84CEE2] border border-[#84CEE2]/40">
              ✓ Registered South African NPO 301-712
            </span>
            <span className="hidden sm:inline text-slate-300">
              M.E.E.T. For Impact: Mental Health • Education • Entrepreneurship • Technology
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-[#84CEE2] transition-colors">
              {siteConfig.email}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#90D1BB] transition-colors font-medium"
            >
              WhatsApp: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (4+1 Progressive Structure to Prevent Decision Fatigue) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/assets/sdlc-logo-transparent.png"
            alt="Simonia Development Learning Centre Logo"
            className="h-13 w-auto object-contain rounded-lg bg-white p-0.5"
          />
          <div>
            <span className="block font-serif text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white">
              SDLC
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
              Skills Development • NPO 301-712
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/')
                ? 'bg-[#84CEE2]/15 text-slate-900 dark:text-[#84CEE2] font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            Home
          </Link>

          {/* Grouped Dropdown: Separates Mission from Board without cluttering the header */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <button
              type="button"
              onClick={() => setAboutDropdown(!aboutDropdown)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1.5 transition-colors ${
                isActive('/about') || isActive('/leadership')
                  ? 'bg-[#84CEE2]/15 text-slate-900 dark:text-[#84CEE2] font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              <span>About SDLC</span>
              <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {aboutDropdown && (
              <div className="absolute left-0 mt-1 w-64 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50">
                <Link
                  href="/about"
                  onClick={() => setAboutDropdown(false)}
                  className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Our Mission & Vision
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Our purpose, goals, approach & institutional partners
                  </div>
                </Link>
                <Link
                  href="/leadership"
                  onClick={() => setAboutDropdown(false)}
                  className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors mt-1"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Founder & The Board
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Meet Simonia Buys Marimuthoo, Nicole Naidoo & Deandre Vanmali
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/pillars"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/pillars')
                ? 'bg-[#84CEE2]/15 text-slate-900 dark:text-[#84CEE2] font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            M.E.E.T. Pillars
          </Link>

          <Link
            href="/gallery"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/gallery')
                ? 'bg-[#84CEE2]/15 text-slate-900 dark:text-[#84CEE2] font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            Impact Timeline
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/contact')
                ? 'bg-[#84CEE2]/15 text-slate-900 dark:text-[#84CEE2] font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Primary Action + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950 hover:opacity-90 transition-all shadow-sm"
          >
            <span>Partner / Support</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            Home
          </Link>
          <div className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/70 space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              About Our NPO
            </div>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-800 dark:text-slate-200"
            >
              • Our Mission, Vision & Story
            </Link>
            <Link
              href="/leadership"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-800 dark:text-slate-200"
            >
              • Founder & The Board of Directors
            </Link>
          </div>
          <Link
            href="/pillars"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            M.E.E.T. Pillars & Courage Crew™
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            2026 Impact Timeline & Gallery
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            Contact & Volunteer
          </Link>
          <Link
            href="/donate"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center mt-3 px-4 py-3 rounded-xl text-base font-semibold bg-slate-900 dark:bg-[#84CEE2] text-white dark:text-slate-950"
          >
            Partner / Support Our Mission →
          </Link>
        </div>
      )}
    </header>
  );
}
