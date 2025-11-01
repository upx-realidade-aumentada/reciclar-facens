import { useEffect, useState } from "react";

import { items } from "@/data/items";
import { bins } from "@/data/bins";
import { useAudioPlayer } from "expo-audio";

export function getRandom() {
  return Math.floor(Math.random() * items.length);
}

export function useGameController() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentItem, setCurrentItem] = useState(getRandom());
  const [isMusicOn, setIsMusicOn] = useState(true);

  // background music player
  const bgPlayer = useAudioPlayer(
    require("@/assets/audios/background-music.mp3")
  );

  useEffect(() => {
    // when music preference changes, play or pause the bg music
    try {
      if (isMusicOn) {
        bgPlayer.seekTo(0);
        bgPlayer.play();
      } else {
        bgPlayer.pause();
      }
    } catch (e) {
      // ignore audio errors to avoid crashing the hook
      // console.warn("Background music error", e);
    }
  }, [isMusicOn]);

  useEffect(() => {
    if (gameOver || isPaused) return;
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, isPaused]);

  function restartGame() {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setIsPaused(false);
    setCurrentItem(getRandom());
  }

  function pause() {
    setIsPaused((prev) => !prev);
  }

  function toggleMusic() {
    setIsMusicOn((prev) => !prev);
  }

  function playMusic() {
    try {
      bgPlayer.seekTo(0);
      bgPlayer.play();
      setIsMusicOn(true);
    } catch {}
  }

  function stopMusic() {
    try {
      bgPlayer.pause();
      setIsMusicOn(false);
    } catch {}
  }

  return {
    score,
    currentItem,
    setCurrentItem,
    restartGame,
    setScore,
    timeLeft,
    pause,
    gameOver,
    isPaused,
    items,
    bins,
    isMusicOn,
    toggleMusic,
    playMusic,
    stopMusic,
  };
}
