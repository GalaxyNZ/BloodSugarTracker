import React from "react";
import Ionicon from "react-native-vector-icons/Ionicons";

export const headerOptions = () => ({
  headerTintColor: "#fff",
  headerTitleStyle: { fontFamily: "Quicksand_700Bold", fontSize: 45 },
  headerStyle: {
    height: 120,
    backgroundColor: "#006e8c",
  },
});

export const tabOptionStyle = ({ route }) => ({
  headerTitleAlign: "center",
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "HomeTab") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "RecordsTab") {
      iconName = focused ? "list" : "list-outline";
    } else if (route.name === "GraphsTab") {
      iconName = focused ? "analytics" : "analytics-outline";
    }

    return <Ionicon name={iconName} size={size} color={color} />;
  },
  tabBarActiveBackgroundColor: "#f85f6a",
  tabBarInactiveBackgroundColor: "#006e8c",
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: "white",
  headerShown: false,
});
