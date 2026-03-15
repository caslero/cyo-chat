// features/auth/thunks/logOut.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "@/store/features/auth/authSlice";

// Definimos correctamente la interfaz de respuesta
interface LogoutResponse {
  status: string;
  message?: string;
}

type LogOutResult = boolean;
type LogOutError = string;

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const logOut = createAsyncThunk<
  LogOutResult,
  void,
  { rejectValue: LogOutError }
>("auth/logOut", async (_, { dispatch, rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/api/cerrar-sesion`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Tipamos la respuesta correctamente
    const data = (await response.json()) as LogoutResponse;

    if (!response.ok) {
      if (response.status === 401) {
        dispatch(logout());
        return rejectWithValue("Sesión expirada");
      }
      // Usamos data.message si existe, sino mensaje genérico
      return rejectWithValue(data?.message ?? `Error ${response.status}`);
    }

    if (data?.status === "ok") {
      dispatch(logout());
      return true;
    } else {
      return rejectWithValue(data?.message ?? "Error al cerrar sesión");
    }
  } catch (err) {
    const error = err as Error;
    return rejectWithValue(error.message ?? "Error de conexión");
  }
});
