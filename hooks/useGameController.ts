import { useEffect, useState } from "react";

import { items } from "@/data/items";
import { bins } from "@/data/bins";

export function getRandom() {
  return Math.floor(Math.random() * items.length);
}

export function useGameController() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentItem, setCurrentItem] = useState(getRandom());

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
    setTimeLeft(600);
    setGameOver(false);
    setIsPaused(false);
    setCurrentItem(getRandom());
  }

  function pause() {
    setIsPaused((prev) => !prev);
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
  };
}
