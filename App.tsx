import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { useGLTF } from "@react-three/drei/native";
import modelPath from "./assets/models/Papers.glb";
import { CameraView, useCameraPermissions } from "expo-camera";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useGameController } from "./hooks/useGameController";
import { Model } from "./Components/Game/Model";
import { TopBar } from "./Components/Game/TopBar";
import { BinsContainer } from "./Components/Game/BinsContainer";
import { Canva } from "./Components/Game/Canva";
import { GameOver } from "./Components/Game/GameOver";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const {
    score,
    timeLeft,
    gameOver,
    setScore,
    restartGame,
    currentItem,
    setCurrentItem,
    BINS,
    ITEMS,
  } = useGameController();

  function handleBinPress(bin: string) {
    if (ITEMS[currentItem].local === bin) {
      setScore((prev) => prev + 1);
    }
    setCurrentItem(Math.floor(Math.random() * ITEMS.length));
  }

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={{ marginBottom: 10, textAlign: "center" }}>
          Precisamos da permissão para acessar a câmera
        </Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={{ color: "#fff" }}>Conceder permissão</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <CameraView style={StyleSheet.absoluteFillObject} facing="back" />
      <TopBar
        currentItemTitle={ITEMS[currentItem].title}
        timeLeft={timeLeft}
        score={score}
      />
      <BinsContainer bins={BINS} onBinPress={handleBinPress} />
      <Canva currentItem={currentItem} scale={ITEMS[currentItem].scale} />

      {gameOver && <GameOver onRestart={restartGame} score={score} />}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  button: {
    backgroundColor: "#e74c3c",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
});
