import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

import WaterBottle from './WaterBottle';
import RiverEnvironment from './RiverEnvironment';

function CameraController() {
  const cameraRef = useRef();

  useEffect(() => {
    // Tie scroll to camera position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;
      
      if (cameraRef.current) {
        // Move camera forward and slightly down based on scroll
        gsap.to(cameraRef.current.position, {
          z: 5 - (progress * 15),
          y: progress * 2,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };

    // The scroll container is in the App.jsx overlay, so we listen to it
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useFrame(({ camera }) => {
    if (!cameraRef.current) {
      cameraRef.current = camera;
    }
  });

  return null;
}

export default function MainScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]} // limit pixel ratio for performance
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <color attach="background" args={['#020617']} />
      
      {/* Lighting setup */}
      <ambientLight intensity={0.5} color="#0284c7" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#22d3ee" />
      <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#10b981" />
      
      {/* Environment lighting (fallback to basic setup without loading HDR textures) */}
      <Environment preset="city" />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <CameraController />
      
      {/* Scene Content */}
      <group position={[0, -1, 0]}>
        <WaterBottle />
        <RiverEnvironment />
      </group>
      
    </Canvas>
  );
}
