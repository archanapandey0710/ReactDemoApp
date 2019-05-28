import React, { Component } from "react";
import { connect } from "react-redux";
import * as customersAction from "../store/actions/customersAction";

class CustomerList extends Component {
  state = { testingUpdate: [] };
  componentDidMount() {
    this.props.onGetCustomerData().then(res => {
      this.setState({ testingUpdate: res });
    });
  }
  componentDidUpdate() {
    console.log("our state is change");
  }
  render() {
    return (
      <div>
        <h1>Customer List</h1>
        <table>
          <tr>
            <td>First Name</td>
          </tr>
          {this.props.customersList.map(i => (
            <tr key={i.id}>
              <td>{i.first_name}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

const mapStoreToProps = store => {
  return {
    customersList: store.customersReducer.customersList
      ? store.customersReducer.customersList
      : []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetCustomerData: () => dispatch(customersAction.getAllCustomersList)
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(CustomerList);
