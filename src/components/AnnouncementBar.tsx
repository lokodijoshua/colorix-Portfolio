import React from 'react';

interface AnnouncementBarProps {
  onContactClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onContactClick }) => {
  return (
    <div className="w-full bg-[#0a0a0a] border-b border-white/10 text-white text-[11px] tracking-[0.25em] font-medium py-2 px-4 flex items-center justify-center transition-colors">
      <button
        onClick={onContactClick}
        className="inline-flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-pointer group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="uppercase font-semibold">AVAILABLE 1 PROJECT THIS MONTH</span>
        <span className="text-zinc-500 text-[10px] group-hover:translate-x-0.5 transition-transform">→</span>
      </button>
    </div>
  );
};
