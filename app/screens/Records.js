import React from "react";
import { useRef, useState, useEffect } from "react";
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
import {
  themeColour,
  secondaryColour,
  secondaryContrast,
} from "../styles/globalColours";
import Ionicon from "react-native-vector-icons/Ionicons";
import { TextInput, FAB } from "react-native-paper";
import { firebase } from "../firebase/config";

export const addRecord = (
  recordView,
  setRecordView,
  userID,
  entityNote,
  setEntityNote,
  entityReading,
  setEntityReading
) => {
  const entityRef = firebase.firestore().collection("entities");
  //const userID = props.extraData.id;

  const onAddButtonPress = () => {
    if (
      entityNote &&
      entityNote.length > 0 &&
      entityReading &&
      entityReading.length > 0
    ) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        note: entityNote,
        reading: entityReading,
        authorID: userID,
        createdAt: timestamp,
      };
      entityRef
        .add(data)
        .then((_doc) => {
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
    setRecordView(false);
  };

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
                onChangeText={(text) => setEntityReading(text)}
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
                onChangeText={(text) => setEntityNote(text)}
              />
              <FAB
                onPress={() => {
                  onAddButtonPress();
                }}
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

export const Records = ({
  recordView,
  setRecordView,
  userID,
  entities,
  setEntities,
}) => {
  console.log(entities);

  const renderEntity = ({ item, index }) => {
    return (
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
            {index}
          </Text>
          <Text
            style={{
              fontSize: 25,
              flex: 1,
              color: secondaryContrast,
              textAlign: "right",
            }}
          >
            {item.text}
          </Text>
        </View>
        {}
        <Text style={{ fontSize: 15, flex: 1, color: secondaryContrast }}>
          Other
        </Text>
      </View>
    );
  };

  return (
    <View style={{ height: "80%" }}>
      {entities && (
        <View style={styles.listContainer}>
          <FlatList
            data={entities}
            renderItem={renderEntity}
            keyExtractor={(item) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
};
