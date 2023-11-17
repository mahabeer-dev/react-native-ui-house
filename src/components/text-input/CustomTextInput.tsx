import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { CustomInputProps } from "./utils";

const CustomInput = ({
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
  const _onChangeText = (text: string) => {
    if (form && field) {
      form.setFieldValue(field.name, text);
    }
    if (customOnchange) {
      customOnchange(text);
    }
  };

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
        />
        {Suffix && <Suffix />}
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
});

export default CustomInput;
