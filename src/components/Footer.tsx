import React from 'react';
import { ArrowUp, Globe, Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  logoUrl?: string;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ logoUrl, onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080809] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10">
        
        {/* Top Footer Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Wordmark & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt="Colorix Submark"
                  className="h-8 sm:h-9 w-auto object-contain shrink-0"
                />
              )}
              <span className="font-display text-4xl sm:text-5xl tracking-tighter text-white uppercase block leading-none">
                COLORIX<span className="text-red-500">.</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed uppercase tracking-wider">
              INDEPENDENT DESIGN & VISUAL DIRECTION STUDIO CREATING DIGITAL PRODUCTS, IDENTITIES, AND EXPERIMENTAL INTERFACES.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
                ● AVAILABILITY: ACCEPTING SELECT COMMISSIONS
              </span>
            </div>
          </div>

          {/* Col 2: Studio Capabilities */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
              CAPABILITIES
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-300 uppercase tracking-wider">
              <li className="hover:text-white transition-colors cursor-default">UI/UX & DIGITAL SYSTEMS</li>
              <li className="hover:text-white transition-colors cursor-default">VISUAL IDENTITY & DIRECTION</li>
              <li className="hover:text-white transition-colors cursor-default">3D GENERATIVE WORLDS</li>
              <li className="hover:text-white transition-colors cursor-default">EXPERIMENTAL PROTOTYPING</li>
              <li className="hover:text-white transition-colors cursor-default">MOTION & INTERACTION</li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Action */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
                GET IN TOUCH
              </h4>
              <p className="text-xs text-zinc-400 mb-3">
                Got a challenge or creative inquiry? We would love to talk through your vision.
              </p>
              <button
                onClick={onContactClick}
                className="bg-white text-black font-extrabold text-xs tracking-[0.2em] px-6 py-3 uppercase hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                CONTACT US
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-zinc-400 pt-4">
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="font-mono text-[11px]">
            © {new Date().getFullYear()} COLORIX STUDIO. ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer font-mono text-[11px] uppercase tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
