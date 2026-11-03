import React from 'react';
import {
  Boxes,
  MessageSquare,
  Users,
  Bot,
  Workflow,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/content';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Boxes,
  MessageSquare,
  Users,
  Bot,
  Workflow,
};

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section id="services" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            Our Core Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
            Automation Solutions Built Around Your Business.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            Every business has repetitive tasks. We help identify opportunities and design practical automation systems.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.iconName] || Boxes;
            const isWideCard = index === 3 || index === 4;

            return (
              <div
                key={service.id}
                className={`group relative p-7 rounded-2xl bg-[#121212] border border-[#262626] transition-all duration-300 hover:border-[#00FF88]/50 hover:bg-[#161616] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#171717] border border-[#262626] flex items-center justify-center text-[#00FF88] group-hover:scale-105 group-hover:bg-[#00FF88]/10 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#52525B]">
                      SERVICE 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-heading text-white mb-2.5 group-hover:text-[#00FF88] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Use Cases List */}
                  <div className="pt-4 border-t border-[#262626]/80 mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                      Common Applications:
                    </p>
                    <ul className="space-y-2">
                      {service.useCases.map((uc, uidx) => (
                        <li
                          key={uidx}
                          className="flex items-start gap-2 text-xs text-[#A1A1AA] group-hover:text-zinc-300 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF88] shrink-0 mt-0.5" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-xs font-semibold text-white group-hover:border-[#00FF88]/40 group-hover:bg-[#00FF88]/10 group-hover:text-[#00FF88] transition-all cursor-pointer"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
