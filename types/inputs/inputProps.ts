import type { ChangeEvent, KeyboardEvent, ForwardedRef } from "react";

export type InputProps = {
  type: "text" | "number" | "email" | "password" | "tel" | "url"; // Tipado más estricto

  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  // Opcionales
  id?: string;
  name?: string;
  indice?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  autoComplete?: string;
  readOnly?: boolean;
  max?: number;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;

  // Corregido: En React, las refs se manejan distinto en las interfaces de props
  ref?: ForwardedRef<HTMLInputElement>;

  // Extra: setValue usualmente es para estados de React
  setValue?: (val: any) => void;
};
