import {
  UPDATE_VALUE,
  TASK_LIST_FETCH_REQUESTED,
  TASK_LIST_FETCH_SUCCESSED,
  TASK_SAVE_REQUESTED,
  TASK_DELETE_REQUESTED,
  TASK_CHANGE_STATUS_REQUESTED
} from "./Types";
import firebase from "firebase";
import _ from "lodash";

export function deleteTask(id) {
  return {
    type: TASK_DELETE_REQUESTED,
    payload: id
  };
}

export function toggleCompleteStatus(id, complete) {
  return {
    type: TASK_CHANGE_STATUS_REQUESTED,
    payload: { id, complete }
  };
}

export function saveTask({ id, value, complete }) {
  return {
    type: TASK_SAVE_REQUESTED,
    payload: { id, value, complete }
  };
}

export function fetchTaskList() {
  return {
    type: TASK_LIST_FETCH_REQUESTED
  };
}

export function updateTask({ prop, value }) {
  return {
    type: UPDATE_VALUE,
    payload: { prop, value }
  };
}
