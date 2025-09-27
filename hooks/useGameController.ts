import { useGLTF } from "@react-three/drei/native";

import { useEffect, useState } from "react";

import Bottle from "../assets/models/Bottle.glb";
import Papers from "../assets/models/Papers.glb";
import Soda from "../assets/models/Soda.glb";
import Spoon from "../assets/models/Spoon.glb";
import Box from "../assets/models/Box.glb";
import Cup from "../assets/models/Cup.glb";

export const ITEMS = [
  {
    src: Bottle,
    title: "Garrafa de vidro",
    local: "VIDRO",
    scale: 2.6,
  },
  {
    src: Papers,
    title: "Papéis",
    local: "PAPEL",
    scale: 8,
  },
  {
    src: Soda,
    title: "Lata de refrigerante",
    local: "METAL",
    scale: 0.3,
  },
  {
    src: Spoon,
    title: "Colher de metal",
    local: "METAL",
    scale: 1,
  },
  {
    src: Box,
    title: "Caixa de papelão",
    local: "PAPEL",
    scale: 3,
  },
  {
    src: Cup,
    title: "Copo de Plástico",
    local: "PLÁSTICO",
    scale: 4,
  },
];

export const BINS = [
  {
    id: "PAPEL",
    image: require("../assets/bins/paper.png"),
  },
  {
    id: "METAL",
    image: require("../assets/bins/metal.png"),
  },
  {
    id: "VIDRO",
    image: require("../assets/bins/glass.png"),
  },
  {
    id: "PLÁSTICO",
    image: require("../assets/bins/plastic.png"),
  },
];

function getRandom() {
  return Math.floor(Math.random() * ITEMS.length);
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
    setTimeout(() => setTimeLeft((s) => s - 1), 1000);
  }, [timeLeft, gameOver]);

  ITEMS.forEach((item) => useGLTF.preload(item.src));

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
    ITEMS,
    BINS,
  };
}
