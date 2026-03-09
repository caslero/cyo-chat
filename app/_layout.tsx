import { useEffect } from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { I18nProvider } from "@/providers/I18nProvider";
import * as SystemUI from 'expo-system-ui';
import * as SplashScreen from 'expo-splash-screen';

// Mantener la splash screen visible mientras cargan recursos
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const systemColorScheme = useColorScheme();
  const isDark = systemColorScheme === "dark";

  useEffect(() => {
    // Ocultar la splash screen una vez que el layout está listo
    SplashScreen.hideAsync();
  }, []);


  useEffect(() => {
    NavigationBar.setButtonStyleAsync(isDark ? "light" : "dark");
    SystemUI.setBackgroundColorAsync(isDark ? "#000000" : "#ffffff");
  }, [isDark]);

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1, backgroundColor: isDark ? "#000" : "#fff" }}>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor="transparent"
          translucent={true}
        />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="chat" />
          <Stack.Screen name="register" />
        </Stack>
      </View>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <I18nProvider>
      <RootLayoutNav />
    </I18nProvider>
  );
}


/**
import { I18nProvider } from "@/providers/I18nProvider";
import { Stack } from "expo-router";
import {  StatusBar, useColorScheme, View } from "react-native";

function RootLayoutNav() {
  const systemColorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {},
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="chat" />
        <Stack.Screen name="register" />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <I18nProvider>
      <RootLayoutNav />
    </I18nProvider>
  );
}
*/

/** 
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useTheme } from "@/hooks/useTheme";
import { I18nProvider } from "@/providers/I18nProvider";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { PatternBackground } from "@/components/PatternBackground";

// Componente que usa el tema (debe estar dentro de ThemeProvider)
function RootLayoutNav() {
  const { theme, isDark } = useTheme();

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setButtonStyleAsync(isDark ? 'light' : 'dark');
    }
  }, [isDark]);

  return (
    <>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <PatternBackground
        pattern="jigsaw"      // Elige el que más te guste
        opacity={0.3}         // Ajusta la intensidad
      />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="chat" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  );
}

// Layout raíz con todos los providers
export default function RootLayout() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <RootLayoutNav />
      </I18nProvider>
    </ThemeProvider>
  );
}
*/


  // useEffect(() => {
  //   if (Platform.OS === "android") {
  //     SystemUI.setBackgroundColorAsync(isDark ? "#000000" : "#FFFFFF");
  //   }
  // }, [isDark]);

// import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
// import "@/locales/i18n";
// import { I18nProvider } from "@/providers/I18nProvider";
// import { Stack } from "expo-router";
// import * as SystemUI from "expo-system-ui";
// import { useEffect } from "react";
// import { Platform, StatusBar } from "react-native";

// function RootLayoutNav() {
//   const { theme, isDark } = useTheme();

//   useEffect(() => {
//     if (Platform.OS === "android") {
//       SystemUI.setBackgroundColorAsync(isDark ? "#000000" : "#FFFFFF");
//     }
//   }, [isDark]);

//   return (
//     <>
//       <StatusBar
//         barStyle={isDark ? "light-content" : "dark-content"}
//         backgroundColor={isDark ? "#111827" : "#FFFFFF"}
//       />
//       <Stack
//         screenOptions={{
//           headerShown: false,
//           contentStyle: {
//             backgroundColor: theme.background,
//           },
//         }}
//       >
//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="chat" />
//         <Stack.Screen name="register" />
//       </Stack>
//     </>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ThemeProvider>
//       <I18nProvider>
//         <RootLayoutNav />
//       </I18nProvider>
//     </ThemeProvider>
//   );
// }

// // import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
// // import * as NavigationBar from "expo-navigation-bar";
// // import { Stack } from "expo-router";
// // import { useEffect } from "react";
// // import { Platform, StatusBar } from "react-native";

// // function RootLayoutNav() {
// //   const { theme, isDark } = useTheme();

// //   useEffect(() => {
// //     if (Platform.OS === "android") {
// //       NavigationBar.setBackgroundColorAsync(isDark ? "#111827" : "#FFFFFF");
// //       NavigationBar.setButtonStyleAsync(isDark ? "light" : "dark");
// //     }
// //   }, [isDark]);

// //   return (
// //     <>
// //       <StatusBar
// //         barStyle={isDark ? "light-content" : "dark-content"}
// //         backgroundColor={isDark ? "#111827" : "#FFFFFF"}
// //       />
// //       <Stack
// //         screenOptions={{
// //           headerShown: false,
// //           contentStyle: {
// //             backgroundColor: theme.background, // ✅ Directo, no theme.colors.background
// //           },
// //         }}
// //       >
// //         <Stack.Screen name="(tabs)" />
// //         <Stack.Screen name="chat" />
// //         <Stack.Screen name="register" />
// //       </Stack>
// //     </>
// //   );
// // }

// // export default function RootLayout() {
// //   return (
// //     <ThemeProvider>
// //       <RootLayoutNav />
// //     </ThemeProvider>
// //   );
// // }

// // import { ThemeProvider } from "@/contexts/ThemeContext";
// // import { useTheme } from "@/hooks/useTheme";
// // import { Stack } from "expo-router";
// // import { useEffect } from "react";
// // import { Platform, StatusBar } from "react-native";

// // function RootLayoutNav() {
// //   const { theme, isDark } = useTheme();

// //   useEffect(() => {
// //     if (Platform.OS === "android") {
// //       console.log("🎯 Modo:", isDark ? "OSCURO" : "CLARO");

// //       // NO HACER NADA MÁS
// //       // El sistema maneja automáticamente la barra con edgeToEdgeEnabled
// //     }
// //   }, [isDark]);

// //   return (
// //     <>
// //       <StatusBar
// //         barStyle={isDark ? "light-content" : "dark-content"}
// //         backgroundColor="transparent"
// //         translucent={true}
// //       />
// //       <Stack
// //         screenOptions={{
// //           headerShown: false,
// //           contentStyle: {
// //             backgroundColor: theme.colors.background,
// //           },
// //         }}
// //       >
// //         <Stack.Screen name="(tabs)" />
// //         <Stack.Screen name="chat" />
// //         <Stack.Screen name="register" />
// //       </Stack>
// //     </>
// //   );
// // }

// // export default function RootLayout() {
// //   return (
// //     <ThemeProvider>
// //       <RootLayoutNav />
// //     </ThemeProvider>
// //   );
// // }

// // import { ThemeProvider } from "@/contexts/ThemeContext";
// // import { useTheme } from "@/hooks/useTheme";
// // import { Stack } from "expo-router";
// // import { useEffect } from "react";
// // import { NativeModules, Platform, StatusBar } from "react-native";

// // const { StatusBarManager } = NativeModules;

// // // Función para convertir hex a número ARGB
// // const hexToARGB = (hex: string): number => {
// //   // Si viene con #, lo quitamos
// //   const cleanHex = hex.replace("#", "");
// //   // Agregamos alpha FF (opaco) y convertimos a número
// //   return parseInt(`FF${cleanHex}`, 16);
// // };

// // function RootLayoutNav() {
// //   const { theme, isDark } = useTheme();

// //   useEffect(() => {
// //     if (Platform.OS === "android") {
// //       console.log("Cambiando tema a:", isDark ? "oscuro" : "claro");

// //       if (StatusBarManager) {
// //         // Usar el color exacto del tema
// //         const colorNumber = hexToARGB(theme.colors.background);
// //         StatusBarManager.setColor(colorNumber, true);
// //       }
// //     }
// //   }, [isDark, theme.colors.background]);

// //   return (
// //     <>
// //       <StatusBar
// //         barStyle={isDark ? "light-content" : "dark-content"}
// //         backgroundColor="transparent"
// //         translucent={true}
// //       />
// //       <Stack
// //         screenOptions={{
// //           headerShown: false,
// //           contentStyle: {
// //             backgroundColor: theme.colors.background,
// //           },
// //         }}
// //       >
// //         <Stack.Screen name="(tabs)" />
// //         <Stack.Screen name="chat" />
// //         <Stack.Screen name="register" />
// //       </Stack>
// //     </>
// //   );
// // }

// // export default function RootLayout() {
// //   return (
// //     <ThemeProvider>
// //       <RootLayoutNav />
// //     </ThemeProvider>
// //   );
// // }

// /**
// import { ThemeProvider } from "@/contexts/ThemeContext";
// import { useTheme } from "@/hooks/useTheme";
// import { Stack } from "expo-router";
// import { useEffect } from "react";
// import { NativeModules, Platform, StatusBar } from "react-native";

// const { StatusBarManager } = NativeModules;

// function RootLayoutNav() {
//   const { theme, isDark } = useTheme();

//   useEffect(() => {
//     if (Platform.OS === "android") {
//       console.log("Cambiando tema a:", isDark ? "oscuro" : "claro");

//       // Para Android nativo - usar número en lugar de string
//       if (StatusBarManager) {
//         // Formato: 0xAARRGGBB (AA = alpha, RR = rojo, GG = verde, BB = azul)
//         // FF = opaco (255), 00 = transparente
//         const colorNumber = isDark ? 0xff000000 : 0xffffffff;
//         StatusBarManager.setColor(colorNumber, true);
//       }
//     }
//   }, [isDark]);

//   return (
//     <>
//       <StatusBar
//         barStyle={isDark ? "light-content" : "dark-content"}
//         backgroundColor="transparent"
//         translucent={true}
//       />
//       <Stack
//         screenOptions={{
//           headerShown: false,
//           contentStyle: {
//             backgroundColor: theme.colors.background,
//           },
//         }}
//       >
//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="chat" />
//         <Stack.Screen name="register" />
//       </Stack>
//     </>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ThemeProvider>
//       <RootLayoutNav />
//     </ThemeProvider>
//   );
// }
// */

// /**
// // app/_layout.tsx
// import { ThemeProvider } from "@/contexts/ThemeContext";
// import { useTheme } from "@/hooks/useTheme";
// import { Stack } from "expo-router";
// import { StatusBar } from "react-native";

// function RootLayoutNav() {
//   const { theme, isDark } = useTheme();

//   return (
//     <>
//       <StatusBar
//         barStyle={isDark ? "light-content" : "dark-content"}
//         backgroundColor="transparent"
//         translucent={true}
//       />
//       <Stack
//         screenOptions={{
//           headerShown: false, // 👈 Oculta headers globalmente
//           contentStyle: {
//             backgroundColor: theme.colors.background,
//           },
//         }}
//       >

//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="chat" />
//         <Stack.Screen name="register" />
//       </Stack>
//     </>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ThemeProvider>
//       <RootLayoutNav />
//     </ThemeProvider>
//   );
// }
//   */

// /**
// import { ThemeProvider } from "@/contexts/ThemeContext";
// import { useTheme } from "@/hooks/useTheme";
// import { Stack } from "expo-router";
// import { StatusBar } from "react-native";

// function RootLayoutNav() {
//   const { theme, isDark } = useTheme();

//   return (
//     <>
//       <StatusBar
//         barStyle={isDark ? "light-content" : "dark-content"}
//         backgroundColor="transparent"
//         translucent={true}
//       />
//       <Stack
//         screenOptions={{
//           headerShown: false, // 👈 MAGIA: Oculta TODOS los headers de UNA VEZ
//           contentStyle: {
//             backgroundColor: theme.colors.background,
//           },
//           animation: "slide_from_right", // Animación tipo WhatsApp
//         }}
//       >

//         <Stack.Screen name="index" />
//         <Stack.Screen name="tabs" />
//         <Stack.Screen name="chat/[id]" />
//         <Stack.Screen name="settings" />
//       </Stack>
//     </>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ThemeProvider>
//       <RootLayoutNav />
//     </ThemeProvider>
//   );
// }
// */

// // import {
// //   DarkTheme,
// //   DefaultTheme,
// //   ThemeProvider,
// // } from "@react-navigation/native";
// // import { Stack } from "expo-router";
// // import { StatusBar } from "expo-status-bar";
// // import "react-native-reanimated";

// // import { useColorScheme } from "@/hooks/use-color-scheme";

// // export const unstable_settings = {
// //   anchor: "(tabs)",
// // };

// // export default function RootLayout() {
// //   const colorScheme = useColorScheme();

// //   return (
// //     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
// //       <Stack>
// //         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// //       </Stack>
// //       <StatusBar style="auto" />
// //     </ThemeProvider>
// //   );
// // }

// /**
// import { ThemeProvider } from "@/contexts/ThemeContext";
// import { useTheme } from "@/hooks/useTheme";
// import { Stack } from "expo-router";
// import { StatusBar } from "react-native";

// function RootLayoutNav() {
//   const { theme, isDark } = useTheme();

//   return (
//     <>
//       <StatusBar
//         barStyle={isDark ? "light-content" : "dark-content"}
//         backgroundColor={theme.colors.background}
//       />
//       <Stack>
//         <Stack.Screen
//           name="index"
//           options={{
//             title: "Chat",
//             headerStyle: {
//               backgroundColor: theme.colors.surface,
//             },
//             headerTintColor: theme.colors.text,
//           }}
//         />
//       </Stack>
//     </>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ThemeProvider>
//       <RootLayoutNav />
//     </ThemeProvider>
//   );
// }
// */
