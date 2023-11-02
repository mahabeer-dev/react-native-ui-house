import { TextStyle, ViewStyle } from "react-native";

export type BadgeProps = {
  type?: "default" | "count";
  status: "default" | "primary" | "success" | "warning" | "error";
  containerStyle?: ViewStyle;
  count?: number;
  countStyle?: TextStyle;
} & (
  | {
      showSuffix?: false;
      maxCountToShow?: number;
    }
  | {
      showSuffix: true;
      maxCountToShow: number;
    }
);

export const getBackgroundColor = (status: BadgeProps["status"]) => {
  return BG_COLORS[status];
};

const BG_COLORS = {
  default: "grey",
  primary: "#2089DC",
  success: "#60C528",
  warning: "#FCAE31",
  error: "#F34423",
};
