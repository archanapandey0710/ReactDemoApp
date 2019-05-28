import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//Import Pages

import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/customer" component={Customer} />
  </Router>
);
export default Routes;
