import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TextInput value={this.props.value} onChangeText={this.props.onChange} onSubmitEditing={this.props.onAddItem} style={styles.task} placeholder="What needs to do?" />
      </View>
    );
  }
}

const styles = {
  header: {
    flexDirection: "row",
    paddingHorizontal: 16
  },
  task: {
    flex: 1,
    fontSize: 16
  }
};
