"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Wrench, Briefcase, ShoppingBag } from "lucide-react";
import { siteConfig, BusinessArchetype } from "../../../site.config";
import { generateRulesOfEngagement } from "../../legal/rules-of-engagement";
import { HeaderCenteredLogo } from "../../components/bones/HeaderCenteredLogo";
import { FooterLegal } from "../../components/bones/FooterLegal";

export default function RulesOfEngagementPage() {
  const [activeArchetype, setActiveArchetype] = useState<BusinessArchetype>(siteConfig.business.archetype);

  const rules = generateRulesOfEngagement(siteConfig, activeArchetype);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCenteredLogo config={siteConfig} />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Archetype Selector Filter */}
        <div className="mb-8 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            Rules Mode:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveArchetype("trade")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeArchetype === "trade"
                  ? "bg-emerald-600 text-white font-bold"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
              }`}
            >
              <Wrench className="w-3 h-3" />
              <span>Trade Contractor</span>
            </button>

            <button
              onClick={() => setActiveArchetype("consulting")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeArchetype === "consulting"
                  ? "bg-emerald-600 text-white font-bold"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
              }`}
            >
              <Briefcase className="w-3 h-3" />
              <span>Consulting / Advisory</span>
            </button>

            <button
              onClick={() => setActiveArchetype("retail")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeArchetype === "retail"
                  ? "bg-emerald-600 text-white font-bold"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
              }`}
            >
              <ShoppingBag className="w-3 h-3" />
              <span>Boutique Retail</span>
            </button>
          </div>
        </div>

        <div className="mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Commercial Operating Standard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {rules.title}
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{rules.subtitle}</p>
          <div className="mt-3 flex gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span>Effective: {rules.effectiveDate}</span>
            <span>•</span>
            <span>Last Updated: {rules.lastUpdated}</span>
          </div>
        </div>

        <div className="space-y-10 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          {rules.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                {section.title}
              </h2>
              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-600 dark:text-slate-300">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>

      <FooterLegal config={siteConfig} />
    </div>
  );
}
