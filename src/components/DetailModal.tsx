import React from 'react';
import { X, ExternalLink, ArrowLeft, Globe, Tag } from 'lucide-react';
import { HeroCard, PlaygroundItem, ProjectItem } from '../types';

interface DetailModalProps {
  item: HeroCard | PlaygroundItem | ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose, onContactClick }) => {
  if (!item) return null;

  const isHeroCard = 'type' in item;
  const isPlayground = 'iconType' in item && 'angle' in item;
  const isProject = 'liveUrl' in item && 'thumbnailUrl' in item;

  const project = isProject ? (item as ProjectItem) : null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#101012] text-white max-w-4xl w-full border border-white/20 p-6 sm:p-10 relative shadow-2xl my-auto">
        
        {/* Top Bar with Clear Back Button and Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to home page where you left"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>← BACK TO PORTFOLIO</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors rounded-sm hover:bg-white/10 cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Header: Category & CAPITALIZED TITLE */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>
              {project ? project.category : isHeroCard ? 'HERO STACK SHOWCASE' : 'PLAYGROUND EXPERIMENT'}
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
            {item.title}
          </h2>

          {project && (
            <div className="flex items-center gap-2 mt-2 text-xs font-mono text-zinc-400">
              <Globe className="w-3.5 h-3.5 text-zinc-500" />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white underline underline-offset-4 transition-colors"
              >
                {project.liveUrl}
              </a>
            </div>
          )}
        </div>

        {/* 
          Visual Display Box:
          If project, shows full high-resolution thumbnail screenshot
        */}
        <div className="relative w-full rounded-lg border border-white/15 overflow-hidden bg-zinc-950 mb-6 shadow-2xl">
          {project ? (
            <div className="relative group">
              <img
                src={project.thumbnailUrl}
                alt={`${project.title} High-Resolution Preview`}
                className="w-full h-auto max-h-[460px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40" />

              {/* Overlay Open Button directly on image */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-black font-extrabold uppercase text-xs tracking-wider px-5 py-3 shadow-2xl flex items-center gap-2 hover:bg-zinc-200 transition-colors"
                >
                  <span>LAUNCH LIVE SITE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-zinc-900 via-neutral-900 to-black flex items-center justify-center p-6">
              <div className="text-center space-y-2">
                <span className="font-display text-5xl uppercase tracking-tight text-white">
                  {item.title}
                </span>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  COLORIX CREATIVE STUDIO // EXPERIMENT
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Project Metadata & Engineering Roles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10 mb-6 text-xs font-mono">
          <div>
            <span className="text-zinc-500 block uppercase mb-1">DEVELOPER</span>
            <span className="text-white font-semibold">
              {project?.developer || 'Joshua Maazo Lokodi'}
            </span>
          </div>

          <div>
            <span className="text-zinc-500 block uppercase mb-1">UI DESIGN</span>
            <span className="text-white font-semibold">
              {project?.uiDesigner || 'Sinai J. Bellomy'}
            </span>
          </div>

          <div>
            <span className="text-zinc-500 block uppercase mb-1">CLIENT / SYSTEM</span>
            <span className="text-zinc-300 font-medium truncate block">
              {project ? project.client : 'COLORIX IN-HOUSE'}
            </span>
          </div>

          <div>
            <span className="text-zinc-500 block uppercase mb-1">YEAR & STATUS</span>
            <span className="text-emerald-400 font-semibold">
              {(item as any).year || '2025'} // LIVE
            </span>
          </div>
        </div>

        {/* Summary Description */}
        {project && (
          <div className="mb-6">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {project.summary}
            </p>
            {project.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase bg-white/5 border border-white/10 text-zinc-300"
                  >
                    <Tag className="w-3 h-3 text-red-500" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO HOME PAGE</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial text-center bg-white text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>OPEN LIVE WEBSITE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="flex-1 sm:flex-initial text-center bg-zinc-800 text-white font-extrabold uppercase text-xs tracking-wider px-6 py-3 hover:bg-zinc-700 transition-colors cursor-pointer border border-white/10"
            >
              INQUIRE ABOUT THIS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
