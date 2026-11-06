'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site.config';
import ThemeToggle from '@/components/ThemeToggle';

export default function HeaderBase() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll effect: Disappears when scrolling down, reappears when scrolling up or at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when near the top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 6) {
        // Scrolling DOWN -> hide header (unless drawer menu is actively open)
        if (!menuOpen) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current && lastScrollY.current - currentScrollY > 6) {
        // Scrolling UP -> reveal header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(siteConfig.email).catch(() => {
        // Fallback for non-secure / restricted environments
        const textArea = document.createElement('textarea');
        textArea.value = siteConfig.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
        } catch {
          // ignore fallback error
        }
        document.body.removeChild(textArea);
      });
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pillars', label: 'Our Mission (M.E.E.T.)' },
    { href: '/leadership', label: 'Founder & Board' },
    { href: '/gallery', label: 'Timeline & Gallery' },
    { href: '/partners', label: 'Enterprise Partners' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Verification & One-Click Contact Micro-Bar (Theme responsive: Soft sky blue in Light, Slate 950 in Dark) */}
      <div className="bg-[#E8F6FA] dark:bg-slate-950 border-b border-[#84CEE2]/40 dark:border-slate-800/80 text-slate-800 dark:text-slate-200 text-xs py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* NPO Credential */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white dark:bg-[#84CEE2]/20 text-slate-900 dark:text-[#84CEE2] border border-[#84CEE2]/60 dark:border-[#84CEE2]/40 shadow-xs">
              <svg
                className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#84CEE2] shrink-0"
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

          {/* Socials & Direct Contact Links */}
          <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200 font-medium">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-3 pr-2 border-r border-[#84CEE2]/40 dark:border-slate-800">
              {/* TikTok */}
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                title="SDLC on TikTok (@sdlc.npo)"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.34 6.34 0 0 0 6.33-6.32V8.9a8.2 8.2 0 0 0 4.91 1.6V7.05a4.84 4.84 0 0 1-1-.36z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="SDLC on Instagram (@sdlc.npo)"
                className="hover:text-rose-600 dark:hover:text-[#DA8688] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="SDLC on Facebook"
                className="hover:text-blue-600 dark:hover:text-[#84CEE2] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Email with Instant Clipboard Copy Feature */}
            <div className="relative inline-flex items-center">
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={handleEmailClick}
                className="inline-flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-[#84CEE2] transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#84CEE2] shrink-0"
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

              {copiedEmail && (
                <span
                  role="status"
                  aria-live="polite"
                  className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-bold shadow-md whitespace-nowrap z-50 animate-fade-in"
                >
                  Email copied to clipboard!
                </span>
              )}
            </div>

            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-[#90D1BB] transition-colors"
              title="Message or call us on WhatsApp"
            >
              <svg
                className="w-3.5 h-3.5 text-[#0d9488] dark:text-[#90D1BB] shrink-0"
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

      {/* Main Header Row: [Left: Light/Dark Toggle] | [Centre: Standalone Readable Logo] | [Right: Burger Menu & Quick CTA] */}
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

        {/* Right: Sponsor CTA + Unified Burger Menu Button */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/donate"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-[#84CEE2] text-slate-950 hover:opacity-90 shadow-xs transition-all"
          >
            Sponsor a Box
          </Link>

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

      {/* Unified Navigation Drawer */}
      {menuOpen && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-4 pb-6 shadow-xl animate-fade-in">
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

            <div className="pt-3 space-y-2">
              <Link
                href="/donate"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-xl text-base font-semibold bg-[#84CEE2] text-slate-950 hover:opacity-95 transition-all shadow-sm"
              >
                Sponsor a Child In-a-Box
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
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
