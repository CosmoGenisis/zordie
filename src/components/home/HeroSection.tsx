
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, ArrowDown } from "lucide-react";
import FloatingParticles from "./3d/FloatingParticles";
import ThreeDScene from "./3d/ThreeDScene";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateRotation = (intensity = 5) => {
    // Convert 0-1 range to -1 to 1 range
    const x = (mousePosition.x - 0.5) * 2;
    const y = (mousePosition.y - 0.5) * 2;

    return {
      rotateX: -y * intensity, // Negative to make it follow the mouse naturally
      rotateY: x * intensity
    };
  };

  // Text animation variants
  const titleVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  // Button animation variants
  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 20px rgba(71, 57, 195, 0.4)",
      transition: {
        duration: 0.3
      }
    }
  };

  // Stats animation variants
  const statsVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-zordie-950 via-zordie-900 to-zordie-850 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeDScene className="w-full h-full opacity-70" />
      </div>
      
      {/* Interactive Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FloatingParticles className="w-full h-full" particleCount={150} />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center bg-zordie-800/50 backdrop-blur-sm border border-zordie-700/50 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-accent1 to-zordie-400 h-2 w-2 rounded-full mr-2"></span>
              <span className="text-zordie-200 text-sm">Revolutionizing Hiring with AI</span>
            </motion.div>

            <motion.div
              style={{ perspective: "1000px" }}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zordie-100 to-accent1 bg-clip-text text-transparent"
                variants={titleVariant}
                custom={0}
                style={{
                  ...calculateRotation(2),
                }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                Revolutionize Your 
                <br />
                Hiring Process with AI
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-zordie-200 mb-10 max-w-3xl mx-auto"
              variants={titleVariant}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Zordie combines intelligent screening, automated assessments, and interactive interviews to help you find the perfect candidates faster than ever.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.div whileHover="hover" variants={buttonVariant}>
                <Link to="/dashboard-selector">
                  <Button size="lg" className="relative overflow-hidden group bg-gradient-to-r from-zordie-500 to-accent1 border-none text-white font-medium px-8 py-7 text-lg">
                    <span className="relative z-10 flex items-center">
                      Get Started 
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover="hover" variants={buttonVariant}>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="text-white border-white bg-transparent backdrop-blur-sm py-7 text-lg group">
                    <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Watch Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Dashboard Preview */}
          <motion.div 
            className="relative mx-auto mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            style={{
              transformStyle: "preserve-3d",
              ...calculateRotation(3)
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zordie-900 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="AI-powered hiring dashboard"
              className="w-full h-80 object-cover object-center rounded-xl shadow-2xl border border-zordie-700/50"
              style={{
                filter: "brightness(0.9) contrast(1.1)"
              }}
            />
            
            {/* Floating stats cards */}
            <motion.div 
              className="absolute -bottom-5 left-1/4 transform -translate-x-1/2 bg-zordie-800/90 backdrop-blur-sm border border-zordie-700/50 p-4 rounded-lg shadow-xl z-20"
              variants={statsVariant}
              initial="hidden"
              animate="visible"
              custom={0}
              whileHover="hover"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-zordie-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zordie-300">Time saved</div>
                  <div className="text-xl font-bold text-white">23 hours/week</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-5 right-1/4 transform translate-x-1/2 bg-zordie-800/90 backdrop-blur-sm border border-zordie-700/50 p-4 rounded-lg shadow-xl z-20"
              variants={statsVariant}
              initial="hidden"
              animate="visible"
              custom={1}
              whileHover="hover"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-zordie-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zordie-300">Better hires</div>
                  <div className="text-xl font-bold text-white">85% improvement</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll down indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span className="text-sm text-zordie-300 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-5 w-5 text-zordie-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
