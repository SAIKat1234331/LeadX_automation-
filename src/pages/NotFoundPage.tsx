import React from 'react';
import { LxLogo } from '../components/LxLogo';
import { ArrowLeft, Home, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onBackToHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00FF88]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 p-8 rounded-2xl bg-[#121212] border border-[#262626] shadow-2xl">
        <div className="flex justify-center mb-6">
          <LxLogo size={48} showText={false} />
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30">
          ERROR 404
        </span>

        <h1 className="text-3xl font-bold font-heading text-white mt-4 mb-2">
          Workflow Not Found
        </h1>

        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-8">
          The automation route you are trying to reach does not exist or has been relocated to another pipeline.
        </p>

        <button
          type="button"
          onClick={onBackToHome}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#00FF88] text-[#0B0B0B] font-bold text-xs sm:text-sm hover:bg-[#00e077] transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
