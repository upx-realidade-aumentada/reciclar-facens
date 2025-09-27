import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { useGLTF } from "@react-three/drei/native";
import modelPath from "./assets/models/Bottle.glb";
import * as THREE from "@react-three/fiber/native/three";

function Model(props: any) {
  const gltf = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>();
  const [isAnimating, setIsAnimating] = useState(true);

  useFrame((state, delta) => {
    if (modelRef.current && isAnimating) {
      modelRef.current.rotation.y += delta * 0.5;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const toggleAnimation = () => {
    setIsAnimating((prev) => !prev);
  };

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      {...props}
      onClick={toggleAnimation}
    />
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model scale={0.5} position={[0, -1, 0]} />
      </Suspense>
    </Canvas>
  );
}
