
import React, { useRef, useEffect } from 'react';

interface FloatingParticlesProps {
  className?: string;
  count?: number;  // Added this prop to match usage
  color?: string;  // Added this prop to match usage
  opacity?: number; // Added this prop to match usage
  particleCount?: number;  // Keep original prop for backward compatibility
  particleColor?: string;  // Keep original prop for backward compatibility
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ 
  className, 
  count = 100,
  color = 'rgba(111, 76, 255, 0.5)',
  opacity = 0.5,
  particleCount, // Keep original prop for backward compatibility
  particleColor  // Keep original prop for backward compatibility
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Use either new props or fallback to original props for backward compatibility
  const finalCount = particleCount || count;
  const finalColor = particleColor || color;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let mousePosition = { x: 0, y: 0 };
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Create particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = finalColor; // Use the updated color
      }
      
      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Boundary checking - wrap around
        if (this.x < 0) this.x = canvas.offsetWidth;
        if (this.x > canvas.offsetWidth) this.x = 0;
        if (this.y < 0) this.y = canvas.offsetHeight;
        if (this.y > canvas.offsetHeight) this.y = 0;
        
        // React to mouse position
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * 0.5;
          this.y -= Math.sin(angle) * 0.5;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const particles: Particle[] = [];
    
    for (let i = 0; i < finalCount; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            const alpha = opacity * (1 - distance / 1000);
            ctx.strokeStyle = `rgba(111, 76, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [finalCount, finalColor, opacity]);
  
  return <canvas ref={canvasRef} className={className} />;
};

// Export the component as both default and named export
export default FloatingParticles;
export { FloatingParticles };
