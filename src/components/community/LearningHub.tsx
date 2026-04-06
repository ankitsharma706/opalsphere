import React from 'react';
import { motion } from 'motion/react';
import { courses } from '../../data/communityData';
import { Play, Clock, BarChart, ArrowRight } from 'lucide-react';

export function LearningHub() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Masterclass Series</span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-6">Learning Hub</h2>
            <p className="text-secondary/50 text-sm leading-relaxed">
              Elevate your craft with exclusive courses from world-renowned floral designers and event stylists.
            </p>
          </div>
          <button className="px-10 py-5 bg-secondary text-primary rounded-full font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all shadow-xl">
            Start Learning
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-secondary shadow-2xl"
                  >
                    <Play size={32} fill="currentColor" />
                  </motion.div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                  <span className="bg-primary/90 backdrop-blur-md text-accent text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-accent/10">
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-2 text-primary/80 text-[10px] font-bold uppercase tracking-widest">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <h3 className="text-2xl font-serif text-secondary mb-4 group-hover:text-accent transition-colors">{course.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <BarChart size={14} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Instructor: {course.instructor}</span>
                  </div>
                  <ArrowRight size={20} className="text-secondary/20 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
