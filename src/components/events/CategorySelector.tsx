import React from 'react';
import { motion } from 'motion/react';

interface CategorySelectorProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategorySelector({ activeCategory, onCategoryChange }: CategorySelectorProps) {
  const categories = ['All', 'Weddings', 'Corporate', 'Private Events', 'Luxury Experiences'];

  return (
    <section className="py-24 bg-white border-b border-[#1F3D2B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Smart Navigation</span>
            <h2 className="text-4xl font-serif text-[#1F3D2B]">Curated Portfolio</h2>
          </div>
          
          <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide w-full md:w-auto pb-4 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-300 relative pb-2 ${
                  activeCategory === cat ? 'text-[#1F3D2B]' : 'text-[#1F3D2B]/40 hover:text-[#1F3D2B]/70'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCat" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8B4B8]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
