import { useColorScheme } from "react-native";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#FFFFFF",
    tint: tintColorLight,
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    border: "#E2E8F0",
    primary: "#007AFF",
    secondary: "#9333EA",
    surface: "#F9FAFB",
    textSecondary: "#6B7280",
    error: "#EF4444",
    success: "#10B981",
    warning: "#F59E0B",
    info: "#3B82F6",
  },
  dark: {
    text: "#ECEDEE",
    background: "#000000",
    tint: tintColorDark,
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    border: "#1E293B",
    primary: "#0A84FF",
    secondary: "#A855F7",
    surface: "#1F2937",
    textSecondary: "#9CA3AF",
    error: "#F87171",
    success: "#34D399",
    warning: "#FBBF24",
    info: "#60A5FA",
  },
};

/**
 * Hook personalizado para acceder a los colores según el tema actual
 */
export function useThemeColor() {
  const theme = useColorScheme() ?? "light";
  return Colors[theme];
}
