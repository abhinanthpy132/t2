import React from 'react';
import { motion } from 'framer-motion';

export default function SustainabilityBadge() {
  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center text-center px-4 pointer-events-none mb-20">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="w-32 h-32 mb-10 relative pointer-events-auto"
      >
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-2 rounded-full border border-emerald-400/50 animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute inset-4 rounded-full bg-emerald-500/20 blur-xl"></div>
        
        {/* SVG Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-emerald-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="pointer-events-auto z-10 relative glass-panel p-10 rounded-3xl md:w-[600px]"
      >
        <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 block drop-shadow-md">Our Commitment</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">100% Carbon Neutral.<br />Forever.</h2>
        <p className="text-white/70 font-light mb-8">
          Every bottle of Essence is certified carbon neutral from source to sip. 
          We use 100% renewable energy in our facilities and exclusively utilize 
          FSC-certified packaging and infinitely recyclable materials.
        </p>
        
        <div className="flex justify-center gap-8 border-t border-white/10 pt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-xs text-white/50 uppercase tracking-widest">Recyclable</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">Zero</div>
            <div className="text-xs text-white/50 uppercase tracking-widest">Footprint</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
