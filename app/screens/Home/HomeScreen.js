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

function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>Home</Text>
      <HomeSection />
      <HomeSection />
      <HomeSection />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006e8c",
    padding: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  Header: {
    color: "#fff",
    fontSize: 50,
  },
});

export default HomeScreen;
