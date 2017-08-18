import { fork, spawn } from "redux-saga/effects";
import { watchManageTaskListSaga } from "./manageTaskListSaga";
import startup from "./startup";

/*
 * The entry point for all the sagas used in this application.
 */
const root = function* root() {
  yield [fork(watchManageTaskListSaga), fork(startup)];
};

export default root;
