import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function AboutHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1920" 
          alt="Floral Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/20 to-primary z-10" />

      <motion.div 
        style={{ y: y2 }}
        className="relative z-20 text-center max-w-5xl px-4"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-accent font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block"
        >
          The Art of Celebration
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-serif mb-10 text-secondary leading-tight"
        >
          We Don’t Just Decorate — <br />
          <span className="italic text-accent">We Create Experiences</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-secondary/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          OpalSphere is a sanctuary where floral artistry meets emotional storytelling, crafting moments that linger in the heart forever.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="group flex items-center space-x-4 mx-auto text-secondary hover:text-accent transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Our Work</span>
            <div className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
              <ArrowRight size={16} />
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-secondary/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-secondary/30 to-transparent" />
      </motion.div>
    </section>
  );
}
