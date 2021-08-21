import React from "react";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  Button,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  StatusBar,
  Modal,
} from "react-native";
import background from "../assets/background.jpg";
import {
  themeColour,
  secondaryColour,
  secondaryContrast,
} from "../styles/globalColours";
import Ionicon from "react-native-vector-icons/Ionicons";
import { TextInput, FAB } from "react-native-paper";

export const addRecord = (recordView, setRecordView) => {
  return (
    <Modal visible={recordView} modal="fade" statusBarTranslucent={true}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: "#222",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: secondaryColour,
              padding: 15,
              marginTop: StatusBar.currentHeight,
              borderRadius: 15,
            }}
          >
            <TouchableOpacity onPress={() => setRecordView(false)}>
              <Ionicon name="close" size={30} color={secondaryContrast} />
            </TouchableOpacity>
            <View style={{ marginTop: 10, flex: 1 }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: secondaryContrast,
                  paddingTop: 20,
                }}
              >
                Add Record
              </Text>
              <TextInput
                label="Blood Sugar Level"
                underlineColor={secondaryContrast}
                theme={{
                  colors: {
                    primary: "#44bbcc",
                  },
                }}
                style={{ marginTop: 10 }}
                keyboardType="numeric"
              />
              <TextInput
                label="Date"
                underlineColor={secondaryContrast}
                theme={{
                  colors: {
                    primary: "#44bbcc",
                  },
                }}
                style={{ marginTop: 10 }}
              />
              <TextInput
                label="Notes"
                underlineColor={secondaryContrast}
                theme={{
                  colors: {
                    primary: "#44bbcc",
                  },
                }}
                multiline
                numberOfLines={5}
                style={{ marginTop: 10 }}
              />
              <FAB
                onPress={() => setRecordView(false)}
                icon="plus"
                label="Add Record"
                style={{
                  position: "absolute",
                  marginBottom: 12,
                  right: 0,
                  bottom: 0,
                  backgroundColor: secondaryContrast,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export const Records = (recordView, setRecordView) => {
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
        Records
      </Text>
      <Text
        style={{
          color: secondaryContrast,
        }}
      >
        Fevo Driver, Pizza Delivery Boi, Cute afsad
      </Text>
    </View>
  );
};
