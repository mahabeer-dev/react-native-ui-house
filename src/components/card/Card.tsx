import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CardProps } from "./utils";

const Card = ({
  children,
  containerStyle,
  isPressabe = false,
  hitSlop,
  ...rest
}: CardProps) => {
  return isPressabe ? (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      hitSlop={hitSlop}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[styles.container, containerStyle]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    minWidth: 200,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    borderColor: "#D3D3D3",
    borderWidth: 0.5,
    zIndex: 10,
    overflow: "hidden",
  },
});

export default Card;
