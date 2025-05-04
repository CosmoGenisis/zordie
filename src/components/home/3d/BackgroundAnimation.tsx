
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BackgroundAnimationProps {
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const shapes = shapesRef.current;
    const container = containerRef.current;
    
    if (!container || shapes.length === 0) return;

    // Create floating animation for each shape
    shapes.forEach((shape, index) => {
      const xPos = Math.random() * 100 - 50;
      const yPos = Math.random() * 100 - 50;
      const rotation = Math.random() * 360;
      const duration = 10 + Math.random() * 15;
      const delay = index * 0.2;
      
      gsap.set(shape, {
        x: xPos,
        y: yPos,
        rotation: rotation,
        scale: 0.5 + Math.random() * 0.5,
      });
      
      gsap.to(shape, {
        duration: duration,
        x: xPos + Math.random() * 100 - 50,
        y: yPos + Math.random() * 100 - 50,
        rotation: rotation + 180,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      });
    });

    // Parallax effect on scroll
    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.1,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Create an array to hold refs for each shape
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !shapesRef.current.includes(el)) {
      shapesRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient shapes */}
      <div 
        ref={addToRefs}
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-200 to-purple-300 opacity-20 blur-3xl"
      />
      <div 
        ref={addToRefs}
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-200 to-cyan-300 opacity-20 blur-3xl"
      />
      <div 
        ref={addToRefs}
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-200 to-teal-300 opacity-20 blur-3xl"
      />
      <div 
        ref={addToRefs}
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-yellow-200 to-orange-300 opacity-20 blur-3xl"
      />
      <div 
        ref={addToRefs}
        className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-red-200 to-rose-300 opacity-20 blur-3xl"
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;
