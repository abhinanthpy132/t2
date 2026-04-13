import React from 'react';
import { motion } from 'framer-motion';

export default function SourceSection() {
  return (
    <section className="relative w-full min-h-[120vh] flex items-center justify-start p-6 md:p-24 pointer-events-none">
      {/* Fog effect overlay for this section specifically */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-transparent pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="glass-panel w-full md:w-[500px] rounded-3xl p-10 pointer-events-auto shadow-2xl relative"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-bold tracking-widest uppercase mb-8 border border-white/20">The Source</span>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">Deep from the Glacier</h2>
        <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
          Our water takes a 15-year journey through mineral-rich alpine rock layers, 
          acquiring its uniquely balanced composition and remarkably crisp taste before 
          reaching our sustainable bottling facility.
        </p>

        <ul className="space-y-4">
          {[
            { label: 'pH Level', value: '7.8 (Optimally Alkaline)' },
            { label: 'TDS', value: '110 mg/L' },
            { label: 'Source', value: 'Alpine Glacier Reserve' }
          ].map((stat, i) => (
            <li key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-white/60 font-light">{stat.label}</span>
              <span className="text-white font-semibold">{stat.value}</span>
            </li>
          ))}
        </ul>

      </motion.div>
    </section>
  );
}
