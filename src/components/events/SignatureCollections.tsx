import React from 'react';
import { motion } from 'motion/react';
import { SIGNATURE_COLLECTIONS } from '../../data/eventsData';

export function SignatureCollections() {
  return (
    <section className="py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Curated Setups</span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#1F3D2B]">Signature Collection Events</h2>
      </div>
      
      <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-12 px-4 sm:px-6 lg:px-8 pb-20">
        {SIGNATURE_COLLECTIONS.map((collection, index) => (
          <motion.div 
            key={collection.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex-shrink-0 w-[350px] md:w-[600px] aspect-[16/10] relative group overflow-hidden rounded-[3rem] snap-center cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700"
          >
            <img 
              src={collection.image} 
              alt={collection.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">{collection.title}</h3>
              <p className="text-white/80 text-sm font-light italic mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{collection.desc}</p>
              <div className="h-0.5 w-0 bg-[#E8B4B8] group-hover:w-full transition-all duration-1000" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
