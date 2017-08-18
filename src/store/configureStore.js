import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import saga from "../saga";
import app from "../reducers";
const store = null;
const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
  if (!store) {
    console.log("Store is created");
    store = createStore(app, applyMiddleware(sagaMiddleware));
  }
  sagaMiddleware.run(saga);
  return store;
}
