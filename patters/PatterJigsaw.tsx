// components/HeroPattern.tsx
import React from 'react';
import Svg, { Defs, Pattern, Path, Rect } from 'react-native-svg';
import { useTheme } from '@/hooks/useTheme';

// Ejemplo con patrón "Jigsaw" de Hero Patterns
export const JigsawPattern = () => {
  const { theme, isDark } = useTheme();
  
  // Color del patrón: ligeramente diferente en cada tema
  const patternColor = isDark 
    ? 'rgba(255, 255, 255, 0.05)' // Blanco muy tenue en modo oscuro
    : 'rgba(0, 0, 0, 0.03)';       // Negro muy tenue en modo claro

  return (
    <Svg height="100%" width="100%" style={{ position: 'absolute' }}>
      <Defs>
        <Pattern
          id="jigsaw"
          patternUnits="userSpaceOnUse"
          width="60"
          height="60"
        >
          <Path
            d="M30 0 L30 30 L0 30 L0 0 Z M30 30 L60 30 L60 60 L30 60 Z"
            fill={patternColor}
          />
          <Path
            d="M30 30 L30 60 L0 60 L0 30 Z M30 30 L60 30 L60 0 L30 0 Z"
            fill="none"
            stroke={patternColor}
            strokeWidth="1"
          />
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#jigsaw)" />
    </Svg>
  );
};