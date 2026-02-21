"use client";

import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
  // useProgress tracks the download status of all 3D assets in the scene
  const { progress } = useProgress();

  return (
    // The <Html> tag allows you to render standard HTML components securely over the WebGL Canvas
    <Html center>
      <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-zinc-900 pointer-events-none">
        
        {/* Percentage Text */}
        <div className="text-6xl font-bold text-white mb-6 tracking-tighter">
          {progress.toFixed(0)}<span className="text-zinc-500">%</span>
        </div>
        
        {/* Progress Bar Track */}
        <div className="w-64 h-1 bg-zinc-800 overflow-hidden rounded-full">
          {/* Animated Progress Bar Fill */}
          <div 
            className="h-full bg-indigo-500 transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        
        <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-zinc-500 uppercase">
          Initializing 3D Engine
        </p>
      </div>
    </Html>
  );
}