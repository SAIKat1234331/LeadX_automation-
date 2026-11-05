import React from 'react';
import { LxLogo } from './LxLogo';
import { COMPANY_INFO } from '../data/content';
import { Mail, Phone, MapPin, ArrowUp, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onNavigate,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top: top >= 0 ? top : 0, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="relative bg-[#080808] border-t border-[#262626] text-white pt-16 pb-12 overflow-hidden">
      {/* Background cyber grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#262626]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <LxLogo size={42} />
            <p className="text-sm font-semibold text-[#00FF88] italic">
              "{COMPANY_INFO.tagline}"
            </p>
            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-sm">
              Practical AI automation and intelligent workflow solutions for businesses. We design reliable systems that eliminate repetitive tasks and streamline operations.
            </p>
            <div className="pt-2 text-xs text-[#A1A1AA] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00FF88]" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00FF88]" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
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

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Solutions', id: 'solutions' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'About', id: 'about' },
                { name: 'FAQ', id: 'faq' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-[#A1A1AA] hover:text-[#00FF88] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'AI Workflow Automation',
                'WhatsApp Business Automation',
                'AI Lead Generation & CRM',
                'AI Agents & Support',
                'Business Process Automation',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, 'services')}
                    className="text-[#A1A1AA] hover:text-[#00FF88] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Founder & Direct Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Leadership
            </h4>
            <div className="p-3 rounded-lg bg-[#121212] border border-[#262626] text-xs space-y-1.5">
              <p className="font-semibold text-white">{COMPANY_INFO.founder}</p>
              <p className="text-[11px] text-[#00FF88]">Founder — LEADX AUTOMATION</p>
              <p className="text-[11px] text-[#A1A1AA] leading-relaxed pt-1">
                Direct founder oversight on all client workflows and integration architecture.
              </p>
            </div>
            <div className="mt-3">
              <a
                href="https://wa.me/919332699034?text=Hello%20LEADX%20AUTOMATION%2C%20I%20would%20like%20to%20discuss%20an%20automation%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2 px-3 rounded-lg bg-[#171717] border border-[#262626] text-xs font-medium text-white hover:border-[#00FF88]/50 hover:text-[#00FF88] transition-all"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <p>© 2026 {COMPANY_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-[#00FF88]" />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#00FF88]" />
              <span>Terms & Conditions</span>
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#A1A1AA] hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
