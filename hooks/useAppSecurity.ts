import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
//import { useAppDispatch } from '@/store/hooks';
import { logOut } from "@/store/features/auth/thunks/logOut";
import { router } from "expo-router";
import { useAppDispatch } from "@/store/hook";

/**
 * Hook que cierra la sesión automáticamente cuando:
 * - La app pasa a segundo plano (background)
 * - La pantalla se bloquea (inactive)
 * - El usuario cambia de app
 */
export const useAppSecurity = () => {
  const dispatch = useAppDispatch();
   const appState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = async (nextAppState: AppStateStatus) => {
      // Si la app estaba activa y ahora está en background/inactive
      if (
        appState.current === "active" &&
        (nextAppState === "background" || nextAppState === "inactive")
      ) {
        console.log("🔒 App bloqueada/minimizada - Cerrando sesión");

        // Cerrar sesión
        await dispatch(logOut());

        // Redirigir al login
        router.replace("/");
      }

      // Actualizar el estado actual
      appState.current = nextAppState;
    };

    // Suscribirse a cambios en el estado de la app
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    // Limpiar suscripción al desmontar
    return () => {
      subscription.remove();
    };
  }, [dispatch]);
};
