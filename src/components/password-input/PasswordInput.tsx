import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { CustomInputProps, eyeClose, eyeOpen } from "./utils";

const PasswordInput = ({
  label,
  Suffix,
  Prefix,
  labelStyle,
  inputStyle,
  errorStyle,
  error,
  field,
  form,
  value,
  customOnchange,
  placeholder,
  keyboardType,
  inputContainerStyle,
  RightHelperComponent,
  multiline,
  numberOfLines,
}: CustomInputProps) => {
  const [showPass, setShowPass] = useState(false);

  const _onChangeText = (text: string) => {
    if (form && field) {
      form.setFieldValue(field.name, text);
    }
    if (customOnchange) {
      customOnchange(text);
    }
  };

  const toggleShowPass = useCallback(() => {
    setShowPass((pre) => !pre);
  }, []);

  return (
    <View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {Prefix && <Prefix />}
        <TextInput
          style={[styles.inputStyle, inputStyle]}
          onChangeText={_onChangeText}
          value={field?.value ? field.value : value}
          placeholderTextColor={"lightgray"}
          placeholder={placeholder}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          secureTextEntry={!showPass}
        />
        <TouchableOpacity onPress={toggleShowPass}>
          {Suffix ? (
            <Suffix />
          ) : (
            <Image
              source={showPass ? eyeOpen : eyeClose}
              style={styles.eyeLogo}
            />
          )}
        </TouchableOpacity>
      </View>
      {RightHelperComponent && (
        <View style={styles.rightHelper}>
          <RightHelperComponent />
        </View>
      )}
      {error && <Text style={[styles.errorTxt, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    padding: 0,
    paddingBottom: 10,
    alignItems: "center",
    gap: 10,
  },
  inputStyle: {
    flex: 1,
    padding: 0,
  },
  label: { fontSize: 12, color: "lightgray" },
  errorTxt: {
    color: "red",
  },
  rightHelper: {
    alignSelf: "flex-end",
  },
  eyeLogo: { height: 20, width: 20 },
});

export default PasswordInput;
