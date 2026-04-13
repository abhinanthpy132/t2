import React from 'react';
import { motion } from 'framer-motion';

export default function StoryPanel() {
  return (
    <section className="relative w-full min-h-screen flex items-center p-6 md:p-24 justify-end pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ margin: "-200px" }}
        className="w-full md:w-[450px] glass-panel rounded-3xl p-8 md:p-12 pointer-events-auto shadow-2xl relative"
      >
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/30 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <span className="text-cyan-300 font-semibold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Our Legacy</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-glow">10 Years<br />of Purity</h2>
          
          <div className="space-y-6 relative border-l border-white/20 pl-6 ml-2">
            {[
              { year: '2016', text: 'Discovery of the untouched Alpine source.' },
              { year: '2019', text: 'First carbon-neutral bottling facility.' },
              { year: '2026', text: 'Global expansion with 100% recycled glass.' }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border border-white group-hover:scale-150 transition-transform shadow-[0_0_10px_#22d3ee]"></div>
                <h3 className="text-xl font-bold text-white mb-2">{item.year}</h3>
                <p className="text-white/70 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
