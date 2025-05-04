
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Initialize 3D animation
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (canvas) {
      initializeAnimation(canvas);
    }
  }, []);

  // Function to set up the 3D animation
  const initializeAnimation = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let particles: Particle[] = [];
    const particleCount = 50;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance/1000})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    // Resize canvas when window size changes
    window.addEventListener('resize', () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    });
    
    init();
    animate();
  };

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-r from-zordie-900 to-zordie-800 text-white py-24 md:py-32 overflow-hidden"
    >
      <canvas 
        id="hero-canvas" 
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Revolutionize Your Hiring Process with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Zordie combines intelligent screening, automated assessments, and interactive interviews to help you find the perfect candidates faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link to="/dashboard-selector">
                <Button size="lg" className="btn-gradient text-white font-medium px-8 py-6 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    Get Started 
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-zordie-600 to-accent1 group-hover:opacity-90 transition-opacity"></span>
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="text-white border-white bg-zordie-950 hover:bg-zordie-800 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-zordie-900 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="AI-powered hiring"
              className="w-full h-64 object-cover object-center rounded-lg shadow-2xl"
            />
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-20 animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Average time saved</div>
                  <div className="text-xl font-bold text-zordie-700">23 hours/week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zordie-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent1 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
