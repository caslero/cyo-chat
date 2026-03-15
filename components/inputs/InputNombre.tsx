import type { ChangeEvent } from "react";
import type { InputNombreProps } from "@/types/inputs/inputNombreProps";
import InputLabel from "@/components/inputs/InputLabel";
import Input from "@/components/inputs/Input";
import InputMessage from "@/components/inputs/InputMessage";
import { textRegex } from "@/utils/regex/textRegex";

export default function InputNombre({
  indice,
  name,
  disabled,
  className,
  placeholder,
  value,
  setValue,
  autoComplete,
  readOnly,
  validarNombre,
  setValidarNombre,
  htmlFor,
  nombre,
}: InputNombreProps) {
  const leyendoInput = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setValue?.(valor);
    setValidarNombre?.(textRegex.test(valor));
  };

  return (
    <InputLabel
      htmlFor={htmlFor ? htmlFor : "nombre"}
      nombre={nombre ? nombre : "Nombre"}
    >
      <Input
        type="text"
        id={htmlFor ? htmlFor : "nombre"}
        value={value}
        name={name ? name : "nombre"}
        disabled={disabled}
        className={className}
        onChange={leyendoInput}
        placeholder={placeholder ? placeholder : "daniela"}
        autoComplete={autoComplete}
        readOnly={readOnly}
        indice={indice}
      />
      {value && validarNombre === false && (
        <InputMessage mensaje="Formato de nombre inválido" />
      )}
    </InputLabel>
  );
}
