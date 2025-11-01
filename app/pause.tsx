import { Button } from "@/components/button";
import { useGame } from "@/context/GameContext";
import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";

export default function PauseModal() {
  const { restartGame, pause, toggleMusic, isMusicOn, score, timeLeft } =
    useGame();
  const router = useRouter();

  function onCloseGame() {
    router.replace("/");
  }

  function onRestart() {
    restartGame();
    router.back();
  }

  function onContinue() {
    pause();
    router.back();
  }

  return (
    <View className="flex-1 justify-center items-center px-6 bg-[rgba(0,0,0,0.6)]">
      <View className="w-full max-w-2xl bg-[#071029]/90 rounded-2xl p-6 items-center shadow-lg">
        <View className="w-full flex-row justify-end">
          <TouchableOpacity onPress={onContinue} className="p-2">
            <Text className="text-white text-3xl">✕</Text>
          </TouchableOpacity>
        </View>

        <Text className="font-Jaro_400Regular text-6xl text-white mb-2">
          Pausado
        </Text>

        <Text className="text-sm text-gray-300 mb-6">
          Pontuação:{" "}
          <Text className="font-Jaro_400Regular text-yellow-300">{score}</Text>
          {"  •  "}
          Tempo:{" "}
          <Text className="font-Jaro_400Regular text-yellow-300">
            {timeLeft}s
          </Text>
        </Text>

        <View className="w-full gap-4">
          <Button
            color="primary"
            icon="play"
            title="Continuar"
            onPress={onContinue}
          />
          <Button
            color="purple"
            icon="redo"
            title="Reiniciar"
            onPress={onRestart}
          />
          <Button
            color="blue"
            icon={isMusicOn ? "volume-up" : "volume-mute"}
            title={isMusicOn ? "Música: Ligada" : "Música: Desligada"}
            onPress={toggleMusic}
          />
          <Button
            color="red"
            icon="home"
            title="Menu Principal"
            onPress={onCloseGame}
          />
        </View>

        <Text className="text-xs text-gray-400 mt-4 text-center">
          Dica: Você pode alternar a música sem sair do jogo.
        </Text>
      </View>
    </View>
  );
}
