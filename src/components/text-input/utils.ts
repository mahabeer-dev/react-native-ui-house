import React from "react";
import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface CustomInputProps extends TextInputProps {
  label?: string;
  Suffix?: React.JSX.ElementType;
  Prefix?: React.JSX.ElementType;
  RightHelperComponent?: React.JSX.ElementType;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  errorStyle?: TextStyle;
  error?: string;
  field?: any;
  form?: any;
  value?: string;
  customOnchange?: (_: string) => void;
}
