// thunks/fetchActiveUser.ts
import type { UsuarioActivoResponse } from "@/types/redux/usuarios/usuarioActivoResponse";
import type { UsuarioActivo } from "@/types/redux/usuarios/usuarioActivo";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Para React Native con Expo
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const fetchActiveUser = createAsyncThunk<
  UsuarioActivo,
  void,
  { rejectValue: string }
>("auth/fetchActiveUser", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/api/usuarios/usuario-activo`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as UsuarioActivoResponse;

    if (!response.ok) {
      // Manejar códigos de error HTTP
      if (response.status === 400 || response.status === 401) {
        return rejectWithValue("No autenticado");
      }
      return rejectWithValue(data.message ?? `Error ${response.status}`);
    }

    if (data?.status === "ok" && data.usuarioActivo) {
      return data.usuarioActivo;
    } else {
      return rejectWithValue(data.message ?? "Usuario no válido");
    }
  } catch (err) {
    // Error de red o de parseo del JSON
    const error = err as Error;
    return rejectWithValue(error.message ?? "Error de conexión");
  }
});