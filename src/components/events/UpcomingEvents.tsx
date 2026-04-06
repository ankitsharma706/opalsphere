import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from 'lucide-react';
import { UPCOMING_EVENTS } from '../../data/eventsData';

export function UpcomingEvents() {
  return (
    <section className="py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Limited Availability</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1F3D2B] mb-6 leading-tight">Upcoming Experiences</h2>
            <p className="text-[#1F3D2B]/60 text-lg font-light leading-relaxed">
              Join us for exclusive masterclasses, seasonal showcases, and luxury event design summits. Reserve your spot before they bloom.
            </p>
          </div>
          <div className="flex items-center space-x-4 px-8 py-4 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40 shadow-sm">
            <Sparkles size={16} className="text-[#E8B4B8]" />
            <span>Updated 2 hours ago</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {UPCOMING_EVENTS.map((event, index) => {
            const isLowAvailability = event.availableSlots <= 5;
            const progress = (event.availableSlots / event.totalSlots) * 100;

            return (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.type} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 right-8 px-6 py-2 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    ${event.price}
                  </div>
                  {isLowAvailability && (
                    <div className="absolute top-8 left-8 px-6 py-2 bg-[#E8B4B8] text-white rounded-full text-[8px] font-bold uppercase tracking-widest shadow-xl animate-pulse">
                      Limited Spots
                    </div>
                  )}
                </div>

                <div className="p-12 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-[#1F3D2B] group-hover:text-[#E8B4B8] transition-colors duration-500">{event.type}</h3>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-3">
                        <Calendar size={14} className="text-[#1F3D2B]/30" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin size={14} className="text-[#1F3D2B]/30" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center space-x-3">
                        <Users size={14} className="text-[#1F3D2B]/30" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{event.availableSlots} Slots Left</span>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[#1F3D2B]/20">{Math.round(progress)}% Capacity</span>
                    </div>
                    <div className="h-1 bg-[#FAF9F6] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${100 - progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-[#E8B4B8]"
                      />
                    </div>
                  </div>

                  <button className="w-full py-5 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 shadow-xl flex items-center justify-center space-x-3">
                    <span>Reserve Spot</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
