import React from 'react';
import { motion } from 'motion/react';

export function CommunityHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background Layers */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1920" 
          alt="Community Hero" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/50 to-primary z-10" />

      <div className="relative z-20 text-center max-w-4xl px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block"
        >
          OpalSphere Community
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-serif mb-8 text-secondary leading-tight"
        >
          Where Creators <br />
          <span className="italic text-accent">Bloom</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-secondary/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Learn, create, and showcase floral artistry within an elite network of global decorators.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-5 bg-secondary text-primary rounded-full font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all shadow-xl">
            Join Community
          </button>
          <button className="px-10 py-5 border border-secondary/10 text-secondary rounded-full font-bold tracking-widest uppercase text-xs hover:bg-secondary hover:text-primary transition-all">
            Explore Designs
          </button>
        </motion.div>
      </div>
    </section>
  );
}
