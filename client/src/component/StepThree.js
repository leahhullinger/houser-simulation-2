import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Wizard from "./Wizard";

class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthlyMortgage: "",
      recommendedRent: "",
      desiredRent: ""
    };
  }

  handleInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  calcRecommendedRent = () => {
    const rentCalc = parseInt(this.state.monthlyMortgage) * 1.25;
    this.setState({ recommendedRent: rentCalc });
  };
  render() {
    return (
      <div className="form-container">
        <div>
          <label>Monthly Mortgage Amount:</label>
          <input
            className="input"
            onChange={e => {
              this.handleInput(e, "monthlyMortgage");
            }}
          />
          <div className="recommended-rent">
            <label>Recommended Rent:</label>
            {this.state.recommendedRent}
          </div>

          <label>Desired Rent Amount:</label>
          <input
            className="input"
            onChange={e => {
              this.handleInput(e, "desiredRent");
            }}
          />
        </div>
        <div>
          <Link to="/wizard/stepOne">Previous</Link>
          <Link to="/wizard/stepThree">Next</Link>
        </div>
      </div>
    );
  }
}
export default StepTwo;
