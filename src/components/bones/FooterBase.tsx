import React from "react";
import Link from "next/link";
import { siteConfig } from "../../../site.config";

export function FooterBase({ config = siteConfig }: { config?: typeof siteConfig }) {
  const { business, contact, branding } = config;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-base font-bold uppercase text-slate-900 dark:text-white block mb-2">
              {branding.logoMain}
            </span>
            <p className="text-xs leading-relaxed mb-2">{business.tagline}</p>
            {business.regNumber && <p className="text-xs font-mono">Reg: {business.regNumber}</p>}
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Contact</h4>
            <ul className="space-y-1 text-xs">
              {contact.location && <li>{contact.location}</li>}
              {contact.phoneFormatted && <li>{contact.phoneFormatted}</li>}
              {contact.email && <li>{contact.email}</li>}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Legal Policies</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/privacy" className="hover:underline">POPIA Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link href="/rules-of-engagement" className="hover:underline">Rules of Engagement</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {currentYear} {business.legalName}. All rights reserved.</p>
          <p>
            Made by{" "}
            <a
              href="https://digitalarchitectagency.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-900 dark:text-white hover:underline"
            >
              Digital Architect
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
