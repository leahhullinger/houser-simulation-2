import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Wizard from "./Wizard";
import StepOne from "./StepOne";
import House from "./House";

const BASE_URL = "http://localhost:3007";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    axios.get(BASE_URL + "/api/houses").then(response => {
      this.setState({ inventory: response.data });
    });
  }
  render() {
    return (
      <div>
        <div className="dashboard-container">
          {this.state.inventory.map(house => {
            return <House key={house.house_id} house={house} />;
          })}
        </div>
        Dashboard
        <Link to="/wizard/stepOne">Add Property</Link>
      </div>
    );
  }
}
export default Dashboard;
