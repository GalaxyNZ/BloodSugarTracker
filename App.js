import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import HomeScreen from "./app/screens/Home/HomeScreen";
import AppLoading from "expo-app-loading";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { Font } from "expo";

export default function App() {
  console.log("App Started on " + Platform.OS);
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <HomeScreen />;
  }
}
