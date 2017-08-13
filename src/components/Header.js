import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.onToggleAllComplete}>
          <Text style={styles.toggleIcon}>
            {String.fromCharCode(10003)}
          </Text>
        </TouchableOpacity>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          style={styles.task}
          placeholder="What needs to do?"
        />
      </View>
    );
  }
}

const styles = {
  header: {
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center"
  },
  task: {
    flex: 1,
    fontSize: 16
  },
  toggleIcon: {
    fontSize: 30
  }
};
