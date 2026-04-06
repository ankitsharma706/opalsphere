import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';

const STEPS = [
  {
    id: 1,
    title: "The Visionary Seed",
    description: "Every masterpiece begins in the quietude of a dream. We perceive the hidden potential within every environment, envisioning a landscape where nature meets architectural grandeur.",
    img: "https://img.etimg.com/thumb/width-1200%2Cheight-900%2Cimgsize-2896417%2Cresizemode-75%2Cmsid-112530385/magazines/luxury/opulent-floral-creations-inside-the-extravagant-world-of-high-end-event-decor.jpg",
    accent: "Discovery"
  },
  {
    id: 2,
    title: "The Alchemist's Palette",
    description: "Our floral architects meticulously curate a palette of the world's rarest blooms. Each stem is chosen for its soul, its fragrance, and its ability to evoke a specific emotion.",
    img: "https://image.wedmegood.com/resized/720X/uploads/member/4625398/1695213368_Screenshot_2023_09_20_180416.png",
    accent: "Artistry"
  },
  {
    id: 3,
    title: "The Living Sculpture",
    description: "In the hands of our masters, individual petals become a symphony. We hand-weave nature into your architecture, creating installations that breathe and move with the room.",
    img: "https://thursd.com/storage/media/67606/Stunning-floral-decor-by-Jeff-Leatham-and-Manish-Malhotra.jpg",
    accent: "Craftsmanship"
  },
  {
    id: 4,
    title: "The Transcendent Space",
    description: "The unveiling of a new reality. An atmosphere that doesn't just decorate a room, but transports its guests into a realm of pure, floral transcendence.",
    img: "https://assets.usestyle.ai/i/12bdd2f5-70c3-4ebc-8c16-bfa947ac5a5b",
    accent: "Experience"
  }
];

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax for the main title - ensuring it starts from a centered position
  const titleY = useTransform(smoothProgress, [0, 1], [0, -150]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-primary z-0">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center h-full">
            
            {/* Left Column: Story Text */}
            <div className="relative h-[60vh] flex flex-col justify-center">
              <motion.div 
                style={{ y: titleY, opacity: titleOpacity }}
                className="absolute top-0 left-0"
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-accent font-medium tracking-widest uppercase text-xs mb-4 block"
                >
                  The Journey
                </motion.span>
                <h2 className="text-4xl md:text-6xl mb-12">A Story of <br /><span className="italic">Transformation</span></h2>
              </motion.div>
              
              <div className="relative h-full flex items-center">
                {/* Vertical Progress Line */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-secondary/10">
                  <motion.div 
                    style={{ scaleY: smoothProgress }}
                    className="w-full h-full bg-accent origin-top"
                  />
                </div>

                {STEPS.map((step, i) => (
                  <StepContent 
                    key={step.id} 
                    step={step} 
                    index={i} 
                    total={STEPS.length} 
                    progress={smoothProgress} 
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Image Display */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-accent/10">
              {STEPS.map((step, i) => (
                <StepImage 
                  key={step.id} 
                  step={step} 
                  index={i} 
                  total={STEPS.length} 
                  progress={smoothProgress} 
                />
              ))}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepContent({ step, index, total, progress }: { step: any, index: number, total: number, progress: MotionValue<number>, key?: any }) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(progress, 
    [start - 0.1, start, end, end + 0.1], 
    [0, 1, 1, 0]
  );
  
  const y = useTransform(progress, [start, end], [60, -60]);
  const x = useTransform(progress, [start, end], [20, 0]);

  return (
    <motion.div 
      style={{ opacity, y, x }}
      className="pl-12 absolute inset-0 flex flex-col justify-center pointer-events-none"
    >
      <motion.span 
        className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block"
      >
        Step 0{step.id} — {step.accent}
      </motion.span>
      <h3 className="text-4xl md:text-5xl mb-6 text-secondary font-serif italic leading-tight">{step.title}</h3>
      <p className="text-secondary/60 text-lg leading-relaxed max-w-md font-light">
        {step.description}
      </p>
    </motion.div>
  );
}

function StepImage({ step, index, total, progress }: { step: any, index: number, total: number, progress: MotionValue<number>, key?: any }) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [1.1, 1]);
  const y = useTransform(progress, [start, end], [20, -20]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0"
    >
      <img 
        src={step.img} 
        alt={step.title} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
