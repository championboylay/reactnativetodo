import { createStore, applyMiddleware } from "redux";
import app from "./reducers";

export default function configureStore() {
  const store = createStore(app);
  return store;
}
