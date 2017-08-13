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

export default class Main extends Component {
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
        this.setSource(items, items);
      } catch (e) {
        console.error(e);
      }
    });
  }

  /*componentDidUpdate(prevProps, prevState) {
    if (this.state.items > prevState.items) {
      console.log("Component Changed ", this.state);
      //this.createDataSource(this.state);
    }
  }*/

  /*handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map(item => {
      return { ...item, complete };
    });

    this.setState({
      items: newItems,
      allComplete: complete
    });
    this.setSource(newItems, newItems);
  }*/
  handleAddingTask() {
    if (!this.state.value) return;
    const items = [
      ...this.state.items,
      {
        key: Date.now(),
        value: this.state.value,
        complete: false
      }
    ];
    this.setSource(items, items);
    this.setState({
      items,
      value: ""
    });
    AsyncStorage.setItem("items", JSON.stringify(items));
  }

  setSource(items, itemDataSource) {
    console.log("Setting data source");
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemDataSource)
    });
  }
  handleToggleComplete(key, complete) {
    const newItems = this.state.items.map(item => {
      if (item.key !== key) return item;
      return {
        ...item,
        complete
      };
    });

    this.setSource(newItems, newItems);
  }
  handleRemoveItem(key) {
    const newItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setSource(newItems, newItems);
  }
  renderRow(item) {
    console.log("Rendering ROw", item);
    return (
      <Row
        key={item.key}
        item={item}
        onComplete={complete => this.handleToggleComplete(item.key, complete)}
        onRemove={() => this.handleRemoveItem(item.key)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          value={this.state.value}
          onAddItem={this.handleAddingTask.bind(this)}
          onChange={value => this.setState({ value })}
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
