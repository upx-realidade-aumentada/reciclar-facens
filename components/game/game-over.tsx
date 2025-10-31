import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface GameOverProps {
  score: number;
  onRestart: () => void;
}

export function GameOver({ score, onRestart }: GameOverProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.gameOver}>Fim de Jogo!</Text>
      <Text style={styles.text}>Pontuação Final: {score}</Text>
      <TouchableOpacity style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOver: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    marginBottom: 15,
  },
  text: { fontSize: 20, fontWeight: "bold", color: "yellow" },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#e74c3c",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
});
