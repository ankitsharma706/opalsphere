import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../../data/shopData';
import { TrendingUp, Sparkles } from 'lucide-react';

export function FreshPicks() {
  const trendingProducts = PRODUCTS.filter(p => p.isTrending);
  
  // Duplicate products for seamless infinite scroll
  const scrollItems = [...trendingProducts, ...trendingProducts, ...trendingProducts];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-12 h-12 rounded-full bg-[#E8B4B8]/10 flex items-center justify-center text-[#E8B4B8]">
            <TrendingUp size={20} />
          </div>
          <div>
            <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Live Feed</span>
            <h2 className="text-4xl font-serif text-[#1F3D2B]">Fresh Picks Today</h2>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 px-6 py-3 bg-[#FAF9F6] rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">
          <Sparkles size={14} className="text-[#E8B4B8]" />
          <span>Updated 5 minutes ago</span>
        </div>
      </div>

      <div className="relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex space-x-12 px-6"
        >
          {scrollItems.map((product, index) => (
            <div 
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-[400px] flex items-center space-x-8 group cursor-pointer"
            >
              <div className="w-32 h-40 rounded-2xl overflow-hidden bg-[#FAF9F6]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Just Added</span>
                </div>
                <h3 className="text-xl font-serif text-[#1F3D2B] mb-2 group-hover:text-[#E8B4B8] transition-colors">{product.name}</h3>
                <p className="text-lg font-light text-[#1F3D2B]">${product.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
