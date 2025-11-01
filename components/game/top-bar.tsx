import { useGame } from "@/context/GameContext";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function TopBar() {
  const { timeLeft, score, items, currentItem, pause, isMusicOn, toggleMusic } =
    useGame();

  return (
    <View className="flex items-center gap-4 flex-row justify-center px-5 mt-10 mb-5">
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text className="text-2xl font-Jaro_400Regular text-white">
          Pontuação: {score}
        </Text>
        <Text
          className="text-7xl font-Jaro_400Regular"
          style={{ color: "yellow" }}
        >
          {items[currentItem].title}
        </Text>
      </View>
      <Text className="text-2xl font-Jaro_400Regular text-white">
        🕛 {timeLeft}s
      </Text>

      <TouchableOpacity className="p-2 rounded-xl" onPress={toggleMusic}>
        <Text className="text-2xl text-white">{isMusicOn ? "🔊" : "🔈"}</Text>
      </TouchableOpacity>

      <Link href="/pause" asChild>
        <TouchableOpacity className="p-2 rounded-xl" onPress={pause}>
          <Text className="text-2xl text-white">⏸️</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
