"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { backCardStyles } from "./project-section.styles";

interface ProjectItemBackProps {
  dev: string[];
}

function FlyingIcons({ dev }: { dev: string[] }) {
  const groupRef = useRef<THREE.Group>(null);
  const textures = useLoader(THREE.TextureLoader, dev);
  const positions = useMemo(
    () =>
      dev.map(() => ({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
        z: (Math.random() - 0.5) * 4,
      })),
    [dev]
  );

  useFrame(({ mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.5;
      groupRef.current.rotation.x = -mouse.y * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, i) => (
        <mesh
          key={i}
          position={[positions[i].x, positions[i].y, positions[i].z]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>
      ))}
    </group>
  );
}

const ProjectItemBack = ({ dev }: ProjectItemBackProps) => {
  return (
    <div className={backCardStyles}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <FlyingIcons dev={dev} />
      </Canvas>
    </div>
  );
};

export default ProjectItemBack;
