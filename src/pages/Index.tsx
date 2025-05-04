
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import PartnersSection from '@/components/home/PartnersSection';
import PrimeHRChatbot from '@/components/chatbot/PrimeHRChatbot';
import { motion, useScroll, useSpring } from "framer-motion";
import WavyDivider from '@/components/home/WavyDivider';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Ref for scroll to top button
  const topButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show/hide scroll to top button based on scroll position
    const handleScroll = () => {
      if (topButtonRef.current) {
        if (window.scrollY > 600) {
          topButtonRef.current.classList.remove("opacity-0", "-translate-y-10");
          topButtonRef.current.classList.add("opacity-100", "translate-y-0");
        } else {
          topButtonRef.current.classList.add("opacity-0", "-translate-y-10");
          topButtonRef.current.classList.remove("opacity-100", "translate-y-0");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Layout>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Main content */}
      <div className="bg-gradient-to-b from-white to-indigo-50/50 dark:from-zordie-950 dark:to-zordie-900/50 transition-colors duration-300">
        <HeroSection />
        
        <div className="relative">
          <WavyDivider position="top" color="#f8fafc" className="dark:hidden" />
          <WavyDivider position="top" color="#07294a" className="hidden dark:block" />
          <div className="bg-gray-50 py-16 dark:bg-zordie-900">
            <PartnersSection />
          </div>
          <WavyDivider position="bottom" color="#f8fafc" className="dark:hidden" />
          <WavyDivider position="bottom" color="#07294a" className="hidden dark:block" />
        </div>
        
        <FeaturesSection />
        
        <div className="relative">
          <WavyDivider position="top" color="#f8fafc" className="dark:hidden" />
          <WavyDivider position="top" color="#07294a" className="hidden dark:block" />
          <div className="bg-gray-50 py-16 dark:bg-zordie-900">
            <HowItWorksSection />
          </div>
          <WavyDivider position="bottom" color="#f8fafc" className="dark:hidden" />
          <WavyDivider position="bottom" color="#07294a" className="hidden dark:block" />
        </div>
        
        <TestimonialsSection />
        <PricingSection />
        
        <div className="relative">
          <WavyDivider position="top" color="#f8fafc" height="100px" className="dark:hidden" />
          <WavyDivider position="top" color="#07294a" height="100px" className="hidden dark:block" />
          <div className="bg-gray-50 py-16 dark:bg-zordie-900">
            <CTASection />
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div 
        ref={topButtonRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white dark:bg-zordie-800 border border-gray-200 dark:border-zordie-700 rounded-full p-3 shadow-lg cursor-pointer opacity-0 -translate-y-10 transition-all duration-300 z-40 hover:bg-gray-50 dark:hover:bg-zordie-700"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </div>
      
      <PrimeHRChatbot />
    </Layout>
  );
};

export default Index;
