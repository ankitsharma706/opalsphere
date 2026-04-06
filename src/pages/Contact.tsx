import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl mb-8">Get in <br /><span className="italic text-accent">Touch</span></h1>
            <p className="text-secondary/60 text-lg mb-12 max-w-md">
              Have a vision for your next event? We'd love to hear from you. Our team is ready to help you create something extraordinary.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Us", value: "hello@opalsphere.com" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 000-1234" },
                { icon: MapPin, label: "Visit Us", value: "123 Luxury Lane, Bloom District" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-full bg-white border border-accent/10 flex items-center justify-center text-accent">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/40 mb-1">{item.label}</h4>
                    <p className="text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-accent/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary/50 mb-2">Name</label>
                  <input type="text" className="w-full bg-primary/50 border border-accent/10 rounded-xl py-4 px-4 focus:outline-none focus:border-accent transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary/50 mb-2">Email</label>
                  <input type="email" className="w-full bg-primary/50 border border-accent/10 rounded-xl py-4 px-4 focus:outline-none focus:border-accent transition-colors" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary/50 mb-2">Subject</label>
                <input type="text" className="w-full bg-primary/50 border border-accent/10 rounded-xl py-4 px-4 focus:outline-none focus:border-accent transition-colors" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary/50 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-primary/50 border border-accent/10 rounded-xl py-4 px-4 focus:outline-none focus:border-accent transition-colors" placeholder="Tell us about your event..."></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-secondary text-primary py-5 rounded-full font-bold tracking-widest uppercase text-xs flex items-center justify-center group"
              >
                Send Message <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
