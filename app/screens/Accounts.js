import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import background from "../assets/profile.jpg";
import {
  themeColour,
  secondaryColour,
  secondaryContrast,
  themeColourBright,
} from "../styles/globalColours";
import { TextInput } from "react-native-paper";
import logo from "../assets/adaptive-icon.png";

import { firebase } from "../firebase/config";

const styles = StyleSheet.create({
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 300,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: themeColourBright,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: secondaryContrast,
  },
  footerLink: {
    color: themeColourBright,
    fontWeight: "bold",
    fontSize: 16,
  },
});

const onLoginPress = (email, password, setUser) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid;
      const usersRef = firebase.firestore().collection("users");
      usersRef
        .doc(uid)
        .get()
        .then((firestoreDocument) => {
          if (!firestoreDocument.exists) {
            alert("User does not exist anymore.");
            return;
          }
          const user = firestoreDocument.data();
          setUser(user);
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      alert(error);
    });
};

export const LoginScreen = (
  email,
  setEmail,
  password,
  setPassword,
  setLogin,
  setUser,
  user
) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: secondaryColour }}>
        <Image style={styles.logo} source={logo} />
        <TextInput
          style={styles.input}
          label="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          theme={{
            colors: {
              primary: themeColourBright,
            },
          }}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          label="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          theme={{
            colors: {
              primary: themeColourBright,
            },
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onLoginPress(email, password, setUser)}
        >
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text onPress={() => setLogin(false)} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const onRegisterPress = (
  email,
  password,
  fullName,
  confirmPassword,
  setUser
) => {
  if (password !== confirmPassword) {
    alert("Passwords don't match.");
    return;
  }
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid;
      const data = {
        id: uid,
        email,
        fullName,
        
      };
      const usersRef = firebase.firestore().collection("users");
      usersRef
        .doc(uid)
        .set(data)
        .then(() => {
          setUser(data);
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      alert(error);
    });
};

export const RegistrationScreen = (
  email,
  setEmail,
  password,
  setPassword,
  fullName,
  setFullName,
  confirmPassword,
  setConfirmPassword,
  setLogin,
  setUser
) => {
  return (
    <View style={{ flex: 1, backgroundColor: secondaryColour }}>
      <View style={{ flex: 1, width: "100%" }}>
        <Image style={styles.logo} source={logo} />
        <TextInput
          style={styles.input}
          label="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          theme={{
            colors: {
              primary: themeColourBright,
            },
          }}
        />
        <TextInput
          style={styles.input}
          label="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          theme={{
            colors: {
              primary: themeColourBright,
            },
          }}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          label="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          theme={{
            colors: {
              primary: themeColourBright,
            },
          }}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          label="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          theme={{
            colors: {
              primary: themeColourBright,
            },
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            onRegisterPress(
              email,
              password,
              fullName,
              confirmPassword,
              setLogin,
              setUser
            )
          }
        >
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text onPress={() => setLogin(true)} style={styles.footerLink}>
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
