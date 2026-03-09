// app/(tabs)/_layout.tsx
import { Stack } from "expo-router";

export default function TabsLayout() {
  

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}

/**
 <Tabs
      screenOptions={{
        headerShown: false, // 👈 También oculta headers aquí
        tabBarStyle: {
          backgroundColor: theme.surface,
          borderTopColor: theme.border,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          // Aquí puedes agregar iconos después
        }}
      />
    </Tabs>
 */

/**
 # 1. Limpia todo
npx expo start -c

# 2. Si no funciona, desinstala y reinstala
npx expo uninstall expo-navigation-bar
npx expo install expo-navigation-bar

# 3. Borra node_modules y reinstala
rm -rf node_modules
npm install
npx expo start -c
 */
