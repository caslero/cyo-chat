// Tipos de la respuesta esperada desde el backend
export type UsuarioActivoResponse = {
  status: "ok" | "error";
  message?: string;
  usuarioActivo?: {
    id: string;
    nombre: string;
    correo: string;
  };
};
