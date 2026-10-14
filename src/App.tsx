/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PlaygroundSection } from './components/PlaygroundSection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { DetailModal } from './components/DetailModal';
import { HeroCard, PlaygroundItem, ProjectItem } from './types';

export const COLORIX_LOGO_URL = 'https://res.cloudinary.com/dyzlx6pnt/image/upload/v1791934935/COLORIX_Submark_Logo_1_jro3iq.png';

export default function App() {
  // Official Colorix logo provided by user
  const [logoUrl, setLogoUrl] = useState<string>(COLORIX_LOGO_URL);
  
  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HeroCard | PlaygroundItem | ProjectItem | null>(null);

  const handleExploreWork = () => {
    const worksEl = document.getElementById('works') || document.getElementById('playground');
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white flex flex-col">
      {/* 1. Top Announcement Bar ("AVAILABLE 1 PROJECT THIS MONTH") */}
      <AnnouncementBar onContactClick={() => setIsContactOpen(true)} />

      {/* 2. Top Header with brand COLORIX., subtitle, and top-right empty logo container */}
      <Header
        logoUrl={logoUrl}
        onSetLogoUrl={(url) => setLogoUrl(url)}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* 3. Hero Section (Dark Section with giant typography, stepped card stack & metrics) */}
      <main className="flex-1">
        <HeroSection
          onContactClick={() => setIsContactOpen(true)}
          onExploreWorkClick={handleExploreWork}
          onCardSelect={(card) => setSelectedItem(card)}
        />

        {/* 4. Playground Section (White Section with signature curved arc & PLAYGROUND. headline) */}
        <PlaygroundSection
          onContactClick={() => setIsContactOpen(true)}
          onProjectsClick={handleExploreWork}
          onItemSelect={(item) => setSelectedItem(item)}
        />

        {/* 5. Selected Works Section (Project archive with interactive filters) */}
        <SelectedWorksSection
          onProjectSelect={(proj) => setSelectedItem(proj)}
          onContactClick={() => setIsContactOpen(true)}
        />
      </main>

      {/* 6. Editorial Studio Footer */}
      <Footer logoUrl={logoUrl} onContactClick={() => setIsContactOpen(true)} />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Inspect Item Modal */}
      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onContactClick={() => setIsContactOpen(true)}
      />
    </div>
  );
}
