import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface LessonData {
  title: string;
  correctBin: string;
  description?: string;
}

interface EducationalModalProps {
  visible: boolean;
  onClose: () => void;
  lesson: LessonData;
}

export function EducationalModal({
  visible,
  onClose,
  lesson,
}: EducationalModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Aprendizado</Text>
          <Text style={styles.itemTitle}>{lesson.title}</Text>
          <Text style={styles.text}>
            Este item deve ser descartado no recolhedor: {"\n"}
            <Text style={styles.bin}>{lesson.correctBin}</Text>
          </Text>
          <Text style={styles.description}>
            {lesson.description ??
              "Dica: Separe resíduos secos e limpos. Remova restos antes de descartar."}
          </Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "700", color: "#fff", marginBottom: 8 },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffd700",
    marginBottom: 8,
  },
  text: { color: "#fff", textAlign: "center", marginBottom: 8 },
  bin: { fontWeight: "800", color: "#4ade80" },
  description: { color: "#ddd", textAlign: "center", marginBottom: 16 },
  button: {
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
