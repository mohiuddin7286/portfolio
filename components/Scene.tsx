"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './Model';
import Loader from './Loader'; // 1. Import the Loader
import { Suspense } from 'react';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#4f46e5" />
        <Environment preset="city" />

        {/* 2. Swap out "fallback={null}" with your new Loader component */}
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>

        <OrbitControls enableZoom={false} />

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}