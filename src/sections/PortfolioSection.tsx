import React from 'react';
import { DemoProject } from '../types';
import { DEMO_PROJECTS } from '../data/content';
import {
  Layers,
  ArrowRight,
  Eye,
  GitBranch,
  CheckCircle2,
  Play,
} from 'lucide-react';

interface PortfolioSectionProps {
  onOpenProjectModal: (project: DemoProject) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenProjectModal,
}) => {
  return (
    <section id="portfolio" className="py-24 bg-[#0E0E0E] border-t border-[#262626]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            Interactive Demonstrations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
            Explore What Automation Can Do.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            Five interactive conceptual automation workflows illustrating how data moves seamlessly across modern business tools.
          </p>
        </div>

        {/* 5 Demo Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO_PROJECTS.map((proj, index) => {
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={proj.id}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-[#121212] border border-[#262626] transition-all duration-300 hover:border-[#00FF88]/50 hover:bg-[#151515] hover:shadow-2xl flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Demo Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30">
                      DEMO PROJECT
                    </span>
                    <span className="text-[11px] font-mono text-[#52525B]">
                      ARCH 0{index + 1}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="text-xs text-[#00FF88] font-semibold mb-1">
                    {proj.category}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#00FF88] transition-colors">
                    {proj.name}
                  </h3>

                  {/* Problem Statement */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-5">
                    {proj.problem}
                  </p>

                  {/* Workflow Pipeline Diagram Box */}
                  <div className="p-3.5 rounded-xl bg-[#0B0B0B] border border-[#262626] mb-5">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      <GitBranch className="w-3.5 h-3.5 text-[#00FF88]" />
                      <span>Pipeline Workflow:</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-300 leading-snug">
                      {proj.workflowSummary.split('→').map((part, pIdx, arr) => (
                        <span key={pIdx}>
                          <span className="text-white font-medium">{part.trim()}</span>
                          {pIdx < arr.length - 1 && (
                            <span className="text-[#00FF88] mx-1.5 font-bold">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used Chips */}
                  <div className="mb-6">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-[#71717A] mb-2">
                      Tools & Protocols:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[11px] bg-[#171717] border border-[#262626] text-zinc-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => onOpenProjectModal(proj)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#171717] border border-[#262626] text-xs font-semibold text-white group-hover:border-[#00FF88] group-hover:bg-[#00FF88] group-hover:text-[#0B0B0B] transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>View Demo & Simulate Workflow</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#71717A] max-w-2xl mx-auto">
            These demonstrations represent simulated workflow architectures designed to illustrate technical capabilities. LEADX AUTOMATION builds bespoke setups under direct client review without fabricating historical metrics.
          </p>
        </div>
      </div>
    </section>
  );
};
