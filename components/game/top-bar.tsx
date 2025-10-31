import { StyleSheet, Text, View } from "react-native";

interface Props {
  score: number;
  timeLeft: number;
  currentItemTitle: string;
}

export function TopBar({ score, timeLeft, currentItemTitle }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.text}>Pontuação: {score}</Text>
        <Text style={styles.titleText}>{currentItemTitle}</Text>
      </View>
      <Text style={styles.text}>🕛 {timeLeft}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  titleText: { fontSize: 32, fontWeight: "bold", color: "white" },
  text: { fontSize: 20, fontWeight: "bold", color: "yellow" },
});
