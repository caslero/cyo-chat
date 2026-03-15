// types/inputs/inputProps.ts
import type { TextInputProps } from "react-native";

// Definimos el tipo específico para autoComplete de React Native
type AutoCompleteType = TextInputProps["autoComplete"];

export interface InputProps extends Omit<
  Partial<TextInputProps>,
  "autoComplete"
> {
  type?: string;
  indice?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string; // Lo mantenemos para compatibilidad
  disabled?: boolean;
  autoComplete?: string; // Mantenemos string para compatibilidad con web
  readOnly?: boolean;
  value?: string;
  onChange?: (event: any) => void; // Mantenemos el tipo de evento de web
  setValue?: (value: string) => void;
  max?: string | number;
  onKeyDown?: (event: any) => void;
}

// import type { ChangeEvent, KeyboardEvent, ForwardedRef } from "react";

// export type InputProps = {
//   type: "text" | "number" | "email" | "password" | "tel" | "url"; // Tipado más estricto

//   value: string | number;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;

//   // Opcionales
//   id?: string;
//   name?: string;
//   indice?: string;
//   placeholder?: string;
//   className?: string;
//   disabled?: boolean;
//   autoComplete?: string;
//   readOnly?: boolean;
//   max?: number;
//   onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;

//   // Corregido: En React, las refs se manejan distinto en las interfaces de props
//   ref?: ForwardedRef<HTMLInputElement>;

//   // Extra: setValue usualmente es para estados de React
//   setValue?: (val: any) => void;
// };
