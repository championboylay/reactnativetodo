import {
  TASK_LIST_FETCH_SUCCESSED,
  TASK_LIST_FETCH_FAILED,
  TASK_LIST_FETCH_REQUESTED,
  TASK_SAVE_REQUESTED,
  TASK_SAVE_SUCCESSED,
  TASK_SAVE_FAILED,
  TASK_DELETE_REQUESTED,
  TASK_DELETE_SUCCESSED,
  TASK_DELETE_FAILED,
  TASK_CHANGE_STATUS_REQUESTED,
  TASK_CHANGE_STATUS_SUCCESSED,
  TASK_CHANGE_STATUS_FAILED
} from "../../src/actions/Types.js";
import {
  fetchTaskList,
  saveTask,
  deleteTask,
  toggleCompleteStatus
} from "../../src/saga/manageTaskListSaga";
import { call, put, take, select } from "redux-saga/effects";
import { getTaskList, saveTaskListToFB, saveTaskToFB } from "../../src/api";
import { TASK_LIST_MOCK, TASK_MOCK, TASK_ID } from "../../src/mock/tasks_mock";
import getTaskEntry from "../../src/selectors/filteredForDeleteTaskList";
import getfilteredForChangeStatusTaskList from "../../src/selectors/filteredForChangeStatusTaskList";
describe("We will test fetchTaskList(), generator function. ", () => {
  const action = {
    type: TASK_LIST_FETCH_REQUESTED
  };
  const generator = fetchTaskList();
  it("should call web api with no parameters", () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(call(getTaskList));
  });
  it("should return TASK_LIST_FETCH_SUCCESSED", () => {
    const testValue = generator.next(TASK_LIST_MOCK).value;
    expect(testValue).toEqual(
      put({ type: TASK_LIST_FETCH_SUCCESSED, payload: TASK_LIST_MOCK })
    );
  });
});

describe("We will test saveTask(), generator function. ", () => {
  const action = {
    type: TASK_SAVE_REQUESTED,
    payload: TASK_MOCK
  };
  const generator = saveTask(action);
  it("should call web api to save", () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(call(saveTaskToFB, TASK_MOCK));
  });
  it("should return TASK_LIST_FETCH_SUCCESSED", () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(put({ type: TASK_LIST_FETCH_REQUESTED }));
  });
});

describe("We will test deleteTask(), generator function. ", () => {
  const action = {
    type: TASK_DELETE_REQUESTED,
    payload: TASK_MOCK.id
  };
  const generator = deleteTask(action);
  it("should call web api to select", () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(select(getTaskEntry, TASK_MOCK.id));
  });
  it("should call web api to save task list", () => {
    const testValue = generator.next(TASK_LIST_MOCK).value;
    expect(testValue).toEqual(call(saveTaskListToFB, TASK_LIST_MOCK));
  });
  it("should return TASK_LIST_FETCH_SUCCESSED", () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(put({ type: TASK_LIST_FETCH_REQUESTED }));
  });
});

describe("We will test toggleCompleteStatus(), generator function. ", () => {
  const action = {
    type: TASK_CHANGE_STATUS_REQUESTED,
    payload: TASK_MOCK
  };
  const generator = toggleCompleteStatus(action);
  it("should call web api to select ", () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(
      select(
        getfilteredForChangeStatusTaskList,
        TASK_MOCK.id,
        TASK_MOCK.complete
      )
    );
  });
  it("should call web api to save", () => {
    const testValue = generator.next(TASK_LIST_MOCK).value;
    expect(testValue).toEqual(call(saveTaskListToFB, TASK_LIST_MOCK));
  });
  it("should return TASK_LIST_FETCH_SUCCESSED", () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(put({ type: TASK_LIST_FETCH_REQUESTED }));
  });
});
