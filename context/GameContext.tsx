import { createContext, useContext, ReactNode } from "react";
import { useGameController } from "@/hooks/useGameController";

type GameContextType = ReturnType<typeof useGameController>;

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const game = useGameController();
  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGame deve ser usado dentro de um GameProvider");
  return context;
}
