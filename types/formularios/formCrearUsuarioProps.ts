import type React from "react";

export type FormCrearUsuarioProps = {
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  correo: string;
  setCorreo: React.Dispatch<React.SetStateAction<string>>;
  claveUno: string;
  setClaveUno: React.Dispatch<React.SetStateAction<string>>;
  claveDos: string;
  setClaveDos: React.Dispatch<React.SetStateAction<string>>;
  validarNombre: boolean;
  setValidarNombre: React.Dispatch<React.SetStateAction<boolean>>;
  validarCorreo: boolean;
  setValidarCorreo: React.Dispatch<React.SetStateAction<boolean>>;
  validarClave: boolean;
  setValidarClave: React.Dispatch<React.SetStateAction<boolean>>;
  registro: (e: React.FormEvent<HTMLFormElement>) => void;
};
