import {
  GET_CUSTOMERS,
  GET_CUSTOMER_BY_ID,
  SAVE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER
} from "./actionTypes";
import axios from "../../utils/backend-api";
const getCustomers = customersList => {
  return {
    type: GET_CUSTOMERS,
    customersList: customersList
  };
};

export const getAllCustomersList = dispatch => {
  return new Promise((resolve, reject) => {
    return axios
      .get("api/users")
      .then(response => {
        resolve(response);
        dispatch(getCustomers(response.data.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
