import React, { Component } from "react";
import { connect } from "react-redux";
import { updateImage } from "../ducks/reducer";
import { Link } from "react-router-dom";

class StepTwo extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="page-header">
          <h2>ADD NEW LISTING</h2>
        </div>
        <div className="image-input-box">
          <label>Image URL:</label>
          <input
            classname="input"
            onChange={e => updateImage(e.target.value)}
          />
        </div>
        <div>
          <Link className="previous-step" to="/wizard/stepOne">
            Previous
          </Link>
          <Link className="next-step" to="/wizard/stepThree">
            Next
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    image: state.image
  };
}
export default connect(
  mapStateToProps,
  { updateImage }
)(StepTwo);
