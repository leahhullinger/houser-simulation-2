import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Wizard from "./component/Wizard";

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
  </Switch>
);
