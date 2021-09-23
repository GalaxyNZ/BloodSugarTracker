import React from "react";
import { useState, useEffect } from "react";
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
import { firebase } from "../firebase/config";

export const addRecord = ({ recordView, setRecordView, userID }) => {
  const [entityText, setEntityText] = useState("");

  const entityRef = firebase.firestore().collection("entities");
  //const userID = props.extraData.id;

  const onAddButtonPress = () => {
    if (entityText && entityText.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        text: entityText,
        authorID: userID,
        createdAt: timestamp,
      };
      entityRef
        .add(data)
        .then((_doc) => {
          setEntityText("");
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
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
                onPress={() => {
                  onAddButtonPress();
                  setRecordView(false);
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

export const Records = (recordView, setRecordView, userID) => {
  const [entities, setEntities] = useState([]);

  const entityRef = firebase.firestore().collection("entities");

  useEffect(() => {
    entityRef
      .where("authorID", "==", userID)
      .orderBy("createdAt", "desc")
      .onSnapshot(
        (querySnapshot) => {
          const newEntities = [];
          querySnapshot.forEach((doc) => {
            const entity = doc.data();
            entity.id = doc.id;
            newEntities.push(entity);
          });
          setEntities(newEntities);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

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
      <FlatList
        data={DATA}
        renderItem={renderEntity}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
