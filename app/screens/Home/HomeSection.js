import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Button,
  Alert,
} from "react-native";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";

export default function HomeSection({ link, title }) {
  return (
    <View style={styles.HomeSection}>
      <Text style={styles.Heading}>{title}</Text>
      <View style={styles.Rule} />
      <Button title={"Button"} style={styles.Button} onPress={link} />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeSection: {
    margin: 5,
    padding: 5,
    flex: 1,
  },
  Heading: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 25,
    textAlign: "right",
    color: "#fff",
    margin: 10,
  },
  Rule: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  Button: {
    flex: 1,
    color: "green",
  },
});
