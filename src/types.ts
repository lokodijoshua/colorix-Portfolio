export interface PlaygroundItem {
  id: string;
  title: string;
  category: string;
  angle: number; // degrees
  color: string;
  accent: string;
  iconType: 'turntable' | 'cyber' | 'chrome' | 'silhouette' | 'beam' | 'headphones' | 'cube' | 'headset' | 'stairs';
  description: string;
}

export interface HeroCard {
  id: string;
  title: string;
  tag: string;
  year: string;
  bgGradient: string;
  accentColor: string;
  type: 'portrait_red' | 'chrome_bust' | 'neon_ring' | 'dark_arch' | 'green_visor';
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  aspect: string;
  summary: string;
  bgGradient: string;
}
