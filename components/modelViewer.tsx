"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

import { Plates, Tubes } from "@/components//heatExchangerTubes";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export function ModelViewer({ modelUrl }) {
  return (
    <Canvas camera={{ position: [-0.5, 0.25, 1], fov: 45 }}>
      <directionalLight position={[-0.6, 0, -0.2]} intensity={1} />
      <directionalLight position={[0.3, -0.05, 0.4]} intensity={1.5} />
      <directionalLight position={[0, -1, 2]} intensity={1.5} />

      <Suspense fallback={null}>
        <Tubes />
        <Plates />
        <Model url={modelUrl} />
      </Suspense>

      <OrbitControls minDistance={0.6} maxDistance={1.4} enablePan={false} />
      <Environment preset="warehouse" environmentIntensity={1.5} />
    </Canvas>
  );
}
