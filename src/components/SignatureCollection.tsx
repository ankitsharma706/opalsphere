import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLLECTIONS = [
  { id: 1, title: 'Royal Weddings', subtitle: 'Grandeur & Opulence', img: 'https://i.pinimg.com/736x/8f/1f/c4/8f1fc400724ca5f8af30f266551fef4c.jpg' },
  { id: 2, title: 'Minimal Luxury', subtitle: 'Subtle Sophistication', img: 'https://cdn.shopify.com/s/files/1/2776/2776/7900/files/brighten-up-your-home-floral-interior-design-ideas-from-floristique.jpg?v=1692839922' },
  { id: 3, title: 'Heritage Decor', subtitle: 'Timeless Traditions', img: 'https://cdn0.weddingwire.in/article/1450/3_2/960/jpg/130541-mandap-designs-magic-motion-media.jpeg' },
  { id: 4, title: 'Modern Luxe', subtitle: 'Contemporary Artistry', img: 'https://tiimg.tistatic.com/fp/1/009/170/wedding-mandap-366.jpg' },
  { id: 5, title: 'Private Gala', subtitle: 'Exclusive Elegance', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
];

export function SignatureCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium tracking-widest uppercase text-xs mb-4 block"
            >
              Signature Showcase
            </motion.span>
            <h2 className="text-4xl md:text-6xl mb-4">Monuments of <br /><span className="italic">Memory</span></h2>
            <p className="text-secondary/60 max-w-md text-lg">
              Explore our curated selection of high-end floral installations designed for the most discerning clients.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/gallery" className="flex items-center space-x-2 text-secondary font-medium tracking-widest uppercase text-xs border-b border-secondary/20 pb-2 hover:border-accent transition-all">
              <span>View Full Gallery</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-20 px-[5vw] md:px-[10vw] gap-8 md:gap-12"
      >
        {COLLECTIONS.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-accent/5 transition-all duration-700 group-hover:shadow-accent/20 group-hover:border-accent/20">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex items-center space-x-4 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-8 h-[1px] bg-accent" />
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">Collection 0{i + 1}</span>
                </div>
                <h3 className="text-primary text-3xl md:text-4xl mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">{item.title}</h3>
                <p className="text-primary/70 text-sm italic transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">{item.subtitle}</p>
                
                <div className="mt-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                  <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    <Sparkles size={20} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer for scroll end */}
        <div className="flex-shrink-0 w-[10vw]" />
      </div>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[1px] bg-secondary/10 relative">
          <motion.div 
            style={{ scaleX: smoothProgress }}
            className="absolute left-0 top-0 bottom-0 w-full bg-accent origin-left"
          />
        </div>
      </div>
    </section>
  );
}
