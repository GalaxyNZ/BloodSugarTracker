import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import HomeScreen from "./app/screens/Home/HomeScreen";
import AppLoading from "expo-app-loading";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyles } from "./app/styles/global";
import Navigator from "./app/routes/homeStack";

export default function App() {
  return <Navigator />;
}
