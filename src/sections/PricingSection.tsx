import React from 'react';
import { PRICING_PACKAGES } from '../data/content';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPackage,
}) => {
  return (
    <section id="pricing" className="py-24 bg-[#0B0B0B] border-t border-[#262626]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            Transparent Scope
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
            Flexible Solutions For Your Business.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            Every business workflow is different. Choose a starting package or request a custom solution.
          </p>
        </div>

        {/* 3 Pricing Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-[#151515] border-2 border-[#00FF88] shadow-[0_0_35px_rgba(0,255,136,0.12)] md:-translate-y-2'
                    : 'bg-[#121212] border border-[#262626] hover:border-[#383838]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#00FF88] text-[#0B0B0B] text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Most Versatile
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00FF88] mb-1">
                    {pkg.suitableFor}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                    {pkg.tagline}
                  </p>

                  {/* Pricing tag */}
                  <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626] mb-6">
                    <span className="text-[11px] font-mono text-[#71717A] uppercase block">
                      Investment Model
                    </span>
                    <span className="text-2xl font-bold font-heading text-white tracking-tight">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] uppercase font-mono tracking-wider text-zinc-400">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#A1A1AA]">
                          <Check className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                          <span className="leading-snug text-zinc-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Package CTA */}
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#00FF88] text-[#0B0B0B] hover:bg-[#00e077] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                      : 'bg-[#171717] border border-[#262626] text-white hover:border-[#00FF88]/40 hover:bg-[#202020]'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Notes Breakdown */}
        <div className="mt-14 p-6 rounded-2xl bg-[#121212] border border-[#262626] max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white mb-3">
            <ShieldCheck className="w-4 h-4 text-[#00FF88]" />
            <span>Clear & Honest Pricing Terms</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A1A1AA]">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-1.5 shrink-0" />
              <span>Third-party API charges (Meta, OpenAI, etc.) are paid directly to providers without markup.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-1.5 shrink-0" />
              <span>Hosting and tool subscription fees (e.g. n8n Cloud or VPS) are billed transparently.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-1.5 shrink-0" />
              <span>Final project price depends strictly on workflow complexity, triggers, and custom data rules.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-1.5 shrink-0" />
              <span>No fake discounts, fabricated urgency timers, or unrealistic promises of unlimited free revisions.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
