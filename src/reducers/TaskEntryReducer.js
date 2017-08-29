import {
  UPDATE_VALUE,
  TASK_LIST_FETCH_REQUESTED,
  TASK_LIST_FETCH_SUCCESSED,
  TASK_SAVE_SUCCESSED,
  TASK_DELETE_SUCCESSED,
  TASK_CHANGE_STATUS_SUCCESSED,
  TASK_CHANGE_STATUS_REQUESTED,
  TASK_SAVE_REQUESTED
} from "../actions/Types";

const INITIAL_STATE = {
  id: 0,
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
    case TASK_LIST_FETCH_REQUESTED:
      return { ...state, processing: true };
    case TASK_CHANGE_STATUS_SUCCESSED:
    case TASK_SAVE_SUCCESSED:
    case TASK_DELETE_SUCCESSED:
    case TASK_LIST_FETCH_SUCCESSED:
      return {
        ...state,
        value: "",
        tasks: action.payload,
        processing: false,
        render: true
      };

    default:
      return state;
  }
};
