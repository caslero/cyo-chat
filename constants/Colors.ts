import { useColorScheme } from 'react-native';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#FFFFFF',
    tint: tintColorLight,
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    border: '#E2E8F0',
    primary: '#007AFF',
  },
  dark: {
    text: '#ECEDEE',
    background: '#000000',
    tint: tintColorDark,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    border: '#1E293B',
    primary: '#0A84FF',
  },
};

/**
 * Hook personalizado para acceder a los colores según el tema actual
 */
export function useThemeColor() {
  const theme = useColorScheme() ?? 'light';
  return Colors[theme];
}
