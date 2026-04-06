import React from 'react';
import { motion } from 'motion/react';
import { Gem, Users, Settings, Calendar } from 'lucide-react';

const values = [
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Sourcing the most exquisite, global-standard blooms and materials for unparalleled beauty.',
  },
  {
    icon: Users,
    title: 'Expert Decorators',
    description: 'A global network of elite floral artists and event stylists with years of experience.',
  },
  {
    icon: Settings,
    title: 'Customized Experiences',
    description: 'Every celebration is unique, and we tailor every detail to reflect your personal story.',
  },
  {
    icon: Calendar,
    title: 'Seamless Booking',
    description: 'Our platform offers a frictionless experience from initial concept to final execution.',
  },
];

export function AboutValueProps() {
  return (
    <section className="py-40 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Why OpalSphere</span>
        <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-10 leading-tight">The Value of <span className="italic text-accent">Excellence</span></h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <motion.div 
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="p-12 bg-white rounded-[40px] border border-accent/5 shadow-sm hover:shadow-2xl transition-all duration-500 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-10 mx-auto group-hover:scale-110 transition-transform duration-500">
                <value.icon size={28} />
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-6 leading-tight group-hover:text-accent transition-colors">{value.title}</h3>
              <p className="text-secondary/50 text-sm leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
