// Estructura de respuesta que definimos en tu backend
export type BackendResponse = {
  status: "ok" | "error";
  message: string;
  redirect?: string;
};
