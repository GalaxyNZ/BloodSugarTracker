import { StyleSheet, StatusBar } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006e8c",
    padding: 10,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  header: {
    fontFamily: "Quicksand_700Bold",
    color: "#fff",
    fontSize: 50,
    paddingLeft: 5,
  },
});
