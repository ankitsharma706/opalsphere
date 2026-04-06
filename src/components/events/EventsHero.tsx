import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface EventsHeroProps {
  onBookClick: () => void;
  onGalleryClick: () => void;
}

export function EventsHero({ onBookClick, onGalleryClick }: EventsHeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6]">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Event Decor" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/20 to-[#FAF9F6]" />
      </motion.div>
      
      <div className="relative z-10 text-center max-w-5xl px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E8B4B8] font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block"
        >
          Bespoke Event Experiences
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-[#1F3D2B] mb-10 leading-tight"
        >
          Crafted Experiences, <br />
          <span className="italic text-[#E8B4B8]">Designed to Bloom</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#1F3D2B]/60 text-lg md:text-2xl mb-14 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Explore our past creations and upcoming events, designed to transform your most cherished moments into living art.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button 
            onClick={onBookClick}
            className="px-12 py-5 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 shadow-xl"
          >
            Book Your Event
          </button>
          <button 
            onClick={onGalleryClick}
            className="px-12 py-5 border border-[#1F3D2B]/10 text-[#1F3D2B] rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-[#1F3D2B] transition-all duration-500"
          >
            View Gallery
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#1F3D2B]/30">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#1F3D2B]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
