import React from 'react';
import { motion } from 'framer-motion';

export default function HeroOverlay() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pointer-events-none">
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl mb-6 text-glow">
            Experience the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 drop-shadow-none">
              Essence of Purity
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 tracking-wide drop-shadow-lg">
            Sourced from untouched ancient glaciers. Naturally rich in minerals. Crafted by nature.
          </p>
          
          <div className="flex items-center justify-center gap-6 pointer-events-auto">
            <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold hover:scale-105 hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Explore Range
            </button>
            <button className="px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-xs uppercase tracking-widest text-white/70">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
