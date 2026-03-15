export type InputNombreProps = {
  indice?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  value: string;
  setValue?: (val: string) => void;
  autoComplete?: string;
  readOnly?: boolean;
  validarNombre: boolean;
  setValidarNombre: (val: boolean) => void;
  htmlFor?: string;
  nombre?: string;
};
