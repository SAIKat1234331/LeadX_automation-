import React from 'react';
import { Cpu, Target, GitMerge, TrendingUp } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/content';

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Target,
  GitMerge,
  TrendingUp,
};

export const ValuePropsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0E0E0E] border-y border-[#262626]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            Core Value
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Technology That Works For Your Business.
          </h2>
          <p className="mt-3 text-sm text-[#A1A1AA]">
            Practical workflow engineering built to solve day-to-day operational friction without unnecessary technical overhead.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = ICON_MAP[prop.iconName] || Cpu;
            return (
              <div
                key={prop.id}
                className="group relative p-6 rounded-2xl bg-[#121212] border border-[#262626] transition-all duration-300 hover:border-[#00FF88]/50 hover:bg-[#161616] hover:-translate-y-1"
              >
                {/* Accent top pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#171717] border border-[#262626] flex items-center justify-center text-[#00FF88] group-hover:scale-110 group-hover:bg-[#00FF88]/10 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#52525B]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-[#00FF88] transition-colors">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {prop.description}
                </p>

                {/* Subtle border accent */}
                <div className="mt-6 pt-4 border-t border-[#262626]/60 flex items-center gap-1 text-[11px] font-mono text-[#71717A] group-hover:text-[#00FF88] transition-colors">
                  <span>LEADX ARCHITECTURE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
