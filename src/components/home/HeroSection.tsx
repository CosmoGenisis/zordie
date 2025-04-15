
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Zap, ShieldCheck } from "lucide-react";
import * as THREE from "three";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const handlePostJob = async () => {
    try {
      if (user) {
        // Track user action
        await supabase
          .from('user_actions')
          .insert({
            user_id: user.id,
            action_type: 'hero_click',
            action_details: JSON.stringify({
              button: 'post_job',
              location: 'hero_section',
              timestamp: new Date().toISOString()
            })
          });
      }
      
      toast({
        title: "Great choice!",
        description: "Let's get your job posted and find the right candidates."
      });
      
      navigate("/post-job");
    } catch (error) {
      console.error("Error handling post job:", error);
    }
  };

  const handleExploreFeatures = async () => {
    try {
      if (user) {
        // Track user action
        await supabase
          .from('user_actions')
          .insert({
            user_id: user.id,
            action_type: 'hero_click',
            action_details: JSON.stringify({
              button: 'explore_features',
              location: 'hero_section',
              timestamp: new Date().toISOString()
            })
          });
      }
      
      navigate("/features");
    } catch (error) {
      console.error("Error handling explore features:", error);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / (window.innerHeight * 0.7),
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
    renderer.setClearColor(0x000000, 0);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const colorPalette = [
      new THREE.Color(0x1089e9), // zordie primary
      new THREE.Color(0x8B5CF6), // accent1
      new THREE.Color(0x9CA3AF), // gray
    ];
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      
      // Color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true, 
      transparent: true,
      opacity: 0.8,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    let currentRotation = new THREE.Vector2();
    
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotation.x = mouse.y * 0.5;
      targetRotation.y = mouse.x * 0.5;
    };
    
    const onResize = () => {
      if (!canvasRef.current) return;
      
      camera.aspect = window.innerWidth / (window.innerHeight * 0.7);
      camera.updateProjectionMatrix();
      
      renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
    };
    
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth rotation
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      
      particles.rotation.x = currentRotation.x;
      particles.rotation.y = currentRotation.y;
      
      // Gently rotate particles
      particles.rotation.z += 0.001;
      
      // Update particle positions for floating effect
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const xIndex = i;
        const yIndex = i + 1;
        const zIndex = i + 2;
        
        positions[yIndex] += Math.sin(Date.now() * 0.001 + positions[xIndex]) * 0.001;
        positions[xIndex] += Math.cos(Date.now() * 0.001 + positions[zIndex]) * 0.001;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      
      // Clean up
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white" ref={containerRef}>
      <div className="pattern-bg absolute inset-0 bg-hero-pattern opacity-20"></div>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 h-full w-full" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="flex items-center mb-6">
              <span className="px-3 py-1 text-xs font-semibold bg-accent1/10 text-accent1 rounded-full">
                Verified Hiring
              </span>
              <span className="ml-3 px-3 py-1 text-xs font-semibold bg-zordie-100 text-zordie-700 rounded-full">
                AI-Powered
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-title leading-tight animate-fade-in">
              Fast, Verified & Smart Hiring
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
              Eliminate fake resumes, detect copied projects, cut hiring costs, and hire the most authentic talent 
              with AI-powered verification at every step.
            </p>
            
            <div className="space-y-4 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Verified candidate profiles & real projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">AI-powered resume screening & interviews</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Auto-generated job posts & messaging</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button 
                size="lg" 
                className="btn-gradient w-full sm:w-auto transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={handlePostJob}
              >
                Post a Job <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={handleExploreFeatures}
              >
                Explore Features
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="relative rounded-lg shadow-2xl overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt="Zordie AI Hiring Platform"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Stats overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border animate-fade-in hover:scale-105 transition-all duration-300">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-zordie-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Verified Candidates</p>
                    <p className="font-bold text-zordie-700">10,000+</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border animate-fade-in hover:scale-105 transition-all duration-300">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-amber-500 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Faster Hiring</p>
                    <p className="font-bold text-amber-600">73% faster</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border animate-fade-in hover:scale-105 transition-all duration-300">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Fake Resume Detection</p>
                    <p className="font-bold text-green-700">99.4% accurate</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge - replaced animation with static hover effect */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zordie-500 to-accent1 flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Meet Prime</p>
                  <p className="text-xs text-gray-500">Your AI Hiring Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
