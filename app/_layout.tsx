import "@/global.css";

import { useEffect } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { Jaro_400Regular, useFonts } from "@expo-google-fonts/jaro";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCameraPermissions } from "expo-camera";

import { usePreloadModels } from "@/hooks/usePreloadModels";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const modelsLoaded = usePreloadModels();
  const [fontsLoaded, error] = useFonts({
    Jaro_400Regular,
  });

  useEffect(() => {
    if ((fontsLoaded && modelsLoaded) || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, modelsLoaded, error]);

  if (!fontsLoaded || !modelsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
