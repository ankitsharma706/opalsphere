import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, DollarSign, Sparkles } from 'lucide-react';
import { PastEvent } from '../../data/eventsData';

interface PastEventsGridProps {
  events: PastEvent[];
  onEventClick: (event: PastEvent) => void;
}

export function PastEventsGrid({ events, onEventClick }: PastEventsGridProps) {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          <AnimatePresence mode="popLayout">
            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => onEventClick(event)}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-[#FAF9F6] mb-10 relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-[#1F3D2B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="px-8 py-4 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B] shadow-2xl"
                    >
                      View Story
                    </motion.div>
                  </div>

                  <div className="absolute top-8 left-8 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-[0.3em] text-[#1F3D2B]">
                    {event.category}
                  </div>
                </div>

                <div className="space-y-6 px-4">
                  <div className="flex justify-between items-end">
                    <h3 className="text-4xl font-serif text-[#1F3D2B] group-hover:text-[#E8B4B8] transition-colors duration-500">{event.title}</h3>
                    <div className="flex items-center space-x-2 text-[#E8B4B8]">
                      <Sparkles size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{event.theme}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-12 pt-4 border-t border-[#1F3D2B]/5">
                    <div className="flex items-center space-x-3">
                      <MapPin size={14} className="text-[#1F3D2B]/30" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign size={14} className="text-[#1F3D2B]/30" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{event.budgetRange}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {events.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-[#1F3D2B]/40 font-serif text-2xl italic">No creations found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
