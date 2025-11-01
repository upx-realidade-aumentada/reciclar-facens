import { Button } from "@/components/button";
import { useGame } from "@/context/GameContext";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function PauseModal() {
  const { restartGame, pause } = useGame();
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
    <View className="flex-1 justify-center items-center px-10 bg-[rgba(0,0,0,0.5)]">
      <View className="bg-blue-500 justify-center p-5 items-center gap-7 rounded-lg w-full">
        <Text className="font-Jaro_400Regular text-7xl text-white">
          Pausado
        </Text>
        <View className="gap-5">
          <Button color="primary" onPress={onContinue} title="Continuar" />
          <Button color="purple" onPress={onRestart} title="Reiniciar" />
          <Button color="red" onPress={onCloseGame} title="Fechar" />
        </View>
      </View>
    </View>
  );
}
