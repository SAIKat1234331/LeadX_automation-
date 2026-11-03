import React, { useEffect } from 'react';
import { X, CheckCircle, Terminal, Globe, Shield, ExternalLink } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deploy-guide-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden my-auto p-6 sm:p-7 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#262626] pb-4">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-[#00FF88]" />
            <h3 id="deploy-guide-title" className="text-lg font-bold font-heading text-white">
              GitHub + Netlify Deployment Guide
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#202020] transition-colors"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#A1A1AA] max-h-[70vh] overflow-y-auto pr-1">
          <p className="leading-relaxed">
            LEADX AUTOMATION is fully prepared for one-click build and deployment on <span className="text-white font-semibold">Netlify</span> with built-in Netlify Forms support and SPA redirects.
          </p>

          <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626] space-y-2">
            <div className="text-xs font-mono font-semibold text-[#00FF88] uppercase">
              Step 1: Push Code to GitHub
            </div>
            <p className="text-xs text-zinc-300">
              Commit all files to your GitHub repository (e.g. <code className="text-white bg-[#171717] px-1 py-0.5 rounded">leadx-automation</code>).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626] space-y-2">
            <div className="text-xs font-mono font-semibold text-[#00FF88] uppercase">
              Step 2: Connect Repository on Netlify
            </div>
            <p className="text-xs text-zinc-300">
              Log into <strong className="text-white">app.netlify.com</strong> &gt; "Add new site" &gt; "Import an existing project" &gt; select your GitHub repository.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626] space-y-2">
            <div className="text-xs font-mono font-semibold text-[#00FF88] uppercase">
              Step 3: Verify Build Settings (Auto-Configured)
            </div>
            <div className="bg-[#121212] p-2.5 rounded font-mono text-[11px] text-zinc-300 space-y-1">
              <div><span className="text-zinc-500">Build command:</span> <span className="text-[#00FF88]">npm run build</span></div>
              <div><span className="text-zinc-500">Publish directory:</span> <span className="text-[#00FF88]">dist</span></div>
              <div><span className="text-zinc-500">Configuration file:</span> <span className="text-white">netlify.toml</span></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626] space-y-2">
            <div className="text-xs font-mono font-semibold text-[#00FF88] uppercase">
              Step 4: Automatic Netlify Forms Detection
            </div>
            <p className="text-xs text-zinc-300">
              Netlify will automatically detect <code className="text-white bg-[#171717] px-1 py-0.5 rounded">leadx-project-enquiry</code> via the pre-rendered HTML form in <code className="text-white bg-[#171717] px-1 py-0.5 rounded">index.html</code>. Submissions will appear in your Netlify Forms inbox and forward directly to your email.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#00FF88] text-[#0B0B0B] text-xs font-semibold hover:bg-[#00e077] transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
