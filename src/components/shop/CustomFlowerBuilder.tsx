import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShoppingCart, ArrowRight, Info, Check } from 'lucide-react';

const FLOWER_TYPES = [
  { name: 'Roses', price: 15, image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400' },
  { name: 'Orchids', price: 25, image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=400' },
  { name: 'Lilies', price: 20, image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Peonies', price: 30, image: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=400' }
];

const COLORS = [
  { name: 'Blush Pink', hex: '#E8B4B8' },
  { name: 'Pure White', hex: '#FFFFFF' },
  { name: 'Deep Crimson', hex: '#8B0000' },
  { name: 'Golden Yellow', hex: '#FFD700' },
  { name: 'Lavender', hex: '#E6E6FA' }
];

const SIZES = [
  { name: 'Classic', multiplier: 1, count: 12 },
  { name: 'Grand', multiplier: 1.8, count: 24 },
  { name: 'Royal', multiplier: 3, count: 50 }
];

export function CustomFlowerBuilder() {
  const [selectedFlower, setSelectedFlower] = useState(FLOWER_TYPES[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);

  const totalPrice = Math.round(selectedFlower.price * selectedSize.count * selectedSize.multiplier);

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Live Preview */}
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-white shadow-2xl group">
            <motion.div 
              key={`${selectedFlower.name}-${selectedColor.name}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img 
                src={selectedFlower.image} 
                alt="Custom Bouquet" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div 
                className="absolute inset-0 mix-blend-overlay opacity-40" 
                style={{ backgroundColor: selectedColor.hex }}
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Sparkles size={20} />
                </div>
                <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px]">Artisan Creation</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Your Signature Bouquet</h3>
              <p className="text-white/80 text-lg font-light italic">
                A bespoke arrangement of {selectedSize.count} {selectedColor.name} {selectedFlower.name}.
              </p>
            </div>
            
            {/* Price Badge */}
            <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Total</span>
              <span className="text-2xl font-serif text-[#1F3D2B]">${totalPrice}</span>
            </div>
          </div>

          {/* Builder Controls */}
          <div className="space-y-12">
            <div>
              <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Bespoke Experience</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#1F3D2B] mb-8 leading-tight">Design Your Own Masterpiece</h2>
              <p className="text-[#1F3D2B]/60 text-lg font-light leading-relaxed">
                Unleash your inner artist. Select from our finest blooms and curated palettes to create a floral narrative that is uniquely yours.
              </p>
            </div>

            <div className="space-y-10">
              {/* Flower Type */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40 mb-6">1. Choose Flower Type</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {FLOWER_TYPES.map(flower => (
                    <button 
                      key={flower.name}
                      onClick={() => setSelectedFlower(flower)}
                      className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center space-y-3 ${selectedFlower.name === flower.name ? 'bg-white border-[#E8B4B8] shadow-lg' : 'bg-transparent border-[#1F3D2B]/5 hover:border-[#1F3D2B]/20'}`}
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={flower.image} alt={flower.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]">{flower.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Palette */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40 mb-6">2. Select Color Palette</h4>
                <div className="flex flex-wrap gap-6">
                  {COLORS.map(color => (
                    <button 
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className="group flex flex-col items-center space-y-3"
                    >
                      <div 
                        className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${selectedColor.name === color.name ? 'border-[#1F3D2B] scale-110' : 'border-transparent group-hover:scale-105'}`}
                        style={{ backgroundColor: color.hex }}
                      >
                        {selectedColor.name === color.name && (
                          <Check size={16} className={color.name === 'Pure White' ? 'text-[#1F3D2B]' : 'text-white'} />
                        )}
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40 mb-6">3. Select Size</h4>
                <div className="grid grid-cols-3 gap-4">
                  {SIZES.map(size => (
                    <button 
                      key={size.name}
                      onClick={() => setSelectedSize(size)}
                      className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center space-y-2 ${selectedSize.name === size.name ? 'bg-[#1F3D2B] text-white border-[#1F3D2B] shadow-xl' : 'bg-white text-[#1F3D2B] border-[#1F3D2B]/5 hover:border-[#1F3D2B]/20'}`}
                    >
                      <span className="text-xs font-bold uppercase tracking-widest">{size.name}</span>
                      <span className={`text-[10px] font-medium uppercase tracking-widest ${selectedSize.name === size.name ? 'text-white/60' : 'text-[#1F3D2B]/40'}`}>{size.count} Blooms</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Final Action */}
              <div className="pt-8 flex items-center space-x-6">
                <button className="flex-1 py-6 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 flex items-center justify-center space-x-4 shadow-xl">
                  <ShoppingCart size={18} />
                  <span>Add Custom Creation to Cart</span>
                </button>
                <div className="flex items-center space-x-3 text-[#1F3D2B]/40">
                  <Info size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Ships in 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
