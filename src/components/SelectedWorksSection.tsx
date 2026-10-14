import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ProjectItem } from '../types';

interface SelectedWorksProps {
  onProjectSelect: (project: ProjectItem) => void;
  onContactClick: () => void;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'OPENSTUDY',
    client: 'STUDENT STUDY COMMUNITY',
    developer: 'Joshua Maazo Lokodi',
    uiDesigner: 'Joseph',
    category: 'STUDENT COMMUNITY & SOCIAL MEDIA',
    year: '2025',
    aspect: 'STUDENT SELF-STUDY & SOCIAL PLATFORM',
    summary: 'A bilingual student community social media and online self-study platform connecting learners with verified university course roadmaps, lecture archives, exams, and collaborative study plans from 160+ world-class institutions.',
    bgGradient: 'from-blue-950 via-zinc-900 to-black',
    thumbnailUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969664/openstudy_img_nlygfj.png',
    liveUrl: 'https://openstudy.site/',
    tags: ['Student Social Media', 'Self-Study Plans', 'Next.js', 'Global Universities'],
  },
  {
    id: 'proj-2',
    title: 'WAYWARD STATE',
    client: 'WAYWARD STATE APPAREL',
    developer: 'Joshua Maazo Lokodi',
    uiDesigner: 'Joseph',
    category: 'BRAND IDENTITY & CLOTHING BRAND',
    year: '2025',
    aspect: 'URBAN TAILORING & ESSENTIAL WARDROBE',
    summary: 'Modern digital storefront and brand identity for Wayward State, an urban clothing brand offering a considered wardrobe of tailoring, outerwear, and streetwear essentials crafted for modern city living with honest pricing.',
    bgGradient: 'from-amber-950 via-zinc-900 to-black',
    thumbnailUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969933/waywardstate_img_eq2duy.png',
    liveUrl: 'https://waywardstate.com',
    tags: ['Clothing Brand', 'Brand Identity', 'E-Commerce Storefront', 'Streetwear'],
  },
  {
    id: 'proj-3',
    title: 'MAHARABI',
    client: 'MAHARABI USS NIGERIA',
    developer: 'Joshua Maazo Lokodi',
    uiDesigner: 'Joseph',
    category: 'UI/UX DESIGN & MARITIME PORTAL',
    year: '2025',
    aspect: 'INDUSTRIAL MARITIME OPERATIONS PLATFORM',
    summary: 'Enterprise UI/UX design and industrial logistics operations portal built for Maharabi USS Nigeria, coordinating marine support operations, vessel fleet tracking, offshore engineering services, and maritime supply chains.',
    bgGradient: 'from-emerald-950 via-zinc-900 to-black',
    thumbnailUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969599/maharabi_img_zr44gg.png',
    liveUrl: 'https://maharabi-uss-nigeria-project.vercel.app/',
    tags: ['UI/UX Design', 'Maritime Portal', 'Offshore Logistics', 'Industrial Web'],
  },
  {
    id: 'proj-4',
    title: 'ACENOU',
    client: 'ACENOU CREATIVE',
    developer: 'Joshua Maazo Lokodi',
    uiDesigner: 'Joseph',
    category: 'CREATIVE STUDIO & UI/UX DESIGN',
    year: '2024',
    aspect: 'CONTEMPORARY DIGITAL SHOWCASE',
    summary: 'Minimalist creative agency showcase emphasizing bold architectural typography, dynamic grid transitions, curated visual monographs, and high-contrast responsive interface design.',
    bgGradient: 'from-zinc-900 via-rose-950 to-black',
    thumbnailUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969806/acenou_img_zwsmhs.png',
    liveUrl: 'https://acenou.vercel.app/',
    tags: ['Agency Showcase', 'Editorial Design', 'UI/UX Design', 'Motion Graphics'],
  },
  {
    id: 'proj-5',
    title: 'VIBEYCURSOR',
    client: 'VIBEY CURSOR LAB',
    developer: 'Joshua Maazo Lokodi',
    uiDesigner: 'Joseph',
    category: 'INTERACTIVE WEB APPLICATION & MOTION',
    year: '2025',
    aspect: 'DYNAMIC CURSOR TRAILS & MICRO-INTERACTIONS',
    summary: 'Interactive web application and motion showcase demonstrating custom aesthetic cursor physics, fluid particle trail animations, real-time visual feedback, and playful web micro-interactions.',
    bgGradient: 'from-purple-950 via-zinc-900 to-black',
    thumbnailUrl: 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791969612/vibey_img_vxtnnm.png',
    liveUrl: 'https://vibey-cursor-landing-page.vercel.app/',
    tags: ['Interactive Web', 'Cursor Animation', 'Motion Physics', 'Micro-interactions'],
  },
];

const ITEMS_PER_PAGE = 4;

export const SelectedWorksSection: React.FC<SelectedWorksProps> = ({
  onProjectSelect,
  onContactClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ['ALL', 'STUDENT COMMUNITY', 'CLOTHING BRAND', 'UI/UX DESIGN', 'INTERACTIVE WEB'];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeFilter === 'STUDENT COMMUNITY') return p.category.includes('STUDENT COMMUNITY');
        if (activeFilter === 'CLOTHING BRAND') return p.category.includes('CLOTHING BRAND');
        if (activeFilter === 'UI/UX DESIGN') return p.category.includes('UI/UX DESIGN');
        if (activeFilter === 'INTERACTIVE WEB') return p.category.includes('INTERACTIVE WEB');
        return true;
      });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                FEATURED PORTFOLIO // SELECTED WORKS
              </p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter text-white">
              SELECTED WORKS<span className="text-red-500">.</span>
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
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
          {currentProjects.map((project, idx) => {
            const globalIndex = startIndex + idx + 1;
            return (
              <div
                key={project.id}
                className="group cursor-pointer flex flex-col justify-between border border-white/10 hover:border-white/35 transition-all bg-[#111113] p-6 sm:p-8 relative"
              >
                {/* Card Visual / Thumbnail Container */}
                <div
                  onClick={() => onProjectSelect(project)}
                  className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden bg-zinc-950 flex items-center justify-center border border-white/10 mb-6 group-hover:border-white/30 transition-all cursor-pointer shadow-xl"
                >
                  {/* Thumbnail Image */}
                  <img
                    src={project.thumbnailUrl}
                    alt={`${project.title} Preview Thumbnail`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Measured Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Project Index Badge */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/70 backdrop-blur-xs border border-white/15 text-[11px] font-mono text-zinc-300">
                    0{globalIndex} // {project.year}
                  </div>

                  {/* Center Floating Open Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                    <div className="px-4 py-2 bg-white text-black font-extrabold uppercase text-xs tracking-wider flex items-center gap-2 shadow-2xl">
                      <Eye className="w-4 h-4" />
                      <span>INSPECT PROJECT</span>
                    </div>
                  </div>

                  {/* Top Right Arrow Indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Card Meta & Title */}
                <div onClick={() => onProjectSelect(project)} className="cursor-pointer">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono tracking-wider mb-2">
                    <span className="text-red-400 font-semibold">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* NAME IN ALL CAPITAL LETTERS */}
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Links: Developer / UI Designer / Direct Launch URL */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-semibold tracking-widest uppercase gap-2">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <span>DEV: <strong className="text-zinc-200 font-medium">{project.developer}</strong></span>
                    {project.uiDesigner && (
                      <>
                        <span className="text-zinc-600">·</span>
                        <span>UI: <strong className="text-zinc-200 font-medium">{project.uiDesigner}</strong></span>
                      </>
                    )}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-white hover:text-red-400 transition-colors cursor-pointer group/link"
                    title={`Visit ${project.title} live at ${project.liveUrl}`}
                  >
                    <span>VISIT SITE</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
          PAGINATION BAR
          Allows switching between Page 1 (projects 1-4) and Page 2 (project 5)
        */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Pagination count indicator */}
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              SHOWING {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} OF {filteredProjects.length} PROJECTS
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              {/* Previous Page Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider border flex items-center gap-1 transition-all ${
                  currentPage === 1
                    ? 'border-white/10 text-zinc-600 cursor-not-allowed'
                    : 'border-white/20 text-white hover:bg-white hover:text-black cursor-pointer'
                }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>PREV</span>
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                    currentPage === page
                      ? 'bg-white text-black border-white font-bold'
                      : 'border-white/20 text-zinc-400 hover:text-white hover:border-white/50'
                  }`}
                  aria-label={`Go to page ${page}`}
                >
                  0{page}
                </button>
              ))}

              {/* Next Page Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider border flex items-center gap-1 transition-all ${
                  currentPage === totalPages
                    ? 'border-white/10 text-zinc-600 cursor-not-allowed'
                    : 'border-white/20 text-white hover:bg-white hover:text-black cursor-pointer'
                }`}
                aria-label="Next Page"
              >
                <span>NEXT</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

        {/* Section Bottom Action Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 border border-white/10 bg-[#121214] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-white tracking-tight">
              HAVE A NEW PROJECT IN MIND?
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-lg">
              We collaborate with forward-thinking teams to engineer distinctive web applications, cloud systems, and AI automation.
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
