import { takeLatest } from "redux-saga";
import {
  fetchTaskList,
  saveTask,
  deleteTask,
  toggleCompleteStatus
} from "./manageTaskListSaga";
import * as types from "../actions/Types";

export default function* watchTaskManage() {
  yield takeLatest(types.TASK_LIST_FETCH_REQUESTED, fetchTaskList);
  yield takeLatest(types.TASK_SAVE_REQUESTED, saveTask);
  yield takeLatest(types.TASK_DELETE_REQUESTED, deleteTask);
  yield takeLatest(types.TASK_CHANGE_STATUS_REQUESTED, toggleCompleteStatus);
}
