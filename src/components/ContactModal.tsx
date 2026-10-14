import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Full Design System & Website');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 2.5 seconds
      // keep state clean
    }, 2500);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#121214] text-white max-w-lg w-full p-8 border border-white/15 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-6 right-6 p-1 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
            <h3 className="font-display text-2xl uppercase tracking-tight text-white">
              INQUIRY RECEIVED
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm">
              Thank you for reaching out to Colorix. We have received your inquiry and will respond within 24 hours.
            </p>
            <button
              onClick={resetForm}
              className="mt-4 bg-white text-black font-extrabold text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-zinc-200 transition-colors"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                COMMISSION / COLLABORATION
              </span>
              <h3 className="font-display text-3xl uppercase tracking-tight text-white mt-1">
                CONTACT COLORIX<span className="text-red-500">.</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Currently booking 1 new project for this month. Tell us about your vision.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Sterling"
                  className="w-full bg-[#1c1c1f] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-[#1c1c1f] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Project Scope
                </label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-[#1c1c1f] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option value="Full Design System & Website">Full Design System & Website</option>
                  <option value="Visual Identity & Branding">Visual Identity & Branding</option>
                  <option value="3D Art Direction & Spatial">3D Art Direction & Spatial</option>
                  <option value="Experimental Interactive Project">Experimental Interactive Project</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Message / Brief
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a short summary of goals, timeline, and key milestones..."
                  className="w-full bg-[#1c1c1f] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500">
                  CONFIDENTIAL INQUIRY
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-white text-black font-extrabold uppercase text-xs tracking-wider px-6 py-3 hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <span>SEND INQUIRY</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
