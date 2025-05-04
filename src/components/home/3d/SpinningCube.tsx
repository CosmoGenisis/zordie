
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SpinningCubeProps {
  className?: string;
}

const SpinningCube: React.FC<SpinningCubeProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Create materials for each face with gradients
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x6a42f5, transparent: true, opacity: 0.8 }), // Right
      new THREE.MeshBasicMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.8 }), // Left
      new THREE.MeshBasicMaterial({ color: 0x4338ca, transparent: true, opacity: 0.8 }), // Top
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.8 }), // Bottom
      new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.8 }), // Front
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.8 })  // Back
    ];
    
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    // Position camera
    camera.position.z = 2;
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const onDocumentMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 100;
      mouseY = (e.clientY - window.innerHeight / 2) / 100;
    };
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth transition to target rotation
      targetX += 0.005;
      targetY += 0.01;
      
      // Apply mouse movement influence
      cube.rotation.x += 0.05 * (mouseY - cube.rotation.x);
      cube.rotation.y += 0.05 * (mouseX - cube.rotation.y);
      
      // Apply continuous rotation
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      
      // Dispose resources
      geometry.dispose();
      materials.forEach(material => material.dispose());
      renderer.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className={className} />;
};

export default SpinningCube;
