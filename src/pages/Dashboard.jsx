import React, { Component } from "react";
class Dashboard extends Component {
  state = {};
  onHandle = () => {
    this.props.history.push("/customer");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hi i am Dashboard</h1>
        <button class="btn btn-primary" onClick={this.onHandle}>
          Customer Tab!
        </button>
      </React.Fragment>
    );
  }
}
export default Dashboard;
