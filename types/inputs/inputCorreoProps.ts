export type InputCorreoProps = {
  indice?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  value: string;
  setValue?: (val: string) => void;
  autoComplete?: string;
  readOnly?: boolean;
  validarCorreo: boolean;
  setValidarCorreo: (val: boolean) => void;
  htmlFor?: string;
  nombre?: string;
};
