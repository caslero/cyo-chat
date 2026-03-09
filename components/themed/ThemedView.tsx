import { View, ViewProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/constants/Colors';

export function ThemedView({ style, children, ...otherProps }: ViewProps) {
  const colors = useThemeColor();
  const isDark = colors.background === '#000000';

  return (
    <View style={[{ backgroundColor: colors.background, flex: 1 }, style]} {...otherProps}>
      {/* CAPA DE PATRÓN REFINADO */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View 
          style={[
            styles.shape, 
            { 
              borderColor: colors.text, 
              opacity: isDark ? 0.05 : 0.02, 
              top: 40, 
              left: -30,
              width: 100,    // Reducido de 300 a 100
              height: 100,   // Reducido de 300 a 100
              borderRadius: 60,
              borderWidth: 15 // Trazo más fino
            }
          ]} 
        />
        
        <View 
          style={[
            styles.shape, 
            { 
              borderColor: colors.text, 
              opacity: isDark ? 0.04 : 0.02, 
              top: '40%', 
              right: -40, 
              width: 120, 
              height: 120,
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
        {/* Patrón estilo WhatsApp: Burbujas chat pequeñas repetidas */}
        {Array.from({ length: 20 }, (_, i) => (
          <View 
            key={i}
            style={[
              styles.shape, 
              { 
                backgroundColor: colors.text, 
                opacity: isDark ? 0.02 + Math.random() * 0.03 : 0.005 + Math.random() * 0.01, 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                width: 20 + Math.random() * 30, // Tamaños entre 20-50
                height: 15 + Math.random() * 25, // Alturas entre 15-40
                borderRadius: 10 + Math.random() * 10, // Bordes redondeados variables
                transform: [{ rotate: `${Math.random() * 60 - 30}deg` }] // Rotaciones entre -30 y 30 grados
              }
            ]} 
          />
        ))}
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

