// src/providers/I18nProvider.tsx
import i18n from "@/locales/i18n"; // Ajusta la ruta según tu estructura
import React, { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    // La inicialización ya se hizo en el archivo i18n.ts,
    // pero este estado nos asegura que el provider no renderice hijos
    // hasta que i18n esté listo (especialmente útil si la init fuera asíncrona).
    if (i18n.isInitialized) {
      setIsI18nInitialized(true);
    }
  }, []);

  if (!isI18nInitialized) {
    // Opcional: Podrías mostrar un splash screen o un loader aquí
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
