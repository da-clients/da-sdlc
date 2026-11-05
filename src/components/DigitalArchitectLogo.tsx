import React from 'react';

interface DigitalArchitectLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

/**
 * Official Digital Architect Brand Emblem & Typography:
 * Mathematically Symmetrical Hexagonal Code Core (Regular Hexagon at (24,24))
 * Left & Right Chevrons + Architectural Code Slash
 * Two-line stacked brand title: DIGITAL ARCHITECT
 */
export default function DigitalArchitectLogo({
  className = '',
  size = 'md',
  showText = true,
}: DigitalArchitectLogoProps) {
  const iconSizeClass = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Mathematically Symmetrical Hexagonal Code Core */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizeClass} shrink-0 transition-transform`}
        aria-hidden="true"
      >
        {/* True Regular Hexagon centered exactly at (24, 24) */}
        <polygon
          points="24,4 41.32,14 41.32,34 24,44 6.68,34 6.68,14"
          className="fill-sky-500/10 dark:fill-sky-500/15 stroke-sky-500 dark:stroke-sky-400 transition-colors"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Left Chevron: tip at (10.5, 24) */}
        <path
          d="M16.5 17.5 L10.5 24 L16.5 30.5"
          className="stroke-sky-600 dark:stroke-sky-400 transition-colors"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Chevron: tip at (37.5, 24) */}
        <path
          d="M31.5 17.5 L37.5 24 L31.5 30.5"
          className="stroke-sky-600 dark:stroke-sky-400 transition-colors"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Architectural Code Slash: midpoint at (24, 24) */}
        <path
          d="M26.5 15.5 L21.5 32.5"
          className="stroke-slate-950 dark:stroke-white transition-colors"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {showText && (
        <div className="flex flex-col justify-center text-left select-none">
          <span className="font-black text-slate-950 dark:text-white tracking-wider text-xs sm:text-sm uppercase leading-tight transition-colors">
            DIGITAL
          </span>
          <span className="text-sky-600 dark:text-sky-400 font-extrabold tracking-widest text-[9px] sm:text-[10px] uppercase leading-none transition-colors">
            ARCHITECT
          </span>
        </div>
      )}
    </div>
  );
}
