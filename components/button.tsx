import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { cn } from "../lib/utils";

const themes = {
  primary: {
    light: "#86E04A",
    dark: "#53A721",
    stroke: "#203D0A",
    shadowTop: "#6DA842",
    shadowBottom: "#C1F889",
    textShadow: "#3B7A1C",
  },
  yellow: {
    light: "#F8D44C",
    dark: "#F0B90A",
    stroke: "#A47D06",
    shadowTop: "#C49E08",
    shadowBottom: "#F7E47C",
    textShadow: "#A47D06",
  },
  purple: {
    light: "#A492FF",
    dark: "#7A64E3",
    stroke: "#5442A0",
    shadowTop: "#7C67E3",
    shadowBottom: "#C4BAFF",
    textShadow: "#5442A0",
  },
  blue: {
    light: "#6EC9FF",
    dark: "#2B8EDB",
    stroke: "#145B99",
    shadowTop: "#3E9ED6",
    shadowBottom: "#A7E0FF",
    textShadow: "#145B99",
  },
  red: {
    light: "#FF7A7A",
    dark: "#E24343",
    stroke: "#8C1E1E",
    shadowTop: "#C13636",
    shadowBottom: "#FFB1B1",
    textShadow: "#8C1E1E",
  },
  orange: {
    light: "#FFB26E",
    dark: "#E57C1F",
    stroke: "#8C480E",
    shadowTop: "#CC6B1B",
    shadowBottom: "#FFD2A7",
    textShadow: "#8C480E",
  },
  teal: {
    light: "#6EE8D0",
    dark: "#27B89D",
    stroke: "#106455",
    shadowTop: "#33BFA3",
    shadowBottom: "#A9F2E2",
    textShadow: "#106455",
  },
};

interface ButtonProps {
  color?: keyof typeof themes;
  icon?: keyof typeof FontAwesome5.glyphMap;
  title?: string;
  onPress: () => void;
  className?: string;
}

export function Button({
  color = "primary",
  icon,
  title,
  onPress,
  className,
}: ButtonProps) {
  const theme = themes[color];
  const borderWidth = 4;

  const boxShadow = [
    {
      offsetX: 0,
      offsetY: -8,
      blurRadius: 0.5,
      spreadDistance: 4,
      color: theme.shadowTop,
      inset: true,
    },
    {
      offsetX: 0,
      offsetY: 3,
      blurRadius: 0.6,
      spreadDistance: 2,
      color: theme.shadowBottom,
      inset: true,
    },
  ];

  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "flex-row rounded-full items-center justify-center gap-3 py-6 px-10",
        className
      )}
      style={{
        backgroundColor: theme.light,
        borderColor: theme.stroke,
        borderWidth,
        boxShadow,
      }}
    >
      {icon && <FontAwesome5 name={icon} size={24} color="white" />}
      {title && (
        <Text
          className="text-white font-Jaro_400Regular text-3xl"
          style={{
            textShadowColor: theme.textShadow,
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 2,
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}
