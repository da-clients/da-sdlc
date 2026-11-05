"use client";

import React from "react";
import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { siteConfig } from "../../../site.config";

export function HeaderBase({ config = siteConfig }: { config?: typeof siteConfig }) {
  const { business, branding, contact, navigation } = config;
  const whatsappUrl = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hi ${business.name}, I would like to get in touch.`)}`
    : "#contact";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {branding.logoImage && (
            <img src={branding.logoImage} alt={branding.logoMain} className="h-12 w-auto object-contain" />
          )}
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-wider text-slate-900 dark:text-white uppercase">
              {branding.logoMain}
            </span>
            {branding.logoSub && (
              <span className="text-[10px] tracking-widest uppercase text-slate-500 dark:text-slate-400">
                {branding.logoSub}
              </span>
            )}
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-emerald-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {contact.whatsapp && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${business.name}`}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-sm transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
