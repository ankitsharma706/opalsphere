import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Star, ArrowRight } from 'lucide-react';

export function Challenges() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary/5 rounded-[60px] p-12 md:p-24 overflow-hidden relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-80 h-80 border border-accent/10 rounded-full flex items-center justify-center -z-10"
          >
            <div className="w-60 h-60 border border-accent/10 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Weekly Challenge</span>
              <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">Design a Minimal <br />Wedding Setup</h2>
              <p className="text-secondary/50 text-lg mb-12 leading-relaxed">
                Showcase your creativity with our weekly design challenges. Submit your best work and get recognized by the global community.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Participants</h4>
                    <p className="text-sm font-bold text-secondary">124 Decorators</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Star size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Prize Pool</h4>
                    <p className="text-sm font-bold text-secondary">$2,500 Credits</p>
                  </div>
                </div>
              </div>

              <button className="px-12 py-6 bg-secondary text-primary rounded-full font-bold tracking-widest uppercase text-xs flex items-center justify-center group shadow-2xl hover:scale-105 transition-all">
                Submit Design <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-3xl shadow-xl border border-accent/5"
              >
                <div className="h-40 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400" 
                    alt="Entry 1" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Top Entry #1</span>
                  <Trophy size={14} className="text-accent" />
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-3xl shadow-xl border border-accent/5 mt-12"
              >
                <div className="h-40 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=400" 
                    alt="Entry 2" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Top Entry #2</span>
                  <Trophy size={14} className="text-accent" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
