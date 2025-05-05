
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
            
            {/* Prime AI Assistant Highlight */}
            <motion.div 
              className="mb-8 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/30"
              variants={itemVariants}
            >
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
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link to="/dashboard-selector">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1-hover text-white relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center text-white font-medium">
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
          
          {/* Right column - Dashboard UI */}
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
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Zordie Dashboard" 
                className="w-full h-auto rounded-xl object-cover border border-gray-200 dark:border-zordie-700"
              />
              
              {/* Floating cards */}
              <div ref={floatingCardsRef} className="absolute inset-0">
                {/* Prime AI card */}
                <div className="floating-card absolute top-10 -left-10 opacity-0 bg-white dark:bg-zordie-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-zordie-700 max-w-[220px]">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white ml-2">Prime HR Assistant</h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    I've analyzed 50 candidates and identified 8 top matches for the Senior Developer role.
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-green-600 font-medium dark:text-green-400">AI Powered</span>
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400 rounded-full text-xs">Active</span>
                  </div>
                </div>
                
                {/* Candidate card */}
                <div className="floating-card absolute top-32 -right-10 opacity-0 bg-white dark:bg-zordie-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-zordie-700 max-w-[200px]">
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
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">AI Efficiency</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                        <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Time saved</p>
                        <p className="font-medium text-gray-900 dark:text-white">68 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
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
