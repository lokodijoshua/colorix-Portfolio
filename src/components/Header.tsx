import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Upload } from 'lucide-react';

interface HeaderProps {
  logoUrl?: string;
  onSetLogoUrl?: (url: string) => void;
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ logoUrl, onSetLogoUrl, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoInput, setShowLogoInput] = useState(false);
  const [tempLogoUrl, setTempLogoUrl] = useState('');

  const handleLogoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSetLogoUrl && tempLogoUrl.trim()) {
      onSetLogoUrl(tempLogoUrl.trim());
      setShowLogoInput(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white text-black border-b border-zinc-200">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Left Brand Wordmark & Submark Logo: COLORIX. */}
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center gap-2 sm:gap-2.5 hover:opacity-85 transition-opacity"
            >
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="Colorix Submark"
                  className="h-7 sm:h-9 w-auto object-contain shrink-0"
                />
              ) : null}
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tighter text-black uppercase leading-none">
                COLORIX<span className="text-black">.</span>
              </span>
            </a>
          </div>

          {/* Right Section: Subtitle, Top-Right Logo Section, and Hamburger Menu */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Role subtitle from reference: CREATIVE UI & VISUAL DESIGNER */}
            <span className="hidden md:inline-block text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-800 uppercase">
              CREATIVE UI & VISUAL DESIGNER
            </span>

            {/* TOP-RIGHT LOGO SECTION */}
            <div
              id="top-right-logo-slot"
              className="relative flex items-center justify-center min-w-[36px] sm:min-w-[44px] h-8 sm:h-9"
              title="Colorix Submark Logo"
            >
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="Colorix Submark Logo"
                  className="max-h-7 sm:max-h-8 w-auto object-contain hover:opacity-90 transition-opacity"
                />
              ) : (
                /* Empty Logo Section Container: subtle sleek dashed boundary ready for logo */
                <button
                  type="button"
                  onClick={() => setShowLogoInput(true)}
                  className="group relative flex items-center justify-center px-2.5 py-1 rounded border border-dashed border-zinc-300 hover:border-zinc-500 bg-zinc-50/60 hover:bg-zinc-100 transition-all text-center"
                  aria-label="Empty logo slot - click to paste logo link anytime"
                >
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-700">
                    [LOGO SLOT]
                  </span>
                  <span className="sr-only">Logo container empty</span>
                </button>
              )}
            </div>

            {/* Hamburger Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-1.5 sm:p-2 text-black hover:text-zinc-600 transition-colors focus:outline-none cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Quick Logo URL Input Modal / Popover */}
      {showLogoInput && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-black p-6 rounded-xl max-w-md w-full shadow-2xl border border-zinc-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-zinc-700" />
                <h3 className="font-heading font-bold text-sm tracking-wide uppercase">Top-Right Logo Slot</h3>
              </div>
              <button
                onClick={() => setShowLogoInput(false)}
                className="p-1 hover:bg-zinc-100 rounded text-zinc-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
              The logo slot at the top right is currently empty per your request. Whenever you have the link ready, you can paste it here or in code!
            </p>
            <form onSubmit={handleLogoSubmit} className="space-y-3">
              <input
                type="url"
                value={tempLogoUrl}
                onChange={(e) => setTempLogoUrl(e.target.value)}
                placeholder="https://example.com/colorix-logo.png"
                className="w-full px-3 py-2 text-xs border border-zinc-300 rounded focus:outline-none focus:border-black font-mono"
                autoFocus
              />
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogoInput(false)}
                  className="px-3 py-1.5 text-xs text-zinc-600 hover:text-black font-medium"
                >
                  Keep Empty
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs bg-black text-white font-bold uppercase rounded hover:bg-zinc-800 transition-colors"
                >
                  Apply Logo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Slide-out Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-zinc-950 text-white h-full p-8 sm:p-12 flex flex-col justify-between border-l border-zinc-800">
            
            {/* Drawer Top */}
            <div className="flex items-center justify-between pb-8 border-b border-zinc-900">
              <div className="flex items-center gap-3">
                {logoUrl && (
                  <img
                    src={logoUrl}
                    alt="Colorix Logo"
                    className="h-7 max-w-[120px] object-contain"
                  />
                )}
                <span className="font-display text-2xl tracking-tight uppercase">COLORIX</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="py-8 space-y-6">
              {[
                { label: 'HOME', href: '#top' },
                { label: 'PLAYGROUND', href: '#playground' },
                { label: 'SELECTED WORKS', href: '#works' },
                { label: 'ABOUT STUDIO', href: '#about' },
                { label: 'CONTACT US', href: '#contact', isAction: true },
              ].map((link, idx) => (
                <div key={link.label} className="overflow-hidden">
                  <a
                    href={link.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (link.isAction) onContactClick();
                    }}
                    className="group flex items-center justify-between font-display text-4xl sm:text-5xl text-zinc-400 hover:text-white transition-colors uppercase"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  </a>
                  <p className="text-[10px] font-mono text-zinc-600 tracking-widest mt-1">
                    0{idx + 1} // ARCHITECTURE
                  </p>
                </div>
              ))}
            </nav>

            {/* Drawer Bottom Info */}
            <div className="pt-8 border-t border-zinc-900 text-xs text-zinc-500 space-y-3">
              <div className="flex justify-between items-center text-zinc-400">
                <span>AVAILABILITY</span>
                <span className="text-emerald-400 font-semibold">1 PROJECT THIS MONTH</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span>LOCATION</span>
                <span>GLOBAL / REMOTE STUDIO</span>
              </div>
              <p className="pt-4 text-[11px] text-zinc-600">
                © {new Date().getFullYear()} COLORIX CREATIVE STUDIO. ALL RIGHTS RESERVED.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
