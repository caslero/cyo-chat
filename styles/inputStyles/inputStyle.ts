import { StyleSheet } from "react-native";

// Mapeo de colores para mantener la misma paleta
export const INPUT_COLORS = {
  outline: "#E5E7EB",
  focus: "#6366F1",
  hover: "#9333EA",
  placeholder: "#9CA3AF",
  background: "#FFFFFF",
  text: "#000000",
};

export const inputStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  baseInput: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: INPUT_COLORS.outline,
    backgroundColor: INPUT_COLORS.background,
    color: INPUT_COLORS.text,
    fontSize: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  uppercase: {
    textTransform: "uppercase",
  },
  focusStyle: {
    borderColor: INPUT_COLORS.focus,
    borderWidth: 2,
    shadowColor: INPUT_COLORS.focus,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});

// También puedes exportar un objeto único si prefieres
export default {
  styles: inputStyles,
  colors: INPUT_COLORS,
};
