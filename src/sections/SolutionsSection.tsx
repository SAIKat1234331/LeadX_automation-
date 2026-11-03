import React from 'react';
import {
  Megaphone,
  ShoppingCart,
  Building,
  GraduationCap,
  Rocket,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { INDUSTRY_SOLUTIONS } from '../data/content';

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  Megaphone,
  ShoppingCart,
  Building,
  GraduationCap,
  Rocket,
};

interface SolutionsSectionProps {
  onSelectSolution: (industry: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
}) => {
  return (
    <section id="solutions" className="py-24 bg-[#0E0E0E] border-t border-[#262626]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            Tailored Industry Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
            Automation For Different Business Needs.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            Different industries face different operational friction points. We analyze your specific bottlenecks to design appropriate automated solutions.
          </p>
        </div>

        {/* 5 Industry Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_SOLUTIONS.map((sol, index) => {
            const Icon = INDUSTRY_ICONS[sol.iconName] || Rocket;
            return (
              <div
                key={sol.id}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#121212] border border-[#262626] transition-all duration-300 hover:border-[#00FF88]/50 hover:bg-[#161616] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#171717] border border-[#262626] flex items-center justify-center text-[#00FF88] group-hover:bg-[#00FF88]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#52525B]">
                      INDUSTRY 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-4 group-hover:text-[#00FF88] transition-colors">
                    {sol.industry}
                  </h3>

                  {/* Problem Box */}
                  <div className="p-3.5 rounded-xl bg-[#0B0B0B] border border-[#262626]/80 mb-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-rose-400 mb-1 uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {sol.problem}
                    </p>
                  </div>

                  {/* Solution Box */}
                  <div className="p-3.5 rounded-xl bg-[#0B0B0B] border border-[#00FF88]/20 mb-6">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#00FF88] mb-1 uppercase tracking-wider">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Potential Solution</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {sol.solution}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <button
                  type="button"
                  onClick={() => onSelectSolution(sol.industry)}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-xs font-semibold text-white group-hover:border-[#00FF88]/40 group-hover:bg-[#00FF88]/10 group-hover:text-[#00FF88] transition-all cursor-pointer"
                >
                  <span>Discuss Industry Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#71717A] max-w-xl mx-auto">
            Note: Automation solutions are custom-engineered based on your existing software tools and operational scope. No unrealistic promises or automated guarantees.
          </p>
        </div>
      </div>
    </section>
  );
};
