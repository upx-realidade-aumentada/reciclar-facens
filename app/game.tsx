import { useState } from "react";

import { StyleSheet, View } from "react-native";

import { CameraView } from "expo-camera";
import { useAudioPlayer } from "expo-audio";

import { FeedbackToast } from "@/components/game/feedback-toast";
import { TopBar } from "@/components/game/top-bar";
import { BinsContainer } from "@/components/game/bins-container";
import { Canva } from "@/components/game/canva";
import { GameOver } from "@/components/game/game-over";

import { useGameController } from "@/hooks/useGameController";

export default function Game() {
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
    setCurrentItem(Math.floor(Math.random() * items.length));
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
