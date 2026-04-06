import React from 'react';
import { motion, useInView } from 'motion/react';

export function AboutPhilosophy() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-10 leading-tight">Flowers are the <br />Language of the <span className="italic text-accent">Soul</span></h2>
            <p className="text-secondary/60 text-lg leading-relaxed mb-10 font-light">
              We believe that every celebration is a unique narrative, and flowers are the most eloquent storytellers. From the subtle whisper of a single orchid to the grand crescendo of a luxury installation, we curate experiences that resonate with emotion, culture, and timeless elegance.
            </p>
            <p className="text-secondary/60 text-lg leading-relaxed font-light">
              Our focus is not on decoration, but on the atmosphere—the way a room feels when you first step in, the scent that lingers in the air, and the visual harmony that brings people together.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" 
                alt="Philosophy Imagery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 bg-primary p-12 rounded-[40px] shadow-xl border border-accent/5 hidden md:block"
            >
              <p className="text-accent font-serif text-2xl italic leading-tight">
                "Experience is the <br />ultimate luxury."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
