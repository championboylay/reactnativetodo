import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Main from "./containers/Main";
import configureStore from "./store/configureStore";

import { Provider } from "react-redux";

export default class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
