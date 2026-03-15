import { useEffect } from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { I18nProvider } from "@/providers/I18nProvider";
import * as SystemUI from "expo-system-ui";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useAppSecurity } from "@/hooks/useAppSecurity";
import { useIdleTimer } from "@/hooks/useIdleTimer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Mantener la splash screen visible mientras cargan recursos
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const systemColorScheme = useColorScheme();
  const isDark = systemColorScheme === "dark";

  useAppSecurity();
  useIdleTimer(1);

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
          <Stack.Screen name="chat/chat" />
          <Stack.Screen name="registro-usuario/register" />
        </Stack>
      </View>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <I18nProvider>
          <RootLayoutNav />
        </I18nProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

/** 
import { useEffect } from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { I18nProvider } from "@/providers/I18nProvider";
import * as SystemUI from "expo-system-ui";
import * as SplashScreen from "expo-splash-screen";
import { store } from "@/store/store";
import { useAppDispatch } from "@/store/hook";

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
          <Stack.Screen name="chat/chat" />
          <Stack.Screen name="registro-usuario/register" />
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
*/
