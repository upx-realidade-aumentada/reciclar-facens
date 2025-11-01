import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ImageBackground } from "expo-image";
import { router } from "expo-router";

import { Button } from "@/components/button";
import { FontAwesome5 } from "@expo/vector-icons";
import { useGame } from "@/context/GameContext";

const image = require("@/assets/images/home-background.png");

export default function Home() {
  const { restartGame, isMusicOn, toggleMusic } = useGame();

  function handlePlay() {
    restartGame();
    router.push("/game");
  }

  return (
    <ImageBackground source={image} style={StyleSheet.absoluteFill}>
      <SafeAreaView className="flex-1 flex-col items-center py-10 justify-between">
        <Text className="mt-10 font-Jaro_400Regular text-9xl text-white">
          ReciclAR
        </Text>
        <Button
          color="primary"
          title="Jogar"
          icon="play"
          onPress={handlePlay}
        />

        {/* Discrete music toggle in the top-right corner */}
        <View style={{ position: "absolute", top: 60, right: 18 }}>
          <TouchableOpacity
            onPress={toggleMusic}
            style={{
              backgroundColor: "rgba(0,0,0,0.45)",
              padding: 8,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            accessibilityLabel={isMusicOn ? "Desligar música" : "Ligar música"}
          >
            <FontAwesome5
              name={isMusicOn ? "volume-up" : "volume-mute"}
              size={18}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
