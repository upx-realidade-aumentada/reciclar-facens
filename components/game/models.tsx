import { useGLTF } from "@react-three/drei/native";
import { useFrame } from "@react-three/fiber/native";
import { useRef } from "react";
import * as THREE from "three";
import { items } from "@/data/items";

interface ModelProps {
  itemKey: number;
  scale: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export function Model({ itemKey, ...props }: ModelProps) {
  const gltf = useGLTF(items[itemKey].src);
  const modelRef = useRef<THREE.Group>(null);

  
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} {...props} />;
}
