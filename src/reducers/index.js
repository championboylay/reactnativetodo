import { combineReducers } from "redux";
import TaskEntryReducer from "./TaskEntryReducer";

export default combineReducers({
  taskEntry: TaskEntryReducer
});
