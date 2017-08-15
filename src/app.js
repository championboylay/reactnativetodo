import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Main from "./containers/Main";
import configureStore from "./store/configureStore";
import firebase from "firebase";
import { Provider } from "react-redux";

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAA_3l00XRrVsqazERokyn0zHC-XCYIAuY",
      authDomain: "reactnativetodo-36f23.firebaseapp.com",
      databaseURL: "https://reactnativetodo-36f23.firebaseio.com",
      projectId: "reactnativetodo-36f23",
      storageBucket: "",
      messagingSenderId: "849336920424"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
