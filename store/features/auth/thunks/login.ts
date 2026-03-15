// features/auth/thunks/login.ts
import { createAsyncThunk } from "@reduxjs/toolkit";

// Credenciales que recibe el thunk
interface LoginCredentials {
  correo: string;
  clave: string;
}

// Respuesta del backend al iniciar sesión
interface LoginResponse {
  status: "ok" | "error";
  message?: string;
  redirect?: string;
}

// Resultado que guardaremos en Redux
interface LoginResult {
  validado: boolean;
  redirect?: string;
  message?: string;
}

// Tu variable de entorno (ya la tienes configurada)
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const login = createAsyncThunk<
  LoginResult,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credenciales, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/api/login/iniciar-sesion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credenciales),
      credentials: "include",
    });

    const data = (await response.json()) as LoginResponse;

    if (!response.ok) {
      // Si el status HTTP no es 2xx
      return rejectWithValue(data.message ?? `Error ${response.status}`);
    }

    if (data?.status === "ok") {
      return {
        validado: true,
        redirect: data.redirect,
        message: data.message ?? "Iniciando sesión...",
      };
    } else {
      return rejectWithValue(data.message ?? "Credenciales inválidas");
    }
  } catch (err) {
    // Error de red o de parseo del JSON
    const error = err as Error;
    return rejectWithValue(error.message ?? "Error de conexión");
  }
});

// // features/auth/thunks/login.ts
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios, { AxiosError } from "axios";

// // Credenciales que recibe el thunk
// interface LoginCredentials {
//   correo: string;
//   clave: string;
// }

// // Respuesta del backend al iniciar sesión
// interface LoginResponse {
//   status: "ok" | "error";
//   message?: string;
//   redirect?: string;
// }

// // Resultado que guardaremos en Redux
// interface LoginResult {
//   validado: boolean;
//   redirect?: string;
// }

// // En tu código
// const API_URL = process.env.EXPO_PUBLIC_API_URL;;

// export const login = createAsyncThunk<
//   LoginResult, // Tipo de retorno en éxito
//   LoginCredentials, // Argumento que recibe el thunk
//   { rejectValue: string } // Tipo de error en caso de fallo
// >("auth/login", async (credenciales, { rejectWithValue }) => {
//   try {
//     const response = await axios.post<LoginResponse>(
//       `${API_URL}/api/login/iniciar-sesion`,
//       credenciales,
//       { withCredentials: true } // importante para que se guarde la cookie
//     );

//     if (response.data?.status === "ok") {
//       return {
//         validado: true,
//         redirect: response.data.redirect,
//         message: "Iniciando sesion...",
//       };
//     } else {
//       return rejectWithValue("Credenciales inválidas");
//     }
//   } catch (err) {
//     const error = err as AxiosError<{ status?: string; message?: string }>;

//     // Si el backend devolvió status:"error", usamos su mensaje, si no devolvemos "Error desconocido"
//     return rejectWithValue(
//       error.response?.data?.message ?? "Error desconocido"
//     );
//   }
// });
