import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeColor } from '@/constants/Colors';

export function JupiterPatternFondo() {
  const colors = useThemeColor();
  const isDark = colors.background === '#000000';

  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      <View style={[
        styles.circle, 
        { borderColor: colors.text, opacity: isDark ? 0.05 : 0.02, top: 50, left: -20 }
      ]} />
      <View style={[
        styles.circle, 
        { borderColor: colors.text, opacity: isDark ? 0.05 : 0.02, bottom: 100, right: -30, width: 300, height: 300 }
      ]} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 20,
  },
});



/**
import React from 'react';
import Svg, { Defs, Pattern, Path, Rect } from 'react-native-svg';
import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/constants/Colors';

export function JupiterPatternFondo() {
  const colors = useThemeColor();
  const isDark = colors.background === '#000000';

  return (
    <Svg style={StyleSheet.absoluteFillObject}>
      <Defs>
        <Pattern
          id="jupiter"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
        
          <Path
            d="M0 40a20 20 0 1 1 40 0H0zM40 0a20 20 0 1 1-40 0h40z"
            fill={colors.text} 
            fillOpacity={isDark ? 0.05 : 0.03} 
          />
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#jupiter)" />
    </Svg>
  );
}
 */