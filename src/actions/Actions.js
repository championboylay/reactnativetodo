import {
  CHANGE_STATUS,
  DELETE_TASK,
  FETCHED_TASK,
  FETCHING_TASK,
  SAVE_TASK,
  UPDATE_VALUE,
  PROCESSING
} from "./Types";
import firebase from "firebase";
import _ from "lodash";

export function deleteTask(id) {
  return (dispatch, getState) => {
    dispatch({
      type: PROCESSING
    });
    const { tasks } = getState().taskEntry;
    const newTasks = tasks.filter(item => {
      console.log(item);
      return item.id !== id;
    });
    firebase
      .database()
      .ref("tasks")
      .set(newTasks)
      .then(() => getTask(dispatch));
  };
}

export function changeStatus(id, complete) {
  return (dispatch, getState) => {
    dispatch({
      type: PROCESSING
    });
    const { tasks } = getState().taskEntry;
    const newTasks = tasks.map(task => {
      if (task.id !== id) return task;
      return {
        ...task,
        complete: !complete
      };
    });
    firebase
      .database()
      .ref("tasks")
      .set(newTasks)
      .then(() => getTask(dispatch));
  };
}

export function saveTask({ id, value, complete }) {
  return (dispatch, getState) => {
    dispatch({
      type: PROCESSING
    });

    var taskListRef = firebase.database().ref("tasks");
    var taskRef = taskListRef.push();
    taskRef
      .set({ id: id, value: value, complete: complete })
      .then(() => getTask(dispatch))
      .catch(e => {
        console.error(e);
      });
  };
}

export function fetchTaskList() {
  return (dispatch, getState) => {
    dispatch({
      type: PROCESSING
    });
    getTask(dispatch);
  };
}

const getTask = dispatch => {
  firebase.database().ref(`/tasks`).on("value", snapshot => {
    const newTasks = _.map(snapshot.val(), (key, index) => {
      return key;
    });
    dispatch({
      type: FETCHED_TASK,
      payload: newTasks
    });
  });
};

export function updateTask({ prop, value }) {
  return {
    type: UPDATE_VALUE,
    payload: { prop, value }
  };
}
