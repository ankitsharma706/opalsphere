import React from 'react';
import { motion } from 'motion/react';
import { workshops } from '../../data/communityData';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Workshops() {
  return (
    <section className="relative py-40 bg-primary overflow-hidden">
      {/* Parallax Background Layer */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Live Interaction</span>
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">Live Workshops <br />& Events</h2>
          <p className="text-secondary/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Join real-time sessions with industry leaders to refine your techniques and network with peers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {workshops.map((workshop) => (
            <motion.div 
              key={workshop.id}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-[40px] overflow-hidden border border-accent/5 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Upcoming Date</h4>
                      <p className="text-sm font-bold text-secondary">{workshop.date}</p>
                    </div>
                  </div>
                  <h3 className="text-3xl font-serif text-secondary mb-8 leading-tight group-hover:text-accent transition-colors">{workshop.title}</h3>
                  <div className="flex items-center space-x-4 mb-12">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <User size={18} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Instructor</h4>
                      <p className="text-sm font-bold text-secondary">{workshop.instructor}</p>
                    </div>
                  </div>
                  <button className="w-full py-5 bg-secondary text-primary rounded-full font-bold tracking-widest uppercase text-xs flex items-center justify-center group shadow-xl hover:scale-105 transition-all">
                    Reserve Spot <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
