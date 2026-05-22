"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  useProgress,
} from "@react-three/drei";
import { Plates, Tubes } from "@/components/heatExchangerTubes";

// ─── Frame GLB ───────────────────────────────────────────────────────────────
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

// ─── Signals when the whole scene has finished loading ───────────────────────
// This component only mounts (and runs its effect) after Suspense resolves,
// i.e. after all useGLTF calls have finished — so it's a reliable "done" signal.
function SceneReadySignal({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, []);
  return null;
}

// ─── Loading overlay (shown after button click, until scene is ready) ────────
function LoadingOverlay() {
  const { progress } = useProgress();
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/10 backdrop-blur-sm">
      <div className="h-1 w-48 overflow-hidden rounded-full bg-white/30">
        <div
          className="h-full rounded-full bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-sm font-medium text-white drop-shadow">
        {Math.round(progress)}%
      </span>
    </div>
  );
}

// ─── Main viewer ─────────────────────────────────────────────────────────────
export function ModelViewer({
  modelUrl,
  placeholderUrl,
}: {
  modelUrl: string;
  placeholderUrl: string;
}) {
  const [isStarted, setIsStarted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={{ aspectRatio: "16/10" }}
    >
      {/* ── Placeholder + button (visible until user clicks) ── */}
      {!isStarted && (
        <div className="absolute inset-0">
          <img
            src={placeholderUrl}
            alt="3D model preview"
            className="h-full w-full object-cover"
            style={{ filter: "blur(6px)", transform: "scale(1.05)" }} // scale hides blur edges
          />
          {/* Dark scrim so the button is readable over any image */}
          <div className="absolute inset-0 bg-black/30" />
          <button
            onClick={() => setIsStarted(true)}
            className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg backdrop-blur transition hover:bg-white"
          >
            {/* Simple play/cube icon — swap for whatever fits your design */}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A1 1 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.32-.18.72-.18 1.04 0l7.9 4.44c.32.17.53.5.53.88v9z" />
            </svg>
            View 3D Model
          </button>
        </div>
      )}

      {/* ── Canvas (mounted only after click) ── */}
      {isStarted && (
        <>
          {!isReady && <LoadingOverlay />}

          <Canvas camera={{ position: [-0.5, 0.25, 1], fov: 45 }}>
            <directionalLight position={[-0.6, 0, -0.2]} intensity={1} />
            <directionalLight position={[0.3, -0.05, 0.4]} intensity={1.5} />
            <directionalLight position={[0, -1, 2]} intensity={1.5} />
            <Environment preset="warehouse" environmentIntensity={1.5} />

            <Suspense fallback={null}>
              <Tubes />
              <Plates />
              <Model url={modelUrl} />
              <SceneReadySignal onReady={() => setIsReady(true)} />
            </Suspense>

            <OrbitControls
              enablePan={false}
              maxDistance={1.4}
              minDistance={0.6}
            />
          </Canvas>
        </>
      )}
    </div>
  );
}
