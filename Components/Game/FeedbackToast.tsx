import { Animated, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef } from "react";

interface FeedbackToastProps {
  isCorrect: boolean;
  itemName: string;
  correctBin: string;
  visible: boolean;
  onComplete: () => void;
}

export function FeedbackToast({
  isCorrect,
  itemName,
  correctBin,
  visible,
  onComplete,
}: FeedbackToastProps) {
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.spring(translateY, {
          toValue: 50,
          useNativeDriver: true,
        }),
        Animated.delay(1000),
        Animated.spring(translateY, {
          toValue: -100,
          useNativeDriver: true,
        }),
      ]).start(() => onComplete());
    }
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: isCorrect
            ? "rgba(46, 204, 113, 1)"
            : "rgba(231, 76, 60, 1)",
          transform: [{ translateY }],
        },
      ]}
    >
      <Text style={styles.text}>
        {isCorrect
          ? `✅ Correto! ${itemName} vai na lixeira ${correctBin}`
          : `❌ Ops! ${itemName} deveria ir na lixeira ${correctBin}`}
      </Text>
    </Animated.View>
  );
}

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 10,
    padding: 16,
    zIndex: 9999,
    elevation: 6,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
