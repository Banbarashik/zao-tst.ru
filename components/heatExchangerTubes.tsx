"use client";

import { useRef, useEffect, useMemo } from "react";
import { Object3D } from "three";

// ─── Dimensions (mm) ────────────────────────────────────────────────────────
const TUBE_LENGTH = 794;
const PLATE_RADIUS = 39;
const PLATE_THICKNESS = 1.15;
const PLATE_COUNT = 52;
const TUBE_RADIUS = 16;
const TUBE_PITCH = 41.5;
const TUBE_COUNT = 35;

// Computed step: fits all 52 plates evenly within 794mm (~14.4mm gap, close to your 15mm)
const PLATE_STEP = (TUBE_LENGTH - PLATE_THICKNESS) / (PLATE_COUNT - 1); // ≈ 15.55mm

const TUBE_ROWS = 5; // rows of tubes (5 × 7 = 35)
const TUBE_COLS = 7; // columns of tubes

// Polygon count per circle — 16 is indistinguishable from 64 at normal viewing distance
const PLATE_SEGMENTS = 16;
const TUBE_SEGMENTS = 12;

// Scale: work in mm, scale down to Three.js units
const SCALE = 0.001;

const TOTAL_PLATES = TUBE_COUNT * PLATE_COUNT;

// ─── Helpers ────────────────────────────────────────────────────────────────
function getTubePositions() {
  const positions = [];
  for (let row = 0; row < TUBE_ROWS; row++) {
    for (let col = 0; col < TUBE_COLS; col++) {
      positions.push([
        (col - (TUBE_COLS - 1) / 2) * TUBE_PITCH * SCALE,
        (row - (TUBE_ROWS - 1) / 2) * TUBE_PITCH * SCALE,
      ]);
    }
  }
  return positions;
}

const METAL_PROPS = { color: "#C0C0C8", metalness: 0.95, roughness: 0.25 };

// ─── Tubes (35 instances = 1 draw call) ────────────────────────────────────
export function Tubes() {
  const ref = useRef();
  const dummy = useMemo(() => new Object3D(), []);
  const tubePositions = useMemo(() => getTubePositions(), []);

  useEffect(() => {
    tubePositions.forEach(([x, y], i) => {
      dummy.position.set(x, y, 0);
      dummy.rotation.set(Math.PI / 2, 0, 0); // CylinderGeometry is Y-up by default; rotate to run along Z
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

// ─── Plates (1820 instances = 1 draw call) ──────────────────────────────────
export function Plates() {
  const ref = useRef();
  const dummy = useMemo(() => new Object3D(), []);
  const tubePositions = useMemo(() => getTubePositions(), []);

  useEffect(() => {
    let idx = 0;
    const halfTube = (TUBE_LENGTH * SCALE) / 2;

    tubePositions.forEach(([x, y]) => {
      for (let p = 0; p < PLATE_COUNT; p++) {
        // Distribute plates evenly from one end of the tube to the other
        const z = -halfTube + (PLATE_THICKNESS / 2 + p * PLATE_STEP) * SCALE;
        dummy.position.set(x, y, z);
        dummy.rotation.set(Math.PI / 2, 0, 0); // disc face perpendicular to Z axis
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
