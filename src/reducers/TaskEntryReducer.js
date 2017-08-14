import { UPDATE_VALUE } from "../actions/Types";

const INITIAL_STATE = {
  key: Date.now(),
  value: "",
  complete: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return actions.payload;
    default:
      return state;
  }
};
