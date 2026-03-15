import { INPUT_COLORS, inputStyles } from "@/styles/inputStyles/inputStyle";
import type { InputProps } from "@/types/inputs/inputProps";
import { forwardRef, useState } from "react";
import { TextInput, View } from "react-native";

// Mapeo de autoComplete de web a React Native
const mapAutoComplete = (
  webAutoComplete?: string,
): TextInput["props"]["autoComplete"] => {
  if (!webAutoComplete) return undefined;

  const map: Record<string, any> = {
    off: "off",
    on: "on",
    name: "name",
    email: "email",
    username: "username",
    password: "password",
    "new-password": "password-new",
    "current-password": "password",
    tel: "tel",
    phone: "tel",
    address: "address-line1",
    "street-address": "address-line1",
    city: "address-city",
    state: "address-state",
    zip: "postal-code",
    country: "country",
    "cc-number": "cc-number",
    "cc-csc": "cc-csc",
    "cc-exp": "cc-exp",
    "cc-exp-month": "cc-exp-month",
    "cc-exp-year": "cc-exp-year",
  };

  return map[webAutoComplete] || webAutoComplete;
};

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      type,
      indice,
      name,
      id,
      placeholder,
      className,
      disabled,
      autoComplete,
      readOnly,
      value,
      onChange,
      setValue,
      max,
      onKeyDown,
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const shouldUpperCase = indice !== "clave" && indice !== "clave2";
    const maxLengthValue = max ? Number(max) : undefined;
    const rnAutoComplete = mapAutoComplete(autoComplete);

    const handleChangeText = (text: string) => {
      const processedText = shouldUpperCase ? text.toUpperCase() : text;

      if (onChange) {
        const syntheticEvent = {
          target: {
            value: processedText,
            name: name,
            id: id,
          },
          nativeEvent: {
            text: processedText,
          },
        } as any;
        onChange(syntheticEvent);
      }

      if (setValue) {
        setValue(processedText);
      }
    };

    const handleKeyPress = (event: any) => {
      if (onKeyDown) {
        const syntheticEvent = {
          key: event.nativeEvent.key,
          preventDefault: () => {},
          target: {
            value: value,
          },
        } as any;
        onKeyDown(syntheticEvent);
      }
    };

    return (
      <View style={inputStyles.container}>
        <TextInput
          ref={ref}
          style={[
            inputStyles.baseInput,
            shouldUpperCase && inputStyles.uppercase,
            isFocused && inputStyles.focusStyle,
          ]}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={INPUT_COLORS.placeholder}
          editable={!disabled}
          readOnly={readOnly}
          secureTextEntry={type === "password"}
          maxLength={maxLengthValue}
          onChangeText={handleChangeText}
          onKeyPress={handleKeyPress}
          autoComplete={rnAutoComplete}
          importantForAutofill={autoComplete ? "yes" : "no"}
          textContentType={(() => {
            if (type === "password") return "password";
            if (autoComplete === "email") return "emailAddress";
            if (autoComplete === "name") return "name";
            if (autoComplete === "tel") return "telephoneNumber";
            return "none";
          })()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    );
  },
);

export default Input;

/** 
import type { InputProps } from "@/types/inputs/inputProps";
import { forwardRef, useState } from "react";
import { TextInput, StyleSheet, View, Platform } from "react-native";

// Mapeo de colores para mantener la misma paleta
const COLORS = {
  outline: '#E5E7EB',
  focus: '#6366F1',
  hover: '#9333EA',
  placeholder: '#9CA3AF',
  background: '#FFFFFF',
  text: '#000000',
};

// Mapeo de autoComplete de web a React Native
const mapAutoComplete = (webAutoComplete?: string): TextInput['props']['autoComplete'] => {
  if (!webAutoComplete) return undefined;
  
  // Mapeo básico de valores comunes
  const map: Record<string, any> = {
    'off': 'off',
    'on': 'on',
    'name': 'name',
    'email': 'email',
    'username': 'username',
    'password': 'password',
    'new-password': 'password-new',
    'current-password': 'password',
    'tel': 'tel',
    'phone': 'tel',
    'address': 'address-line1',
    'street-address': 'address-line1',
    'city': 'address-city',
    'state': 'address-state',
    'zip': 'postal-code',
    'country': 'country',
    'cc-number': 'cc-number',
    'cc-csc': 'cc-csc',
    'cc-exp': 'cc-exp',
    'cc-exp-month': 'cc-exp-month',
    'cc-exp-year': 'cc-exp-year',
  };

  return map[webAutoComplete] || webAutoComplete;
};

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      type,
      indice,
      name,
      id,
      placeholder,
      className,
      disabled,
      autoComplete,
      readOnly,
      value,
      onChange,
      setValue,
      max,
      onKeyDown,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    // Eliminamos isHovered porque no existe en React Native

    // Determinar si debe estar en mayúsculas (igual que en web)
    const shouldUpperCase = indice !== "clave" && indice !== "clave2";
    
    // Convertir max a número para maxLength
    const maxLengthValue = max ? Number(max) : undefined;
    
    // Mapear autoComplete de web a React Native
    const rnAutoComplete = mapAutoComplete(autoComplete);

    // Manejar el cambio de texto
    const handleChangeText = (text: string) => {
      // Aplicar uppercase si corresponde (igual que en web)
      const processedText = shouldUpperCase ? text.toUpperCase() : text;
      
      // Simular el evento de cambio (similar a onChange de web)
      if (onChange) {
        // Creamos un objeto similar al evento de web para compatibilidad
        const syntheticEvent = {
          target: {
            value: processedText,
            name: name,
            id: id,
          },
          nativeEvent: {
            text: processedText,
          },
        } as any;
        onChange(syntheticEvent);
      }
      
      // Llamar a setValue si existe (para React Hook Form)
      if (setValue) {
        setValue(processedText);
      }
    };

    // Manejar teclas (similar a onKeyDown)
    const handleKeyPress = (event: any) => {
      if (onKeyDown) {
        // Adaptar el evento de tecla para que sea similar al de web
        const syntheticEvent = {
          key: event.nativeEvent.key,
          preventDefault: () => {},
          target: {
            value: value,
          },
        } as any;
        onKeyDown(syntheticEvent);
      }
    };

    return (
      <View style={styles.container}>
        <TextInput
          ref={ref}
          style={[
            styles.baseInput,
            shouldUpperCase && styles.uppercase,
            isFocused && styles.focusStyle, // Solo focus, sin hover
          ]}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholder}
          editable={!disabled}
          readOnly={readOnly}
          secureTextEntry={type === "password"}
          maxLength={maxLengthValue}
          onChangeText={handleChangeText}
          onKeyPress={handleKeyPress}
          autoComplete={rnAutoComplete}
          importantForAutofill={autoComplete ? "yes" : "no"}
          textContentType={(() => {
            if (type === "password") return "password";
            if (autoComplete === "email") return "emailAddress";
            if (autoComplete === "name") return "name";
            if (autoComplete === "tel") return "telephoneNumber";
            return "none";
          })()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          // Eliminamos onMouseEnter y onMouseLeave
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  baseInput: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.outline,
    backgroundColor: COLORS.background,
    color: COLORS.text,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  focusStyle: {
    borderColor: COLORS.focus,
    borderWidth: 2,
    shadowColor: COLORS.focus,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  // Eliminamos hoverStyle porque no existe en React Native
});

export default Input;
*/
