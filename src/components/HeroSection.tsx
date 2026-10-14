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
    title: 'OPENSTUDY',
    tag: 'STUDENT COMMUNITY',
    year: '2025',
    bgGradient: 'from-blue-950 via-zinc-900 to-black',
    accentColor: '#3b82f6',
    imageUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969664/openstudy_img_nlygfj.png',
    type: 'portrait_red',
  },
  {
    id: 'card-2',
    title: 'WAYWARD STATE',
    tag: 'CLOTHING BRAND',
    year: '2025',
    bgGradient: 'from-amber-950 via-zinc-900 to-black',
    accentColor: '#f59e0b',
    imageUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969933/waywardstate_img_eq2duy.png',
    type: 'chrome_bust',
  },
  {
    id: 'card-3',
    title: 'MAHARABI',
    tag: 'MARITIME PORTAL',
    year: '2025',
    bgGradient: 'from-emerald-950 via-zinc-900 to-black',
    accentColor: '#10b981',
    imageUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969599/maharabi_img_zr44gg.png',
    type: 'neon_ring',
  },
  {
    id: 'card-4',
    title: 'ACENOU',
    tag: 'CREATIVE STUDIO',
    year: '2024',
    bgGradient: 'from-zinc-900 via-rose-950 to-black',
    accentColor: '#f43f5e',
    imageUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969806/acenou_img_zwsmhs.png',
    type: 'dark_arch',
  },
  {
    id: 'card-5',
    title: 'VIBEYCURSOR',
    tag: 'INTERACTIVE WEB',
    year: '2025',
    bgGradient: 'from-purple-950 via-zinc-900 to-black',
    accentColor: '#8b5cf6',
    imageUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969612/vibey_img_vxtnnm.png',
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
      <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 px-4 sm:px-10 z-0">
        <div className="border-r border-white/[0.06] h-full" />
        <div className="border-r border-white/[0.06] h-full" />
        <div className="border-r border-white/[0.06] h-full" />
        <div className="border-r border-white/[0.06] h-full" />
        <div className="border-r border-white/[0.06] h-full hidden sm:block" />
        <div className="border-r border-white/[0.06] h-full hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-10 pt-8 sm:pt-14 pb-0 flex flex-col justify-between min-h-[calc(100vh-5rem)]">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Kicker + Huge Headline + Sub-info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Top Kicker */}
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3 sm:mb-6">
                CREATIVE DESIGN STUDIO
              </p>

              {/* Massive Bold Headline: COLORIX CREATIVE STUDIO with mobile protection */}
              <h1 className="font-display text-white text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8.6rem] uppercase tracking-tighter leading-[0.88] select-none break-words">
                COLORIX
                <br />
                CREATIVE
                <br />
                STUDIO
              </h1>
            </div>

            {/* Left Metadata Block: EST. 2020 / GLOBAL CREATIVE STUDIO / EXPLORE WORK */}
            <div className="mt-6 sm:mt-12 space-y-1.5 text-[11px] sm:text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
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
          <div className="lg:col-span-5 flex flex-col justify-between lg:pl-4 overflow-hidden sm:overflow-visible">
            
            {/* Top Right Statement Text */}
            <div className="flex justify-start lg:justify-end">
              <p className="text-[11px] sm:text-xs tracking-wider uppercase text-zinc-400 font-medium leading-relaxed max-w-xs">
                WE DESIGN DIGITAL EXPERIENCES THAT HELP BRANDS STAND OUT, CONNECT WITH PEOPLE, AND GROW WITH CONFIDENCE.
              </p>
            </div>

            {/* Stepped Cascading Card Stack (Reflecting Selected Works Thumbnails) */}
            <div className="relative mt-6 sm:mt-10 mb-4 sm:mb-12 h-[260px] sm:h-[400px] w-full max-w-[480px]">
              {HERO_CARDS.map((card, index) => {
                // Diagonal stepped offsets: responsive scaling for mobile view
                // Desktop: 46px right, 36px down. Mobile: 26px right, 20px down so it stays perfectly inside viewport.
                const isHovered = activeCardId === card.id;

                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setActiveCardId(card.id)}
                    onMouseLeave={() => setActiveCardId(null)}
                    onClick={() => onCardSelect(card)}
                    style={{
                      zIndex: index + 1,
                      transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease',
                    }}
                    className={`absolute top-0 left-0 w-28 h-36 sm:w-36 sm:h-48 md:w-40 md:h-52 rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-2xl bg-gradient-to-br ${card.bgGradient} p-1.5 sm:p-2 flex flex-col justify-between group
                      ${index === 0 ? 'translate-x-0 translate-y-0 sm:translate-x-0 sm:translate-y-0' : ''}
                      ${index === 1 ? 'translate-x-[26px] translate-y-[20px] sm:translate-x-[46px] sm:translate-y-[36px]' : ''}
                      ${index === 2 ? 'translate-x-[52px] translate-y-[40px] sm:translate-x-[92px] sm:translate-y-[72px]' : ''}
                      ${index === 3 ? 'translate-x-[78px] translate-y-[60px] sm:translate-x-[138px] sm:translate-y-[108px]' : ''}
                      ${index === 4 ? 'translate-x-[104px] translate-y-[80px] sm:translate-x-[184px] sm:translate-y-[144px]' : ''}
                      ${isHovered ? 'scale-105 -translate-y-2' : ''}
                    `}
                  >
                    {/* Visual Graphic Artwork: Reflecting Selected Works Thumbnail */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
                      {card.imageUrl ? (
                        <>
                          <img
                            src={card.imageUrl}
                            alt={`${card.title} Selected Work Thumbnail`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="eager"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-zinc-900" />
                      )}

                      {/* Card Overlay Details on Hover */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2 sm:p-2.5 text-left">
                        <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-red-400 uppercase">
                          {card.tag}
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-tight truncate">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Key Metrics Block: Project Done (19), Global Client (4), Experience (5+ years) */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:left-4 z-20 flex sm:block flex-wrap gap-4 sm:gap-0 sm:space-y-3 pointer-events-auto">
                <div className="border-l border-white/20 pl-2 sm:pl-3">
                  <div className="font-display text-xl sm:text-2xl text-white tracking-tight leading-none">
                    19
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
                    PROJECT DONE
                  </div>
                </div>

                <div className="border-l border-white/20 pl-2 sm:pl-3">
                  <div className="font-display text-xl sm:text-2xl text-white tracking-tight leading-none">
                    4
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
                    GLOBAL CLIENT
                  </div>
                </div>

                <div className="border-l border-white/20 pl-2 sm:pl-3">
                  <div className="font-display text-xl sm:text-2xl text-white tracking-tight leading-none">
                    5+
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
        <div className="mt-8 sm:mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6">
          
          {/* Bottom Left Paragraph */}
          <p className="text-[11px] sm:text-xs tracking-wider uppercase text-zinc-400 font-medium max-w-md leading-relaxed">
            FROM BRAND STRATEGY TO DIGITAL PRODUCTS, WE CREATE THOUGHTFUL DESIGN SOLUTIONS THAT LEAVE A LASTING IMPRESSION.
          </p>

          {/* Bottom Right: Solid White CONTACT US button + Social Media Strip */}
          <div className="flex items-stretch w-full sm:w-auto border border-white/15 divide-x divide-white/15">
            
            {/* CONTACT US Solid White Button */}
            <button
              onClick={onContactClick}
              className="flex-1 sm:flex-initial bg-white text-black font-extrabold uppercase text-[11px] sm:text-xs tracking-[0.2em] px-6 sm:px-8 py-3.5 hover:bg-zinc-200 transition-colors cursor-pointer flex items-center justify-center shrink-0"
            >
              CONTACT US
            </button>

            {/* Social Media Cell: Dribbble/Globe */}
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
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
              className="flex-1 sm:w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
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
              className="flex-1 sm:w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
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
              className="flex-1 sm:w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
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
