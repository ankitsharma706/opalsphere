import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Hero } from '../components/Hero';
import { EventBuilder } from '../components/EventBuilder';
import { ScrollStory } from '../components/ScrollStory';
import { SignatureCollection } from '../components/SignatureCollection';
import { FloralMarket } from '../components/FloralMarket';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { ArtistSection } from '../components/ArtistSection';
import { FloatingCTA } from '../components/FloatingCTA';
import { ParallaxDivider } from '../components/ParallaxDivider';
import { ServicesGrid } from '../components/ServicesGrid';

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="overflow-hidden bg-primary selection:bg-accent/30">
      {/* Cursor Glow Effect */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      />

      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Brand Positioning & Services */}
      <ServicesGrid />

      {/* 3. Scroll Story (The Journey) */}
      <ScrollStory />

      <ParallaxDivider />

      {/* 4. Showcase (Signature Collection) */}
      <SignatureCollection />

      <ParallaxDivider />

      {/* 5. Engagement (Interactive Event Builder) */}
      <EventBuilder />

      {/* 6. Commerce (Floral Market) */}
      <FloralMarket />

      <ParallaxDivider />

      {/* 7. Social Proof & Community */}
      <TestimonialsSlider />
      <ArtistSection />

      {/* 8. Floating CTA */}
      <FloatingCTA />
      
      {/* Footer Spacer */}
      <div className="h-20 bg-primary" />
    </div>
  );
}
