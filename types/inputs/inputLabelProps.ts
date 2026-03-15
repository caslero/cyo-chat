// types/inputs/inputLabelProps.ts
import type { ReactNode } from "react";
import type { TextStyle } from "react-native";

export interface InputLabelProps {
  htmlFor?: string; // Lo mantenemos para compatibilidad con web
  nombre: string;
  children: ReactNode;
  className?: string | TextStyle; // Puede ser string (web) o estilo (React Native)
}
