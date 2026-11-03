import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0B0B] border-t border-[#262626]/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our workflow engineering process, tools, and collaboration model.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#151515] border-[#00FF88]/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]'
                    : 'bg-[#121212] border-[#262626] hover:border-[#383838]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#00FF88]">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white font-heading">
                      {item.question}
                    </span>
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 text-[#A1A1AA] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00FF88]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-[#262626]/40 animate-in fade-in duration-150"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
