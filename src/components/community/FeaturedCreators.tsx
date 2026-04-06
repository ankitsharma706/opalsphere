import React from 'react';
import { motion } from 'motion/react';
import { creators } from '../../data/communityData';
import { ArrowRight } from 'lucide-react';

export function FeaturedCreators() {
  return (
    <section className="py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-between items-end">
        <div>
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Elite Network</span>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary">Featured Creators</h2>
        </div>
        <button className="flex items-center space-x-2 text-secondary/60 hover:text-accent transition-colors group">
          <span className="text-[10px] font-bold uppercase tracking-widest">View All Artists</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto gap-8 px-4 sm:px-6 lg:px-8 pb-12 no-scrollbar snap-x snap-mandatory">
          {creators.map((creator) => (
            <motion.div 
              key={creator.id}
              whileHover={{ y: -10 }}
              className="flex-none w-[300px] md:w-[350px] snap-start group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-accent/5 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={creator.image} 
                    alt={creator.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {creator.badges.map((badge) => (
                      <span key={badge} className="bg-primary/90 backdrop-blur-md text-accent text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-accent/10">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-serif text-secondary mb-1">{creator.name}</h3>
                      <p className="text-accent text-[10px] font-bold uppercase tracking-widest">{creator.specialty} • {creator.level}</p>
                    </div>
                  </div>
                  <div className="relative h-0 group-hover:h-20 overflow-hidden transition-all duration-500">
                    <p className="text-secondary/50 text-sm leading-relaxed pt-4 border-t border-accent/5">
                      {creator.bio}
                    </p>
                  </div>
                  <button className="w-full mt-6 py-4 border border-secondary/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all">
                    View Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
