import { Local } from "./bins";

export interface Item {
  src: string;
  title: string;
  local: Local;
  scale: number;
  description?: string;
}

export const items: Item[] = [
  {
    src: require("@/assets/models/Bottle.glb"),
    title: "Garrafa de vidro",
    local: "VIDRO",
    scale: 2.6,
    description:
      "Garrafa de vidro — deve ser colocada no contêiner de vidro. Enxágue rapidamente antes de descartar e remova tampas de outro material.",
  },
  {
    src: require("@/assets/models/Papers.glb"),
    title: "Papéis",
    local: "PAPEL",
    scale: 8,
    description:
      "Papéis — jornais, folhas e cadernos (sem resíduos) vão para o contêiner de papel. Remova grampos e embalagens plásticas quando possível.",
  },
  {
    src: require("@/assets/models/Soda.glb"),
    title: "Lata de refrigerante",
    local: "METAL",
    scale: 0.3,
    description:
      "Lata de refrigerante — metal reciclável. Esvazie e, se possível, esmague para reduzir volume antes de descartar.",
  },
  {
    src: require("@/assets/models/Spoon.glb"),
    title: "Colher de metal",
    local: "METAL",
    scale: 1,
    description:
      "Colher de metal — utensílios metálicos podem ser recicláveis em alguns locais; verifique as regras locais. Em muitos programas, metais pequenos vão no contêiner de metal.",
  },
  {
    src: require("@/assets/models/Box.glb"),
    title: "Caixa de papelão",
    local: "PAPEL",
    scale: 3,
    description:
      "Caixa de papelão — dobre e plie para economizar espaço; remova fitas adesivas e materiais plásticos antes de reciclar.",
  },
  {
    src: require("@/assets/models/Cup.glb"),
    title: "Copo de Plástico",
    local: "PLÁSTICO",
    scale: 4,
    description:
      "Copo de plástico — alguns copos são recicláveis, outros não (dependendo do tipo de plástico). Enxágue e descarte no contêiner de plástico se aceito localmente.",
  },
  // Itens adicionais encontrados em assets/models — mapeados e com explicações
  {
    src: require("@/assets/models/Shampoo.glb"),
    title: "Frasco de shampoo",
    local: "PLÁSTICO",
    scale: 1.5,
    description:
      "Frasco de shampoo — normalmente plástico. Enxágue o frasco e descarte a tampa conforme as instruções locais (tampas às vezes são separadas).",
  },
  {
    src: require("@/assets/models/PlasticSoda.glb"),
    title: "Garrafa de Refrigerante",
    local: "PLÁSTICO",
    scale: 0.2,
    description:
      "Garrafas plásticas — esvazie, amasse e coloque no contêiner de plástico. Retire rótulos se solicitado pelo serviço local.",
  },
  {
    src: require("@/assets/models/Notebook.glb"),
    title: "Caderno",
    local: "PAPEL",
    scale: 6,
    description:
      "Caderno — se estiver em bom estado, considere reutilizar; se for para reciclagem, remova capas plásticas e espirais metálicas quando possível.",
  },
  {
    src: require("@/assets/models/Nail.glb"),
    title: "Prego / Peça de metal",
    local: "METAL",
    scale: 2,
    description:
      "Prego — pequenos metais podem ser reciclados com outros metais. Tome cuidado com objetos pontiagudos ao embalar.",
  },
  {
    src: require("@/assets/models/Mug.glb"),
    title: "Caneca",
    local: "VIDRO",
    scale: 0.1,
    description:
      "Caneca — dependendo do material (cerâmica ou vidro) pode não ser reciclável junto ao vidro. Aqui é tratada como vidro; verifique orientações locais.",
  },
  {
    src: require("@/assets/models/Cans.glb"),
    title: "Latas",
    local: "METAL",
    scale: 3,
    description:
      "Latas — metal reciclável. Enxágue e achate se possível; agrupar latas facilita o transporte e a reciclagem.",
  },
];
