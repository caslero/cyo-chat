export type InputClaveProps = {
  indice?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  value: string;
  setValue?: (val: string) => void;
  autoComplete?: string;
  readOnly?: boolean;
  validarClave?: boolean;
  setValidarClave?: (val: boolean) => void;
  htmlFor?: string;
  nombre?: string;
};
