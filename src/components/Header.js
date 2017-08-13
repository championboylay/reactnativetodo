import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={null}>
          <Text style={styles.toggleIcon}>
            {String.fromCharCode(10003)}
          </Text>
        </TouchableOpacity>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          style={styles.input}
          placeholder="What needs to do?"
        />
      </View>
    );
  }
}

const styles = {
  input: {
    flex: 1,
    height: 50,
    marginLeft: 16
  },
  toggleIcon: {
    fontSize: 30,
    color: "#CCC"
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
};
