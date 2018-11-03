import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateMortgage,
  updateDesiredRent,
  submitNewProperty
} from "../ducks/reducer";

class StepThree extends Component {
  onSubmitClick = () => {
    submitNewProperty();
  };

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
        <div className="inputs-container">
          <label>Monthly Mortgage Amount:</label>
          <input
            className="input"
            value={monthlyMortgage}
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
            value={desiredRent}
            onChange={e => updateDesiredRent(e.target.value)}
          />
        </div>
        <div className="button-container">
          <Link className="previous-step" to="/wizard/stepTwo">
            Previous
          </Link>
          <Link
            className="complete-button"
            to="/"
            onClick={() =>
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
          >
            Complete
          </Link>
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
