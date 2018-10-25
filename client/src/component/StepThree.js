import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  updateMortgage,
  updateDesiredRent,
  submitNewProperty
} from "../ducks/reducer";

const BASE_URL = "http://localhost:3007";

class StepThree extends Component {
  render() {
    const {
      propertyName,
      address,
      city,
      state,
      zipcode,
      image,
      monthlyMortgage,
      desiredRent
    } = this.props;
    console.log(this.props);
    const { updateMortgage, updateDesiredRent, submitNewProperty } = this.props;
    return (
      <div className="form-container">
        <div className="page-header">
          <h2>ADD NEW LISTING</h2>
        </div>
        <div>
          <label>Monthly Mortgage Amount:</label>
          <input
            className="input"
            onChange={e => updateMortgage(e.target.value)}
          />
          {/* <div className="recommended-rent">
            <label>Recommended Rent:</label>
            {function rentRecommend(desiredRent) {
              return <div>{desiredRent * 1.25}</div>;
            }}
          </div> */}
          <label>Desired Rent Amount:</label>
          <input
            className="input"
            onChange={e => updateDesiredRent(e.target.value)}
          />
        </div>
        <div>
          <Link to="/wizard/stepOne">Previous</Link>
          <button
            nameClass="complete"
            onClick={e =>
              submitNewProperty(
                propertyName,
                address,
                city,
                state,
                zipcode,
                image,
                monthlyMortgage,
                desiredRent
              )
            }
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    propertyName: state.propertyName,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode,
    image: state.image,
    monthlyMortgage: state.monthlyMortgage,
    desiredRent: state.desiredRent
  };
}
export default connect(
  mapStateToProps,
  { updateMortgage, updateDesiredRent, submitNewProperty }
)(StepThree);
