import { useEffect, useState } from "react";

import { items } from "@/data/items";
import { bins } from "@/data/bins";

function getRandom() {
  return Math.floor(Math.random() * items.length);
}

export function useGameController() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [currentItem, setCurrentItem] = useState(getRandom());

  useEffect(() => {
    if (gameOver) return;
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameOver]);

  function restartGame() {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setCurrentItem(getRandom());
  }

  return {
    score,
    currentItem,
    setCurrentItem,
    restartGame,
    setScore,
    timeLeft,
    gameOver,
    items,
    bins,
  };
}
