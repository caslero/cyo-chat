// types/inputs/inputCorreoProps.ts
import type { ReactNode } from "react";

export interface InputCorreoProps {
  indice?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  value?: string;
  setValue?: (value: string) => void;
  autoComplete?: string;
  readOnly?: boolean;
  validarCorreo?: boolean;
  setValidarCorreo?: (valor: boolean) => void;
  htmlFor?: string;
  nombre?: string;
  children?: ReactNode;
}
