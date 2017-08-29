import { combineReducers } from "redux";
import TaskEntryReducer from "./TaskEntryReducer";
import NavigationReducer from "./NavigationReducer";

export default combineReducers({
  nav: NavigationReducer,
  taskEntry: TaskEntryReducer
});
