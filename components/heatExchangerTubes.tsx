"use client";

import { useRef, useEffect, useMemo } from "react";
import { Object3D, InstancedMesh } from "three";

// ─── Dimensions (mm) ────────────────────────────────────────────────────────
const TUBE_LENGTH = 794;
const PLATE_DIAMETER = 39;
const PLATE_RADIUS = PLATE_DIAMETER / 2; // 19.5mm (gives a 2.5mm gap between plates)
const PLATE_THICKNESS = 1.15;
const PLATE_COUNT = 104;
const TUBE_RADIUS = 11;
const TUBE_PITCH = 41.5; // Vertical distance between tubes in the same column
const TUBE_COUNT = 35; // 12 + 11 + 12

// First and last plates are 15mm from the ends of the 794mm tube
const PLATE_EDGE_OFFSET = 15;
const PLATE_SPAN = TUBE_LENGTH - PLATE_EDGE_OFFSET * 2; // 764mm total span
const PLATE_STEP = PLATE_SPAN / (PLATE_COUNT - 1); // ≈ 14.98mm center-to-center

// Low poly count for ultra-smooth rendering performance
const PLATE_SEGMENTS = 16;
const TUBE_SEGMENTS = 12;
const SCALE = 0.001; // Scale mm down to Three.js meters

const TOTAL_PLATES = TUBE_COUNT * PLATE_COUNT;

// ─── Heavy Industrial Material Tuning ──────────────────────────────────────
// Slightly bumped roughness to 0.4 to capture an authentic, non-glossy, raw industrial steel look
const METAL_PROPS = { color: "#7d929b", metalness: 0.85, roughness: 0.4 };

// ─── Geometry Positioning Helper ───────────────────────────────────────────
function getTubePositions() {
  const positions = [];
  const P_V = TUBE_PITCH;
  // Horizontal column spacing based on an equilateral triangular pitch layout
  const P_H = TUBE_PITCH * Math.sin(Math.PI / 3); // ≈ 35.94mm

  // Column 1 (Left): 12 tubes centered vertically
  for (let i = 0; i < 12; i++) {
    const y = (i - 11 / 2) * P_V * SCALE;
    const z = -P_H * SCALE;
    positions.push({ y, z });
  }

  // Column 2 (Middle): 11 tubes staggered perfectly in the vertical gaps
  for (let i = 0; i < 11; i++) {
    const y = (i - 5) * P_V * SCALE;
    const z = 0;
    positions.push({ y, z });
  }

  // Column 3 (Right): 12 tubes matching Column 1
  for (let i = 0; i < 12; i++) {
    const y = (i - 11 / 2) * P_V * SCALE;
    const z = P_H * SCALE;
    positions.push({ y, z });
  }

  return positions;
}

// ─── Tubes Component (1 Draw Call) ─────────────────────────────────────────
export function Tubes() {
  const ref = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const tubePositions = useMemo(() => getTubePositions(), []);

  useEffect(() => {
    if (!ref.current) return;

    tubePositions.forEach(({ y, z }, i) => {
      dummy.position.set(0, y, z);
      // CylinderGeometry is Y-up by default. Rotate 90° on Z to lay flat along the X-axis
      dummy.rotation.set(0, 0, Math.PI / 2);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [tubePositions, dummy]);

  return (
    <instancedMesh ref={ref} args={[null, null, TUBE_COUNT]}>
      <cylinderGeometry
        args={[
          TUBE_RADIUS * SCALE,
          TUBE_RADIUS * SCALE,
          TUBE_LENGTH * SCALE,
          TUBE_SEGMENTS,
        ]}
      />
      <meshStandardMaterial {...METAL_PROPS} />
    </instancedMesh>
  );
}

// ─── Plates Component (1 Draw Call) ────────────────────────────────────────
export function Plates() {
  const ref = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const tubePositions = useMemo(() => getTubePositions(), []);

  useEffect(() => {
    if (!ref.current) return;

    let idx = 0;
    const halfSpan = (PLATE_SPAN * SCALE) / 2;

    tubePositions.forEach(({ y, z }) => {
      for (let p = 0; p < PLATE_COUNT; p++) {
        // Distribute positions cleanly along the X axis within the defined span offsets
        const x = -halfSpan + p * PLATE_STEP * SCALE;

        dummy.position.set(x, y, z);
        // Rotate flat circular disc faces so they are perpendicular to the X-axis
        dummy.rotation.set(0, 0, Math.PI / 2);
        dummy.updateMatrix();
        ref.current.setMatrixAt(idx, dummy.matrix);
        idx++;
      }
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [tubePositions, dummy]);

  return (
    <instancedMesh ref={ref} args={[null, null, TOTAL_PLATES]}>
      <cylinderGeometry
        args={[
          PLATE_RADIUS * SCALE,
          PLATE_RADIUS * SCALE,
          PLATE_THICKNESS * SCALE,
          PLATE_SEGMENTS,
        ]}
      />
      <meshStandardMaterial {...METAL_PROPS} />
    </instancedMesh>
  );
}
