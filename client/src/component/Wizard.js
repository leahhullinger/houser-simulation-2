import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

class Wizard extends Component {
  render() {
    return (
      <div className="wizard-container">
        <div className="wizard-header">
          <h2>Add New Listing</h2>
          <Link className="cancel-button" to="/">
            Cancel
          </Link>
        </div>
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
