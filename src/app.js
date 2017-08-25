import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import MainScreen from "./containers/MainScreen";
import configureStore from "./store/configureStore";
import firebase from "firebase";
import { Provider } from "react-redux";
//import ReduxNavigation from "./navigation/ReduxNavigation";

export default class App extends Component {
  componentWillMount() {}
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
