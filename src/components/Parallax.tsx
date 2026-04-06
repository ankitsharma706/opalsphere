import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({ children, offset = 50, className }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("relative will-change-transform transform-gpu", className)}
    >
      {children}
    </motion.div>
  );
}
