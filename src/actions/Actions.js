import {
  CHANGE_STATUS,
  DELETE_TASK,
  FETCHED_TASK,
  FETCHING_TASK,
  SAVE_TASK,
  UPDATE_VALUE
} from "./Types";
import configureStore from "../store/configureStore";

export function fetchData() {
  return {
    type: FETCHED_TASK
  };
}

export function deleteTask(id) {
  const store = configureStore();
  const { tasks } = store.getState().taskEntry;

  const newTasks = tasks.filter(item => {
    console.log(item);
    return item.id !== id;
  });
  console.log("DELETING ACTION", tasks, id, newTasks);
  //const newTasks =
  return {
    type: DELETE_TASK,
    payload: newTasks
  };
}

export function changeStatus(id, complete) {
  const store = configureStore();
  const { tasks } = store.getState().taskEntry;
  console.log(id, complete);
  const newTasks = tasks.map(task => {
    if (task.id !== id) return task;
    return {
      ...task,
      complete: !complete
    };
  });
  return {
    type: CHANGE_STATUS,
    payload: newTasks
  };
}

export function saveTask({ id, value, complete }) {
  return {
    type: SAVE_TASK,
    payload: { id, value, complete }
  };
}

export function updateTask({ prop, value }) {
  return {
    type: UPDATE_VALUE,
    payload: { prop, value }
  };
}
