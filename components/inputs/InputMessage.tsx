// components/inputs/InputMessage.tsx
import type { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface InputMessageProps {
  mensaje: string;
  tipo?: "error" | "success" | "info";
}

const InputMessage: FC<InputMessageProps> = ({ mensaje, tipo = "error" }) => {
  // Definir colores según el tipo
  const getColors = () => {
    switch (tipo) {
      case "error":
        return {
          bg: "#FEE2E2",
          text: "#DC2626",
          border: "#FECACA",
        };
      case "success":
        return {
          bg: "#D1FAE5",
          text: "#059669",
          border: "#A7F3D0",
        };
      case "info":
        return {
          bg: "#DBEAFE",
          text: "#2563EB",
          border: "#BFDBFE",
        };
      default:
        return {
          bg: "#FEE2E2",
          text: "#DC2626",
          border: "#FECACA",
        };
    }
  };

  const colors = getColors();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.bg,
          borderColor: colors.border,
        },
      ]}
    >
      <Text style={[styles.text, { color: colors.text }]}>{mensaje}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default InputMessage;
