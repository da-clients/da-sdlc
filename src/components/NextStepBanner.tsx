import React from 'react';
import Link from 'next/link';

interface NextStepBannerProps {
  stepLabel: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function NextStepBanner({
  stepLabel,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref = '/donate',
  secondaryLabel = 'Partner / Donate',
}: NextStepBannerProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-8 sm:p-12 shadow-xl border border-slate-700/60 relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#84CEE2]/20 text-[#84CEE2] border border-[#84CEE2]/30">
              {stepLabel}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              {title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={primaryHref}
              className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#84CEE2] text-slate-950 hover:opacity-95 transition-all shadow-md"
            >
              {primaryLabel} →
            </Link>
            {secondaryHref && (
              <Link
                href={secondaryHref}
                className="px-5 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
