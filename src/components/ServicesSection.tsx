import React from 'react';
import { Cloud, Globe, Palette, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export const CX_LOGO_URL = 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791974580/photo_5942675931283525412_y-removebg-preview_pm53z5.png';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'cloud-apps',
    title: 'CLOUD APPLICATIONS',
    category: 'INFRASTRUCTURE & BACKEND',
    description: 'Resilient cloud-native software architectures, serverless backends, scalable relational & document databases, and high-availability API gateways designed to scale seamlessly under load.',
    icon: Cloud,
    deliverables: ['Cloud Architecture', 'Serverless Backends', 'Secure REST & GraphQL APIs', 'Database Optimization'],
  },
  {
    id: 'web-apps',
    title: 'WEB APPLICATIONS',
    category: 'FULL-STACK DEVELOPMENT',
    description: 'Bespoke high-performance web applications, dynamic customer portals, administrative dashboards, and SaaS platforms built using modern TypeScript, React, and robust frameworks.',
    icon: Globe,
    deliverables: ['Custom SaaS Systems', 'Interactive Web Portals', 'Real-Time State Engines', 'Performance Engineering'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX DESIGN',
    category: 'PRODUCT & INTERFACE EXPERIENCE',
    description: 'Human-centered user research, intuitive wireframing, high-fidelity interactive prototyping, and comprehensive design systems that turn complex user flows into effortless experiences.',
    icon: Palette,
    deliverables: ['User Research & Wireframing', 'Interactive Prototypes', 'Design Systems & Tokens', 'Cross-Platform UI/UX'],
  },
  {
    id: 'ai-automation',
    title: 'AI AUTOMATION',
    category: 'INTELLIGENT SYSTEMS',
    description: 'Custom AI agent pipelines, automated data workflows, LLM application integration, and automated business workflows that reduce operational friction and boost velocity.',
    icon: Cpu,
    deliverables: ['AI Pipeline Integration', 'Automated Business Workflows', 'Custom Intelligent Agents', 'API & Webhook Automations'],
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick }) => {
  return (
    <section id="services" className="relative w-full bg-[#0a0a0c] text-white py-20 sm:py-28 border-b border-white/10">
      
      {/* Continuing Architectural Vertical Grid Lines */}
      <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 px-4 sm:px-10 z-0">
        <div className="border-r border-white/[0.05] h-full" />
        <div className="border-r border-white/[0.05] h-full" />
        <div className="border-r border-white/[0.05] h-full" />
        <div className="border-r border-white/[0.05] h-full" />
        <div className="border-r border-white/[0.05] h-full hidden sm:block" />
        <div className="border-r border-white/[0.05] h-full hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-10">
        
        {/* Section Header with CX Brand Lockup */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={CX_LOGO_URL}
                alt="CX Service Logo"
                className="h-10 sm:h-12 w-auto object-contain shrink-0"
              />
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-red-400 uppercase">
                CX // DIGITAL ENGINEERING SERVICE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter text-white">
              OUR SERVICES<span className="text-red-500">.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              <strong className="text-white font-semibold">Colorix</strong> is the registered parent organization, with <strong className="text-white font-semibold">CX</strong> serving as the dedicated digital development arm specializing in cloud applications, bespoke web systems, UI/UX design, and AI automation.
            </p>
          </div>
        </div>

        {/* 4-Column / 2-Column Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between border border-white/10 hover:border-white/30 bg-[#111114] p-6 sm:p-7 transition-all duration-300 relative"
              >
                <div>
                  {/* Service Index & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <span className="font-mono text-xs text-zinc-500">0{idx + 1} //</span>
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-wider text-red-400 uppercase block mb-1">
                    {service.category}
                  </span>

                  <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-zinc-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Deliverables Checklist */}
                  <ul className="space-y-2 pt-4 border-t border-white/10 text-xs text-zinc-400 font-sans mb-6">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Service Action Button */}
                  <button
                    onClick={onContactClick}
                    className="w-full py-2.5 px-4 bg-white/5 hover:bg-white hover:text-black text-white text-xs font-mono uppercase tracking-wider border border-white/10 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>INQUIRE SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CX Direct Service Consultation Bar */}
        <div className="mt-14 p-6 sm:p-8 border border-white/10 bg-[#131316] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={CX_LOGO_URL}
              alt="CX Service Seal"
              className="h-12 w-auto object-contain"
            />
            <div>
              <h4 className="font-display text-xl uppercase tracking-tight text-white">
                BUILD WITH CX // POWERED BY COLORIX
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Have a cloud architecture, custom web app, or UI/UX project ready to start? Let’s map out requirements.
              </p>
            </div>
          </div>
          <button
            onClick={onContactClick}
            className="bg-white text-black font-extrabold uppercase text-xs tracking-[0.2em] px-8 py-3.5 hover:bg-zinc-200 transition-colors cursor-pointer shrink-0"
          >
            DISCUSS PROJECT
          </button>
        </div>

      </div>

    </section>
  );
};
