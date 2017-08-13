import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };
  }

  handleAddingTask() {
    if (!this.state.value) return;
    const items = this.state.items;
    const newItems = [
      this.state.items,
      {
        key: new Date().now,
        value: this.state.value,
        complete: false
      }
    ];
    this.setState({
      items: newItems,
      value: ""
    });
  }
  render() {
    return (
      <View>
        <Header
          value={this.state.value}
          onAddItem={this.handleAddingTask.bind(this)}
          onChange={value => this.setState({ value })}
        />
      </View>
    );
  }
}
