import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { AvatarProps, getBackgroundColor } from "./utils";

const Avatar = ({
  name,
  imageUrl,
  imgContainerStyle,
  imgStyle,
  txtContainerStyle,
  txtStyle,
}: AvatarProps) => {
  const firstLetter = name ? name[0].toUpperCase() : "A";
  const backgroundColor = getBackgroundColor(firstLetter);

  return (
    <View>
      {imageUrl && (
        <View style={[styles.imageContainer, imgContainerStyle]}>
          <Image
            style={[styles.img, imgStyle]}
            source={{ uri: imageUrl }}
            resizeMode="cover"
          />
        </View>
      )}
      {!imageUrl && (
        <View
          style={[
            styles.txtContainer,
            { backgroundColor: backgroundColor },
            txtContainerStyle,
          ]}
        >
          <Text style={[styles.txt, txtStyle]}>{firstLetter}</Text>
        </View>
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    borderColor: "secondary-50",
    borderWidth: 4,
  },
  img: { flex: 1 },
  txtContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "secondary-50",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: { color: "white", fontWeight: "bold" },
});
