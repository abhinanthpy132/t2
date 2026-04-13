import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function ProductCarousel() {
  const containerRef = useRef(null);

  const products = [
    { title: 'Still Mineral', size: '500ml Glass', color: 'from-cyan-500/20 to-blue-500/20', imgFallback: 'bg-blue-900/50' },
    { title: 'Sparkling Reserve', size: '750ml Glass', color: 'from-emerald-500/20 to-teal-500/20', imgFallback: 'bg-emerald-900/50' },
    { title: 'Still Mineral', size: '1L Recycled PET', color: 'from-cyan-400/20 to-blue-400/20', imgFallback: 'bg-sky-900/50' },
  ];

  return (
    <section className="relative w-full py-40 overflow-hidden pointer-events-none">
      <div className="px-6 md:px-24 mb-16 pointer-events-auto">
        <span className="text-cyan-300 font-semibold tracking-widest uppercase text-sm drop-shadow-md">Our Collection</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-2 text-glow">The Range</h2>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-8 px-6 md:px-24 overflow-x-auto pb-20 pointer-events-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }} // Hide native scrollbar
      >
        {products.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`min-w-[300px] md:min-w-[400px] h-[500px] rounded-3xl glass-panel relative group cursor-pointer snap-center overflow-hidden`}
          >
            {/* Background gradient override */}
            <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
            
            <div className="absolute top-8 left-8 z-10 z-20">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:scale-105 transform origin-left transition-transform duration-300">{item.title}</h3>
              <p className="text-white/60 font-light">{item.size}</p>
            </div>

            {/* Fake 3D Bottle placeholder */}
            <div className="absolute inset-0 flex items-center justify-center mt-12 z-10">
              <div className={`w-[80px] h-[300px] ${item.imgFallback} rounded-full backdrop-blur-2xl border-2 border-white/30 shadow-2xl group-hover:rotate-12 transition-transform duration-700 ease-out flex items-center justify-center relative overflow-hidden`}>
                <div className="w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent absolute top-0"></div>
                <div className="w-3/4 h-[80px] bg-white/10 mt-10 rounded border border-white/20 flex flex-col items-center justify-center">
                   <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest drop-shadow-md">Essence</span>
                </div>
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
