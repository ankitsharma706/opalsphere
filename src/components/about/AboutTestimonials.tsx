import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    client: 'The Sterling Wedding',
    challenge: 'Transforming a minimalist industrial space into a romantic, lush garden within 24 hours.',
    outcome: 'A breathtaking indoor forest with 5,000 hanging orchids and custom-built floral arches that left guests speechless.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    client: 'The Azure Gala',
    challenge: 'Creating a midnight-themed floral installation for a high-profile charity event in a historic library.',
    outcome: 'A magical atmosphere with deep purple hydrangeas and fiber-optic lighting that perfectly captured the "Midnight Bloom" theme.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
  },
];

export function AboutTestimonials() {
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Client Stories</span>
        <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-10 leading-tight">The Experience of <span className="italic text-accent">OpalSphere</span></h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
          >
            <div className="aspect-[4/3] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src={testimonials[index].image} 
                alt={testimonials[index].client} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-12 bg-primary/30 rounded-[60px] border border-accent/5 relative">
              <Quote size={80} className="absolute -top-10 -left-10 text-accent/10" />
              <h3 className="text-3xl font-serif text-secondary mb-10 leading-tight">{testimonials[index].client}</h3>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">The Challenge</h4>
                  <p className="text-secondary/60 text-lg leading-relaxed font-light">
                    {testimonials[index].challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">The Outcome</h4>
                  <p className="text-secondary/60 text-lg leading-relaxed font-light">
                    {testimonials[index].outcome}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-20 space-x-8">
          <button 
            onClick={prev}
            className="w-16 h-16 rounded-full border border-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-500"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="w-16 h-16 rounded-full border border-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-500"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
