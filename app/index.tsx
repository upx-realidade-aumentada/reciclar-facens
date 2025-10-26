import { StyleSheet, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ImageBackground } from "expo-image";
import { router } from "expo-router";

import { Button } from "@/components/button";

const image = require("@/assets/images/home-background.png");

export default function Home() {
  function handlePlay() {
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
      </SafeAreaView>
    </ImageBackground>
  );
}
