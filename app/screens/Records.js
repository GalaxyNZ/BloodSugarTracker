import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  Modal,
  FlatList,
} from "react-native";
import background from "../assets/background.jpg";
import {
  themeColour,
  secondaryColour,
  secondaryContrast,
} from "../styles/globalColours";
import Ionicon from "react-native-vector-icons/Ionicons";
import { TextInput, FAB } from "react-native-paper";
import { render } from "react-dom";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571se29d72",
    title: "Fourth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571sade29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571adasde29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571asdasde29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557fdsf1e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557gdfgs1e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571ehgfdh29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455adfgas71e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29gasdfgd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2ASD9d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29hgfdd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29hdfghd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571ebsgfd29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29sdfgvd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29tyjygd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29dfdghrty72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7wretetrw2",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29wertcgfd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29dsfgretfsgs4red72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1sads45571ebsgfd29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571asde29sdfgvd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571asdasde29tyjygd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29ASDASDdfdghrty72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571dase29dasdd7wretetrw2",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd9asd6-145571e29wertcgfd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-basdasdd96-145571e29dsfgretfsgs4red72",
    title: "Third Item",
  },
];

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

const Item = ({ title }) => (
  <View
    style={{
      flex: 1,
      borderBottomColor: themeColour,
      borderBottomWidth: 2,
      marginTop: 10,
      padding: 5,
    }}
  >
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Text style={{ fontSize: 25, flex: 1, color: secondaryContrast }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 25,
          flex: 1,
          color: secondaryContrast,
          textAlign: "right",
        }}
      >
        Other
      </Text>
    </View>
    {}
    <Text style={{ fontSize: 15, flex: 1, color: secondaryContrast }}>
      Other
    </Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.title} />;

export const Records = (recordView, setRecordView) => {
  return (
    <View style={{ height: "80%" }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
