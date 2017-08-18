import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { saveTask, updateTask } from "../actions/Actions";
import { connect } from "react-redux";

class Header extends Component {
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
          onChangeText={value =>
            this.props.updateTask({ prop: "value", value })}
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

const mapStateToProps = state => {
  const { value } = state.taskEntry;
  return { value };
};
export default connect(mapStateToProps, { updateTask })(Header);
