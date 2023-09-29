import { ImageStyle, ViewStyle } from "react-native";

// ===========================types =========================
export type AvatarProps = {
  name: string;
  imageUrl?: string;
  imgContainerStyle?: ViewStyle;
  txtContainerStyle?: ViewStyle;
  imgStyle?: ImageStyle;
  txtStyle?: ImageStyle;
};

// ============================utility functions==============================
export const getBackgroundColor = (char: string) => {
  let backgroundColor = "orange";
  switch (true) {
    case char < "D":
      backgroundColor = "orange";
      break;
    case char < "H":
      backgroundColor = "yellow";
      break;
    case char < "L":
      backgroundColor = "red";
      break;
    case char < "P":
      backgroundColor = "secondary-80"; // You should define this color in your stylesheet
      break;
    case char < "T":
      backgroundColor = "blue"; // You should define this color in your stylesheet
      break;
    default:
      backgroundColor = "orange";
  }
  return backgroundColor;
};
