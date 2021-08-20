import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";

import { AuthContext } from "./app/context";

import { SignIn, CreateAccount } from "./app/screens/Account";
import { HomeScreen, Splash } from "./app/screens/Home";
import { CreateRecord, RecordPage } from "./app/screens/Records";
import Graphs from "./app/screens/Graphs";

import { headerOptions, tabOptionStyle } from "./app/styles/headerOptions";

const AuthStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();
const RecordStack = createNativeStackNavigator();
const GraphStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={headerOptions}
    />
  </HomeStack.Navigator>
);

const RecordStackScreen = () => (
  <RecordStack.Navigator>
    <RecordStack.Screen
      name="Records"
      component={RecordPage}
      options={headerOptions}
    />
    <RecordStack.Screen
      name="Create Record"
      component={CreateRecord}
      options={headerOptions}
    />
  </RecordStack.Navigator>
);

const GraphStackScreen = () => (
  <GraphStack.Navigator>
    <GraphStack.Screen
      name="Graph"
      component={Graphs}
      options={headerOptions}
    />
  </GraphStack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Records" component={RecordStackScreen} />
    <Drawer.Screen name="Graphs" component={Graphs} />
  </Drawer.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator screenOptions={tabOptionStyle}>
    <Tab.Screen name="HomeTab" component={HomeScreen} options={headerOptions} />
    <Tab.Screen
      name="RecordsTab"
      component={RecordStackScreen}
      options={headerOptions}
    />
    <Tab.Screen name="GraphsTab" component={Graphs} options={headerOptions} />
  </Tab.Navigator>
);

const Tab = createBottomTabNavigator();

export default () => {
  console.log("App Started on " + Platform.OS);

  const [loaded] = useFonts({
    Quicksand_700Bold,
  });

  const [userToken, setUserToken] = React.useState("null");
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken("blahbalh");
      },
      signUp: () => {
        setUserToken("blahbalh");
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);

  if (!loaded) {
    return <Splash />;
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? (
            <DrawerNavigator />
          ) : (
            <AuthStack.Navigator>
              <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: "Sign In" }}
              />
              <AuthStack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{ title: "Create Account" }}
              />
            </AuthStack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};
