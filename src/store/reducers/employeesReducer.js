import * as actionTypes from "../actions/actionTypes";
const initialState = {
  employeesList: [],
  employee: {}
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEES:
      return executeGetEmployees(state, action);
    default:
      return state;
  }
};

const executeGetEmployees = (state, action) => {
  return {
    ...state,
    employeesList: action.employeesList
  };
};

export default employeesReducer;
