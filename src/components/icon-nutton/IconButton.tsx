import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { IconButtonProps } from "./utils";

const IconButton = ({
  Prefix,
  Postfix,
  title,
  containerStyle,
  textStyle,
  loading,
  loadingStyle,
  ...rest
}: IconButtonProps) => {
  return (
    <TouchableOpacity style={[styles.conatiner, containerStyle]} {...rest}>
      {loading && <ActivityIndicator color={"white"} {...loadingStyle} />}

      {!loading && Prefix && <Prefix />}
      {title && <Text style={[styles.txt, textStyle]}>{title}</Text>}
      {!loading && Postfix && <Postfix />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#63c5da",
    padding: 5,
    borderRadius: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  txt: { color: "white" },
});

export default IconButton;
