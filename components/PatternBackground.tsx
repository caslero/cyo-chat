import React from 'react';
import Svg, { Defs, Pattern, Path, Rect } from 'react-native-svg';
import { useTheme } from '@/hooks/useTheme';
import { View } from 'react-native';

const PATTERNS = {
  jigsaw: {
    width: 60,
    height: 60,
    paths: [
      "M30 0 L30 30 L0 30 L0 0 Z M30 30 L60 30 L60 60 L30 60 Z",
      "M30 30 L30 60 L0 60 L0 30 Z M30 30 L60 30 L60 0 L30 0 Z"
    ]
  },
  polkaDots: {
    width: 40,
    height: 40,
    paths: ["M20 20 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"]
  },
  topography: {
    width: 64,
    height: 64,
    paths: ["M32 0 L32 32 L0 32", "M32 32 L64 32 L64 64 L32 64"]
  },
  hexagons: {
    width: 56,
    height: 64,
    paths: ["M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 L28 0"]
  }
} as const;

export type PatternType = keyof typeof PATTERNS;

interface PatternBackgroundProps {
  pattern: PatternType;
  opacity?: number;
}

export const PatternBackground: React.FC<PatternBackgroundProps> = ({ 
  pattern = 'jigsaw', 
  opacity = 0.3 
}) => {
  const { theme, isDark } = useTheme();
  
  const patternColor = isDark 
    ? `rgba(255, 255, 255, ${opacity})`
    : `rgba(0, 0, 0, ${opacity})`;

  const { width, height, paths } = PATTERNS[pattern];

  return (
    <View style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0,
      zIndex: 0, // Detrás de todo
    }}>
      <Svg height="100%" width="100%" style={{ flex: 1 }}>
        <Defs>
          <Pattern
            id={`pattern-${pattern}`}
            patternUnits="userSpaceOnUse"
            width={width}
            height={height}
          >
            {paths.map((d, index) => (
              <Path
                key={index}
                d={d}
                fill={patternColor}
                stroke={patternColor}
                strokeWidth="1"
              />
            ))}
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill={`url(#pattern-${pattern})`} />
      </Svg>
    </View>
  );
};