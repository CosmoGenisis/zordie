
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight, PlayCircle } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from '@/hooks';

const HeroSection = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const containerRef = useRef(null);
  const floatingCardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
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
        duration: 2 + (index * 0.2),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3
      });
      
      gsap.to(card, {
        opacity: 1,
        duration: 0.5,
        delay: 0.2 + (index * 0.1)
      });
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-grid-white dark:bg-grid-black opacity-20"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-radial from-accent1/10 via-transparent to-transparent"></div>
      </motion.div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zordie-500/20 dark:bg-zordie-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent1/20 dark:bg-accent1/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div 
            className="md:col-span-6"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants} className="mb-4 flex items-center">
              <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-zordie-600 to-accent1 rounded-full shadow-sm">
                AI-Powered Hiring
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="block mb-2">Your goals deserve</span>
              <span className="block hero-title">game-changers.</span>
              <span className="block">We find them with Zordie.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              variants={itemVariants}
            >
              An AI-powered verified hiring platform that eliminates fake resumes and brings trust to the hiring process.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link to="/dashboard-selector">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1-hover text-white relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started 
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span 
                    className="absolute top-0 left-0 w-full h-full bg-white opacity-20"
                    initial={{ x: '-100%' }}
                    animate={{ x: ['100%'] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-zordie-600/20 to-accent1/20 group-hover:h-full transition-all duration-300 -z-1"></span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 text-sm text-gray-500 dark:text-gray-400 flex items-center"
              variants={itemVariants}
            >
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-zordie-900"
                  />
                ))}
              </div>
              <span>Trusted by 2,000+ hiring managers worldwide</span>
            </motion.div>
          </motion.div>
          
          {/* Right column - 3D Dashboard UI */}
          <motion.div 
            className="md:col-span-6 relative h-[500px]"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Main dashboard mockup */}
            <motion.div 
              className="absolute top-0 right-0 w-full md:w-[120%] h-auto rounded-xl shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <img 
                src="https://cdn.pixabay.com/photo/2018/09/07/19/05/dashboard-3660811_1280.jpg" 
                alt="Zordie Dashboard" 
                className="w-full h-auto rounded-xl object-cover border border-gray-200 dark:border-zordie-700"
              />
              
              {/* Floating cards */}
              <div ref={floatingCardsRef} className="absolute inset-0">
                {/* Candidate card */}
                <div className="floating-card absolute top-20 -left-10 opacity-0 bg-white dark:bg-zordie-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-zordie-700 max-w-[200px]">
                  <div className="flex items-center mb-3">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Candidate" className="w-12 h-12 rounded-full mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Sarah Johnson</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Frontend Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">98% Match</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs">Verified</span>
                  </div>
                </div>
                
                {/* AI Analysis card */}
                <div className="floating-card absolute bottom-40 -right-10 opacity-0 bg-white dark:bg-zordie-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-zordie-700 max-w-[220px]">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI Analysis Complete</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Technical Skills</span>
                      <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-zordie-500" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Communication</span>
                      <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-zordie-500" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Culture Fit</span>
                      <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-zordie-500" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats card */}
                <div className="floating-card absolute top-40 right-10 opacity-0 bg-white dark:bg-zordie-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-zordie-700 max-w-[180px]">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Hiring Stats</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Time saved</p>
                        <p className="font-medium text-gray-900 dark:text-white">68 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Candidates</p>
                        <p className="font-medium text-gray-900 dark:text-white">215 verified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
