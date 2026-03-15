import type { InputLabelProps } from "@/types/inputs/inputLabelProps";
import type { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

// Mapeo de colores para mantener la misma paleta
const COLORS = {
  label: "#6366F1", // Mismo color que en web
  text: "#000000",
};

const InputLabel: FC<InputLabelProps> = ({
  htmlFor, // En React Native no se usa directamente, pero lo mantenemos para compatibilidad
  nombre,
  children,
  className, // En React Native se mapea a style
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          className
            ? {
                /* mapear className a style */
              }
            : null,
        ]}
      >
        {nombre}
      </Text>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 8,
  },
  label: {
    fontSize: 14, // text-sm
    fontWeight: "500", // font-medium
    color: COLORS.label, // text-[#6366F1]
    marginBottom: 4, // equivalente al espacio entre label y children
  },
  childrenContainer: {
    marginTop: 4, // mt-1 (4px)
    width: "100%",
  },
});

export default InputLabel;
