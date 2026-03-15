import { useEffect, useRef } from "react";
import { AppState, Platform } from "react-native";
import { useAppDispatch } from "@/store/hook";
import { logOut } from "@/store/features/auth/thunks/logOut";

/**
 * Hook que cierra sesión después de un tiempo de inactividad
 * @param timeoutMinutes Minutos de inactividad permitidos
 */
export const useIdleTimer = (timeoutMinutes: number = 5) => {
  const dispatch = useAppDispatch();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      console.log(`⏰ ${timeoutMinutes} minutos de inactividad - Cerrando sesión`);
      dispatch(logOut());
    }, timeoutMinutes * 60 * 1000);
  };

  useEffect(() => {
    const handleUserActivity = () => {
      resetTimer();
    };

    let appStateSubscription: { remove: () => void } | null = null;

    if (Platform.OS === "web") {
      const events = ["touchstart", "mousedown", "keydown", "scroll", "mousemove"];
      events.forEach((event) => {
        window?.addEventListener?.(event, handleUserActivity);
      });

      appStateSubscription = AppState.addEventListener("change", (state) => {
        if (state === "active") {
          resetTimer();
        }
      });

      resetTimer();

      return () => {
        events.forEach((event) => {
          window?.removeEventListener?.(event, handleUserActivity);
        });
        appStateSubscription?.remove();
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }

    // En mobile, solo AppState sirve para detectar retorno al foreground
    appStateSubscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        resetTimer();
      }
    });

    resetTimer();

    return () => {
      appStateSubscription?.remove();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeoutMinutes, dispatch]);
};
