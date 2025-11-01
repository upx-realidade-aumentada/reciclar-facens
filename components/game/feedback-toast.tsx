import { Animated, StyleSheet, Text } from "react-native";
import { useEffect, useRef } from "react";

interface FeedbackToastProps {
  isCorrect: boolean;
  itemName: string;
  correctBin: string;
  visibleKey: number;
  onComplete: () => void;
}

export function FeedbackToast({
  isCorrect,
  itemName,
  correctBin,
  visibleKey,
  onComplete,
}: FeedbackToastProps) {
  const translateY = useRef(new Animated.Value(-100)).current;
  const currentAnimRef = useRef<Animated.CompositeAnimation | null>(null);
  const runTokenRef = useRef(0);

  useEffect(() => {
    if (visibleKey == null || visibleKey < 0) return;

    runTokenRef.current += 1;
    const thisRun = runTokenRef.current;

    if (currentAnimRef.current) {
      try {
        currentAnimRef.current.stop();
      } catch (e) {}
      currentAnimRef.current = null;
    }

    translateY.setValue(1000);
    const seq = Animated.sequence([
      Animated.spring(translateY, {
        toValue: 800,
        useNativeDriver: true,
        friction: 8,
        tension: 100,
      }),
      Animated.delay(700),
      Animated.spring(translateY, {
        toValue: 1000,
        useNativeDriver: true,
        friction: 8,
        tension: 100,
      }),
    ]);

    currentAnimRef.current = seq;

    seq.start(() => {
      if (runTokenRef.current === thisRun) {
        currentAnimRef.current = null;
        onComplete();
      }
    });

    return () => {
      if (currentAnimRef.current) {
        try {
          currentAnimRef.current.stop();
        } catch (e) {}
        currentAnimRef.current = null;
      }
    };
  }, [visibleKey]);

  return (
    <Animated.View
      pointerEvents="none"
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
