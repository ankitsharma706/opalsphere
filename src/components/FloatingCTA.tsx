import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, X, ArrowRight, Sparkles } from 'lucide-react';

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(31,61,43,0.15)] border border-accent/10 w-[350px] mb-6 relative overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-serif mb-2">Book Your Event</h3>
                  <p className="text-secondary/50 text-xs uppercase tracking-widest font-bold">Start your journey</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 mb-2 block">Event Type</label>
                  <select className="w-full bg-primary/30 border-none rounded-2xl px-6 py-4 text-sm text-secondary focus:ring-1 focus:ring-accent transition-all appearance-none">
                    <option>Wedding</option>
                    <option>Corporate</option>
                    <option>Birthday</option>
                    <option>Private Gala</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 mb-2 block">Preferred Date</label>
                  <input type="date" className="w-full bg-primary/30 border-none rounded-2xl px-6 py-4 text-sm text-secondary focus:ring-1 focus:ring-accent transition-all" />
                </div>

                <button className="w-full py-5 bg-secondary text-primary rounded-full font-medium tracking-widest uppercase text-[10px] hover:bg-accent hover:text-primary transition-all shadow-lg flex items-center justify-center group">
                  <span>Check Availability</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-2 text-accent text-[10px] font-bold uppercase tracking-widest">
                <Sparkles size={12} />
                <span>Luxury Guaranteed</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-accent text-primary rotate-90' : 'bg-secondary text-primary'
        }`}
      >
        {isOpen ? <X size={32} /> : <Calendar size={32} />}
      </motion.button>
    </div>
  );
}
