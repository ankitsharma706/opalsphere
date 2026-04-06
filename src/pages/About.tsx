import React from 'react';
import { motion } from 'motion/react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutPhilosophy } from '../components/about/AboutPhilosophy';
import { AboutStory } from '../components/about/AboutStory';
import { AboutCraftsmanship } from '../components/about/AboutCraftsmanship';
import { AboutValueProps } from '../components/about/AboutValueProps';
import { AboutTeam } from '../components/about/AboutTeam';
import { AboutImpact } from '../components/about/AboutImpact';
import { AboutTestimonials } from '../components/about/AboutTestimonials';
import { AboutCTA } from '../components/about/AboutCTA';
import { ScrollProgress } from '../components/about/ScrollProgress';

export default function About() {
  return (
    <div className="bg-primary min-h-screen">
      <ScrollProgress />
      
      <AboutHero />

      {/* Signature Quote Section */}
      <section className="py-40 bg-white text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-accent font-serif text-6xl italic mb-12 block">"</span>
          <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-12 leading-tight italic">
            "We believe that every celebration is a unique narrative, and flowers are the most eloquent storytellers."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border border-accent/20">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                alt="Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Elena Rossi</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Founder & Creative Director</p>
          </div>
        </motion.div>
      </section>

      <AboutPhilosophy />
      
      {/* Awards Strip */}
      <section className="py-20 bg-primary/30 border-y border-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['Luxury Event Award 2024', 'Floral Design Excellence', 'Global Wedding Collective', 'Artisan Guild Member'].map((award) => (
              <span key={award} className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary whitespace-nowrap">
                {award}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AboutStory />
      <AboutCraftsmanship />
      <AboutValueProps />
      <AboutTeam />
      <AboutImpact />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
}
