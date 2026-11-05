import React from 'react';
import { siteConfig } from '@/config/site.config';

export default function RulesOfEngagementPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
      <h1 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
        Community &amp; Partnership Rules of Engagement
      </h1>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        All community programmes, school outreach sessions, and corporate partnerships conducted with <strong>{siteConfig.legalName}</strong> operate under mutual respect, child protection protocols, and transparent governance.
      </p>
    </div>
  );
}
