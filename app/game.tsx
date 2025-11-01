import { useState } from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CameraView, useCameraPermissions } from "expo-camera";
import { useAudioPlayer } from "expo-audio";

import { FeedbackToast } from "@/components/game/feedback-toast";
import { TopBar } from "@/components/game/top-bar";
import { BinsContainer } from "@/components/game/bins-container";
import { Canva } from "@/components/game/canvas";
import { GameOver } from "@/components/game/game-over";

import { getRandom } from "@/hooks/useGameController";
import { useGame } from "@/context/GameContext";
import { Item } from "@/data/items";

export default function Game() {
  const [permission, requestPermission] = useCameraPermissions();
  const {
    score,
    gameOver,
    setScore,
    restartGame,
    currentItem,
    setCurrentItem,
    bins,
    items,
  } = useGame();

  const [feedbackKey, setFeedbackKey] = useState(-1);
  const [feedbackItem, setFeedbackItem] = useState<Item>(items[0]);
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
    setFeedbackItem(items[currentItem]);

    setLastAttempt({
      isCorrect,
      selectedBin: bin,
    });

    setCurrentItem(getRandom());
    setFeedbackKey((k) => k + 1);

    if (isCorrect) {
      playerRightAnswer.seekTo(0);
      playerRightAnswer.play();
      setScore((prev) => prev + 1);
      return;
    }

    playerWrongAnswer.seekTo(0);
    playerWrongAnswer.play();
  }

  function handleCloseFeedback() {}

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
        visibleKey={feedbackKey}
        isCorrect={lastAttempt.isCorrect}
        correctBin={feedbackItem.local}
        itemName={feedbackItem.title}
        onComplete={handleCloseFeedback}
      />

      <TopBar />
      <BinsContainer bins={bins} onBinPress={handleBinPress} />
      <Canva currentItem={currentItem} scale={items[currentItem].scale} />

      {gameOver && <GameOver onRestart={restartGame} score={score} />}
    </View>
  );
}
