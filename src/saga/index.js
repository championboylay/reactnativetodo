import { fork } from "redux-saga/effects";
import watchTaskManage from "./TaskWatchers";

export default function* rootSaga() {
  yield fork(watchTaskManage);
}
