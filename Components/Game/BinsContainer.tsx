import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
  bins: Array<{
    id: string;
    image: any;
  }>;
  onBinPress: (binId: string) => void;
}

export function BinsContainer({ bins, onBinPress }: Props) {
  return (
    <View style={styles.container}>
      {bins.map((bin) => (
        <TouchableOpacity
          key={bin.id}
          style={styles.button}
          onPress={() => onBinPress(bin.id)}
        >
          <Image source={bin.image} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 120,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    padding: 8,
  },
});
