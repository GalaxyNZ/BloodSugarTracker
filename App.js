import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView, withOrientation } from "react-navigation";
import profile from "./app/assets/profile.jpg";
import Ionicon from "react-native-vector-icons/Ionicons";
import background from "./app/assets/background.jpg";
import { color, Easing } from "react-native-reanimated";
import {
  themeColour,
  secondaryColour,
  secondaryContrast,
} from "./app/styles/globalColours";

import { Home } from "./app/screens/Home";
import { Records, addRecord } from "./app/screens/Records";
import { Graphs } from "./app/screens/Graphs";
import { LoginScreen, RegistrationScreen } from "./app/screens/Accounts";

import { LogBox } from "react-native";

import { FAB } from "react-native-paper";

import moment from "moment";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);

  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const [menuButton, setMenuButton] = useState("menu");

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const [recordView, setRecordView] = useState(false);

  var date = moment().utcOffset("+12:00").format("YYYY-MM-DD hh:mm:ss a");

  //const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [login, setLogin] = useState(true);

  if (user == null) {
    return (
      <View style={{ flex: 1 }}>
        {login
          ? LoginScreen(
              email,
              setEmail,
              password,
              setPassword,
              setLogin,
              setUser,
              user
            )
          : RegistrationScreen(
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
            )}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {addRecord(recordView, setRecordView)}
        {navigation(currentTab, setCurrentTab, setUser)}

        {
          // Overlay View
        }

        <TouchableWithoutFeedback
          onPress={() => {
            if (showMenu) {
              animate(
                showMenu,
                setShowMenu,
                setMenuButton,
                scaleValue,
                offsetValue,
                closeButtonOffset
              );
            }
          }}
        >
          <Animated.View
            style={{
              flexGrow: 1,
              backgroundColor: secondaryColour,
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 15,

              transform: [
                {
                  scale: scaleValue,
                },
                {
                  translateX: offsetValue,
                },
              ],
            }}
          >
            {
              // Menu Button
            }

            <Animated.View
              style={{
                transform: [
                  {
                    translateY: closeButtonOffset,
                  },
                ],
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  animate(
                    showMenu,
                    setShowMenu,
                    setMenuButton,
                    scaleValue,
                    offsetValue,
                    closeButtonOffset
                  );
                }}
              >
                <Ionicon
                  name={menuButton}
                  size={30}
                  color={secondaryContrast}
                  style={{
                    marginTop: StatusBar.currentHeight,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: secondaryContrast,
                  paddingTop: 20,
                }}
              >
                {currentTab}
              </Text>

              {page(currentTab, date, recordView, setRecordView)}
            </Animated.View>

            <FAB
              onPress={() => setRecordView(true)}
              icon="plus"
              label="Add Record"
              style={{
                position: "absolute",
                margin: 25,
                right: 0,
                bottom: 0,
                backgroundColor: secondaryContrast,
              }}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const animate = (
  showMenu,
  setShowMenu,
  setMenuButton,
  scaleValue,
  offsetValue,
  closeButtonOffset
) => {
  Animated.timing(scaleValue, {
    toValue: showMenu ? 1 : 0.88,
    duration: 300,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.exp),
  }).start();
  Animated.timing(offsetValue, {
    toValue: showMenu ? 0 : 220,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.exp),
  }).start();
  Animated.timing(closeButtonOffset, {
    toValue: !showMenu ? -30 : 0,
    duration: 300,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.exp),
  }).start();

  setShowMenu(!showMenu);
  if (!showMenu) {
    setMenuButton("close");
  } else {
    setMenuButton("menu");
  }
};

const page = (currentTab, date, recordView, setRecordView) => {
  if (currentTab == "Home") {
    return Home(date);
  } else if (currentTab == "Records") {
    return recordView
      ? addRecord(recordView, setRecordView)
      : Records(recordView, setRecordView);
  } else if (currentTab == "Graphs") {
    return Graphs();
  } else {
    return (
      <View>
        <Text> IDK </Text>
      </View>
    );
  }
};

const navigation = (currentTab, setCurrentTab, setUser) => (
  <View style={{ justifyContent: "flex-start", padding: 20, flex: 1 }}>
    <Image
      source={profile}
      style={{
        width: 60,
        height: 60,
        borderRadius: 10,
        marginTop: 8,
      }}
    />
    <Text
      style={{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
      }}
    >
      First Lastname
    </Text>

    <TouchableOpacity>
      <Text
        style={{
          marginTop: 6,
          color: "white",
        }}
      >
        View Profile
      </Text>
    </TouchableOpacity>

    <View style={{ flexGrow: 1, marginTop: 80 }}>
      {
        // Tab bar buttons
      }
      {TabButton(currentTab, setCurrentTab, "Home", "home-outline")}
      {TabButton(currentTab, setCurrentTab, "Records", "receipt-outline")}
      {TabButton(currentTab, setCurrentTab, "Graphs", "analytics-outline")}
    </View>

    {TabButton(
      currentTab,
      setCurrentTab,
      "Log Out",
      "log-out-outline",
      setUser
    )}
  </View>
);

const TabButton = (currentTab, setCurrentTab, title, image, setUser) => (
  <TouchableOpacity
    onPress={() => {
      if (title == "Log Out") {
        setUser(null);
      } else {
        setCurrentTab(title);
      }
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 15,
        paddingRight: 40,
        backgroundColor: currentTab == title ? "white" : "transparent",
        borderRadius: 8,
        marginTop: 10,
      }}
    >
      <Ionicon
        name={image}
        size={25}
        color={currentTab == title ? themeColour : "white"}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingLeft: 15,
          color: currentTab == title ? themeColour : "white",
        }}
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColour,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight,
  },
});
