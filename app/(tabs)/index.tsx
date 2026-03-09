import { ScreenContainer } from "@/components/themed/ScreenContainer";
import { ThemedText } from "@/components/themed/ThemedText";

// En app/index.tsx
export default function HomeScreen() {
  return (
    <ScreenContainer> 
       <ThemedText style={{ marginTop: 60 }}>Contenido de la App</ThemedText>
    </ScreenContainer>
  );
}


/** 
import { StyleSheet, View } from 'react-native';
import { ScreenContainer } from '@/components/themed/ScreenContainer';
import { ThemedText } from '@/components/themed/ThemedText';
import { useThemeColor } from '@/constants/Colors';

export default function LoginScreen() {
  const colors = useThemeColor();

  return (
    <ScreenContainer scrollable style={styles.container}>
      <View style={styles.header}>
    
        <ThemedText style={styles.title}>Bienvenido</ThemedText>
        <ThemedText style={styles.subtitle}>Inicia sesión para continuar</ThemedText>
      </View>

      <View style={styles.form}>
        
        <View style={[styles.inputPlaceholder, { borderColor: colors.border }]}>
          <ThemedText style={{ opacity: 0.5 }}>Correo electrónico...</ThemedText>
        </View>
        
        <View style={[styles.inputPlaceholder, { borderColor: colors.border }]}>
          <ThemedText style={{ opacity: 0.5 }}>Contraseña...</ThemedText>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  form: {
    gap: 16,
  },
  inputPlaceholder: {
    height: 55,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
*/



// // app/(tabs)/index.tsx
// //import { useTheme } from "@/contexts/ThemeContext";
// import { useTheme } from "@/hooks/useTheme";
// import { useTranslation } from "react-i18next";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function HomeScreen() {
//   const { theme, isDark, toggleTheme } = useTheme();

//   const { t } = useTranslation();

//   return (
//     <View
//       style={[styles.container, { backgroundColor: theme.colors.background }]}
//     >
      
//       <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
//         <Text style={[styles.title, { color: theme.colors.text }]}>
//           {isDark ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
//         </Text>

//         <TouchableOpacity
//           style={[styles.button, { backgroundColor: theme.colors.primary }]}
//           onPress={toggleTheme}
//         >
//           <Text style={styles.buttonText}>{t("change_theme")}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// // ...styles (igual)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   card: {
//     padding: 24,
//     borderRadius: 16,
//     width: "100%",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 24,
//   },
//   button: {
//     padding: 16,
//     borderRadius: 12,
//     width: "100%",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

/**
import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const { theme, isDark, toggleTheme, themeMode, followSystem } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Tema actual: {isDark ? "🌙 Oscuro" : "☀️ Claro"}
        </Text>

        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Modo:{" "}
          {themeMode === null ? "Siguiendo sistema" : `Forzado ${themeMode}`}
        </Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={toggleTheme}
        >
          <Text style={styles.buttonText}>
            Cambiar a {isDark ? "claro" : "oscuro"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.surfaceSecondary },
          ]}
          onPress={followSystem}
        >
          <Text style={[styles.buttonText, { color: theme.colors.text }]}>
            Seguir sistema
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    padding: 24,
    borderRadius: 16,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
 */

/**
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!name) return;
    // No backend logic: just pass name as query param to chat
    router.push(`/chat?name=${encodeURIComponent(name)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Tu nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <View style={styles.register}>
        <Text>¿No tienes cuenta? </Text>
        <Link href="/register">Registrarse</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  title: { fontSize: 24, marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
    color: "#fff",
  },
  register: { flexDirection: "row", marginTop: 12, alignItems: "center" },
});
*/
