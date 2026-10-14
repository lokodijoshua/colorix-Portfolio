import React from 'react';
import { X, Sparkles, ExternalLink } from 'lucide-react';
import { HeroCard, PlaygroundItem, ProjectItem } from '../types';

interface DetailModalProps {
  item: HeroCard | PlaygroundItem | ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose, onContactClick }) => {
  if (!item) return null;

  const isHeroCard = 'bgGradient' in item && 'type' in item;
  const isPlayground = 'iconType' in item && 'angle' in item;
  const isProject = 'client' in item && 'aspect' in item;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#111113] text-white max-w-2xl w-full border border-white/20 p-6 sm:p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>
              {isHeroCard ? 'HERO STACK SHOWCASE' : isPlayground ? 'PLAYGROUND EXPERIMENT' : 'CASE STUDY PREVIEW'}
            </span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white mt-1">
            {item.title}
          </h3>
        </div>

        {/* Modal Visual Block */}
        <div className="relative w-full h-56 sm:h-72 rounded-xl border border-white/10 overflow-hidden bg-gradient-to-br from-zinc-900 via-neutral-900 to-black flex items-center justify-center p-6 mb-6">
          <div className="text-center space-y-2">
            <span className="font-display text-4xl sm:text-5xl text-white/90 uppercase tracking-tight">
              {item.title}
            </span>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              COLORIX DESIGN ARCHIVE // SPECIFICATION
            </p>
          </div>
        </div>

        {/* Details List */}
        <div className="grid grid-cols-2 gap-4 text-xs font-mono py-4 border-y border-white/10 mb-6">
          <div>
            <span className="text-zinc-500 block">CATEGORY / MEDIUM</span>
            <span className="text-zinc-200 font-semibold uppercase">
              {isHeroCard ? (item as HeroCard).tag : isPlayground ? (item as PlaygroundItem).category : (item as ProjectItem).category}
            </span>
          </div>
          <div>
            <span className="text-zinc-500 block">STUDIO METRIC</span>
            <span className="text-zinc-200 font-semibold uppercase">
              {isProject ? (item as ProjectItem).client : 'EXPERIMENTAL DIRECTION'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-zinc-400 hover:text-white uppercase font-mono tracking-wider"
          >
            ← BACK TO VIEW
          </button>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="bg-white text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3 hover:bg-zinc-200 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>DISCUSS THIS DIRECTION</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
