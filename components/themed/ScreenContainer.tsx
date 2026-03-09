import { ReactNode } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, ViewStyle, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from './ThemedView';

interface Props {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  scrollable?: boolean;
}

export function ScreenContainer({ children, style, scrollable = false }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.flex}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={[
            styles.flex,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              backgroundColor: "transparent",
            },
            style,
          ]}
        >
          {scrollable ? (
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              style={{ backgroundColor: "transparent" }}
            >
              {children}
            </ScrollView>
          ) : (
            children
          )}
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});




// import { ReactNode } from 'react';
// import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, ViewStyle } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { ThemedView } from './ThemedView';
// import { JupiterPatternFondo } from './JupiterPatternFondo';

// // Definimos las propiedades rápidamente
// interface Props {
//   children: ReactNode;
//   style?: ViewStyle;
//   scrollable?: boolean;
//   withPattern?: boolean;
// }

// export function ScreenContainer({ 
//   children, 
//   style, 
//   scrollable = false, 
//   withPattern = true 
// }: Props) {
//   const insets = useSafeAreaInsets();

//   const content = (
//     <View style={[{ 
//       flex: 1, 
//       zIndex: 1, 
//       paddingTop: insets.top, 
//       paddingBottom: insets.bottom 
//     }, style]}>
//       {children}
//     </View>
//   );

//   return (
//     <ThemedView style={styles.container}>
//       {withPattern && <JupiterPatternFondo />}
      
//       <KeyboardAvoidingView 
//         style={{ flex: 1 }} 
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       >
//         {scrollable ? (
//           <ScrollView 
//             contentContainerStyle={{ flexGrow: 1 }} 
//             keyboardShouldPersistTaps="handled"
//           >
//             {content}
//           </ScrollView>
//         ) : (
//           content
//         )}
//       </KeyboardAvoidingView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


/** 
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, ViewProps, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/themed/ThemedView';
import { JupiterPatternFondo } from '@/components/themed/JupiterPatternFondo';

interface ScreenContainerProps extends ViewProps {
  scrollable?: boolean;
  withPattern?: boolean;
}

export function ScreenContainer({ children, style, scrollable = false, withPattern = true, ...otherProps }: ScreenContainerProps) {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.container} {...otherProps}>
      {withPattern && <JupiterPatternFondo />}

      <View style={[{ 
        flex: 1, 
        zIndex: 1, 
        paddingTop: insets.top, 
        paddingBottom: insets.bottom 
      }, style]}>
        {children}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
*/


/** 
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from './ThemedView';

interface ScreenContainerProps extends ViewProps {
  scrollable?: boolean;
}

export function ScreenContainer({ children, style, scrollable = false, ...otherProps }: ScreenContainerProps) {
  const insets = useSafeAreaInsets(); // Gestiona el Notch y la barra de navegación de 2026

  const content = (
    <ThemedView 
      style={[
        styles.container, 
        { paddingTop: insets.top, paddingBottom: insets.bottom }, 
        style
      ]} 
      {...otherProps}
    >
      {children}
    </ThemedView>
  );

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {scrollable ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
*/
