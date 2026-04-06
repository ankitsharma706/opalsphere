import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, DollarSign, Sparkles, ArrowRight, Quote } from 'lucide-react';
import { PastEvent } from '../../data/eventsData';

interface EventDetailModalProps {
  event: PastEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1F3D2B]/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm text-[#1F3D2B] flex items-center justify-center hover:bg-[#1F3D2B] hover:text-white transition-all duration-300 shadow-lg"
            >
              <X size={24} />
            </button>

            {/* Hero Image */}
            <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Case Study</span>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">{event.title}</h2>
                <div className="flex items-center space-x-8 text-white/80">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{event.theme}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-12 md:p-20 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                <div className="lg:col-span-2 space-y-16">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-serif text-[#1F3D2B]">The Narrative</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8B4B8]">The Challenge</span>
                        <p className="text-[#1F3D2B]/60 text-sm font-light leading-relaxed">{event.story.problem}</p>
                      </div>
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8B4B8]">The Solution</span>
                        <p className="text-[#1F3D2B]/60 text-sm font-light leading-relaxed">{event.story.solution}</p>
                      </div>
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8B4B8]">The Outcome</span>
                        <p className="text-[#1F3D2B]/60 text-sm font-light leading-relaxed">{event.story.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-3xl font-serif text-[#1F3D2B]">Visual Journey</h3>
                    <div className="grid grid-cols-2 gap-8">
                      {event.gallery.map((img, i) => (
                        <div key={i} className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#FAF9F6] group">
                          <img 
                            src={img} 
                            alt={`Gallery ${i}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="bg-[#FAF9F6] p-10 rounded-[2.5rem] space-y-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Event Details</h4>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-[#1F3D2B]/5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Category</span>
                        <span className="text-sm font-serif text-[#1F3D2B]">{event.category}</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-[#1F3D2B]/5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Design Theme</span>
                        <span className="text-sm font-serif text-[#1F3D2B]">{event.designTheme}</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-[#1F3D2B]/5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Budget Estimate</span>
                        <span className="text-sm font-serif text-[#1F3D2B]">${event.budgetEstimate.toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="w-full py-5 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 shadow-xl flex items-center justify-center space-x-3">
                      <span>Book Similar Experience</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  <div className="relative p-10 bg-[#E8B4B8]/10 rounded-[2.5rem] overflow-hidden group">
                    <Quote className="absolute top-6 right-6 text-[#E8B4B8]/20 group-hover:text-[#E8B4B8]/40 transition-colors" size={40} />
                    <p className="text-[#1F3D2B] font-serif italic text-lg mb-6 leading-relaxed">
                      "OpalSphere didn't just decorate our wedding; they built a world that felt like us."
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-white" />
                      <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]">The Rosewoods</h5>
                        <p className="text-[8px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Napa Valley, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
