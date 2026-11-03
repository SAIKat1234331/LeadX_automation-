import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { LxLogo } from '../components/LxLogo';
import {
  MapPin,
  Mail,
  Phone,
  Code2,
  Workflow,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0E0E0E] border-t border-[#262626]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            About Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
            Building Smarter Business Systems.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            Practical, understandable, and business-oriented automation solutions for growing modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Company Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#121212] border border-[#262626] space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#262626]">
                <LxLogo size={36} showText={false} />
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    LEADX AUTOMATION
                  </h3>
                  <p className="text-xs text-[#00FF88] font-mono">
                    West Bengal, India • Serving Global & Domestic Businesses
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                LEADX AUTOMATION is an AI automation and digital solutions initiative founded by Saikat Patra.
              </p>

              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Our goal is to help businesses simplify repetitive work, improve operational efficiency, and build smarter digital workflows using AI and automation technology.
              </p>

              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                We focus on practical, understandable, and business-oriented automation solutions that integrate smoothly with your everyday tools.
              </p>

              {/* Core Principles */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                  <span>No unverified claims or fake metrics</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                  <span>Transparent architecture documentation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                  <span>Reliable error handling & retries</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                  <span>Founder-led project execution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative p-7 sm:p-8 rounded-2xl bg-[#141414] border border-[#262626] shadow-2xl overflow-hidden group hover:border-[#00FF88]/50 transition-all duration-300">
              {/* Neon Green Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00FF88] via-[#00E5FF] to-[#00FF88]" />

              {/* Watermark Monogram Background */}
              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                <LxLogo size={220} showText={false} />
              </div>

              {/* Founder Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-2xl bg-[#1A1A1A] border-2 border-[#00FF88]/60 flex items-center justify-center text-white shadow-lg overflow-hidden">
                  <span className="font-heading font-bold text-2xl text-[#00FF88]">
                    SP
                  </span>
                  <div className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-[#00FF88] border border-[#0B0B0B]" />
                </div>

                <div>
                  <h4 className="text-xl font-bold font-heading text-white">
                    {COMPANY_INFO.founder}
                  </h4>
                  <p className="text-xs font-semibold text-[#00FF88] uppercase tracking-wider mt-0.5">
                    Founder — LEADX AUTOMATION
                  </p>
                </div>
              </div>

              {/* Founder Description */}
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                An aspiring entrepreneur focused on AI automation, business development, and no-code technology. Building practical automation solutions for businesses.
              </p>

              {/* Contact Info Pills */}
              <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626] space-y-2 text-xs">
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <Mail className="w-3.5 h-3.5 text-[#00FF88]" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <Phone className="w-3.5 h-3.5 text-[#00FF88]" />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.formattedPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
