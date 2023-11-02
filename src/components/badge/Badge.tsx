import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BadgeProps, getBackgroundColor } from "./utils";

const Badge = ({
  status = "default",
  containerStyle,
  type = "default",
  count = 0,
  countStyle,
  showSuffix,
  maxCountToShow,
}: BadgeProps) => {
  const backgroundColor = useMemo(() => {
    return getBackgroundColor(status);
  }, [status]);

  switch (type) {
    case "default":
      return (
        <View style={[styles.container, { backgroundColor }, containerStyle]} />
      );

    case "count":
      return (
        <View
          style={[
            styles.countStyle,
            {
              backgroundColor,
            },
            containerStyle,
          ]}
        >
          <Text style={[styles.count, countStyle]}>
            {showSuffix
              ? count > (maxCountToShow ?? 0)
                ? `${maxCountToShow}+`
                : count
              : count}
          </Text>
        </View>
      );

    default:
      return (
        <View style={[styles.container, { backgroundColor }, containerStyle]} />
      );
  }
};

const styles = StyleSheet.create({
  container: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: "#60C528",
    borderWidth: 1,
    borderColor: "white",
  },
  countStyle: {
    borderRadius: 10000,
    backgroundColor: "#60C528",
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    alignSelf: "flex-start",
    color: "white",
    padding: 2,
    minHeight: 25,
    minWidth: 25,
  },
  count: { fontSize: 12, color: "white" },
});

export default Badge;
