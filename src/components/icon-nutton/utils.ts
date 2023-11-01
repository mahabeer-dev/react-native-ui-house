import React from "react";

import {
  ActivityIndicatorProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

export interface IconButtonProps extends TouchableOpacityProps {
  Postfix?: React.ElementType;
  Prefix?: React.ElementType;
  loading?: boolean;
  title?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  loadingStyle?: ActivityIndicatorProps;
}
