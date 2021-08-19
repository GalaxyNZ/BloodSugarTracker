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
import AppLoading from "expo-app-loading";
import { useFonts, Quicksand_500Medium } from "@expo-google-fonts/quicksand";

export default class HomeSection extends Component {
    
  constructor() {
  }

  _onPressBlock() {
    Alert.alert("You tapped the button!");
  }

  _onLongPressButton() {
    Alert.alert("You long-pressed the button!");
  }

  render() {
    let [fontsLoaded] = useFonts({
      Quicksand_500Medium,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <TouchableNativeFeedback
          onPress={this._onPressBlock}
          onLongPress={this._onLongPressButton}
        >
          <View style={styles.HomeSection}>
            <Text style={styles.Heading}>this.header</Text>
            <View style={styles.Rule} />
            <Button title={"Button"} style={styles.Button} />
          </View>
        </TouchableNativeFeedback>
      );
    }
  }
}

const styles = StyleSheet.create({
  HomeSection: {
    margin: 5,
    padding: 5,
    flex: 1,
  },
  Heading: {
    fontFamily: "Quicksand_500Medium",
    fontSize: 25,
    textAlign: "right",
    color: "#fff",
    margin: 10,
  },
  Rule: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  Button: {
    flex: 1,
    color: "green",
  },
});
