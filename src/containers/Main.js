import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Keyboard,
  AsyncStorage
} from "react-native";
import Header from "../components/Header";
import Row from "../components/Row";
import {
  updateTask,
  saveTask,
  deleteTask,
  changeStatus
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
    console.log("Rendering constructor");
  }

  componentWillMount() {
    AsyncStorage.getItem("items").then(json => {
      try {
        const items = JSON.parse(json);
        // this.setSource(items, items);
      } catch (e) {
        console.error(e);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { render } = nextProps;
    if (render) {
      this.setSource(nextProps.tasks, nextProps.tasks);
    } else {
      console.log("RECEIVING PROPS", nextProps);
    }
  }

  setSource(items, itemDataSource) {
    console.log("Setting data source");
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemDataSource)
    });
  }
  handleToggleComplete(key, complete) {
    this.props.changeStatus(key, !complete);
  }

  handleAddingTask() {
    if (!this.props.value) return;
    const { id, value, complete } = this.props;
    this.props.saveTask({ id, value, complete });
  }

  handleRemoveItem(key) {
    this.props.deleteTask(key);
    this.setSource(newItems, newItems);
  }
  renderRow(item) {
    console.log("Rendering ROw", item);
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
          value={this.props.value}
          onAddItem={this.handleAddingTask.bind(this)}
          onChange={value => this.props.updateTask({ prop: "value", value })}
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
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { id, value, complete, render, tasks } = state.taskEntry;
  return { id, value, complete, render, tasks };
};
export default connect(mapStateToProps, {
  updateTask,
  saveTask,
  deleteTask,
  changeStatus
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
  }
};
