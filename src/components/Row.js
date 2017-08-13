import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity, Switch } from "react-native";

export default class Row extends Component {
  render() {
    const { complete, value } = this.props.item;
    console.log(this.props.item);
    return (
      <View style={styles.container}>
        <Switch value={complete} onValueChange={this.props.onComplete} />
        <Text style={[styles.text, complete && styles.complete]}>
          {value}
        </Text>
        <TouchableOpacity onPress={this.props.onRemove}>
          <Text style={styles.remove}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 24,
    color: "#4d4d4d"
  },
  complete: {
    textDecorationLine: "line-through"
  },
  remove: {
    fontSize: 24
  }
};
