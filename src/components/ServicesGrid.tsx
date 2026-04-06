import React from 'react';
import { motion } from 'motion/react';
import { Flower, Landmark, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 1,
    title: "Royal Weddings",
    description: "Grand scale floral installations for your most sacred celebration.",
    icon: <Heart size={24} />,
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    color: "bg-[#FDF6F6]"
  },
  {
    id: 2,
    title: "Corporate Gala",
    description: "Sophisticated arrangements that embody your brand's excellence.",
    icon: <Landmark size={24} />,
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600",
    color: "bg-[#F6F8FD]"
  },
  {
    id: 3,
    title: "Private Events",
    description: "Intimate floral designs for birthdays, anniversaries, and more.",
    icon: <Sparkles size={24} />,
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=600",
    color: "bg-[#F6FDF9]"
  },
  {
    id: 4,
    title: "Daily Luxury",
    description: "Curated weekly subscriptions for your home and office.",
    icon: <Flower size={24} />,
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600",
    color: "bg-[#FDFCF6]"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium tracking-widest uppercase text-xs mb-4 block"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif text-secondary mb-8">The Alchemy of <span className="italic">Transformation</span></h2>
          <p className="text-secondary/50 max-w-2xl mx-auto text-lg leading-relaxed">
            From the grandest ballrooms to your morning coffee table, we bring a touch of the divine to every space with our masterfully curated floral designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[3rem] p-10 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/5 ${service.color} border border-transparent hover:border-accent/10`}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-accent mb-12 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif text-secondary mb-4">{service.title}</h3>
                <p className="text-secondary/60 text-sm leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>

                <div className="flex items-center space-x-2 text-accent text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span>Explore More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Background Image on Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <Link 
              to="/booking" 
              className="inline-flex items-center space-x-4 px-10 py-5 bg-secondary text-primary rounded-full font-medium tracking-widest uppercase text-xs hover:bg-accent transition-all group shadow-xl"
            >
              <span>Custom Consultation</span>
              <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
            </Link>
        </div>
      </div>
    </section>
  );
}
