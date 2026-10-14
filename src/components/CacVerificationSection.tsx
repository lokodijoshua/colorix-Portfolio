import React, { useState } from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, X, ExternalLink, Award, Eye, ZoomIn } from 'lucide-react';
import { CX_LOGO_URL } from './ServicesSection';

interface CacVerificationSectionProps {
  onContactClick: () => void;
}

export const COLORIX_SUBMARK_URL = 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791934935/COLORIX_Submark_Logo_1_jro3iq.png';
export const CAC_CERTIFICATE_IMAGE_URL = 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791975357/photo_5943046037205356443_y_yy3oos.jpg';

export const CacVerificationSection: React.FC<CacVerificationSectionProps> = ({ onContactClick }) => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  return (
    <>
      <section id="compliance" className="relative w-full bg-[#0d0d10] text-white py-16 sm:py-24 border-b border-white/10">
        
        {/* Subtle Continuing Vertical Grid Lines */}
        <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 px-4 sm:px-10 z-0">
          <div className="border-r border-white/[0.04] h-full" />
          <div className="border-r border-white/[0.04] h-full" />
          <div className="border-r border-white/[0.04] h-full" />
          <div className="border-r border-white/[0.04] h-full" />
          <div className="border-r border-white/[0.04] h-full hidden sm:block" />
          <div className="border-r border-white/[0.04] h-full hidden sm:block" />
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-10">
          
          <div className="border border-white/15 bg-gradient-to-br from-[#121217] via-[#0f0f13] to-black p-6 sm:p-12 relative overflow-hidden shadow-2xl">
            
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: CAC Trust & Registration Details */}
              <div className="lg:col-span-8 space-y-4">
                
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest rounded-none">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>CORPORATE AFFAIRS COMMISSION // CAC CERTIFIED</span>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                    ● OFFICIAL LEGAL ENTITY
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                  REGISTERED & VERIFIED UNDER CAC<span className="text-emerald-400">.</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed font-sans">
                  <strong className="text-white font-semibold">Colorix</strong> is a fully accredited legal organization officially registered with the <strong className="text-white font-semibold">Corporate Affairs Commission (CAC)</strong>. Our digital engineering wing <strong className="text-white font-semibold">CX</strong> operates in full compliance with corporate governance, ensuring complete security and verified accountability for all enterprise client contracts and institutional engagements.
                </p>

                {/* Key Legal Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-zinc-500 block uppercase mb-1">REGISTERED ENTITY</span>
                    <span className="text-white font-semibold">COLORIX STUDIO</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block uppercase mb-1">TECHNICAL SERVICE</span>
                    <span className="text-white font-semibold">CX ENGINEERING</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block uppercase mb-1">REGISTRATION BODY</span>
                    <span className="text-emerald-400 font-semibold">CAC NIGERIA</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block uppercase mb-1">CURRENT STATUS</span>
                    <span className="text-emerald-400 font-semibold">● ACTIVE & VERIFIED</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Certificate Preview & Action Button */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-black/60 border border-white/10 rounded-xl text-center space-y-4">
                
                {/* Certificate Preview Thumbnail Card */}
                <div
                  onClick={() => setIsCertificateOpen(true)}
                  className="relative w-full max-w-[220px] aspect-[3/4] rounded-lg overflow-hidden border border-emerald-500/30 group cursor-pointer shadow-2xl bg-zinc-950"
                  title="Click to view full CAC Certificate"
                >
                  <img
                    src={CAC_CERTIFICATE_IMAGE_URL}
                    alt="CAC Certificate of Registration"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Floating inspect indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="px-3 py-1.5 bg-emerald-500 text-black font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-xl">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>INSPECT</span>
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-xs border border-white/10 text-[9px] font-mono text-emerald-400 uppercase text-center truncate">
                    CAC CERTIFIED DOCUMENT
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>AUTHENTICATED BUSINESS</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    Federal Republic of Nigeria
                  </p>
                </div>

                {/* VISUAL CERTIFICATE BUTTON (Opens Certificate Viewer) */}
                <button
                  type="button"
                  onClick={() => setIsCertificateOpen(true)}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold uppercase text-xs tracking-wider py-3.5 px-4 shadow-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>VIEW CAC CERTIFICATE</span>
                </button>

                <p className="text-[10px] text-zinc-500 font-mono">
                  Official Corporate Affairs Commission certification
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CAC CERTIFICATE MODAL VIEWER */}
      {isCertificateOpen && (
        <div className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#0e0e12] text-white max-w-3xl w-full border border-emerald-500/40 p-5 sm:p-8 relative shadow-2xl my-auto">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setIsCertificateOpen(false)}
              className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-sm hover:bg-white/10"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header */}
            <div className="text-center pb-5 border-b border-white/10 space-y-1.5">
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-[0.2em]">
                <Award className="w-4 h-4" />
                <span>FEDERAL REPUBLIC OF NIGERIA</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                CORPORATE AFFAIRS COMMISSION
              </h3>
              
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                OFFICIAL CERTIFICATE OF REGISTRATION & INCORPORATION
              </p>
            </div>

            {/* Visual Certificate Body: Displaying the Actual CAC Certificate Image */}
            <div className="my-5 p-2 sm:p-4 bg-black/80 border border-emerald-500/30 rounded-lg flex flex-col items-center justify-center">
              
              <div className="relative max-h-[60vh] sm:max-h-[68vh] overflow-auto rounded border border-white/15 shadow-2xl">
                <img
                  src={CAC_CERTIFICATE_IMAGE_URL}
                  alt="Official CAC Certificate - Colorix Creative Studio"
                  className="w-full h-auto max-h-[65vh] object-contain rounded"
                />
              </div>

              {/* Status and Direct Fullscreen Link */}
              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-3 border-t border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>CAC CERTIFIED // AUTHENTICATED CORPORATE ENTITY</span>
                </div>

                <a
                  href={CAC_CERTIFICATE_IMAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white underline underline-offset-4"
                >
                  <span>OPEN FULL-RESOLUTION IMAGE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() => setIsCertificateOpen(false)}
                className="text-xs font-mono uppercase text-zinc-400 hover:text-white cursor-pointer"
              >
                ← CLOSE CERTIFICATE
              </button>

              <button
                onClick={() => {
                  setIsCertificateOpen(false);
                  onContactClick();
                }}
                className="w-full sm:w-auto bg-white text-black font-extrabold uppercase text-xs tracking-wider px-6 py-2.5 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>COMMISSION A PROJECT</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
