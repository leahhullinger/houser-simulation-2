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
    console.log(this.props);
    const {
      updateName,
      updateAddress,
      updateCity,
      updateState,
      updateZip,
      propertyName,
      address,
      city,
      state,
      zipcode
    } = this.props;
    return (
      <div className="form-container">
        <div className="inputs-container">
          <label>Property Name</label>
          <input
            value={propertyName}
            onChange={e => updateName(e.target.value)}
          />
          <label>Address</label>
          <input
            value={address}
            onChange={e => updateAddress(e.target.value)}
          />
          <label>City</label>
          <input value={city} onChange={e => updateCity(e.target.value)} />
          <label>State</label>
          <input value={state} onChange={e => updateState(e.target.value)} />
          <label>Zipcode</label>
          <input value={zipcode} onChange={e => updateZip(e.target.value)} />
        </div>
        <div className="button-container">
          <Link className="next-step" to="/wizard/StepTwo">
            Next Step
          </Link>
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
