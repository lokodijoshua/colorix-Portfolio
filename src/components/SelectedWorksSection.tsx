import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface SelectedWorksProps {
  onProjectSelect: (project: ProjectItem) => void;
  onContactClick: () => void;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'AURA SPATIAL OS',
    client: 'NEXUS MEDIA LAB',
    category: 'DIGITAL PRODUCT & UI',
    year: '2025',
    aspect: 'SPATIAL COMPUTING INTERFACE',
    summary: 'Next-generation spatial operating system with tactile micro-interactions and audio feedback loops.',
    bgGradient: 'from-zinc-900 via-rose-950 to-black',
  },
  {
    id: 'proj-2',
    title: 'VALENCE KINETIC IDENTITY',
    client: 'VALENCE MOTORWORKS',
    category: 'BRAND IDENTITY & 3D',
    year: '2024',
    aspect: 'LUXURY AUTOMOTIVE DIGITAL EXPERIENCE',
    summary: 'Comprehensive brand redesign, custom generative typography engine, and interactive 3D configurator.',
    bgGradient: 'from-neutral-900 via-zinc-800 to-black',
  },
  {
    id: 'proj-3',
    title: 'MONOLITH SOUND SYSTEM',
    client: 'MONOLITH ACOUSTICS',
    category: 'HARDWARE & INDUSTRIAL DESIGN',
    year: '2025',
    aspect: 'HIGH-END AUDIO PRODUCT',
    summary: 'Physical hardware casing design with companion iOS/Android audiophile interface.',
    bgGradient: 'from-amber-950 via-zinc-900 to-black',
  },
  {
    id: 'proj-4',
    title: 'SYNTHESIS ARCHIVE',
    client: 'MUSEUM OF CONTEMPORARY FORM',
    category: 'EXHIBITION & CURATION',
    year: '2024',
    aspect: 'INTERACTIVE ARCHIVE INSTALLATION',
    summary: 'Digital curation portal documenting 50 years of progressive generative visual art.',
    bgGradient: 'from-red-950 via-black to-zinc-900',
  },
];

export const SelectedWorksSection: React.FC<SelectedWorksProps> = ({
  onProjectSelect,
  onContactClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'BRAND IDENTITY', 'DIGITAL PRODUCT', 'SPATIAL & 3D'];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toUpperCase().includes(activeFilter.replace(' & ', ' ')));

  return (
    <section id="works" className="relative w-full bg-[#0a0a0b] text-white py-20 sm:py-28 border-b border-white/10">
      
      {/* Continuing Architectural Vertical Grid Lines */}
      <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 px-6 sm:px-10 z-0">
        <div className="border-r border-white/[0.05] h-full" />
        <div className="border-r border-white/[0.05] h-full" />
        <div className="border-r border-white/[0.05] h-full" />
        <div className="border-r border-white/[0.05] h-full" />
        <div className="border-r border-white/[0.05] h-full hidden sm:block" />
        <div className="border-r border-white/[0.05] h-full hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3">
              FEATURED PORTFOLIO
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter text-white">
              SELECTED WORKS<span className="text-red-500">.</span>
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-none border transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-zinc-400 border-white/15 hover:border-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Editorial Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className="group cursor-pointer flex flex-col justify-between border border-white/10 hover:border-white/30 transition-all bg-[#111113] p-6 sm:p-8"
            >
              {/* Card Visual Container */}
              <div
                className={`relative w-full h-64 sm:h-80 rounded-lg overflow-hidden bg-gradient-to-br ${project.bgGradient} flex items-center justify-center p-6 border border-white/5 mb-6`}
              >
                {/* Abstract geometric graphics representing high-end portfolio layout */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center">
                      <span className="font-display text-lg text-white">0{idx + 1}</span>
                    </div>
                  </div>
                  <span className="mt-4 text-[10px] tracking-[0.25em] font-mono uppercase text-zinc-400">
                    {project.aspect}
                  </span>
                </div>

                {/* Hover Action Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta & Title */}
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono tracking-wider mb-2">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Client Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">
                <span>CLIENT: {project.client}</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">
                  VIEW CASE STUDY →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA Strip */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 border border-white/10 bg-[#121214] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-white tracking-tight">
              HAVE A PROJECT IN MIND?
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-lg">
              We collaborate with ambitious brands to engineer unforgettable design systems, websites, and visual worlds.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="bg-white text-black font-extrabold uppercase text-xs tracking-[0.2em] px-8 py-4 hover:bg-zinc-200 transition-colors cursor-pointer shrink-0"
          >
            START A PROJECT
          </button>
        </div>

      </div>

    </section>
  );
};
