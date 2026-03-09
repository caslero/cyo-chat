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
