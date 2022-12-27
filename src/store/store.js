import { legacy_createStore as createStore } from "redux";
import { taskReducer } from "./taskReducer";

const initialState = [
  { id: 1, title: "Epta1", completed: false },
  { id: 2, title: "Epta2", completed: false },
];

export function initiateStore() {
  return createStore(taskReducer, initialState);
}
