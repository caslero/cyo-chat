// features/auth/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { fetchActiveUser } from "@/store/features/auth/thunks/fetchActiveUser";
import { logOut } from "@/store/features/auth/thunks/logOut";
import type { AuthState } from "@/types/redux/usuarios/usuarioAuthState";
import { login } from "@/store/features/auth/thunks/login";

const initialState: AuthState = {
  usuarioActivo: null,
  validado: false,
  loading: false,
  error: null,
  redirect: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.usuarioActivo = null;
      state.validado = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.validado = action.payload.validado;
        state.redirect = action.payload.redirect ?? null;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Error al iniciar sesión";
      })
      .addCase(fetchActiveUser.fulfilled, (state, action) => {
        state.usuarioActivo = action.payload.usuario;
        state.validado = action.payload.validado;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchActiveUser.rejected, (state, action) => {
        state.usuarioActivo = null;
        state.validado = false;
        state.loading = false;
        state.error =
          (action.payload as string) ??
          "No se pudo consultar el usuario activo";
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.usuarioActivo = null;
        state.validado = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? "Error al cerrar sesión";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
