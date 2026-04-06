import React from 'react';
import { motion } from 'motion/react';
import { COLLECTIONS } from '../../data/shopData';

export function CollectionSlider() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Curated Series</span>
        <h2 className="text-4xl font-serif text-[#1F3D2B]">Signature Collections</h2>
      </div>
      
      <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 px-4 sm:px-6 lg:px-8 pb-12">
        {COLLECTIONS.map((collection, index) => (
          <motion.div 
            key={collection.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex-shrink-0 w-[300px] md:w-[450px] h-[300px] md:h-[550px] relative group overflow-hidden rounded-3xl snap-center cursor-pointer"
          >
            <img 
              src={collection.image} 
              alt={collection.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">{collection.name}</h3>
              <div className="h-0.5 w-0 bg-[#E8B4B8] group-hover:w-full transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
