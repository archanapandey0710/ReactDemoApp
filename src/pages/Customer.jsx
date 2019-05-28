import React, { Component } from "react";
import CustomerList from "../components/CustomerList";
import i18n from "../locale/i18n";
import Button from "@material-ui/core/Button";

class Customer extends Component {
  state = {};
  onHandleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <React.Fragment>
        <h1>{i18n.t("Welcome to React")}</h1>
        <Button variant="contained" color="primary" onClick={this.onHandleBack}>
          Back
        </Button>
        <CustomerList />
      </React.Fragment>
    );
  }
}
export default Customer;
