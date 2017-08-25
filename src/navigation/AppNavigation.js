import { StackNavigator } from "react-navigation";
import MainScreen from "../containers/MainScreen";
import TaskFormScreen from "../containers/TaskFormScreen";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    MainScreen: { screen: MainScreen },
    TaskFormScreen: { screen: TaskFormScreen }
  },
  {
    initialRouteName: "MainScreen"
  }
);

export default PrimaryNav;
