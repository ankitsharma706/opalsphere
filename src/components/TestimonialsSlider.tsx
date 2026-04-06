import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Eleanor Vance",
    role: "Luxury Wedding Client",
    quote: "OpalSphere transformed our wedding into a botanical wonderland. The attention to detail and the sheer quality of the flowers were beyond anything we could have imagined.",
    before: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    after: "https://noonmoonevents.com/sites/default/files/2026-01/pastel-wedding-decor.jpeg",
    budget: "$45,000",
    event: "Royal Wedding"
  },
  {
    id: 2,
    name: "Julian Thorne",
    role: "Corporate Gala Organizer",
    quote: "The floral installations were the talk of the evening. They captured our brand's essence perfectly with a modern, sophisticated touch.",
    before: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    after: "https://fioredesigns.com/_next/image?q=75&url=https%3A%2F%2Fmedia.fioredesigns.com%2Fuploads%2F2026%2F02%2Fwhite-rose-threshold-installation.avif&w=1536",
    budget: "$28,000",
    event: "Tech Gala 2026"
  }
];

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  const next = () => setIndex((index + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium tracking-widest uppercase text-xs mb-4 block"
          >
            Client Stories
          </motion.span>
          <h2 className="text-4xl md:text-6xl mb-6">The Magic of <br /><span className="italic">Transformation</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Before/After Slider */}
          <div 
            ref={containerRef}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl cursor-ew-resize group"
          >
            {/* After Image */}
            <div className="absolute inset-0">
              <img 
                src={current.after} 
                alt="After" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Before Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src={current.before} 
                alt="Before" 
                className="w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current?.offsetWidth }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-secondary border border-accent/20">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary z-20">
              Before
            </div>
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary z-20">
              After
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                <div className="flex items-center space-x-2 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-8 -left-8 text-accent/10 w-24 h-24 -z-10" />
                  <p className="text-3xl md:text-4xl font-serif italic text-secondary leading-relaxed">
                    "{current.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between py-8 border-y border-secondary/5">
                  <div>
                    <h4 className="text-xl font-medium text-secondary mb-1">{current.name}</h4>
                    <p className="text-secondary/50 text-sm">{current.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">{current.event}</p>
                    <p className="text-secondary font-serif italic">{current.budget}</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={prev}
                    className="w-14 h-14 rounded-full border border-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={next}
                    className="w-14 h-14 rounded-full border border-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
