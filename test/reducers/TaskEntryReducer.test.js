import reducer from "../../src/reducers/TaskEntryReducer";
import {
  UPDATE_VALUE,
  TASK_LIST_FETCH_REQUESTED,
  TASK_LIST_FETCH_SUCCESSED,
  TASK_SAVE_SUCCESSED,
  TASK_DELETE_SUCCESSED,
  TASK_CHANGE_STATUS_SUCCESSED
} from "../../src/actions/Types.js";
import { TASK_LIST_MOCK, TASK_MOCK } from "../../src/mock/tasks_mock";

describe("Task Entry Reducer Test ", () => {
  let expected = {
    id: 0,
    value: "",
    complete: false,
    render: false,
    tasks: [],
    processing: false
  };
  it("returns an initial state", () => {
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it("returns tasks list fetch success state", () => {
    const nextState = reducer(expected, {
      type: TASK_LIST_FETCH_SUCCESSED,
      payload: TASK_LIST_MOCK
    });
    expect(
      reducer(undefined, {
        type: TASK_LIST_FETCH_SUCCESSED,
        payload: TASK_LIST_MOCK
      })
    ).toEqual(nextState);
  });

  it("returns task save success state", () => {
    const nextState = reducer(expected, {
      type: TASK_SAVE_SUCCESSED,
      payload: TASK_LIST_MOCK
    });
    expect(
      reducer(undefined, {
        type: TASK_SAVE_SUCCESSED,
        payload: TASK_LIST_MOCK
      })
    ).toEqual(nextState);
  });

  it("returns task delete success state", () => {
    const nextState = reducer(expected, {
      type: TASK_DELETE_SUCCESSED,
      payload: TASK_LIST_MOCK
    });
    expect(
      reducer(undefined, {
        type: TASK_DELETE_SUCCESSED,
        payload: TASK_LIST_MOCK
      })
    ).toEqual(nextState);
  });

  it("returns task status change success state", () => {
    const nextState = reducer(expected, {
      type: TASK_CHANGE_STATUS_SUCCESSED,
      payload: TASK_LIST_MOCK
    });
    expect(
      reducer(undefined, {
        type: TASK_CHANGE_STATUS_SUCCESSED,
        payload: TASK_LIST_MOCK
      })
    ).toEqual(nextState);
  });

  it("returns updat value state", () => {
    const value = "Need to do homework";
    const nextState = reducer(expected, {
      type: UPDATE_VALUE,
      payload: { prop: "value", value }
    });

    expect(
      reducer(undefined, {
        type: UPDATE_VALUE,
        payload: { prop: "value", value }
      })
    ).toEqual(nextState);
  });
});
