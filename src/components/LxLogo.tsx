import React from 'react';

interface LxLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const LxLogo: React.FC<LxLogoProps> = ({
  size = 36,
  showText = true,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Geometric LX Monogram Icon */}
      <div
        className="relative flex items-center justify-center rounded-xl bg-[#121212] border border-[#262626] transition-all duration-300 hover:border-[#00FF88]/60 group"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 64 64"
          width={Math.round(size * 0.72)}
          height={Math.round(size * 0.72)}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* L Monogram Segment */}
          <path
            d="M16 16 V46 H32"
            stroke="#00FF88"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* X Monogram Diagonal Segment 1 */}
          <path
            d="M34 20 L50 44"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* X Monogram Diagonal Segment 2 */}
          <path
            d="M50 20 L34 44"
            stroke="#00FF88"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Futuristic Node Accent Dot */}
          <circle cx="50" cy="20" r="2.8" fill="#00FF88" />
        </svg>

        {/* Ambient subtle green corner indicator */}
        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#00FF88] opacity-75 animate-ping" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-white">
              LEAD<span className="text-[#00FF88]">X</span>
            </span>
            <span className="text-[10px] tracking-widest font-semibold text-[#A1A1AA] uppercase border-l border-[#262626] pl-1.5">
              AUTO
            </span>
          </div>
          <span className="text-[9px] tracking-[0.22em] text-[#A1A1AA] font-medium uppercase mt-0.5">
            AUTOMATION
          </span>
        </div>
      )}
    </div>
  );
};
