import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Blush Romance Bouquet', price: 120, category: 'Bouquets', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Emerald Garden Kit', price: 85, category: 'Decor Kits', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Ivory Wedding Set', price: 450, category: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Golden Hour Arrangement', price: 150, category: 'Bouquets', img: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=800' },
  { id: 5, name: 'Midnight Orchid', price: 95, category: 'Exotic', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800' },
  { id: 6, name: 'Vintage Rose Box', price: 180, category: 'Luxury', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800' },
];

export function FloralMarket() {
  return (
    <section className="py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium tracking-widest uppercase text-xs mb-4 block"
            >
              Live Floral Market
            </motion.span>
            <h2 className="text-4xl md:text-6xl mb-4">Today's Fresh <br /><span className="italic text-accent">Picks</span></h2>
            <p className="text-secondary/60 max-w-md text-lg">
              Hand-selected blooms and curated kits available for immediate delivery to your doorstep.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-secondary/40 text-xs font-bold uppercase tracking-widest">
              <Star size={14} className="text-accent" fill="currentColor" />
              <span>Trending Now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
          className="flex space-x-8 whitespace-nowrap py-10"
        >
          {[...PRODUCTS, ...PRODUCTS].map((product, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-[350px] bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-accent/5 transition-all duration-500 hover:shadow-2xl hover:border-accent/20 group/card"
            >
              <div className="h-[300px] overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Quick Actions */}
                <div className="absolute top-6 right-6 flex flex-col space-y-3 transform translate-x-12 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-500">
                  <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all">
                    <ShoppingCart size={18} />
                  </button>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl mb-2 text-secondary group-hover/card:text-accent transition-colors">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-secondary/40 text-xs font-bold uppercase tracking-widest">Premium Quality</span>
                  <span className="text-xl font-serif text-secondary">${product.price}</span>
                </div>
                
                <button className="w-full mt-8 py-4 border border-secondary/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-secondary hover:text-primary transition-all">
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
