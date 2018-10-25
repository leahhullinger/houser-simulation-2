import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHouses } from "../ducks/reducer";
import axios from "axios";
import House from "./House";

import "../App.css";
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
      <div className="page-container">
        <div className="page-header">
          <h2>DASHBOARD</h2>
          <Link className="new-prop-link" to="/wizard/stepOne">
            Add New Property
          </Link>
        </div>
        <h3>Home Listings</h3>
        {this.state.inventory.map(house => {
          return <House key={house.house_id} house={house} />;
        })}
      </div>
    );
  }
}
export default Dashboard;
