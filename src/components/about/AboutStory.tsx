import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const milestones = [
  {
    year: '2018',
    title: 'The Seed of an Idea',
    description: 'OpalSphere began as a small, passionate collective of floral artists in a humble studio, driven by the belief that events should be immersive experiences.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
  },
  {
    year: '2020',
    title: 'Our First Grand Event',
    description: 'We transformed a historic Venetian palace for a high-profile wedding, marking our entry into the world of luxury global events.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'With a growing team of expert decorators, we expanded our reach across three continents, bringing our unique floral narrative to diverse cultures.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
  },
  {
    year: '2024',
    title: 'The Platform Launch',
    description: 'OpalSphere evolved into a comprehensive platform, connecting elite decorators with a global community and offering exclusive learning experiences.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
  },
];

export function AboutStory() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-40 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 text-center">
        <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Story</span>
        <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-10 leading-tight">The Journey of <span className="italic text-accent">OpalSphere</span></h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-accent/10 hidden md:block" />

        <div className="space-y-40">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-1/2"
              >
                <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-xl">
                  <img 
                    src={milestone.image} 
                    alt={milestone.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="w-full md:w-1/2 text-center md:text-left"
              >
                <span className="text-accent font-serif text-4xl italic mb-6 block">{milestone.year}</span>
                <h3 className="text-2xl md:text-3xl font-serif text-secondary mb-6 leading-tight">{milestone.title}</h3>
                <p className="text-secondary/50 text-lg leading-relaxed font-light">
                  {milestone.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
