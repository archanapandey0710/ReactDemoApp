import { combineReducers } from "redux";

import customersReducer from "./customersReducer";
import employeesReducer from "./employeesReducer";

const reducers = combineReducers({
  customersReducer,
  employeesReducer
});

export default reducers;
