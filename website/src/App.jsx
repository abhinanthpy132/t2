import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainScene from './components/3d/MainScene';
import HeroOverlay from './components/ui/HeroOverlay';
import StoryPanel from './components/ui/StoryPanel';
import SourceSection from './components/ui/SourceSection';
import ProductCarousel from './components/ui/ProductCarousel';
import SustainabilityBadge from './components/ui/SustainabilityBadge';

export default function App() {
  return (
    <div className="relative w-full h-screen">
      {/* 3D Background - Fixed Position */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white">Loading Experience...</div>}>
          <MainScene />
        </Suspense>
      </div>

      {/* Scrollable HTML Overlay */}
      <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden" id="scroll-container">
        
        {/* Navigation / Floating Menu */}
        <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 glass-panel p-4 rounded-full">
          <div className="w-3 h-3 rounded-full bg-cyan-400 hover:scale-150 transition-transform cursor-pointer shadow-[0_0_10px_#22d3ee]"></div>
          <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white hover:scale-150 transition-all cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white hover:scale-150 transition-all cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white hover:scale-150 transition-all cursor-pointer"></div>
        </nav>

        <Routes>
          <Route path="/" element={
            <main>
              <HeroOverlay />
              <StoryPanel />
              <SourceSection />
              <ProductCarousel />
              <SustainabilityBadge />
              
              {/* Footer Space */}
              <footer className="h-40 flex items-center justify-center border-t border-white/10 mt-32 glass-panel m-4 rounded-2xl">
                <p className="text-white/50 font-light text-sm tracking-widest uppercase">© 2026 Essence. All rights reserved.</p>
              </footer>
            </main>
          } />
        </Routes>
      </div>
    </div>
  );
}
