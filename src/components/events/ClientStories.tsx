import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    client: 'The Valerios',
    event: 'Tuscan Wedding',
    before: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    quote: 'OpalSphere didn\'t just decorate our wedding; they built a world that felt like us. The transformation was beyond words.'
  },
  {
    id: 2,
    client: 'Zenith Tech',
    event: 'Global Summit',
    before: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    quote: 'The architectural precision of the floral structures aligned perfectly with our brand identity. A masterclass in event design.'
  }
];

export function ClientStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => setCurrentIndex(prev => (prev + 1) % STORIES.length);
  const prev = () => setCurrentIndex(prev => (prev - 1 + STORIES.length) % STORIES.length);

  const currentStory = STORIES[currentIndex];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Trust Builder</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1F3D2B] mb-6 leading-tight">The Transformation</h2>
            <p className="text-[#1F3D2B]/60 text-lg font-light leading-relaxed">
              Explore the before and after of our most ambitious projects. Witness how we turn empty spaces into botanical masterpieces.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-[#1F3D2B]/10 text-[#1F3D2B] flex items-center justify-center hover:bg-[#1F3D2B] hover:text-white transition-all duration-500"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-[#1F3D2B]/10 text-[#1F3D2B] flex items-center justify-center hover:bg-[#1F3D2B] hover:text-white transition-all duration-500"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Slider Comparison */}
          <div 
            className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-[#FAF9F6] cursor-ew-resize"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src={currentStory.after} 
              alt="After" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              initial={{ width: '50%' }}
              animate={{ width: isHovered ? '20%' : '50%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white/50 z-10"
            >
              <img 
                src={currentStory.before} 
                alt="Before" 
                className="absolute inset-0 w-[200%] h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-widest text-white">
                Before
              </div>
            </motion.div>
            <div className="absolute top-8 right-8 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-widest text-white z-20">
              After
            </div>
          </div>

          {/* Quote Side */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div className="relative p-12 bg-[#FAF9F6] rounded-[3rem] group">
                  <Quote className="absolute top-10 right-10 text-[#E8B4B8]/20 group-hover:text-[#E8B4B8]/40 transition-colors" size={60} />
                  <p className="text-2xl md:text-3xl font-serif text-[#1F3D2B] mb-10 italic leading-relaxed">
                    "{currentStory.quote}"
                  </p>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]">{currentStory.client}</h4>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{currentStory.event}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8B4B8]/10 flex items-center justify-center text-[#E8B4B8]">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]">Artisan Quality</span>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Hand-picked Blooms</p>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-[#1F3D2B]/5" />
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8B4B8]/10 flex items-center justify-center text-[#E8B4B8]">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]">Bespoke Design</span>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Unique Narratives</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
