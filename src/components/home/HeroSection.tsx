
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight, PlayCircle, Bot, Zap, Users, Shield, Brain } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from '@/hooks';
import GradientText from './GradientText';

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

  return (
    <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden bg-white dark:bg-blue-dark-900" ref={containerRef}>
      {/* Animated background with custom colors */}
      <motion.div 
        className="absolute inset-0 z-0 custom-grid-bg" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-radial from-blue-custom-500/10 via-transparent to-orange-custom-500/10 dark:from-orange-custom-500/20 dark:to-blue-dark-500/10"></div>
      </motion.div>
      
      {/* Glow effects with custom colors */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-custom-500/20 dark:bg-blue-custom-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-custom-500/20 dark:bg-orange-custom-500/15 rounded-full blur-3xl"></div>
      
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
              <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-custom-main dark:bg-custom-secondary rounded-full shadow-sm">
                <Bot className="w-4 h-4 mr-2" />
                Multi-Agentic HR AI
              </span>
            </motion.div>
            
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-blue-dark-800 dark:text-white" variants={itemVariants}>
              <span className="block mb-2">Revolutionizing</span>
              <GradientText gradient="zordie" className="block">
                Human Resources
              </GradientText>
              <span className="block mt-2">Through AI Intelligence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-blue-dark-600 dark:text-white/90 mb-8 max-w-lg" 
              variants={itemVariants}
            >
              The next-generation, multi-agentic HR automation platform with 10 specialized AI agents working in perfect harmony through our revolutionary ARC ecosystem.
            </motion.p>

            {/* Key stats with custom colors */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold custom-orange-text">80%</div>
                <div className="text-sm text-blue-dark-600 dark:text-white/70">Faster Hiring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold custom-blue-text">100%</div>
                <div className="text-sm text-blue-dark-600 dark:text-white/70">Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold custom-blue-dark-text">10</div>
                <div className="text-sm text-blue-dark-600 dark:text-white/70">AI Agents</div>
              </div>
            </motion.div>
            
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Link to="/dashboard-selector">
                <Button 
                  size="lg" 
                  className="btn-custom-main relative overflow-hidden group w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center">
                    Join Pre-Access Program
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group relative overflow-hidden w-full sm:w-auto custom-animated-border text-blue-dark-700 dark:text-white"
              >
                <span className="relative z-10 flex items-center">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 text-sm text-blue-dark-500 dark:text-white/60 flex items-center" 
              variants={itemVariants}
            >
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-blue-dark-900" 
                  />
                ))}
              </div>
              <span>Trusted by 5,000+ HR professionals worldwide</span>
            </motion.div>
          </motion.div>
          
          {/* Right column - ARC System Visualization */}
          <motion.div 
            className="md:col-span-6 relative"
            variants={containerVariants}
            initial="hidden" 
            animate={controls}
          >
            <div className="relative aspect-[5/3] w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-lg mx-auto overflow-hidden rounded-xl" ref={floatingCardsRef}>
                  
                  {/* Main ARC Dashboard with custom colors */}
                  <div className="floating-card opacity-0 relative overflow-hidden rounded-xl custom-card custom-glow">
                    {/* Header */}
                    <div className="p-4 border-b border-blue-custom-100 dark:border-blue-dark-800 flex justify-between items-center bg-blue-custom-50 dark:bg-blue-dark-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-orange-custom-500"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-custom-500"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-dark-500"></div>
                      </div>
                      <div className="text-xs font-medium text-blue-dark-600 dark:text-white">ARC Ecosystem Control</div>
                      <div className="w-4"></div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="p-5 bg-white dark:bg-blue-dark-900">
                      <div className="mb-5 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-blue-dark-900 dark:text-white">AI Agents Status</h3>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 rounded-full bg-blue-custom-100 dark:bg-blue-custom-500/20 flex items-center justify-center">
                            <Bot className="w-4 h-4 custom-blue-text dark:text-white" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                      </div>
                      
                      {/* AI Agents Grid with custom colors */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="rounded-lg bg-blue-custom-50 dark:bg-blue-dark-800 p-3 flex flex-col custom-animated-border">
                          <span className="text-xs text-blue-dark-500 dark:text-white/70">Prime HR</span>
                          <span className="text-sm font-semibold text-blue-dark-900 dark:text-white">Active</span>
                          <div className="w-full bg-blue-custom-200 dark:bg-blue-dark-700 rounded-full h-1 mt-1">
                            <div className="bg-custom-main h-1 rounded-full w-[95%]"></div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-blue-custom-50 dark:bg-blue-dark-800 p-3 flex flex-col custom-animated-border">
                          <span className="text-xs text-blue-dark-500 dark:text-white/70">Optimus</span>
                          <span className="text-sm font-semibold text-blue-dark-900 dark:text-white">Recruiting</span>
                          <div className="w-full bg-blue-custom-200 dark:bg-blue-dark-700 rounded-full h-1 mt-1">
                            <div className="bg-custom-blue-dark h-1 rounded-full w-[78%]"></div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-blue-custom-50 dark:bg-blue-dark-800 p-3 flex flex-col custom-animated-border">
                          <span className="text-xs text-blue-dark-500 dark:text-white/70">Monica</span>
                          <span className="text-sm font-semibold text-blue-dark-900 dark:text-white">Calling</span>
                          <div className="w-full bg-blue-custom-200 dark:bg-blue-dark-700 rounded-full h-1 mt-1">
                            <div className="bg-custom-secondary h-1 rounded-full w-[85%]"></div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-blue-custom-50 dark:bg-blue-dark-800 p-3 flex flex-col custom-animated-border">
                          <span className="text-xs text-blue-dark-500 dark:text-white/70">Nova</span>
                          <span className="text-sm font-semibold text-blue-dark-900 dark:text-white">Assessing</span>
                          <div className="w-full bg-blue-custom-200 dark:bg-blue-dark-700 rounded-full h-1 mt-1">
                            <div className="bg-custom-main h-1 rounded-full w-[92%]"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Current Operations */}
                      <div className="rounded-lg border border-blue-custom-100 dark:border-blue-dark-800 overflow-hidden">
                        <div className="p-3 bg-blue-custom-50 dark:bg-blue-dark-900 text-xs font-medium text-blue-dark-700 dark:text-white">
                          Current Operations
                        </div>
                        <div className="divide-y divide-blue-custom-100 dark:divide-blue-dark-800">
                          <div className="p-3 flex items-center justify-between bg-white dark:bg-blue-dark-900">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-blue-custom-100 dark:bg-orange-custom-500/20 flex items-center justify-center text-xs font-medium text-blue-custom-600 dark:text-white">OP</div>
                              <div>
                                <div className="text-sm font-medium text-blue-dark-900 dark:text-white">Optimus</div>
                                <div className="text-xs text-blue-dark-500 dark:text-white/70">Screening 127 candidates</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs font-medium text-blue-dark-700 dark:text-white">Live</span>
                            </div>
                          </div>
                          <div className="p-3 flex items-center justify-between bg-white dark:bg-blue-dark-900">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-orange-custom-100 dark:bg-orange-custom-500/20 flex items-center justify-center text-xs font-medium text-orange-custom-600 dark:text-white">MO</div>
                              <div>
                                <div className="text-sm font-medium text-blue-dark-900 dark:text-white">Monica</div>
                                <div className="text-xs text-blue-dark-500 dark:text-white/70">Scheduling 23 interviews</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs font-medium text-blue-dark-700 dark:text-white">Live</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating agent activity card with custom colors */}
                  <div className="absolute floating-card opacity-0 top-16 -right-8 w-64 p-3 custom-card custom-glow">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-blue-dark-800 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-green-600 custom-blue-text" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-blue-dark-900 dark:text-white">Nova Assessment Complete</h4>
                        <p className="text-xs text-blue-dark-500 dark:text-white/70">AI analysis shows 94% skill match for Senior Developer role.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating efficiency card with custom gradient */}
                  <div className="absolute floating-card opacity-0 bottom-24 -left-10 w-48 p-3 bg-custom-main dark:bg-custom-secondary rounded-lg shadow-lg text-white">
                    <h4 className="text-xs uppercase font-semibold opacity-80 mb-1">ARC Efficiency</h4>
                    <p className="text-2xl font-bold">97.3%</p>
                    <div className="flex items-center mt-1">
                      <div className="h-1 bg-white/30 rounded-full flex-grow">
                        <div className="h-1 bg-white rounded-full w-[97%]"></div>
                      </div>
                      <span className="text-xs ml-2">System Performance</span>
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
