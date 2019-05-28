import React, { Component } from "react";
import CustomerList from "../components/CustomerList";
import i18n from "../locale/i18n";

class Customer extends Component {
  state = {};
  onHandleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <React.Fragment>
        <h1>{i18n.t("Welcome to React")}</h1>
        <button className="btn btn-primary" onClick={this.onHandleBack}>
          Back
        </button>
        <CustomerList />
      </React.Fragment>
    );
  }
}
export default Customer;
