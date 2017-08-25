import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Keyboard,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import Header from "../components/Header";
import Row from "../components/Row";
import {
  updateTask,
  saveTask,
  deleteTask,
  toggleCompleteStatus,
  fetchTaskList
} from "../actions/Actions";
import { connect } from "react-redux";

class Main extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      /*allComplete: false,*/
      value: "",
      items: [],
      dataSource: ds.cloneWithRows([])
    };
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    //this.createDataSource(this.state);
  }

  componentWillMount() {
    // alert();
    this.props.fetchTaskList();
  }

  componentWillReceiveProps(nextProps) {
    console.log("RECEIVING PROPS", nextProps);
    const { render, tasks } = nextProps;
    if (render) {
      this.setSource(nextProps.tasks, nextProps.tasks);
    } else {
      // console.log("RECEIVING PROPS", nextProps);
    }
  }

  setSource(items, itemDataSource) {
    console.log("Setting data source");
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemDataSource)
    });
  }
  handleToggleComplete(id, complete) {
    console.log("MAIN", id);
    this.props.toggleCompleteStatus(id, !complete);
  }

  handleAddingTask() {
    if (!this.props.value) return;
    const { value, complete } = this.props;
    const id = Date.now();
    this.props.saveTask({ id, value, complete });
  }

  handleRemoveItem(key) {
    this.props.deleteTask(key);
  }
  renderRow(item) {
    return (
      <Row
        key={item.id}
        item={item}
        onComplete={complete => this.handleToggleComplete(item.id, complete)}
        onRemove={() => this.handleRemoveItem(item.id)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          onAddItem={this.handleAddingTask.bind(this)}
          /* onToggleAllComplete={this.handleToggleAllComplete.bind(this)}*/
        />
        <View>
          <ListView
            style={styles.container}
            enableEmptySections
            dataSource={this.state.dataSource}
            onScroll={() => Keyboard.dimiss()}
            renderRow={this.renderRow.bind(this)}
            renderSeparator={(sectionId, rowId) => {
              return <View key={rowId} style={styles.separator} />;
            }}
          />
          {this.props.processing &&
            <ActivityIndicator animating style={styles.spinner} size="large" />}
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { id, complete, value, render, tasks, processing } = state.taskEntry;
  console.log("Main ", value);
  return { id, complete, render, value, tasks, processing };
};
export default connect(mapStateToProps, {
  updateTask,
  saveTask,
  deleteTask,
  toggleCompleteStatus,
  fetchTaskList
})(Main);

const styles = {
  container: {
    paddingTop: 30,
    flexDirection: "column"
  },
  content: {
    flex: 1,
    backgroundColor: "black"
  },
  saparator: {
    borderWidth: 1,
    borderColor: "#F5F5F5"
  },
  spinner: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center"
  }
};
