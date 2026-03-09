import { View, ViewProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/constants/Colors';

export function ThemedView({ style, children, ...otherProps }: ViewProps) {
  const colors = useThemeColor();
  const isDark = colors.background === '#000000';

  return (
    <View style={[{ backgroundColor: colors.background, flex: 1 }, style]} {...otherProps}>
      {/* CAPA DE PATRÓN REFINADO */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {/* Círculo Superior Izquierdo más pequeño */}
        <View 
          style={[
            styles.shape, 
            { 
              borderColor: colors.text, 
              opacity: isDark ? 0.05 : 0.02, 
              top: 40, 
              left: -30,
              width: 120,    // Reducido de 300 a 120
              height: 120,   // Reducido de 300 a 120
              borderRadius: 60,
              borderWidth: 15 // Trazo más fino
            }
          ]} 
        />
        {/* Círculo Central Derecho */}
        <View 
          style={[
            styles.shape, 
            { 
              borderColor: colors.text, 
              opacity: isDark ? 0.04 : 0.02, 
              top: '40%', 
              right: -40, 
              width: 180, 
              height: 180,
              borderRadius: 90,
              borderWidth: 20 
            }
          ]} 
        />
        {/* Círculo Inferior Izquierdo */}
        <View 
          style={[
            styles.shape, 
            { 
              borderColor: colors.text, 
              opacity: isDark ? 0.05 : 0.02, 
              bottom: 60, 
              left: -20,
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 12
            }
          ]} 
        />
      </View>
      
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  shape: {
    position: 'absolute',
  },
});

