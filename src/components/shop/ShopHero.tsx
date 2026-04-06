import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ShopHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#FAF9F6]">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Flowers" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block"
        >
          Exclusive Floral Boutique
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-[#1F3D2B] mb-8 leading-tight"
        >
          Curated Floral Elegance
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#1F3D2B]/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light"
        >
          Handcrafted arrangements for every occasion, delivered with the signature OpalSphere touch of luxury.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-[#1F3D2B] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500">
            Shop Now
          </button>
          <button className="px-10 py-4 border border-[#1F3D2B]/10 text-[#1F3D2B] rounded-full text-xs font-bold uppercase tracking-widest hover:border-[#1F3D2B] transition-all duration-500">
            Explore Collections
          </button>
        </motion.div>
      </div>
    </section>
  );
}
