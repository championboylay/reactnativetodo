import firebase from "firebase";
import _ from "lodash";
export function getTaskList() {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`/tasks`).on("value", snapshot => {
      console.log("FETCHING from firebase SUCCESS");
      const newTasks = _.map(snapshot.val(), (key, index) => {
        return key;
      });

      return resolve(newTasks);
    });
  });
}

export function saveTaskToFB({ id, value, complete }) {
  return new Promise((resolve, reject) => {
    var taskListRef = firebase.database().ref("tasks");
    var taskRef = taskListRef.push();
    taskRef
      .set({ id, value, complete })
      .then(() => {
        return resolve();
      })
      .catch(e => {
        return reject();
      });
  });
}

export function saveTaskListToFB(newTasks) {
  return new Promise((resolve, reject) => {
    firebase.database().ref("tasks").set(newTasks).then(() => resolve());
  });
}
