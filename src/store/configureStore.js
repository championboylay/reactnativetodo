import { createStore, applyMiddleware } from "redux";
import app from "../reducers";
const store = null;

export default function configureStore() {
  if (!store) {
    console.log("Store is created");
    store = createStore(app);
  }
  return store;
}
