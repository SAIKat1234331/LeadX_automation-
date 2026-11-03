import React, { useState } from 'react';
import { generateWhatsAppLink } from '../utils/automation';
import { COMPANY_INFO } from '../data/content';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = generateWhatsAppLink(
    COMPANY_INFO.phone,
    COMPANY_INFO.whatsappDefaultMsg
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip bubble on hover */}
      {showTooltip && (
        <div className="mb-2 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] text-xs text-white shadow-xl max-w-[220px] text-right animate-in fade-in slide-in-from-bottom-2 duration-150">
          <p className="font-medium text-[#00FF88]">Direct WhatsApp Chat</p>
          <p className="text-[11px] text-[#A1A1AA] mt-0.5">
            Chat with Founder Saikat Patra (+91 9332699034)
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00FF88]"
        aria-label="Chat with LEADX AUTOMATION on WhatsApp (+91 9332699034)"
      >
        {/* Subtle ripple pulse */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-40" />

        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.3-.3-.4A11.6 11.6 0 1 1 16 27.5zm6.4-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.2-.4.3-.7.1a9.3 9.3 0 0 1-2.7-1.7 10.3 10.3 0 0 1-1.9-2.3c-.2-.4 0-.6.1-.8l.5-.6c.2-.2.2-.4.3-.6a.7.7 0 0 0 0-.7c-.1-.2-.8-2-1.1-2.7s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.4 3.2 7.5 7.5 0 0 0 1.6 4 17.2 17.2 0 0 0 6.6 5.8 22.3 22.3 0 0 0 2.2.8 5.3 5.3 0 0 0 2.4.2 3.9 3.9 0 0 0 2.6-1.8 3.2 3.2 0 0 0 .2-1.8c-.2-.2-.4-.3-.7-.5z" />
        </svg>

        {/* Online Indicator Badge */}
        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#00FF88] border-2 border-[#0B0B0B]" />
      </a>
    </div>
  );
};
