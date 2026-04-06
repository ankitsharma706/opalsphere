import React from 'react';
import { motion, useInView } from 'motion/react';

function Counter({ value, label }: { value: number, label: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-12 bg-white rounded-[40px] border border-accent/5 shadow-sm hover:shadow-xl transition-all duration-500">
      <motion.span 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        className="text-6xl md:text-8xl font-serif text-accent block mb-6"
      >
        {count}+
      </motion.span>
      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40">{label}</span>
    </div>
  );
}

export function AboutImpact() {
  return (
    <section className="py-40 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Impact</span>
        <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-10 leading-tight">The Reach of <span className="italic text-accent">OpalSphere</span></h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Counter value={8400} label="Events Completed" />
          <Counter value={120} label="Cities Served" />
          <Counter value={15200} label="Happy Clients" />
        </div>
      </div>
    </section>
  );
}
