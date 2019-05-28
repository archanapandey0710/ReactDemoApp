import {
  GET_EMPLOYEES,
  GET_EMPLOYEE_BY_ID,
  SAVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE
} from "./actionTypes";
import axios from "../../utils/backend-api";

const getEmployees = employeesList => {
  return {
    type: GET_EMPLOYEES,
    employeesList: employeesList
  };
};

export const getAllEmployeesList = () => {
  return new Promise((resolve, reject) => {
    return dispatch => {
      axios
        .get("https://reqres.in/api/users")
        .then(response => {
          dispatch(getEmployees(response.data));
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    };
  });
};
