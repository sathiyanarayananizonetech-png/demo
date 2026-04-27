import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface DottedSurfaceProps {
  className?: string;
  opacity?: number;
  dotColor?: string;
  particleCount?: number;
}

const DottedSurface: React.FC<DottedSurfaceProps> = ({
  className = '',
  opacity = 0.3,
  dotColor = '#D4AF37', // Gold color to match brand
  particleCount = 500,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;     // X
      positions[i + 1] = (Math.random() - 0.5) * 15; // Y
      positions[i + 2] = (Math.random() - 0.5) * 10; // Z
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material
    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: dotColor,
      transparent: true,
      opacity: opacity,
      sizeAttenuation: true,
    });

    // Points
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      points.rotation.y += 0.0005;
      points.rotation.x += 0.0002;
      
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [opacity, dotColor, particleCount]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 pointer-events-none -z-10 overflow-hidden ${className}`}
      style={{ opacity }}
    />
  );
};

export default DottedSurface;
