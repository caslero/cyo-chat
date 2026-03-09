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
