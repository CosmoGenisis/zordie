
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeDSceneProps {
  className?: string;
}

const ThreeDScene: React.FC<ThreeDSceneProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create a grid of spheres
    const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x6a42f5,
      metalness: 0.7,
      roughness: 0.2,
    });
    
    const gridSize = 5;
    const spacing = 2;
    const spheres = [];
    
    for (let x = -gridSize; x <= gridSize; x += 2) {
      for (let z = -gridSize; z <= gridSize; z += 2) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
        sphere.position.set(x * spacing, 0, z * spacing);
        sphere.scale.setScalar(0.2 + Math.random() * 0.1);
        scene.add(sphere);
        spheres.push({
          mesh: sphere,
          initialY: sphere.position.y,
          speed: 0.1 + Math.random() * 0.2
        });
      }
    }
    
    // Position camera
    camera.position.z = 10;
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    
    const onMouseMove = (event: MouseEvent) => {
      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      
      // Update sphere positions
      spheres.forEach((sphere, i) => {
        const { mesh, initialY, speed } = sphere;
        mesh.position.y = initialY + Math.sin(time * speed + i) * 0.5;
        mesh.rotation.y += 0.01;
      });
      
      // Update based on mouse position
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          const distanceToMouse = new THREE.Vector2(
            mouse.x * 10 - child.position.x,
            mouse.y * 5 - child.position.y
          ).length();
          
          if (distanceToMouse < 3) {
            child.scale.setScalar(0.3 + (1 - distanceToMouse / 3) * 0.2);
          } else {
            child.scale.lerp(new THREE.Vector3(0.2, 0.2, 0.2), 0.1);
          }
        }
      });
      
      // Animate camera position slightly based on mouse movement
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
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
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  
  return <div ref={containerRef} className={className} />;
};

export default ThreeDScene;
