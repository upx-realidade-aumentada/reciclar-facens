import "../global.css";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { ImageBackground } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require("../assets/images/home-background.png");

export default function Home() {
  return (
    <ImageBackground source={image} style={StyleSheet.absoluteFill}>
      <SafeAreaView className="flex-1 flex-col items-center py-5 justify-between">
        <Text className="mt-10 font-Jaro_400Regular text-9xl text-white">
          ReciclAR
        </Text>
        <TouchableOpacity className="">
          <Text className="text-white font-Jaro_400Regular text-2xl">Jogar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
