import { Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/constants/Colors';

export function ThemedText({ style, ...otherProps }: TextProps) {
  const colors = useThemeColor();
  
  return (
    <Text 
      style={[{ color: colors.text }, style]} 
      {...otherProps} 
    />
  );
}
