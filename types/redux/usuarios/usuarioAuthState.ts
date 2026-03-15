// Tipo del usuario activo
interface UsuarioActivo {
  id: string;
  nombre: string;
  correo: string;
}

// Tipo del estado de auth
export type AuthState = {
  usuarioActivo: UsuarioActivo | null;
  loading: boolean;
  error: string | null;
  redirect: string | null;
};
