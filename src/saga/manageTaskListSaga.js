import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  TASK_LIST_FETCH_SUCCESSED,
  TASK_LIST_FETCH_FAILED,
  TASK_LIST_FETCH_REQUESTED,
  TASK_SAVE_REQUESTED,
  TASK_SAVE_SUCCESSED,
  TASK_SAVE_FAILED,
  TASK_DELETE_REQUESTED,
  TASK_DELETE_SUCCESSED,
  TASK_DELETE_FAILED,
  TASK_CHANGE_STATUS_REQUESTED,
  TASK_CHANGE_STATUS_SUCCESSED,
  TASK_CHANGE_STATUS_FAILED
} from "../actions/Types";
import { fetchTaskListSuccess } from "../actions/Actions.js";
import { getTaskList, saveTaskListToFB, saveTaskToFB } from "../api";
import getFilteredForDeleteTaskList from "../selectors/filteredForDeleteTaskList";
import getfilteredForChangeStatusTaskList from "../selectors/filteredForChangeStatusTaskList";

import { NavigationActions } from "react-navigation";

export function* fetchTaskList(action) {
  try {
    const tasks = yield call(getTaskList);
    yield put({
      type: TASK_LIST_FETCH_SUCCESSED,
      payload: tasks
    });
  } catch (e) {
    yield put({ type: TASK_LIST_FETCH_FAILED, message: e.message });
  }
}

export function* saveTask(action) {
  try {
    console.log("Saving ", action);

    yield call(saveTaskToFB, action.payload);
    yield put({
      type: TASK_LIST_FETCH_REQUESTED
    });
    yield put(NavigationActions.navigate({ routeName: "MainScreen" }));
  } catch (e) {
    yield put({ type: TASK_SAVE_FAILED, message: e.message });
  }
}

export function* deleteTask(action) {
  try {
    const taskList = yield select(getFilteredForDeleteTaskList, action.payload);
    yield call(saveTaskListToFB, taskList);
    yield put({
      type: TASK_LIST_FETCH_REQUESTED
    });
  } catch (e) {
    yield put({ type: TASK_DELETE_FAILED, message: e.message });
  }
}

export function* toggleCompleteStatus(action) {
  try {
    const newTasks = yield select(
      getfilteredForChangeStatusTaskList,
      action.payload.id,
      action.payload.complete
    );
    yield call(saveTaskListToFB, newTasks);
    yield put({
      type: TASK_LIST_FETCH_REQUESTED
    });
  } catch (e) {
    yield put({ type: TASK_CHANGE_STATUS_FAILED, message: e.message });
  }
}
