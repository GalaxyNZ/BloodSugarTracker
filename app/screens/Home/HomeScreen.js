import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import HomeSection from "./HomeSection";
import NavDrawer from "../NavDrawer";
import AppLoading from "expo-app-loading";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyles } from "../../styles/global";

function HomeScreen({ navigation }) {
  console.log("App Started on " + Platform.OS);
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
  });

  const pressHandler = () => {
    navigation.navigate("Records");
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={globalStyles.container}>
        <View>
          <Text style={globalStyles.header}>Home</Text>
        </View>
        <HomeSection title="Overview" link={pressHandler} />
        <HomeSection title="Graphs" />
        <HomeSection title="Records" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeScreen;
