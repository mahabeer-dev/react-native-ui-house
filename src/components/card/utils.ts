import React from "react";
import { TouchableOpacityProps, ViewStyle } from "react-native";

export interface CardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  isPressabe?: boolean;
}
