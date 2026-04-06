import React from 'react';
import { motion } from 'motion/react';

const team = [
  {
    name: 'Elena Rossi',
    specialty: 'Master Floral Designer',
    bio: 'With over 15 years of experience, Elena specializes in grand-scale floral installations for high-end weddings across Europe.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Julian Chen',
    specialty: 'Minimalist Artist',
    bio: 'Julian brings Zen philosophy to floral design with clean lines and intentional negative space, creating serene atmospheres.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Sarah Jenkins',
    specialty: 'Event Experience Expert',
    bio: 'Sarah focuses on the emotional storytelling of every event, ensuring every detail resonates with the couple\'s personal narrative.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Marcus Thorne',
    specialty: 'Bespoke Installation Artist',
    bio: 'Marcus pushes the boundaries of floral art with unconventional materials and bold color palettes, creating truly unique experiences.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
];

export function AboutTeam() {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Team</span>
        <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-10 leading-tight">The Artists of <span className="italic text-accent">OpalSphere</span></h2>
        <p className="text-secondary/50 text-lg leading-relaxed font-light max-w-2xl mx-auto">
          A global collective of passionate artists, designers, and event experts dedicated to the art of celebration.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary/80 text-sm leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif text-secondary mb-2 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{member.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
