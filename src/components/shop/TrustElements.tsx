import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Sparkles, Heart, Star, Quote } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: 'Freshness Guarantee', desc: 'Hand-picked daily from our sustainable global gardens.' },
  { icon: Truck, title: 'White-Glove Delivery', desc: 'Temperature-controlled transport for pristine arrivals.' },
  { icon: Sparkles, title: 'Artisan Craftsmanship', desc: 'Every arrangement is a unique, handcrafted masterpiece.' },
  { icon: Heart, title: 'Sustainable Sourcing', desc: 'Committed to ethical farming and eco-friendly packaging.' }
];

const REVIEWS = [
  { name: 'Sophia Loren', role: 'Wedding Planner', text: 'OpalSphere transformed our gala into a botanical dream. The quality is unmatched.', rating: 5 },
  { name: 'Julian Rossi', role: 'Corporate Client', text: 'The weekly office arrangements bring a sense of calm and luxury to our workspace.', rating: 5 },
  { name: 'Elena Moretti', role: 'Private Client', text: 'The custom builder allowed me to create the perfect anniversary gift. Simply stunning.', rating: 5 }
];

export function TrustElements() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-40">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#1F3D2B] mx-auto mb-8 group-hover:bg-[#E8B4B8] group-hover:text-white transition-all duration-500 shadow-sm">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-[#1F3D2B] mb-4">{item.title}</h3>
              <p className="text-[#1F3D2B]/60 text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Minimal Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#FAF9F6] p-12 rounded-[3rem] relative group hover:bg-white hover:shadow-2xl transition-all duration-700"
            >
              <Quote className="absolute top-10 right-10 text-[#E8B4B8]/20 group-hover:text-[#E8B4B8]/40 transition-colors" size={40} />
              <div className="flex space-x-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#E8B4B8] text-[#E8B4B8]" />
                ))}
              </div>
              <p className="text-lg font-serif text-[#1F3D2B] mb-10 italic leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]">{review.name}</h4>
                <p className="text-[8px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-[#1F3D2B]">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1920" 
          alt="Floral Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#E8B4B8] font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block"
        >
          The OpalSphere Promise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-serif text-white mb-12 leading-tight"
        >
          Designed for Moments <br />
          <span className="italic text-[#E8B4B8]">That Matter</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-16 py-6 bg-white text-[#1F3D2B] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] hover:text-white transition-all duration-500 shadow-2xl">
            Start Your Order
          </button>
        </motion.div>
      </div>
    </section>
  );
}
