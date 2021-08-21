import React from "react";
import { View, Image, Text } from "react-native";
import background from "../assets/background2.jpg";
import {
  themeColour,
  secondaryColour,
  secondaryContrast,
} from "../styles/globalColours";

export const Home = (date) => {
  return (
    <View>
      <Image
        source={background}
        style={{
          width: "100%",
          borderRadius: 15,
          height: 500,
          marginTop: 20,
        }}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          paddingTop: 15,
          paddingBottom: 8,
          color: secondaryContrast,
        }}
      >
        The Dream Team
      </Text>
      <Text
        style={{
          color: secondaryContrast,
        }}
      >
        Updated as of: {date}
      </Text>
    </View>
  );
};
