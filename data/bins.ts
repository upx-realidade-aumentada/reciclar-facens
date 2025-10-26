import { ImageSourcePropType } from "react-native";

export type Local = "PAPEL" | "METAL" | "VIDRO" | "PLÁSTICO";

export interface Bin {
  id: Local;
  image: ImageSourcePropType;
}

export const bins: Bin[] = [
  { id: "PAPEL", image: require("@/assets/bins/paper.png") },
  { id: "METAL", image: require("@/assets/bins/metal.png") },
  { id: "VIDRO", image: require("@/assets/bins/glass.png") },
  { id: "PLÁSTICO", image: require("@/assets/bins/plastic.png") },
];
