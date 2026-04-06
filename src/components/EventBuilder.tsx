import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, MapPin, Wallet, Palette } from 'lucide-react';

const EVENT_TYPES = [
  { id: 'wedding', label: 'Wedding', color: '#E8B4B8', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { id: 'corporate', label: 'Corporate', color: '#1F3D2B', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
  { id: 'birthday', label: 'Birthday', color: '#D4AF37', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800' },
];

const THEMES = [
  { id: 'royal', label: 'Royal Luxury', description: 'Grand, opulent, and majestic.' },
  { id: 'minimal', label: 'Minimalist Chic', description: 'Clean lines, subtle elegance.' },
  { id: 'traditional', label: 'Classic Heritage', description: 'Timeless, rich, and cultural.' },
];

export function EventBuilder() {
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [theme, setTheme] = useState(THEMES[0]);
  const [budget, setBudget] = useState(5000);

  const previewData = useMemo(() => {
    return {
      title: `${theme.label} ${eventType.label}`,
      description: theme.description,
      color: eventType.color,
      img: eventType.img,
    };
  }, [eventType, theme]);

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
            Interactive Experience
          </motion.span>
          <h2 className="text-4xl md:text-6xl mb-6">Build Your Event Vision</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto text-lg">
            Select your preferences and see your dream floral atmosphere come to life in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Controls */}
          <div className="space-y-12">
            {/* Event Type */}
            <div>
              <label className="flex items-center space-x-2 text-secondary font-medium mb-6 uppercase tracking-widest text-xs">
                <Calendar size={16} className="text-accent" />
                <span>Event Type</span>
              </label>
              <div className="grid grid-cols-3 gap-4">
                {EVENT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEventType(type)}
                    className={`px-6 py-4 rounded-2xl text-sm font-medium transition-all border ${
                      eventType.id === type.id 
                        ? 'bg-secondary text-primary border-secondary shadow-lg' 
                        : 'bg-primary/50 text-secondary/60 border-secondary/5 hover:border-accent/30'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Selection */}
            <div>
              <label className="flex items-center space-x-2 text-secondary font-medium mb-6 uppercase tracking-widest text-xs">
                <Palette size={16} className="text-accent" />
                <span>Design Theme</span>
              </label>
              <div className="space-y-4">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t)}
                    className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all border ${
                      theme.id === t.id 
                        ? 'bg-white border-accent shadow-xl ring-1 ring-accent/20' 
                        : 'bg-primary/30 border-transparent hover:border-accent/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-medium text-secondary mb-1">{t.label}</h4>
                      <p className="text-xs text-secondary/50">{t.description}</p>
                    </div>
                    {theme.id === t.id && <Sparkles size={18} className="text-accent" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Slider */}
            <div>
              <label className="flex items-center justify-between text-secondary font-medium mb-6 uppercase tracking-widest text-xs">
                <div className="flex items-center space-x-2">
                  <Wallet size={16} className="text-accent" />
                  <span>Estimated Budget</span>
                </div>
                <span className="text-accent font-bold">${budget.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="500"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest text-secondary/40 font-bold">
                <span>Boutique</span>
                <span>Grand Luxe</span>
              </div>
            </div>
          </div>

          {/* Live Preview Card */}
          <div className="relative sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={previewData.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-accent/10"
              >
                <div className="h-[400px] overflow-hidden relative">
                  <motion.img 
                    src={previewData.img} 
                    alt={previewData.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                    Live Preview
                  </div>
                </div>
                <div className="p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-[1px] bg-accent" />
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Signature Concept</span>
                  </div>
                  <h3 className="text-4xl mb-4 text-secondary">{previewData.title}</h3>
                  <p className="text-secondary/60 mb-10 leading-relaxed">
                    {previewData.description} Our team will curate a bespoke collection of premium flowers including 
                    {eventType.id === 'wedding' ? ' Peonies, Ranunculus, and Garden Roses' : 
                     eventType.id === 'corporate' ? ' Orchids, Calla Lilies, and Anthuriums' : 
                     ' Tulips, Hydrangeas, and Vibrant Dahlias'} 
                    tailored to your {budget > 20000 ? 'grand-scale' : 'intimate'} vision.
                  </p>
                  <button className="w-full py-6 bg-secondary text-primary rounded-full font-medium tracking-widest uppercase text-xs hover:bg-accent hover:text-primary transition-all shadow-lg">
                    Request This Design
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
