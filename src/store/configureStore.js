import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import root from "../saga";
import app from "../reducers";
const store = null;
const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
  if (!store) {
    store = createStore(app, applyMiddleware(sagaMiddleware));
  }
  sagaMiddleware.run(root);
  return store;
}
