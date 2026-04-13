import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function WaterBottle() {
  const groupRef = useRef();
  
  // Custom Bottle Geometry Simulation using LatheGeometry
  const bottleGeometry = React.useMemo(() => {
    const points = [];
    // Base to neck profile
    points.push(new THREE.Vector2(0, -2));
    points.push(new THREE.Vector2(0.8, -1.8));
    points.push(new THREE.Vector2(0.8, 1));
    points.push(new THREE.Vector2(0.7, 1.5));
    points.push(new THREE.Vector2(0.3, 1.8));
    points.push(new THREE.Vector2(0.3, 2.2)); // neck
    points.push(new THREE.Vector2(0, 2.2));
    
    return new THREE.LatheGeometry(points, 32);
  }, []);

  useFrame((state) => {
    // Subtle rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      
      // Mouse interaction
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;
      
      // smoothly interpolate toward mouse pos
      groupRef.current.rotation.x += (mouseY - groupRef.current.rotation.x) * 0.05;
      groupRef.current.position.x += (state.pointer.x * 2 - groupRef.current.position.x) * 0.05;
    }
  });

  return (
    <Float rotationIntensity={0.5} floatIntensity={2} speed={1.5}>
      <group ref={groupRef} position={[2, 0, 0]}>
        {/* Glass Bottle Body */}
        <mesh geometry={bottleGeometry}>
           <meshPhysicalMaterial 
             color="#ffffff"
             transmission={0.9} 
             opacity={1} 
             metalness={0} 
             roughness={0}
             ior={1.5}
             thickness={0.5}
             specularIntensity={1}
             clearcoat={1}
           />
        </mesh>
        
        {/* Cap */}
        <mesh position={[0, 2.25, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.3, 32]} />
          <meshStandardMaterial color="#22d3ee" metalness={0.5} roughness={0.2} />
        </mesh>
        
        {/* Label */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.81, 0.81, 1.2, 32, 1, true]} />
          <meshStandardMaterial 
            color="#0f172a" 
            transparent 
            opacity={0.8} 
            side={THREE.DoubleSide} 
          />
        </mesh>
      </group>
    </Float>
  );
}
