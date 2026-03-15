// features/usuarios/thunks/createUser.ts
import type { BackendResponse } from "@/types/redux/usuarios/backendResponse";
import type { RegistroCredentials } from "@/types/redux/usuarios/registroCredentials";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Para React Native con Expo
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const createUser = createAsyncThunk<
  BackendResponse,
  RegistroCredentials,
  { rejectValue: string }
>("user/createUser", async (datos, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/api/usuarios/crear-usuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    // Intentamos parsear la respuesta JSON
    let data: BackendResponse;
    try {
      data = await response.json();
    } catch {
      // Si no es JSON válido, creamos una respuesta genérica
      return rejectWithValue("Error al procesar la respuesta del servidor");
    }

    if (!response.ok) {
      // Si el status HTTP no es exitoso (no 2xx)
      const errorMessage = data?.message || `Error ${response.status}`;
      return rejectWithValue(errorMessage);
    }

    // Si llegamos aquí, la petición fue exitosa
    return data;
  } catch (err) {
    // Error de red (no se pudo conectar al servidor)
    const error = err as Error;
    return rejectWithValue(
      error.message || "Error al conectar con el servidor",
    );
  }
});
