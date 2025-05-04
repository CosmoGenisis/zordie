import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown, Lightbulb } from "lucide-react";
import FloatingParticles from "./3d/FloatingParticles";
import SpinningCube from "./3d/SpinningCube";
import BackgroundAnimation from "./3d/BackgroundAnimation";
import GradientText from "./GradientText";
import gsap from "gsap";
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const {
    scrollY
  } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // GSAP animations
    gsap.fromTo(".hero-element", {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Text animation variants
  const titleVariant = {
    hidden: {
      opacity: 0,
      y: 30
    },
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
    hidden: {
      opacity: 0,
      y: 20
    },
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
      boxShadow: "0px 5px 20px rgba(71, 57, 195, 0.3)",
      transition: {
        duration: 0.3
      }
    }
  };
  return <section className="relative min-h-screen w-full overflow-hidden bg-white text-zordie-900">
      {/* Background animations */}
      <BackgroundAnimation className="z-0" />
      
      {/* Interactive Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
        <FloatingParticles className="w-full h-full" particleCount={150} particleColor="rgba(111, 76, 255, 0.25)" />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <motion.div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8 hero-element" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <span className="bg-gradient-to-r from-accent1 to-zordie-500 h-2 w-2 rounded-full mr-2"></span>
              <span className="text-zordie-600 text-sm">Revolutionizing Hiring with AI</span>
            </motion.div>

            <motion.div style={{
            perspective: "1000px"
          }} initial="hidden" animate="visible" custom={0} className="hero-element">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
                <GradientText gradient="primary" animate delay={0.2}>
                  Revolutionize Your 
                </GradientText>
                <br />
                <GradientText gradient="secondary" animate delay={0.4}>
                  Hiring Process with AI
                </GradientText>
              </h1>
            </motion.div>

            <motion.p className="text-xl md:text-2xl text-zordie-600 mb-10 max-w-3xl mx-auto hero-element" variants={titleVariant} initial="hidden" animate="visible" custom={1}>
              Zordie combines intelligent screening, automated assessments, and interactive interviews to help you find the perfect candidates faster than ever.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row justify-center gap-4 hero-element" variants={buttonVariant} initial="hidden" animate="visible">
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
                  <Button variant="outline" size="lg" className="text-zordie-800 border-zordie-300 bg-white py-7 text-lg group hover:bg-zordie-50">
                    <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Watch Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Elements */}
          <div className="relative mx-auto mt-12 flex justify-center">
            {/* 3D Spinning Cube */}
            <motion.div className="absolute -top-20 -right-20 w-80 h-80 opacity-60 hidden md:block" style={{
            opacity
          }}>
              <SpinningCube className="w-full h-full" />
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div className="relative mx-auto mt-8 w-full max-w-4xl hero-element" initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }} style={{
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`
          }}>
              
              
              {/* Floating stats cards */}
              
              
              
            </motion.div>
          </div>

          {/* Scroll down indicator */}
          <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hero-element" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.2,
          duration: 0.5
        }} style={{
          y
        }}>
            <motion.span className="text-sm text-zordie-500 mb-2" animate={{
            y: [0, 5, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }}>
              Scroll to explore
            </motion.span>
            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }}>
              <ChevronDown className="h-5 w-5 text-zordie-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;