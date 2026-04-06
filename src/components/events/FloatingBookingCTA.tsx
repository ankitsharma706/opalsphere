import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, X, ArrowRight, Sparkles, MapPin, DollarSign } from 'lucide-react';

export function FloatingBookingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-10 right-10 z-[1500] px-10 py-5 bg-[#1F3D2B] text-white rounded-full shadow-2xl flex items-center space-x-4 group hover:bg-[#E8B4B8] transition-all duration-500"
          >
            <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Book Your Event</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#1F3D2B]/40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-2xl p-12"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-[#FAF9F6] text-[#1F3D2B] flex items-center justify-center hover:bg-[#1F3D2B] hover:text-white transition-all duration-300"
              >
                <X size={20} />
              </button>

              <div className="mb-12">
                <div className="w-16 h-16 rounded-full bg-[#E8B4B8]/10 flex items-center justify-center text-[#E8B4B8] mb-8">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-3xl font-serif text-[#1F3D2B] mb-4">Quick Inquiry</h3>
                <p className="text-[#1F3D2B]/60 text-sm font-light leading-relaxed">
                  Tell us about your vision, and our lead designer will reach out within 24 hours.
                </p>
              </div>

              <form className="space-y-8">
                <div className="space-y-6">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3D2B]/30" size={16} />
                    <input 
                      type="text" 
                      placeholder="Event Location"
                      className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border-none rounded-2xl text-xs font-medium focus:ring-1 focus:ring-[#E8B4B8] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3D2B]/30" size={16} />
                    <input 
                      type="date" 
                      className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border-none rounded-2xl text-xs font-medium focus:ring-1 focus:ring-[#E8B4B8] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3D2B]/30" size={16} />
                    <select className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border-none rounded-2xl text-xs font-medium focus:ring-1 focus:ring-[#E8B4B8] transition-all appearance-none">
                      <option>Select Budget Range</option>
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>

                <button className="w-full py-5 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 flex items-center justify-center space-x-4 shadow-xl">
                  <span>Submit Inquiry</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
