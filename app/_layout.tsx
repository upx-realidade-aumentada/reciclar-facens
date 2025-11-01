import "@/global.css";

import { useEffect } from "react";

import { Jaro_400Regular, useFonts } from "@expo-google-fonts/jaro";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { usePreloadModels } from "@/hooks/usePreloadModels";
import { GameProvider } from "@/context/GameContext";

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

  return (
    <GameProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="pause"
          options={{ presentation: "containedTransparentModal" }}
        />
      </Stack>
    </GameProvider>
  );
}
