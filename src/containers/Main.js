import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allComplete: false,
      value: "",
      items: []
    };
  }

  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map(item => {
      return { ...item, complete };
    });

    console.log("AFTER", newItems);
    this.setState({
      items: newItems,
      allComplete: complete
    });
  }
  handleAddingTask() {
    console.log(this.state.value);
    if (!this.state.value) return;
    const items = [
      ...this.state.items,
      {
        key: new Date(),
        value: this.state.value,
        complete: false
      }
    ];

    this.setState({
      items,
      value: ""
    });
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.items > prevState.items) {
      console.log("DidUpdate", this.state.items);
    }
  }
  render() {
    return (
      <View>
        <Header
          value={this.state.value}
          onAddItem={this.handleAddingTask.bind(this)}
          onChange={value => this.setState({ value })}
          onToggleAllComplete={this.handleToggleAllComplete.bind(this)}
        />
      </View>
    );
  }
}
