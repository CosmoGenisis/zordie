
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight, PlayCircle, Bot, Cpu, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from '@/hooks';

const HeroSection = () => {
  const { theme } = useTheme();
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

  return (
    <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-grid-white dark:bg-grid-black dark:opacity-10 opacity-20" 
        variants={backgroundVariants} 
        initial="hidden" 
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-radial from-accent1/10 via-transparent to-transparent dark:from-darkAccent-red/20"></div>
      </motion.div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zordie-500/20 dark:bg-darkAccent-red/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent1/20 dark:bg-darkAccent-orange/15 rounded-full blur-3xl"></div>
      
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
              <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-zordie-600 to-accent1 dark:from-darkAccent-red dark:to-darkAccent-orange rounded-full shadow-sm">
                AI-Powered Hiring
              </span>
            </motion.div>
            
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" variants={itemVariants}>
              <span className="block mb-2">Your goals</span>
              <span className="block text-blue-600 dark:text-darkAccent-red dark:red-text-shadow">deserve</span>
              <span className="block text-blue-600 dark:text-darkAccent-red dark:red-text-shadow">game-changers.</span>
              <span className="block mt-2">We find them with Zordie.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-white mb-8 max-w-lg" 
              variants={itemVariants}
            >
              An AI-powered verified hiring platform that eliminates fake resumes and brings trust to the hiring process.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Link to="/dashboard-selector">
                <Button 
                  size="lg" 
                  className="bg-blue-purple-gradient hover:bg-blue-purple-gradient-hover dark:bg-red-gradient dark:hover:bg-red-gradient-hover text-white font-medium relative overflow-hidden group w-full sm:w-auto"
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
                className="group relative overflow-hidden w-full sm:w-auto dark:border-darkAccent-red/50 dark:text-white"
              >
                <span className="relative z-10 flex items-center">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-zordie-600/20 to-accent1/20 dark:from-darkAccent-red/20 dark:to-darkAccent-orange/20 group-hover:h-full transition-all duration-300 -z-1"></span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 text-sm text-gray-500 dark:text-gray-400 flex items-center" 
              variants={itemVariants}
            >
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-900" 
                  />
                ))}
              </div>
              <span>Trusted by 2,000+ hiring managers worldwide</span>
            </motion.div>
          </motion.div>
          
          {/* Right column - Hero Illustrations */}
          <motion.div 
            className="md:col-span-6 relative"
            variants={containerVariants}
            initial="hidden" 
            animate={controls}
          >
            {/* Dashboard UI Mockup */}
            <div className="relative aspect-[5/3] w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-lg mx-auto overflow-hidden rounded-xl shadow-xl dark:shadow-darkAccent-red/20" ref={floatingCardsRef}>
                  
                  {/* Main Dashboard Card */}
                  <div className="floating-card opacity-0 relative overflow-hidden rounded-xl border border-gray-200 dark:border-darkAccent-red/30 bg-white dark:bg-dark-900">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-100 dark:border-dark-700 flex justify-between items-center bg-gray-50 dark:bg-dark-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-medium text-gray-600 dark:text-white">Zordie AI Dashboard</div>
                      <div className="w-4"></div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="p-5">
                      <div className="mb-5 flex justify-between items-center">
                        <h3 className="text-lg font-semibold dark:text-white">Candidate Analytics</h3>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-darkAccent-red/20 flex items-center justify-center">
                            <Bot className="w-4 h-4 text-blue-600 dark:text-white" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-darkAccent-red/10 flex items-center justify-center">
                            <Cpu className="w-4 h-4 text-purple-600 dark:text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Chart/Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-5">
                        <div className="rounded-lg bg-gray-50 dark:bg-dark-800 p-3 flex flex-col dark:border dark:border-darkAccent-red/20">
                          <span className="text-xs text-gray-500 dark:text-gray-300">Screened</span>
                          <span className="text-lg font-semibold text-gray-900 dark:text-white">128</span>
                          <span className="text-xs text-green-500 flex items-center mt-1">
                            +12% <ChevronRight className="w-3 h-3 rotate-90" />
                          </span>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-dark-800 p-3 flex flex-col dark:border dark:border-darkAccent-red/20">
                          <span className="text-xs text-gray-500 dark:text-gray-300">Qualified</span>
                          <span className="text-lg font-semibold text-gray-900 dark:text-white">64</span>
                          <span className="text-xs text-green-500 flex items-center mt-1">
                            +8% <ChevronRight className="w-3 h-3 rotate-90" />
                          </span>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-dark-800 p-3 flex flex-col dark:border dark:border-darkAccent-red/20">
                          <span className="text-xs text-gray-500 dark:text-gray-300">Hired</span>
                          <span className="text-lg font-semibold text-gray-900 dark:text-white">12</span>
                          <span className="text-xs text-green-500 flex items-center mt-1">
                            +3% <ChevronRight className="w-3 h-3 rotate-90" />
                          </span>
                        </div>
                      </div>
                      
                      {/* Candidates List */}
                      <div className="rounded-lg border border-gray-100 dark:border-dark-700 overflow-hidden">
                        <div className="p-3 bg-gray-50 dark:bg-dark-800 text-xs font-medium text-gray-700 dark:text-white">
                          Top Candidates
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-dark-700">
                          <div className="p-3 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-darkAccent-red/20 flex items-center justify-center text-xs font-medium text-blue-600 dark:text-white">JD</div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">John Doe</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Front-end Developer</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-xs font-medium text-gray-700 dark:text-white">Verified</span>
                            </div>
                          </div>
                          <div className="p-3 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-darkAccent-red/20 flex items-center justify-center text-xs font-medium text-purple-600 dark:text-white">AS</div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Alice Smith</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">UX Designer</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-xs font-medium text-gray-700 dark:text-white">Verified</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating notification card */}
                  <div className="absolute floating-card opacity-0 top-16 -right-8 w-60 p-3 bg-white dark:red-card rounded-lg shadow-lg dark:shadow-darkAccent-red/20 border dark:border-darkAccent-red/30">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-dark-800/80 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-darkAccent-red" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Candidate Verified</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-300">AI has verified resume authenticity with 98% confidence.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating stats card */}
                  <div className="absolute floating-card opacity-0 bottom-24 -left-10 w-48 p-3 bg-gradient-to-br from-blue-500 to-purple-500 dark:bg-red-gradient rounded-lg shadow-lg text-white">
                    <h4 className="text-xs uppercase font-semibold opacity-80 mb-1">Hiring Efficiency</h4>
                    <p className="text-2xl font-bold">+47%</p>
                    <div className="flex items-center mt-1">
                      <div className="h-1 bg-white/30 rounded-full flex-grow">
                        <div className="h-1 bg-white rounded-full w-[47%]"></div>
                      </div>
                      <span className="text-xs ml-2">vs. Last Month</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
