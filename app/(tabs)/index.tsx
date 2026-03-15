import { useState } from "react";
import { ScreenContainer } from "@/components/themed/ScreenContainer";
//import { ThemedText } from "@/components/themed/ThemedText";
import { ScrollView } from "react-native-gesture-handler";
import InputCorreo from "@/components/inputs/InputCorreo";

// En app/index.tsx
export default function HomeScreen() {
  const [correo, setCorreo] = useState("");
  const [correoValido, setCorreoValido] = useState<boolean>(false);

  return (
    <ScreenContainer>
      {/* <ThemedText style={{ marginTop: 60 }}>Contenido de la App</ThemedText> */}
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <InputCorreo
          value={correo}
          setValue={setCorreo}
          validarCorreo={correoValido}
          setValidarCorreo={setCorreoValido}
          placeholder="Ingresa tu correo"
          autoComplete="email"
        />
      </ScrollView>
    </ScreenContainer>
  );
}
