import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  Database,
  MessageSquare,
  FileSpreadsheet,
  CheckCircle,
  Play,
  RotateCcw,
} from 'lucide-react';

interface HeroSectionProps {
  onDiscussClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscussClick,
  onExploreClick,
}) => {
  const [activeNode, setActiveNode] = useState<number>(0);
  const [pulseActive, setPulseActive] = useState<boolean>(true);

  const workflowPipeline = [
    {
      title: 'Inbound Event',
      sub: 'WhatsApp / Web Form',
      icon: MessageSquare,
      color: '#00FF88',
    },
    {
      title: 'AI Processing',
      sub: 'Gemini / n8n Engine',
      icon: Bot,
      color: '#00E5FF',
    },
    {
      title: 'Data Sync',
      sub: 'Sheets CRM / Database',
      icon: FileSpreadsheet,
      color: '#FFB800',
    },
    {
      title: 'Smart Dispatch',
      sub: 'Team Alert & Follow-up',
      icon: Zap,
      color: '#00FF88',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00FF88]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-[#262626] text-xs font-semibold tracking-wider text-[#00FF88] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
              <span>AI AUTOMATION AGENCY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-white leading-[1.12]">
              Turn Repetitive Work Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00FF88]">
                Intelligent Automation.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
              LEADX AUTOMATION helps businesses simplify operations, automate repetitive tasks, manage leads, and build smarter workflows using AI and no-code technology.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onDiscussClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#00FF88] text-[#0B0B0B] font-bold text-sm transition-all duration-200 hover:bg-[#00e077] hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] active:scale-95 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#121212] border border-[#262626] text-white font-semibold text-sm transition-all duration-200 hover:border-[#00FF88]/40 hover:bg-[#171717] active:scale-95 cursor-pointer"
              >
                <span>Explore Our Solutions</span>
              </button>
            </div>

            {/* Supporting Text */}
            <div className="pt-3 flex items-center gap-2 text-xs sm:text-sm text-[#A1A1AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
              <span className="font-medium text-zinc-300">
                Smart Workflows. Less Manual Work. Better Business Operations.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Futuristic Workflow Node Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#121212]/90 border border-[#262626] shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Corner tech accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00FF88]/10 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00FF88] animate-ping" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-white uppercase">
                    ACTIVE WORKFLOW ENGINE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00FF88] bg-[#00FF88]/10 px-2 py-0.5 rounded border border-[#00FF88]/30">
                  REAL-TIME PIPELINE
                </span>
              </div>

              {/* Connecting Nodes List */}
              <div className="space-y-3 relative">
                {/* Connecting Line between nodes */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#00FF88] via-[#262626] to-[#00FF88] z-0 opacity-40" />

                {workflowPipeline.map((node, index) => {
                  const Icon = node.icon;
                  const isCurrent = activeNode === index;
                  return (
                    <div
                      key={node.title}
                      onClick={() => setActiveNode(index)}
                      className={`relative z-10 p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                        isCurrent
                          ? 'bg-[#171717] border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.12)] translate-x-1'
                          : 'bg-[#0B0B0B]/80 border-[#262626] hover:border-[#333333]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                            isCurrent
                              ? 'bg-[#00FF88] text-[#0B0B0B]'
                              : 'bg-[#171717] text-[#A1A1AA] border border-[#262626]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {node.title}
                          </div>
                          <div className="text-[11px] text-[#A1A1AA]">
                            {node.sub}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isCurrent && (
                          <span className="text-[10px] font-mono text-[#00FF88] px-1.5 py-0.5 rounded bg-[#00FF88]/10">
                            EXEC
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-[#52525B]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status footer inside visual card */}
              <div className="mt-5 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#A1A1AA]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>Automated Error Recovery Active</span>
                </div>
                <span className="font-mono text-[#00FF88]">0ms Latency Drop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
