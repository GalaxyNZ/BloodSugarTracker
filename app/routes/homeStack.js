import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import Records from "../screens/Records/Records";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      headerStyle: { backgroundColor: "#006e8c" },
    },
  },
  Records: {
    screen: Records,
    navigationOptions: {},
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
