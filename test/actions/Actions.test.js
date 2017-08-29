import {
  fetchTaskList,
  saveTask,
  toggleCompleteStatus,
  deleteTask,
  updateTask
} from "../../src/actions/Actions.js";
import {
  TASK_LIST_FETCH_REQUESTED,
  TASK_SAVE_REQUESTED,
  TASK_CHANGE_STATUS_REQUESTED,
  TASK_DELETE_REQUESTED,
  UPDATE_VALUE
} from "../../src/actions/Types";

const id = Date.now();
const value = "NEW TASK";
const complete = false;

describe("TASK_LIST_FETCH_REQUESTED", () => {
  it("returns TASK_LIST_FETCH_REQUESTED action", () => {
    const expected = {
      type: TASK_LIST_FETCH_REQUESTED
    };
    expect(fetchTaskList()).toEqual(expected);
  });
});

describe("TASK_SAVE_REQUESTED", () => {
  it("returns TASK_SAVE_REQUESTED action", () => {
    const expected = {
      type: TASK_SAVE_REQUESTED,
      payload: { id, value, complete }
    };

    expect(saveTask({ id, value, complete })).toEqual(expected);
  });
});

describe("TASK_CHANGE_STATUS_REQUESTED", () => {
  it("returns TASK_CHANGE_STATUS_REQUESTED action", () => {
    const expected = {
      type: TASK_CHANGE_STATUS_REQUESTED,
      payload: { id, complete }
    };
    expect(toggleCompleteStatus(id, complete)).toEqual(expected);
  });
});

describe("TASK_DELETE_REQUESTED", () => {
  it("returns TASK_DELETE_REQUESTED action", () => {
    const expected = {
      type: TASK_DELETE_REQUESTED,
      payload: id
    };
    expect(deleteTask(id)).toEqual(expected);
  });
});

describe("UPDATE_VALUE", () => {
  it("returns UPDATE_VALUE action", () => {
    const expected = {
      type: UPDATE_VALUE,
      payload: { prop: "value", value }
    };
    expect(updateTask({ prop: "value", value })).toEqual(expected);
  });
});
