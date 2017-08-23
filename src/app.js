import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Main from "./containers/Main";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "./debug/ReactotronConfig";
import Reactotron from "reactotron-react-native";
import "./api";

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    /*   var config = {
      apiKey: "AIzaSyAA_3l00XRrVsqazERokyn0zHC-XCYIAuY",
      authDomain: "reactnativetodo-36f23.firebaseapp.com",
      databaseURL: "https://reactnativetodo-36f23.firebaseio.com",
      projectId: "reactnativetodo-36f23",
      storageBucket: "",
      messagingSenderId: "849336920424"
    };
    firebase.initializeApp(config); */
  }
  render() {
    const store = configureStore();
    if (__DEV__) Reactotron.log("hello rendering world", true);
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
