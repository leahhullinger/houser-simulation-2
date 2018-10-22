import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Wizard from "./Wizard";

class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: ""
    };
  }

  handleImageInput = e => {
    this.setState({
      image: e.target.value
    });
  };
  render() {
    return (
      <div className="form-container">
        <div className="image-input-box">
          <label>Image URL:</label>
          <input className="input" onChange={this.handleImageInput} />
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
