import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { useGLTF } from "@react-three/drei/native";
import modelPath from "./assets/models/Papers.glb";
import { CameraView, useCameraPermissions } from "expo-camera";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useGameController } from "./hooks/useGameController";
import { Model } from "./components/Game/Model";
import { TopBar } from "./components/Game/TopBar";
import { BinsContainer } from "./components/Game/BinsContainer";
import { Canva } from "./components/Game/Canva";
import { GameOver } from "./components/Game/GameOver";
import { FeedbackToast } from "./components/Game/FeedbackToast";

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
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAttempt, setLastAttempt] = useState({
    isCorrect: false,
    selectedBin: "",
  });

  function handleBinPress(bin: string) {
    const isCorrect = ITEMS[currentItem].local === bin;

    setLastAttempt({
      isCorrect,
      selectedBin: bin,
    });
    setShowFeedback(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  }

  function handleCloseFeedback() {
    setShowFeedback(false);
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

      <FeedbackToast
        visible={showFeedback}
        isCorrect={lastAttempt.isCorrect}
        correctBin={ITEMS[currentItem].local}
        itemName={ITEMS[currentItem].title}
        onComplete={handleCloseFeedback}
      />

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
