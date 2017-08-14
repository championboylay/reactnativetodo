import {
  CHANGE_STATUS,
  DELETE_TASK,
  FETCHED_TASK,
  FETCHING_TASK,
  SAVE_TASK,
  UPDATE_VALUE
} from "./Types";

export function fetchData() {
  return {
    type: FETCHED_TASK
  };
}

export function deleteData() {
  return {
    type: DELETE_TASK
  };
}

export function changeStatus() {
  return {
    type: CHANGE_STATUS
  };
}

export function saveTask() {
  return {
    type: SAVE_TASK
  };
}

export function updateTask({ prop, value }) {
  return {
    type: UPDATE_VALUE,
    payload: { prop, value }
  };
}
