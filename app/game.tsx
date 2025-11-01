import { useState } from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CameraView, useCameraPermissions } from "expo-camera";
import { useAudioPlayer } from "expo-audio";

import { FeedbackToast } from "@/components/game/feedback-toast";
import { TopBar } from "@/components/game/top-bar";
import { BinsContainer } from "@/components/game/bins-container";
import { Canva } from "@/components/game/canvas";
import { GameOver } from "@/components/game/game-over";

import { getRandom, useGameController } from "@/hooks/useGameController";

export default function Game() {
  const [permission, requestPermission] = useCameraPermissions();
  const {
    score,
    timeLeft,
    gameOver,
    setScore,
    restartGame,
    currentItem,
    setCurrentItem,
    bins,
    items,
  } = useGameController();
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAttempt, setLastAttempt] = useState({
    isCorrect: false,
    selectedBin: "",
  });

  const playerRightAnswer = useAudioPlayer(
    require("@/assets/audios/right-answer.wav")
  );
  const playerWrongAnswer = useAudioPlayer(
    require("@/assets/audios/wrong-answer.wav")
  );

  function handleBinPress(bin: string) {
    const isCorrect = items[currentItem].local === bin;

    setLastAttempt({
      isCorrect,
      selectedBin: bin,
    });

    setCurrentItem(getRandom());
    setShowFeedback(true);

    if (isCorrect) {
      playerRightAnswer.seekTo(0);
      playerRightAnswer.play();
      setScore((prev) => prev + 1);
      return;
    }

    playerWrongAnswer.seekTo(0);
    playerWrongAnswer.play();
  }

  function handleCloseFeedback() {
    setShowFeedback(false);
  }

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text style={{ marginBottom: 10, textAlign: "center" }}>
          Precisamos da permissão para acessar a câmera
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          className="bg-[#e74c3c] p-3 rounded-xl mt-20"
        >
          <Text style={{ color: "#fff" }}>Conceder permissão</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View className="flex-1">
      <CameraView style={StyleSheet.absoluteFillObject} facing="back" />

      <FeedbackToast
        visible={showFeedback}
        isCorrect={lastAttempt.isCorrect}
        correctBin={items[currentItem].local}
        itemName={items[currentItem].title}
        onComplete={handleCloseFeedback}
      />

      <TopBar
        currentItemTitle={items[currentItem].title}
        timeLeft={timeLeft}
        score={score}
      />
      <BinsContainer bins={bins} onBinPress={handleBinPress} />
      <Canva currentItem={currentItem} scale={items[currentItem].scale} />

      {gameOver && <GameOver onRestart={restartGame} score={score} />}
    </View>
  );
}
