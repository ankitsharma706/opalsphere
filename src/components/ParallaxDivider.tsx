import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export function ParallaxDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={containerRef} className="relative h-[40vh] bg-primary overflow-hidden pointer-events-none">
      {/* Soft Floral SVG Waves */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] text-accent/5 opacity-40"
      >
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.2C87.4,-33.3,90.1,-17.7,89.1,-2.4C88.1,12.9,83.4,27.9,75.1,40.8C66.8,53.7,54.9,64.5,41.2,72.4C27.5,80.3,12,85.3,-3.1,90.6C-18.2,95.9,-32.9,101.5,-46.1,97.5C-59.3,93.5,-71,79.9,-79.1,65.2C-87.2,50.5,-91.7,34.7,-93.4,18.9C-95.1,3.1,-94,-12.7,-88.9,-27.1C-83.8,-41.5,-74.7,-54.5,-62.5,-62.8C-50.3,-71.1,-35.1,-74.7,-20.4,-77.8C-5.7,-80.9,8.5,-83.5,23.1,-82.1C37.7,-80.7,52.7,-75.3,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] text-secondary/5 opacity-40"
      >
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M38.1,-65.8C49.1,-58.5,57.7,-48.1,64.3,-36.5C70.9,-24.9,75.5,-12.1,76.1,0.8C76.7,13.7,73.3,26.7,66.4,37.8C59.5,48.9,49.1,58.1,37.1,64.8C25.1,71.5,11.5,75.7,-2.1,79.3C-15.7,82.9,-29.3,85.9,-41.5,81.5C-53.7,77.1,-64.5,65.3,-71.9,52.1C-79.3,38.9,-83.3,24.3,-84.1,9.6C-84.9,-5.1,-82.5,-19.9,-76.1,-33.1C-69.7,-46.3,-59.3,-57.9,-46.9,-64.5C-34.5,-71.1,-20.1,-72.7,-5.7,-71.7C8.7,-70.7,27.1,-73.1,38.1,-65.8Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      {/* Floating Petals */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 360,
              scale: Math.random() * 0.3 + 0.3
            }}
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [Math.random() * 200, Math.random() * -200]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, Math.random() * 180])
            }}
            className="absolute w-6 h-6 text-accent/20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-[1px] bg-secondary/10" />
        <div className="mx-8 w-2 h-2 rounded-full bg-accent/30" />
        <div className="w-24 h-[1px] bg-secondary/10" />
      </div>
    </div>
  );
}
