"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ---------- planet mesh that spins on Y ---------- */
function PlanetMesh({
  baseColor,
  emissiveColor,
  ringColor,
  hasRing = false,
  speed = 0.4,
}: {
  baseColor: string;
  emissiveColor: string;
  ringColor?: string;
  hasRing?: boolean;
  speed?: number;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meshRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ringRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * speed;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={baseColor}
          emissive={emissiveColor}
          emissiveIntensity={0.35}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>

      {hasRing && ringColor && (
        <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0.2, 0]}>
          <ringGeometry args={[1.05, 1.35, 64]} />
          <meshStandardMaterial
            color={ringColor}
            side={THREE.DoubleSide}
            transparent
            opacity={0.6}
          />
        </mesh>
      )}
    </group>
  );
}

/* ---------- tiny scene wrapper ---------- */
export type PlanetVariant =
  | "earth"
  | "saturn"
  | "moon"
  | "comet"
  | "sun"
  | "nebula";

const PLANET_CONFIG: Record<
  PlanetVariant,
  {
    baseColor: string;
    emissiveColor: string;
    hasRing: boolean;
    ringColor?: string;
    speed: number;
  }
> = {
  earth: {
    baseColor: "#1a6bcc",
    emissiveColor: "#0df0d3",
    hasRing: false,
    speed: 0.5,
  },
  saturn: {
    baseColor: "#c4956a",
    emissiveColor: "#e8a060",
    hasRing: true,
    ringColor: "#d4aa70",
    speed: 0.3,
  },
  moon: {
    baseColor: "#b0b0b0",
    emissiveColor: "#e0e0e0",
    hasRing: false,
    speed: 0.25,
  },
  comet: {
    baseColor: "#4488ff",
    emissiveColor: "#66ccff",
    hasRing: false,
    speed: 0.8,
  },
  sun: {
    baseColor: "#ff8c00",
    emissiveColor: "#ffcc00",
    hasRing: false,
    speed: 0.15,
  },
  nebula: {
    baseColor: "#6b3fa0",
    emissiveColor: "#a855f7",
    hasRing: false,
    speed: 0.35,
  },
};

export function Planet3D({
  variant,
  size = 32,
}: {
  variant: PlanetVariant;
  size?: number;
}) {
  const config = PLANET_CONFIG[variant];

  return (
    <div style={{ width: size, height: size }}>
      <Canvas
        camera={{ position: [0, 0, 2.6], fov: 45 }}
        style={{ pointerEvents: "none" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 5]} intensity={1.2} />
        <PlanetMesh
          baseColor={config.baseColor}
          emissiveColor={config.emissiveColor}
          hasRing={config.hasRing}
          ringColor={config.ringColor}
          speed={config.speed}
        />
      </Canvas>
    </div>
  );
}
