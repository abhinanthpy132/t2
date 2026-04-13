import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function RiverEnvironment() {
  const meshRef = useRef();

  // Create a customized procedural geometry for a terrain/river landscape
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(100, 100, 64, 64);
    // Add some noise or displacement to simulate a river valley
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
       const x = pos.getX(i);
       const y = pos.getY(i);
       
       // Sinc function + random noise to create valley mountains
       const d = Math.abs(x) * 0.1;
       let z = 0;
       
       if (d > 1) {
         z = (d - 1) * 3 + Math.sin(y * 0.5) * 2;
       }
       
       pos.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Simple river flow animation with vertex transformation
  useFrame((state) => {
    if (meshRef.current) {
      // Very slight waving motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5 - 2;
    }
  });

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, -20]}>
      {/* Terrain */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial 
          color="#064e3b" // deep emerald
          wireframe={true} // giving it a procedural/tech vibe
          transparent
          opacity={0.15}
        />
      </mesh>
      
      {/* Flat River surface */}
      <mesh position={[0, 0, 0.5]}>
        <planeGeometry args={[20, 100]} />
        <meshStandardMaterial 
          color="#0891b2" // cyan 600
          transparent
          opacity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}
