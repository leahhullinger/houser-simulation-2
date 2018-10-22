import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import routes from "../routes";

const BASE_URL = "http://localhost:3007";

class StepOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyName: "",
      address: "",
      city: "",
      zipcode: ""
    };
  }

  handleInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  onButtonClick = () => {
    const { propertyName, address, city, zipcode } = this.state;
    axios.post(BASE_URL + "/api/houses", {
      propertyName,
      address,
      city,
      zipcode
    });
  };
  render() {
    return (
      <div className="form-container">
        <h1>Add New Property</h1>
        <label>Property Name</label>
        <input
          className="input"
          onChange={e => this.handleInput(e, "propertyName")}
        />
        <label>Address</label>
        <input
          className="input"
          onChange={e => this.handleInput(e, "address")}
        />
        <label>City</label>
        <input className="input" onChange={e => this.handleInput(e, "city")} />
        <label>Zipcode</label>
        <input
          className="input"
          onChange={e => this.handleInput(e, "zipcode")}
        />
        <div>
          <button>
            <Link to="/wizard/StepTwo">Next Step</Link>
          </button>
        </div>
      </div>
    );
  }
}
export default StepOne;
