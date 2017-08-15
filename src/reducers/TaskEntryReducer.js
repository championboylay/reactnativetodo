import {
  UPDATE_VALUE,
  SAVE_TASK,
  DELETE_TASK,
  CHANGE_STATUS,
  PROCESSING,
  FETCHED_TASK
} from "../actions/Types";

const INITIAL_STATE = {
  id: Date.now(),
  value: "",
  complete: false,
  render: false,
  tasks: [],
  processing: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SAVE_TASK:
      return {
        ...state,
        id: Date.now(),
        tasks: [...state.tasks, action.payload],
        render: true,
        value: ""
      };
    case DELETE_TASK:
      return { ...state, tasks: action.payload, render: true };
    case CHANGE_STATUS:
      return { ...state, tasks: action.payload, render: true };
    case PROCESSING:
      return { ...state, processing: true };
    case FETCHED_TASK:
      console.log("FETCHED_TASK", action.payload);
      return {
        ...state,
        tasks: action.payload,
        processing: false,
        render: true
      };
    default:
      return state;
  }
};
