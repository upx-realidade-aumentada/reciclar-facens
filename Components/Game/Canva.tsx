import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { Model } from "./model";
import { StyleSheet } from "react-native";

interface Props {
  currentItem: number;
  scale: number;
}

export function Canva({ currentItem, scale }: Props) {
  return (
    <Canvas style={styles.container}>
      <ambientLight intensity={7} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model
          itemKey={currentItem}
          scale={scale}
          position={[0, -2, -2]}
          rotation={[0.6, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
