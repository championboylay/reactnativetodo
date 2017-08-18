import { put } from "redux-saga/effects";
import { fetchTaskList } from "../actions/Actions";

export default function* startup() {
  yield put(fetchTaskList());
}
