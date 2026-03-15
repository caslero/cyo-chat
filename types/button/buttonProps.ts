import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset"; // ✅ solo tipos válidos

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: "primary" | "secondary" | "success" | "danger" | "neutral";
  type?: ButtonType; // ✅ restringido a los tres tipos
  children: ReactNode;
  cursor?: "default" | "pointer" | "not-allowed" | "wait";
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export type { ButtonProps };
