import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import { Switch } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const BASE_URL = "http://localhost:3007";

class Wizard extends Component {
  render() {
    return (
      <div>
        <Link className="cancel-button" to="/">
          Cancel
        </Link>
        <Switch>
          <Route path="/wizard/stepOne" component={StepOne} />
          <Route path="/wizard/stepTwo" component={StepTwo} />
          <Route path="/wizard/stepThree" component={StepThree} />
        </Switch>
      </div>
    );
  }
}
export default Wizard;
