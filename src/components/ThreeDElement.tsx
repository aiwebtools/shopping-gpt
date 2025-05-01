
import React, { useEffect, useRef } from 'react';

const ThreeDElement: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const container = canvasRef.current;
    
    // Add Three.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    
    script.onload = () => {
      // @ts-ignore - Three.js is loaded as a global variable
      const THREE = window.THREE;
      
      if (!THREE) return;
      
      // Create scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);
      
      // Add lights
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);
      
      const pointLight1 = new THREE.PointLight(0x8B5CF6, 2, 100); // Cyber purple
      pointLight1.position.set(10, 10, 10);
      scene.add(pointLight1);
      
      const pointLight2 = new THREE.PointLight(0x1EAEDB, 2, 100); // Cyber blue
      pointLight2.position.set(-10, -10, -10);
      scene.add(pointLight2);
      
      const pointLight3 = new THREE.PointLight(0xD946EF, 2, 100); // Cyber pink
      pointLight3.position.set(5, -5, 5);
      scene.add(pointLight3);
      
      // Create cyber shopping cart
      const cartGroup = new THREE.Group();
      
      // Base cart (cylinder)
      const cartBase = new THREE.CylinderGeometry(2.5, 2, 3, 16);
      const cartMaterial = new THREE.MeshStandardMaterial({
        color: 0x1A1F2C,
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x1A1F2C,
        emissiveIntensity: 0.2,
      });
      const cartMesh = new THREE.Mesh(cartBase, cartMaterial);
      cartGroup.add(cartMesh);
      
      // Shopping cart grid (lines)
      const gridGeometry = new THREE.CylinderGeometry(2.55, 2.05, 3.1, 16, 8, true);
      const gridMaterial = new THREE.MeshBasicMaterial({
        color: 0x8B5CF6,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });
      const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
      cartGroup.add(gridMesh);
      
      // Add digital "items" in the cart (cubes with glow)
      for (let i = 0; i < 8; i++) {
        const size = Math.random() * 0.5 + 0.2;
        const geometry = new THREE.BoxGeometry(size, size, size);
        
        // Randomly choose cyber colors
        const colors = [0x8B5CF6, 0x1EAEDB, 0xD946EF, 0xF97316];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const material = new THREE.MeshStandardMaterial({
          color: color,
          emissive: color,
          emissiveIntensity: 0.5,
          metalness: 0.8,
          roughness: 0.2,
        });
        
        const cube = new THREE.Mesh(geometry, material);
        
        // Position cubes inside the cart randomly
        const radius = Math.random() * 1.2;
        const angle = Math.random() * Math.PI * 2;
        const height = Math.random() * 1.5 - 0.5;
        
        cube.position.x = Math.cos(angle) * radius;
        cube.position.z = Math.sin(angle) * radius;
        cube.position.y = height;
        
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
        
        cartGroup.add(cube);
      }
      
      // Add a digital circuit board ring around top of cart
      const ringGeometry = new THREE.TorusGeometry(2.5, 0.1, 16, 50);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0xD946EF,
        emissive: 0xD946EF,
        emissiveIntensity: 0.7,
        metalness: 1,
        roughness: 0.3,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 1.5;
      cartGroup.add(ring);
      
      scene.add(cartGroup);
      
      // Position camera
      camera.position.z = 8;
      camera.position.y = 2;
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        
        // Rotate cart
        cartGroup.rotation.y += 0.01;
        
        // Add subtle floating animation
        cartGroup.position.y = Math.sin(Date.now() * 0.001) * 0.2;
        
        // Render
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle window resize
      const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        container.removeChild(renderer.domElement);
      };
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div 
      ref={canvasRef} 
      className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] relative"
    />
  );
};

export default ThreeDElement;
