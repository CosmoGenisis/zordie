import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight, PlayCircle, Bot, Cpu, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from '@/hooks';
const HeroSection = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const containerRef = useRef(null);
  const floatingCardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3
  });
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // GSAP animation for floating cards
  useEffect(() => {
    if (!floatingCardsRef.current) return;
    const cards = floatingCardsRef.current.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: index % 2 === 0 ? '10px' : '-10px',
        duration: 2 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3
      });
      gsap.to(card, {
        opacity: 1,
        duration: 0.5,
        delay: 0.2 + index * 0.1
      });
    });
  }, []);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  const backgroundVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };
  return <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <motion.div className="absolute inset-0 z-0 bg-grid-white dark:bg-grid-black opacity-20" variants={backgroundVariants} initial="hidden" animate="visible">
        <div className="absolute inset-0 bg-gradient-radial from-accent1/10 via-transparent to-transparent"></div>
      </motion.div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zordie-500/20 dark:bg-zordie-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent1/20 dark:bg-accent1/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div className="md:col-span-6" variants={containerVariants} initial="hidden" animate={controls}>
            <motion.div variants={itemVariants} className="mb-4 flex items-center">
              <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-zordie-600 to-accent1 rounded-full shadow-sm">
                AI-Powered Hiring
              </span>
            </motion.div>
            
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" variants={itemVariants}>
              <span className="block mb-2">Your goals</span>
              <span className="block text-blue-600 dark:text-blue-400">deserve</span>
              <span className="block text-blue-600 dark:text-blue-400">game-changers.</span>
              <span className="block mt-2">We find them with Zordie.</span>
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg" variants={itemVariants}>
              An AI-powered verified hiring platform that eliminates fake resumes and brings trust to the hiring process.
            </motion.p>
            
            {/* Prime AI Assistant Highlight */}
            
            
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Link to="/dashboard-selector">
                <Button size="lg" className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1-hover text-white font-medium relative overflow-hidden group w-full sm:w-auto">
                  <span className="relative z-10 flex items-center">
                    Get Started 
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span className="absolute top-0 left-0 w-full h-full bg-white opacity-20" initial={{
                  x: '-100%'
                }} animate={{
                  x: ['100%']
                }} transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                  repeatDelay: 1
                }} />
                </Button>
              </Link>
              
              <Button size="lg" variant="outline" className="group relative overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-zordie-600/20 to-accent1/20 group-hover:h-full transition-all duration-300 -z-1"></span>
              </Button>
            </motion.div>
            
            <motion.div className="mt-10 text-sm text-gray-500 dark:text-gray-400 flex items-center" variants={itemVariants}>
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map(i => <img key={i} src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-zordie-900" />)}
              </div>
              <span>Trusted by 2,000+ hiring managers worldwide</span>
            </motion.div>
          </motion.div>
          
          {/* Right column - Hero Illustrations */}
          
        </div>
      </div>
    </section>;
};
export default HeroSection;