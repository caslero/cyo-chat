import type { InputCorreoProps } from "@/types/inputs/inputCorreoProps";
import InputLabel from "@/components/inputs/InputLabel";
import Input from "@/components/inputs/Input";
import InputMessage from "@/components/inputs/InputMessage";
import { View } from "react-native";
import { emailRegex } from "@/utils/regex/emailRegex";

export default function InputCorreo({
  indice,
  name,
  disabled,
  className,
  placeholder,
  value,
  setValue,
  autoComplete,
  readOnly,
  validarCorreo,
  setValidarCorreo,
  htmlFor,
  nombre,
}: InputCorreoProps) {
  const leyendoInput = (evento: any) => {
    const textoIngresado =
      evento?.target?.value || evento?.nativeEvent?.text || "";

    setValue?.(textoIngresado);
    setValidarCorreo?.(emailRegex.test(textoIngresado));
  };

  return (
    <InputLabel
      htmlFor={htmlFor ? htmlFor : "correo"}
      nombre={nombre ? nombre : "Correo"}
    >
      <View style={{ width: "100%" }}>
        <Input
          type="email"
          id={htmlFor ? htmlFor : "correo"}
          value={value}
          name={name ? name : "correo"}
          disabled={disabled}
          className={className}
          onChange={leyendoInput}
          placeholder={placeholder ? placeholder : "ejemplo@ejemplo.com"}
          autoComplete={autoComplete}
          readOnly={readOnly}
          indice={indice}
        />
        {value && !validarCorreo && value.length > 0 && (
          <InputMessage mensaje="Formato de correo inválido" />
        )}
      </View>
    </InputLabel>
  );
}

/** 
import type { InputCorreoProps } from "@/types/inputs/inputCorreoProps";
import InputLabel from "@/components/inputs/InputLabel";
import Input from "@/components/inputs/Input";
import InputMessage from "@/components/inputs/InputMessage";
import { View } from "react-native";
import { emailRegex } from "@/utils/regex/emailRegex";

export default function InputCorreo({
  indice,
  name,
  disabled,
  className,
  placeholder,
  value,
  setValue,
  autoComplete,
  readOnly,
  validarCorreo,
  setValidarCorreo,
  htmlFor,
  nombre,
}: InputCorreoProps) {
  const leyendoInput = (text: string) => {
    // En React Native, recibimos directamente el texto
    setValue?.(text);
    setValidarCorreo?.(emailRegex.test(text));
  };

  return (
    <InputLabel
      htmlFor={htmlFor ? htmlFor : "correo"}
      nombre={nombre ? nombre : "Correo"}
    >
      <View style={{ width: "100%" }}>
        <Input
          type="email"
          id={htmlFor ? htmlFor : "correo"}
          value={value}
          name={name ? name : "correo"}
          disabled={disabled}
          className={className}
          onChange={leyendoInput} // En React Native, onChange recibe el texto directamente
          placeholder={placeholder ? placeholder : "ejemplo@ejemplo.com"}
          autoComplete={autoComplete}
          readOnly={readOnly}
          indice={indice}
        />
        {value && !validarCorreo && (
          <InputMessage mensaje="Formato de correo inválido" />
        )}
      </View>
    </InputLabel>
  );
}
*/
