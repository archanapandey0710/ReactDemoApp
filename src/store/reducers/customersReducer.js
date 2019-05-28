import * as actionTypes from "../actions/actionTypes";
const initialState = {
  customersList: [],
  customer: {}
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CUSTOMERS:
      return executeGetCustomers(state, action);
    default:
      return state;
  }
};

const executeGetCustomers = (state, action) => {
  return {
    ...state,
    customersList: action.customersList
  };
};

export default customersReducer;
