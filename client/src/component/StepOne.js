import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from "../ducks/reducer";

class StepOne extends Component {
  render() {
    const {
      updateName,
      updateAddress,
      updateCity,
      updateState,
      updateZip
    } = this.props;
    return (
      <div className="page-container">
        <div className="page-header">
          <h2>ADD NEW LISTING</h2>
        </div>
        <div className="form-container">
          <label>Property Name</label>
          <input className="input" onChange={e => updateName(e.target.value)} />
          <label>Address</label>
          <input
            className="input"
            onChange={e => updateAddress(e.target.value)}
          />
          <label>City</label>
          <input classname="input" onChange={e => updateCity(e.target.value)} />
          <label>State</label>
          <input
            classname="input"
            onChange={e => updateState(e.target.value)}
          />
          <label>Zipcode</label>
          <input classname="input" onChange={e => updateZip(e.target.value)} />
        </div>
        <div>
          <button classname="next-step">
            <Link to="/wizard/StepTwo">Next Step</Link>
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { propertyName, address, zipcode } = state;
  return {
    propertyName,
    address,
    city: state.city,
    state: state.state,
    zipcode
  };
}

export default connect(
  mapStateToProps,
  {
    updateName,
    updateAddress,
    updateCity,
    updateState,
    updateZip
  }
)(StepOne);
