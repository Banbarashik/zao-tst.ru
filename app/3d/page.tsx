"use client";

import { Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function DebugDistance() {
  const { camera } = useThree();
  useFrame(() => console.log(camera.position.length()));
  return null;
}

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function ModelViewer({ modelUrl }) {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [-0.75, 0.1, 0.85], fov: 45 }}>
        <directionalLight position={[-0.6, 0, -0.2]} intensity={1} />
        <directionalLight position={[0.3, -0.05, 0.4]} intensity={1.5} />
        <directionalLight position={[0, -1, 2]} intensity={1.5} />

        {/* <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 1.5]} intensity={1.2} />
        <directionalLight position={[-1.5, 1, -1.5]} intensity={0.4} />
        <directionalLight position={[0, -1.5, 1]} intensity={0.2} /> */}

        <Suspense fallback={null}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls maxDistance={1.4} enablePan={false} />
        <Environment preset="warehouse" environmentIntensity={1.5} />
        <DebugDistance />
      </Canvas>
    </div>
  );
}

export default function TestPage() {
  return <ModelViewer modelUrl="/models/ksk-3-8.glb" />;
}
