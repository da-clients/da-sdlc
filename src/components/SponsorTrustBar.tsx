import React from 'react';
import { siteConfig } from '@/config/site.config';
import DigitalArchitectLogo from '@/components/DigitalArchitectLogo';

export default function SponsorTrustBar() {
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Backed By &amp; Partnered With Institutional, Municipal &amp; Technology Sponsors
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 items-center">
          {siteConfig.sponsors.map((s) => {
            const card = (
              <div
                key={s.name}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white dark:bg-slate-900 border transition-all h-28 text-center ${
                  s.name === 'Digital Architect'
                    ? 'border-[#84CEE2] shadow-xs ring-1 ring-[#84CEE2]/40 hover:border-[#84CEE2]'
                    : 'border-slate-200/80 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                {s.name === 'Digital Architect' ? (
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <DigitalArchitectLogo size="md" showText={true} />
                    <span className="text-[10px] text-sky-700 dark:text-[#84CEE2] font-semibold pt-0.5">
                      Web &amp; Tech Sponsor
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      src={s.logo}
                      alt={s.name}
                      loading="lazy"
                      className="max-h-12 w-auto object-contain mb-1.5"
                    />
                    <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 line-clamp-1">
                      {s.name}
                    </span>
                  </>
                )}
              </div>
            );

            return s.url ? (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" title={s.role}>
                {card}
              </a>
            ) : (
              <div key={s.name} title={s.role}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
