import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class Dashboard extends Component {
  state = {};
  onHandle = () => {
    this.props.history.push("/customer");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hi i am Dashboard</h1>
        <Button variant="outlined" color="secondary" onClick={this.onHandle}>
          {" "}
          Customer Tab!
        </Button>
      </React.Fragment>
    );
  }
}
export default Dashboard;
