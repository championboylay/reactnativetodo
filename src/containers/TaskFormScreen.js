import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import { connect } from "react-redux";
import { saveTask } from "../actions/Actions";

class TaskFormScreen extends Component {
  render() {
    return (
      <View>
        <Header onAddItem={this.handleAddingTask.bind(this)} />
      </View>
    );
  }

  handleAddingTask() {
    if (!this.props.value) return;
    const { value, complete } = this.props;
    const id = Date.now();
    this.props.saveTask({ id, value, complete });
  }
}

const mapStateToProps = state => {
  const { value, complete } = state.taskEntry;
  return { value, complete };
};

export default connect(mapStateToProps, { saveTask })(TaskFormScreen);
