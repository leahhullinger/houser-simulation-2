import React, { Component } from "react";
import { connect } from "react-redux";
import { updateImage } from "../ducks/reducer";
import { Link } from "react-router-dom";

class StepTwo extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="inputs-container">
          <label>Image URL</label>
          <input
            value={this.props.image}
            onChange={e => this.props.updateImage(e.target.value)}
          />
        </div>
        <div className="button-container">
          <Link className="previous-step" to="/wizard/stepOne">
            Previous
          </Link>
          <Link className="next-step" to="/wizard/stepThree">
            Next Step
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
