import { Local } from "./bins";

export interface Item {
  src: string;
  title: string;
  local: Local;
  scale: number;
}

export const items: Item[] = [
  {
    src: require("@/assets/models/Bottle.glb"),
    title: "Garrafa de vidro",
    local: "VIDRO",
    scale: 2.6,
  },
  {
    src: require("@/assets/models/Papers.glb"),
    title: "Papéis",
    local: "PAPEL",
    scale: 8,
  },
  {
    src: require("@/assets/models/Soda.glb"),
    title: "Lata de refrigerante",
    local: "METAL",
    scale: 0.3,
  },
  {
    src: require("@/assets/models/Spoon.glb"),
    title: "Colher de metal",
    local: "METAL",
    scale: 1,
  },
  {
    src: require("@/assets/models/Box.glb"),
    title: "Caixa de papelão",
    local: "PAPEL",
    scale: 3,
  },
  {
    src: require("@/assets/models/Cup.glb"),
    title: "Copo de Plástico",
    local: "PLÁSTICO",
    scale: 4,
  },
];
