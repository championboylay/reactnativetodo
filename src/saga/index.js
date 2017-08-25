import "babel-polyfill";
import "regenerator-runtime/runtime";
import { fork, spawn, all } from "redux-saga/effects";

import { manageTaskSaga } from "./manageTaskListSaga";
//import startup from "./startup";

/*
 * The entry point for all the sagas used in this application.
 */
const root = function* root() {
  yield all([...manageTaskSaga]);
};

export default root;
