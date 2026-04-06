import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function AboutCTA() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative py-60 bg-primary overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1920" 
          alt="CTA Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/50 to-primary z-10" />

      <div className="relative z-20 text-center max-w-4xl px-4 mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-accent font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block"
        >
          Let’s Create Something Beautiful Together
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-serif mb-12 text-secondary leading-tight"
        >
          Your Moment, <br />
          <span className="italic text-accent">Our Artistry</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-12 py-6 bg-secondary text-primary rounded-full font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all shadow-2xl flex items-center justify-center mx-auto group">
            Book Your Event <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
