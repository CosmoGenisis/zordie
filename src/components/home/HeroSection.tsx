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
            <motion.div className="mb-8 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/30" variants={itemVariants}>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Bot className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-indigo-800 dark:text-indigo-300">Meet Prime HR, Your AI Assistant</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Prime HR provides intelligent resume screening, candidate assessment, and interview question generation - all in real-time. Try it by clicking the chat icon in the bottom right!
                  </p>
                </div>
              </div>
            </motion.div>
            
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
          <motion.div className="md:col-span-6 relative h-[500px]" variants={containerVariants} initial="hidden" animate={controls}>
            {/* Main dashboard UI mockup */}
            <motion.div className="absolute z-10 top-0 right-0 w-full md:w-[120%] h-auto" variants={itemVariants} whileHover={{
            scale: 1.02
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 15
          }}>
              <div className="relative bg-white dark:bg-zordie-800 rounded-xl shadow-2xl overflow-hidden">
                {/* Header of the dashboard mockup */}
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 flex items-center justify-between text-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Zordie AI Hiring Dashboard</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-[20%] -right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-[30%] -left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
            
            {/* Floating elements */}
            <div ref={floatingCardsRef} className="absolute inset-0 z-0 pointer-events-none">
              <div className="floating-card opacity-0 absolute top-[10%] right-[5%] bg-white dark:bg-zordie-700/50 p-2 rounded-lg shadow-lg transform rotate-6 w-40">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800/40 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-2">
                    <div className="h-2 w-20 bg-blue-100 dark:bg-blue-800/40 rounded"></div>
                    <div className="h-2 w-12 bg-blue-50 dark:bg-blue-900/20 rounded mt-1"></div>
                  </div>
                </div>
              </div>
              
              <div className="floating-card opacity-0 absolute bottom-[15%] left-[10%] bg-white dark:bg-zordie-700/50 p-2 rounded-lg shadow-lg transform -rotate-3 w-36">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-800/40 flex items-center justify-center">
                    <Bot className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-2">
                    <div className="h-2 w-16 bg-purple-100 dark:bg-purple-800/40 rounded"></div>
                    <div className="h-2 w-10 bg-purple-50 dark:bg-purple-900/20 rounded mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;