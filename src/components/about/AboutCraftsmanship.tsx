import React from 'react';
import { motion } from 'motion/react';
import { Palette, Flower, PenTool, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Palette,
    title: 'Concept Design',
    description: 'We begin with an emotional mood board, translating your vision into a visual narrative that captures the essence of your celebration.',
  },
  {
    icon: Flower,
    title: 'Flower Selection',
    description: 'Sourcing the finest, most exquisite blooms from global artisans, ensuring every petal meets our rigorous standards of beauty and freshness.',
  },
  {
    icon: PenTool,
    title: 'Arrangement',
    description: 'Our expert decorators meticulously craft each installation, balancing color, texture, and form to create a harmonious visual experience.',
  },
  {
    icon: CheckCircle,
    title: 'Final Execution',
    description: 'The final reveal—a seamless integration of floral artistry and event design, creating a breathtaking atmosphere for your special moment.',
  },
];

export function AboutCraftsmanship() {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Process</span>
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-10 leading-tight">The Craftsmanship of <span className="italic text-accent">OpalSphere</span></h2>
          <p className="text-secondary/50 text-lg leading-relaxed font-light">
            Every creation is a journey from inspiration to reality, meticulously crafted with passion and precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group relative p-12 bg-primary/30 rounded-[40px] border border-accent/5 hover:bg-white hover:shadow-2xl transition-all duration-700"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-10 group-hover:scale-110 transition-transform duration-500">
                <step.icon size={28} />
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-6 leading-tight group-hover:text-accent transition-colors">{step.title}</h3>
              <p className="text-secondary/50 text-sm leading-relaxed font-light">
                {step.description}
              </p>
              
              {/* Subtle Progress Indicator */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent/20 transition-all duration-700 w-0 group-hover:w-full rounded-b-[40px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
