import React, { useState } from 'react';
import { Globe, Facebook, Instagram, Twitter, ArrowDown } from 'lucide-react';
import { HeroCard } from '../types';

interface HeroSectionProps {
  onContactClick: () => void;
  onExploreWorkClick: () => void;
  onCardSelect: (card: HeroCard) => void;
}

const HERO_CARDS: HeroCard[] = [
  {
    id: 'card-1',
    title: 'RED SYNTHESIS',
    tag: 'VISUAL IDENTITY',
    year: '2025',
    bgGradient: 'from-red-600 via-rose-900 to-black',
    accentColor: '#dc2626',
    type: 'portrait_red',
  },
  {
    id: 'card-2',
    title: 'CHROME BUST 01',
    tag: '3D ART DIRECTION',
    year: '2024',
    bgGradient: 'from-zinc-100 via-zinc-400 to-zinc-900',
    accentColor: '#e4e4e7',
    type: 'chrome_bust',
  },
  {
    id: 'card-3',
    title: 'NEON HORIZON',
    tag: 'DIGITAL SCULPTURE',
    year: '2024',
    bgGradient: 'from-amber-600 via-red-900 to-black',
    accentColor: '#ea580c',
    type: 'neon_ring',
  },
  {
    id: 'card-4',
    title: 'ARCHITECTURAL VOID',
    tag: 'SPATIAL EXPERIENCE',
    year: '2025',
    bgGradient: 'from-zinc-800 via-zinc-900 to-black',
    accentColor: '#3f3f46',
    type: 'dark_arch',
  },
  {
    id: 'card-5',
    title: 'CYBER VISOR 2026',
    tag: 'FUTURISTIC BRANDING',
    year: '2026',
    bgGradient: 'from-emerald-950 via-teal-900 to-black',
    accentColor: '#10b981',
    type: 'green_visor',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onExploreWorkClick,
  onCardSelect,
}) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-[#0c0c0d] text-white overflow-hidden border-b border-white/10">
      
      {/* Subtle Architectural Vertical Grid Lines (Matches reference grid) */}
      <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 px-6 sm:px-10 z-0">
        <div className="border-r border-white/[0.06] h-full" />
        <div className="border-r border-white/[0.06] h-full" />
        <div className="border-r border-white/[0.06] h-full" />
        <div className="border-r border-white/[0.06] h-full" />
        <div className="border-r border-white/[0.06] h-full hidden sm:block" />
        <div className="border-r border-white/[0.06] h-full hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 pt-10 sm:pt-14 pb-0 flex flex-col justify-between min-h-[calc(100vh-5rem)]">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Kicker + Huge Headline + Sub-info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Top Kicker */}
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-4 sm:mb-6">
                CREATIVE DESIGN STUDIO
              </p>

              {/* Massive Bold Headline: COLORIX CREATIVE STUDIO */}
              <h1 className="font-display text-white text-[15vw] sm:text-[13vw] lg:text-[7.2rem] xl:text-[8.6rem] uppercase tracking-tighter leading-[0.84] select-none">
                COLORIX
                <br />
                CREATIVE
                <br />
                STUDIO
              </h1>
            </div>

            {/* Left Metadata Block: EST. 2020 / GLOBAL CREATIVE STUDIO / EXPLORE WORK */}
            <div className="mt-8 sm:mt-12 space-y-1.5 text-[11px] sm:text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
              <p>EST. 2020</p>
              <p>GLOBAL CREATIVE STUDIO</p>
              <button
                onClick={onExploreWorkClick}
                className="group inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors cursor-pointer pt-1"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Statement Copy + Stepped Overlapping Card Stack + Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:pl-4">
            
            {/* Top Right Statement Text */}
            <div className="flex justify-start lg:justify-end">
              <p className="text-[11px] sm:text-xs tracking-wider uppercase text-zinc-400 font-medium leading-relaxed max-w-xs">
                WE DESIGN DIGITAL EXPERIENCES THAT HELP BRANDS STAND OUT, CONNECT WITH PEOPLE, AND GROW WITH CONFIDENCE.
              </p>
            </div>

            {/* Stepped Cascading Card Stack (Signature Feature from Reference) */}
            <div className="relative mt-8 sm:mt-10 mb-8 sm:mb-12 h-[340px] sm:h-[400px] w-full max-w-[480px]">
              {HERO_CARDS.map((card, index) => {
                // Diagonal stepped offsets matching the reference staircase layout
                const offsetX = index * 48; // px shifted right
                const offsetY = index * 38; // px shifted down
                const isHovered = activeCardId === card.id;

                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setActiveCardId(card.id)}
                    onMouseLeave={() => setActiveCardId(null)}
                    onClick={() => onCardSelect(card)}
                    style={{
                      transform: `translate3d(${offsetX}px, ${offsetY}px, 0) ${isHovered ? 'scale(1.05) translate3d(0, -8px, 0)' : ''}`,
                      zIndex: index + 1,
                      transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease',
                    }}
                    className={`absolute top-0 left-0 w-32 h-40 sm:w-36 sm:h-48 md:w-40 md:h-52 rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-2xl bg-gradient-to-br ${card.bgGradient} p-2 flex flex-col justify-between group`}
                  >
                    {/* Visual Graphic Artwork Placeholder */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
                      
                      {/* Stylized Visual Representations based on Card Type */}
                      {card.type === 'portrait_red' && (
                        <div className="relative w-full h-full bg-red-600/90 flex items-center justify-center overflow-hidden">
                          {/* Silhouette Portrait with Sunglasses */}
                          <div className="absolute inset-0 bg-radial from-red-500 via-red-800 to-black opacity-90" />
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-20 bg-zinc-950 rounded-t-full relative flex items-center justify-center">
                              {/* Green sunglasses visor */}
                              <div className="w-12 h-3.5 bg-lime-400 rounded-sm shadow-[0_0_12px_#a3e635] mt-1" />
                            </div>
                            <div className="w-24 h-12 bg-zinc-950 rounded-t-2xl -mt-2" />
                          </div>
                        </div>
                      )}

                      {card.type === 'chrome_bust' && (
                        <div className="relative w-full h-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-900 flex items-center justify-center">
                          {/* 3D Chrome Bust silhouette */}
                          <div className="w-16 h-22 rounded-t-full bg-gradient-to-tr from-white via-zinc-300 to-zinc-700 shadow-inner relative flex flex-col items-center justify-center">
                            <div className="w-8 h-2 bg-zinc-900 rounded-full mb-1 opacity-70" />
                            <div className="w-6 h-1 bg-zinc-800 rounded-full opacity-60" />
                          </div>
                        </div>
                      )}

                      {card.type === 'neon_ring' && (
                        <div className="relative w-full h-full bg-gradient-to-b from-red-700 via-rose-950 to-black flex items-center justify-center">
                          {/* Glowing orange/red visor beam */}
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-14 h-18 bg-zinc-950 rounded-t-full relative flex items-center justify-center">
                              <div className="w-14 h-3 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 shadow-[0_0_16px_#f97316] rounded-xs" />
                            </div>
                            <div className="w-20 h-10 bg-zinc-950 rounded-t-xl -mt-1" />
                          </div>
                        </div>
                      )}

                      {card.type === 'dark_arch' && (
                        <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center">
                          {/* Architectural minimal portal */}
                          <div className="w-16 h-24 border-2 border-zinc-700 rounded-t-full bg-zinc-950 shadow-inner flex items-center justify-center">
                            <div className="w-8 h-12 bg-black rounded-t-full border border-zinc-800" />
                          </div>
                        </div>
                      )}

                      {card.type === 'green_visor' && (
                        <div className="relative w-full h-full bg-gradient-to-b from-red-900 via-rose-950 to-black flex items-center justify-center">
                          {/* Neon Lime Visor Cyber Portrait */}
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-20 bg-zinc-950 rounded-t-full relative flex items-center justify-center">
                              <div className="w-12 h-4 bg-lime-400 shadow-[0_0_16px_#a3e635] rounded-xs" />
                            </div>
                            <div className="w-22 h-12 bg-zinc-950 rounded-t-xl -mt-2" />
                          </div>
                        </div>
                      )}

                      {/* Card Overlay Details on Hover */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 text-left">
                        <span className="text-[9px] font-mono tracking-wider text-zinc-300 uppercase">
                          {card.tag}
                        </span>
                        <span className="text-xs font-bold text-white uppercase tracking-tight">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Key Metrics Block (Directly left of bottom card stack as in reference) */}
              <div className="absolute -bottom-6 left-2 sm:left-4 z-20 space-y-3 pointer-events-auto">
                <div className="border-l border-white/20 pl-2 sm:pl-3">
                  <div className="font-display text-lg sm:text-2xl text-white tracking-tight leading-none">
                    40+
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
                    PROJECT DONE
                  </div>
                </div>

                <div className="border-l border-white/20 pl-2 sm:pl-3">
                  <div className="font-display text-lg sm:text-2xl text-white tracking-tight leading-none">
                    12
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
                    GLOBAL CLIENT
                  </div>
                </div>

                <div className="border-l border-white/20 pl-2 sm:pl-3">
                  <div className="font-display text-lg sm:text-2xl text-white tracking-tight leading-none">
                    6
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
                    YEARS OF EXPERIENCE
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Hero Bottom Bar: Statement paragraph + CONTACT US Button + Social Cell Strip */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6">
          
          {/* Bottom Left Paragraph */}
          <p className="text-[11px] sm:text-xs tracking-wider uppercase text-zinc-400 font-medium max-w-md leading-relaxed">
            FROM BRAND STRATEGY TO DIGITAL PRODUCTS, WE CREATE THOUGHTFUL DESIGN SOLUTIONS THAT LEAVE A LASTING IMPRESSION.
          </p>

          {/* Bottom Right: Solid White CONTACT US button + Social Media Strip */}
          <div className="flex items-stretch self-start md:self-auto border border-white/15 divide-x divide-white/15">
            
            {/* CONTACT US Solid White Button */}
            <button
              onClick={onContactClick}
              className="bg-white text-black font-extrabold uppercase text-[11px] sm:text-xs tracking-[0.2em] px-6 sm:px-8 py-3.5 hover:bg-zinc-200 transition-colors cursor-pointer flex items-center justify-center shrink-0"
            >
              CONTACT US
            </button>

            {/* Social Media Cell: Dribbble/Globe */}
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
              title="Dribbble"
              aria-label="Dribbble"
            >
              <Globe className="w-4 h-4" />
            </a>

            {/* Social Media Cell: Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Social Media Cell: X (Twitter) */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
              title="X / Twitter"
              aria-label="X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Social Media Cell: Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};
