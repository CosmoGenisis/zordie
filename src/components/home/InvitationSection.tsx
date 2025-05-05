
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Gift, Bell, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const InvitationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // GSAP animation for 3D orbs
  useEffect(() => {
    if (!orbsRef.current) return;
    
    const orbs = orbsRef.current.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: index % 2 === 0 ? '20px' : '-20px',
        rotation: index % 2 === 0 ? 15 : -15,
        duration: 2 + (index * 0.2),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3
      });
    });
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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
    <div ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* 3D Background elements */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb absolute top-[10%] left-[10%] w-40 h-40 bg-gradient-to-br from-zordie-300/40 to-zordie-500/40 dark:from-zordie-600/20 dark:to-zordie-800/20 rounded-full blur-xl transform"></div>
        <div className="orb absolute bottom-[20%] right-[15%] w-60 h-60 bg-gradient-to-br from-accent1/30 to-zordie-400/30 dark:from-accent1/20 dark:to-zordie-700/20 rounded-full blur-xl transform"></div>
        <div className="orb absolute top-[40%] right-[10%] w-28 h-28 bg-gradient-to-br from-zordie-200/40 to-zordie-400/40 dark:from-zordie-500/20 dark:to-zordie-700/20 rounded-full blur-lg transform"></div>
        <div className="orb absolute bottom-[15%] left-[20%] w-32 h-32 bg-gradient-to-br from-zordie-400/30 to-accent1/30 dark:from-zordie-600/20 dark:to-accent1/20 rounded-full blur-lg transform"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-gradient-to-r from-zordie-600 to-accent1 dark:from-zordie-700 dark:to-accent1 text-white rounded-2xl shadow-xl overflow-hidden relative"
        >
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-zordie-600/50 to-accent1/50 dark:from-zordie-700/50 dark:to-accent1/50 z-0"></div>
          
          {/* Geometric shapes */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div 
              className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute left-1/4 -bottom-24 w-48 h-48 bg-white/10 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
            <div className="absolute left-10 top-10 w-6 h-6 bg-white/20 rounded-full"></div>
            <div className="absolute right-1/4 top-1/3 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute left-1/3 bottom-10 w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <motion.div variants={itemVariants} className="md:col-span-7">
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                  variants={itemVariants}
                >
                  Join Our <span className="bg-white text-zordie-700 px-2 rounded">Verified</span> <br />
                  Hiring Community
                </motion.h2>
                <motion.p 
                  className="text-lg text-white/90 mb-8 max-w-lg"
                  variants={itemVariants}
                >
                  Take advantage of AI-powered hiring and verification to transform how you find talent or get hired. Join thousands of companies and job seekers already benefiting from Zordie.
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={itemVariants}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-zordie-700 hover:bg-zordie-50 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started For Free
                      <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.span 
                      className="absolute top-0 left-0 w-full h-full bg-zordie-100 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Book a Demo
                    </span>
                    <motion.span 
                      className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="md:col-span-5"
              >
                <div className="space-y-6">
                  <InvitationCard 
                    icon={<Mail className="h-6 w-6 text-zordie-700" />}
                    title="Weekly AI Insights"
                    description="Get the latest AI hiring trends and tips delivered to your inbox."
                  />
                  
                  <InvitationCard 
                    icon={<Gift className="h-6 w-6 text-zordie-700" />}
                    title="Exclusive Benefits"
                    description="Early access to new features and special promotions."
                  />
                  
                  <InvitationCard 
                    icon={<Bell className="h-6 w-6 text-zordie-700" />}
                    title="Job Alerts"
                    description="Be the first to know about new job opportunities that match your skills."
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const InvitationCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white/90 p-4 rounded-lg flex items-start gap-4 transform hover:scale-105 transition-transform duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="w-10 h-10 rounded-full bg-zordie-100 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-zordie-800 mb-1">{title}</h4>
        <p className="text-sm text-zordie-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default InvitationSection;
