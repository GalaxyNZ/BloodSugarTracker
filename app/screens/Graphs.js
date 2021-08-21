import React from "react";
import { View, Image, Text } from "react-native";
import background from "../assets/background.jpg";
import {
  themeColour,
  secondaryColour,
  secondaryContrast,
} from "../styles/globalColours";

export function Graphs() {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          paddingTop: 15,
          paddingBottom: 8,
          color: secondaryContrast,
        }}
      >
        Graphs
      </Text>
      <Text
        style={{
          color: secondaryContrast,
        }}
      >
        Fevo Driver, Pizza Delivery Boi, Cute af
      </Text>
    </View>
  );
}
