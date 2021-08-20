import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Button,
  Text,
  Alert,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { globalStyles } from "../styles/global";
import Ionicon from "react-native-vector-icons/Ionicons";

export const Splash = () => (
  <View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
    <Text style={{ textAlign: "center" }}>Loading...</Text>
  </View>
);

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
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  Button: {
    flex: 1,
    color: "green",
  },
});

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.HomeSection}>
        <Text style={styles.Heading} onPress={() => Alert.alert("todo")}>
          Overview
        </Text>
        <View style={styles.Rule} />
        <Button title={"Button"} style={styles.Button} />
      </View>

      <View style={styles.HomeSection}>
        <Text
          style={styles.Heading}
          onPress={() => {
            navigation.navigate("Graphs");
          }}
        >
          Graphs
        </Text>
        <View style={styles.Rule} />
        <Button title={"Button"} style={styles.Button} />
      </View>

      <View style={styles.HomeSection}>
        <Text
          style={styles.Heading}
          onPress={() => {
            navigation.navigate("Records");
          }}
        >
          Records
        </Text>
        <View style={styles.Rule} />
        <Button title={"Button"} style={styles.Button} />
      </View>
    </SafeAreaView>
  );
};
