import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ChatScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a mi chat</Text>
      <Text style={{ marginBottom: 12 }}>{`Hola`}</Text>
      <Button
        title="Cerrar sesión"
        onPress={() => {
          router.replace("/");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  title: { fontSize: 22, marginBottom: 8, color: "#fff" },
});
