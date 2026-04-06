import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll parallax (keeping simple scale/fade)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const title = "The Art of Floral Transformation";
  const words = title.split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Background Layer */}
      <motion.div 
        style={{ scale: bgScale, opacity }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img 
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200" 
          alt="Luxury Floral Design" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-accent font-medium tracking-[0.4em] uppercase text-xs md:text-sm mb-8 block"
        >
          OpalSphere — Est. 2026
        </motion.span>
        
        <h1 className="text-5xl md:text-8xl font-serif text-secondary mb-12 leading-[1.1] text-balance">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="inline-block mr-[0.3em]"
            >
              {word === "Transformation" ? <span className="italic font-light">{word}</span> : word}
            </motion.span>
          ))}
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Link 
            to="/booking" 
            className="bg-secondary text-primary px-12 py-6 rounded-full font-medium tracking-wider hover:bg-secondary/90 transition-all flex items-center group shadow-xl"
          >
            Book Your Event <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link 
            to="/gallery" 
            className="text-secondary font-medium tracking-widest uppercase text-xs border-b border-secondary/20 pb-2 hover:border-accent transition-all"
          >
            Explore Designs
          </Link>
        </motion.div>
      </div>

      {/* Sound Toggle */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-10 right-10 z-40 w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </section>
  );
}
