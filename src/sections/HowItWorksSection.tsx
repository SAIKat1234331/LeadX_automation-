import React from 'react';
import { Search, Compass, Cpu, Rocket, Check } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/content';

const STEP_ICONS = [Search, Compass, Cpu, Rocket];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-[#262626]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            Our Proven Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
            From Idea To Intelligent Workflow.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            A clear, predictable, four-stage approach to transform manual bottlenecks into dependable automated workflows.
          </p>
        </div>

        {/* 4 Connected Cards Timeline */}
        <div className="relative">
          {/* Horizontal connecting line on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#00FF88]/20 via-[#00FF88]/40 to-[#00FF88]/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {HOW_IT_WORKS.map((item, index) => {
              const Icon = STEP_ICONS[index] || Search;
              return (
                <div
                  key={item.step}
                  className="group relative p-6 rounded-2xl bg-[#121212] border border-[#262626] transition-all duration-300 hover:border-[#00FF88]/60 hover:bg-[#161616] flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-9 h-9 rounded-lg bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30 font-mono font-bold text-sm flex items-center justify-center">
                        {item.step}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#171717] border border-[#262626] flex items-center justify-center text-[#A1A1AA] group-hover:text-[#00FF88] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-xl font-bold font-heading text-white mb-2.5 tracking-tight group-hover:text-[#00FF88] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Stage Details */}
                    <ul className="space-y-1.5 pt-4 border-t border-[#262626]/70">
                      {item.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2 text-xs text-[#71717A] group-hover:text-[#A1A1AA] transition-colors"
                        >
                          <Check className="w-3.5 h-3.5 text-[#00FF88] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#52525B]">
                    <span>PHASE {item.step} HANDOFF</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
