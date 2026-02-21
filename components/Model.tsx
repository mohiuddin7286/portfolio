"use client";

import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const { scene } = useGLTF('/model.glb');
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!modelRef.current) return;

    // Create a GSAP Timeline attached to the scrollbar
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body", // Watch the entire body for scrolling
        start: "top top", // Start animation when top of body hits top of viewport
        end: "bottom bottom", // End when bottom of body hits bottom of viewport
        scrub: 1, // Smooth scrubbing effect (1 second lag behind the scrollbar)
      }
    });

    // 1. Initial State -> Transition to Skill IOU section
    // Move the model to the right side of the screen and rotate it
    tl.to(modelRef.current.position, { x: 2, y: 0, z: 0 }, 0)
      .to(modelRef.current.rotation, { y: Math.PI }, 0); 

    // 2. Transition from Skill IOU -> AQI Predictor section
    // Move the model to the left side of the screen and tilt it
    tl.to(modelRef.current.position, { x: -2, y: 0.5, z: 1 }, 1)
      .to(modelRef.current.rotation, { y: Math.PI * 2, x: 0.5 }, 1);

    // Cleanup function to kill the animation if the component unmounts
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={1.5} 
      position={[0, -1, 0]}
      // This forces the model to have a slight emissive glow so the Bloom effect catches it
      onUpdate={(self: THREE.Object3D) => {
        self.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            // You can change this color to match your UI (e.g., an emerald green for the AQI section)
            (mesh.material as THREE.MeshStandardMaterial).emissive = new THREE.Color("#4f46e5");
            (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
          }
        });
      }}
    />
  );
}


useGLTF.preload('/model.glb');
