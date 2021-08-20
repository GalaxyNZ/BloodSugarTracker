import React from "react";
import { Button, SafeAreaView, Text, Alert } from "react-native";

export const CreateRecord = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text> Create Account </Text>
      <Button title="Sign Up" onPress={() => Alert.alert("todo")} />
    </SafeAreaView>
  );
};

export const RecordPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "green", flex: 1 }}>
      <Button
        title="Add Record"
        onPress={() => {
          navigation.push("Create Record");
        }}
      />
    </SafeAreaView>
  );
};
