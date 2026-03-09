import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro (simulado)</Text>
      <Text style={{ marginBottom: 12 }}>
        Esta pantalla es solo un marcador. Presiona el botón para volver al
        Login.
      </Text>
      <Button title="Volver" onPress={() => router.push("/")} />
      <View style={{ marginTop: 12 }}>
        <Link href="/">Ir al Login</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  title: { fontSize: 22, marginBottom: 8 },
});
