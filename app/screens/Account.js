import React from "react";
import { SafeAreaView, Button, Text, Alert } from "react-native";
import { AuthContext } from "../context";

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text> Sign In </Text>
      <Button title="Sign in" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </SafeAreaView>
  );
};

export const CreateAccount = ({ navigation }) => {
  const { signUp } = React.useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text> Create Account </Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </SafeAreaView>
  );
};
