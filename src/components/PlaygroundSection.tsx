import React, { useState } from 'react';
import { PlaygroundItem } from '../types';

interface PlaygroundSectionProps {
  onContactClick: () => void;
  onItemSelect: (item: PlaygroundItem) => void;
}

const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  {
    id: 'item-1',
    title: 'VINYL DECK 01',
    category: 'AUDIO HARDWARE',
    angle: -164,
    color: '#d62828',
    accent: '#ef4444',
    iconType: 'turntable',
    description: 'Analog sound visualization with custom mechanical turntable mechanics.',
  },
  {
    id: 'item-2',
    title: 'CYBER FIGURE 02',
    category: '3D SCULPTURE',
    angle: -142,
    color: '#3a0ca3',
    accent: '#f72585',
    iconType: 'cyber',
    description: 'Exploration of cybernetic textures and specular highlights in real-time shaders.',
  },
  {
    id: 'item-3',
    title: 'CHROME CYLINDER 03',
    category: 'MINIMAL OBJECT',
    angle: -122,
    color: '#71717a',
    accent: '#e4e4e7',
    iconType: 'chrome',
    description: 'Brutalist metal material study with dynamic environment reflections.',
  },
  {
    id: 'item-4',
    title: 'RED SILHOUETTE 04',
    category: 'GENERATIVE PORTRAIT',
    angle: -102,
    color: '#e63946',
    accent: '#ff0054',
    iconType: 'silhouette',
    description: 'High-contrast duotone profile study capturing negative space.',
  },
  {
    id: 'item-5',
    title: 'BEAM OF LIGHT 05',
    category: 'ATMOSPHERIC PARTICLES',
    angle: -84,
    color: '#dc2626',
    accent: '#f87171',
    iconType: 'beam',
    description: 'Volumetric red laser array simulation and concert stage aesthetics.',
  },
  {
    id: 'item-6',
    title: 'HEADPHONES SHADOW 06',
    category: 'AUDIO EXPERIENCE',
    angle: -64,
    color: '#ea580c',
    accent: '#fb923c',
    iconType: 'headphones',
    description: 'Acoustic spatial form exploration on vibrant neon orange fields.',
  },
  {
    id: 'item-7',
    title: 'CRIMSON MONOLITH 07',
    category: 'SPATIAL ARCHITECTURE',
    angle: -44,
    color: '#991b1b',
    accent: '#b91c1c',
    iconType: 'cube',
    description: 'Architectural geometry experiment with angled light wells.',
  },
  {
    id: 'item-8',
    title: 'AMBER PROFILE 08',
    category: 'HUMAN INTERACTION',
    angle: -24,
    color: '#d97706',
    accent: '#f59e0b',
    iconType: 'headset',
    description: 'Wearable tech silhouettes framed against warm cadmium sunset backdrops.',
  },
  {
    id: 'item-9',
    title: 'ISOMETRIC STAIRS 09',
    category: 'DIMENSIONAL FORM',
    angle: -4,
    color: '#b45309',
    accent: '#fbbf24',
    iconType: 'stairs',
    description: 'Parametric stepped architectural volumes with multi-tone shadow planes.',
  },
];

export const PlaygroundSection: React.FC<PlaygroundSectionProps> = ({
  onContactClick,
  onItemSelect,
}) => {
  const [hoveredItem, setHoveredItem] = useState<PlaygroundItem | null>(null);

  // Render stylized SVG/CSS art inside each tile matching the reference
  const renderTileGraphic = (item: PlaygroundItem) => {
    switch (item.iconType) {
      case 'turntable':
        return (
          <div className="w-full h-full bg-[#cc1f1a] relative flex items-center justify-center p-2 overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center shadow-md">
              <div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-600" />
            </div>
            {/* Turntable arm */}
            <div className="absolute right-2 bottom-3 w-8 h-1.5 bg-zinc-300 -rotate-45 origin-right rounded-full shadow" />
          </div>
        );

      case 'cyber':
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-purple-900 to-rose-900 flex items-center justify-center p-2">
            <div className="w-10 h-14 rounded-full bg-gradient-to-t from-black via-blue-600 to-rose-500 opacity-90 shadow-inner" />
          </div>
        );

      case 'chrome':
        return (
          <div className="w-full h-full bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-200 flex items-center justify-center p-2">
            <div className="w-6 h-14 rounded-lg bg-gradient-to-r from-zinc-800 via-white to-zinc-600 shadow-md transform rotate-12" />
          </div>
        );

      case 'silhouette':
        return (
          <div className="w-full h-full bg-[#e63946] flex items-center justify-center p-2 relative overflow-hidden">
            <div className="w-12 h-14 bg-zinc-950 rounded-t-full relative">
              <div className="w-14 h-6 bg-zinc-950 rounded-t-lg -bottom-2 -left-1 absolute" />
            </div>
          </div>
        );

      case 'beam':
        return (
          <div className="w-full h-full bg-[#b91c1c] flex items-center justify-center p-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-red-400 to-transparent opacity-60" />
            {/* Vertical particle beam lines */}
            <div className="flex gap-1 h-full items-end pb-1">
              <div className="w-1 h-14 bg-white/80 rounded-full" />
              <div className="w-1.5 h-16 bg-white rounded-full shadow-[0_0_8px_white]" />
              <div className="w-1 h-12 bg-white/70 rounded-full" />
            </div>
          </div>
        );

      case 'headphones':
        return (
          <div className="w-full h-full bg-[#f97316] flex items-center justify-center p-2 relative overflow-hidden">
            <div className="w-11 h-13 bg-zinc-950 rounded-t-full relative flex items-center justify-center">
              <div className="w-14 h-4 bg-zinc-900 absolute top-4 rounded-full" />
            </div>
          </div>
        );

      case 'cube':
        return (
          <div className="w-full h-full bg-[#991b1b] flex items-center justify-center p-2">
            <div className="w-10 h-10 bg-zinc-950 rounded-md transform rotate-45 shadow-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-zinc-800 rounded-sm" />
            </div>
          </div>
        );

      case 'headset':
        return (
          <div className="w-full h-full bg-[#ea580c] flex items-center justify-center p-2 relative overflow-hidden">
            <div className="w-10 h-14 bg-zinc-950 rounded-t-full relative flex items-center justify-center">
              <div className="w-8 h-2 bg-zinc-800 rounded-xs mt-2" />
            </div>
          </div>
        );

      case 'stairs':
        return (
          <div className="w-full h-full bg-[#d97706] flex items-center justify-center p-2">
            <div className="flex flex-col gap-0.5 items-end">
              <div className="w-4 h-2.5 bg-zinc-100 rounded-xs" />
              <div className="w-7 h-2.5 bg-zinc-200 rounded-xs" />
              <div className="w-10 h-2.5 bg-zinc-300 rounded-xs" />
              <div className="w-12 h-2.5 bg-rose-800 rounded-xs" />
            </div>
          </div>
        );

      default:
        return <div className="w-full h-full bg-zinc-800" />;
    }
  };

  return (
    <section id="playground" className="relative w-full bg-white text-black py-16 sm:py-24 overflow-hidden border-b border-zinc-200">
      
      {/* Continuing Architectural Vertical Grid Lines on White Background */}
      <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 px-6 sm:px-10 z-0">
        <div className="border-r border-zinc-200/70 h-full" />
        <div className="border-r border-zinc-200/70 h-full" />
        <div className="border-r border-zinc-200/70 h-full" />
        <div className="border-r border-zinc-200/70 h-full" />
        <div className="border-r border-zinc-200/70 h-full hidden sm:block" />
        <div className="border-r border-zinc-200/70 h-full hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10">
        
        {/* Top Split Statement Paragraphs */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-12 sm:mb-16">
          <p className="text-[11px] sm:text-xs tracking-wider uppercase text-zinc-600 font-medium max-w-sm leading-relaxed">
            ENGAGING IN CREATIVE EXPERIMENTS AND EXPLORING INNOVATIVE CONCEPTS THAT TRULY PUSH THE BOUNDARIES OF OUR CRAFT.
          </p>
          <p className="text-[11px] sm:text-xs tracking-wider uppercase text-zinc-600 font-medium max-w-xs leading-relaxed text-left md:text-right">
            AN EXPERTLY CURATED COLLECTION SHOWCASING A DIVERSE RANGE OF EXPERIMENTAL VISUALS, INNOVATIVE.
          </p>
        </div>

        {/* 
          THE PLAYGROUND ARCH (Centerpiece)
          A sweeping curved semi-circle of tiles wrapping above the PLAYGROUND title
        */}
        <div className="relative w-full flex flex-col items-center justify-center pt-8 pb-12 select-none">
          
          {/* Desktop/Tablet Arc Container */}
          <div className="relative w-full max-w-[960px] h-[340px] sm:h-[460px] md:h-[520px] lg:h-[580px] flex items-center justify-center">
            
            {/* Render the 9 tiles along the semi-circular arc */}
            {PLAYGROUND_ITEMS.map((item) => {
              // Convert angle to radians
              const rad = (item.angle * Math.PI) / 180;
              
              // Responsive radius calculations based on CSS variables or percentages
              // Center point is located at bottom-center of the arc box
              const tangentRotation = item.angle + 90;

              return (
                <div
                  key={item.id}
                  onClick={() => onItemSelect(item)}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    // Position dynamically using polar coordinates
                    position: 'absolute',
                    left: '50%',
                    top: '82%',
                    // Apply translation based on polar radius
                    transform: `translate(-50%, -50%) translate3d(calc(${Math.cos(rad)} * min(390px, 42vw)), calc(${Math.sin(rad)} * min(330px, 35vw)), 0) rotate(${tangentRotation}deg)`,
                    transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), z-index 100ms',
                    zIndex: hoveredItem?.id === item.id ? 30 : 10,
                  }}
                  className="cursor-pointer group"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-black/10 transition-all duration-300 group-hover:scale-115 group-hover:shadow-2xl group-hover:border-black/30`}
                  >
                    {renderTileGraphic(item)}
                  </div>

                  {/* Active Tooltip Indicator */}
                  {hoveredItem?.id === item.id && (
                    <div
                      style={{ transform: `rotate(${-tangentRotation}deg)` }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded text-[10px] tracking-widest font-mono uppercase whitespace-nowrap shadow-xl pointer-events-none z-40"
                    >
                      {item.title}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Corner Decorative Peeks (as seen in the bottom left/right of reference) */}
            <div className="absolute -bottom-6 left-2 sm:left-12 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl overflow-hidden opacity-40 shadow-sm border border-zinc-200 hidden sm:block">
              <div className="w-full h-full bg-gradient-to-tr from-rose-900 to-amber-700 p-2 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/40" />
              </div>
            </div>

            <div className="absolute -bottom-6 right-2 sm:right-12 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl overflow-hidden opacity-40 shadow-sm border border-zinc-200 hidden sm:block">
              <div className="w-full h-full bg-gradient-to-tr from-amber-700 to-rose-900 p-2 flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-black/40" />
              </div>
            </div>

            {/* 
              Inside Center Content:
              PLAYGROUND. Headline + Subtitle + CONTACT US Button
            */}
            <div className="absolute top-[68%] sm:top-[66%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-xl px-4 z-20 flex flex-col items-center">
              
              {/* Massive Bold Headline: PLAYGROUND. */}
              <h2 className="font-display text-black text-5xl sm:text-6xl md:text-7xl lg:text-[6.8rem] tracking-tight leading-none uppercase">
                PLAYGROUND<span className="text-black">.</span>
              </h2>

              {/* Subtext Paragraph */}
              <p className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] md:text-xs tracking-wider uppercase text-zinc-500 font-semibold max-w-sm sm:max-w-md leading-relaxed">
                WHERE IDEAS TAKE SHAPE. A SPACE FOR EXPLORING VISUAL DIRECTIONS, EMERGING TOOLS, AND CREATIVE EXPERIMENTS.
              </p>

              {/* Centered CONTACT US Button */}
              <button
                onClick={onContactClick}
                className="mt-5 sm:mt-6 bg-black text-white font-extrabold uppercase text-[11px] sm:text-xs tracking-[0.2em] px-8 py-3.5 hover:bg-zinc-800 transition-colors shadow-md cursor-pointer"
              >
                CONTACT US
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
