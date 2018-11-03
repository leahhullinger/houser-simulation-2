import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      console.log(response);
      this.setState({ inventory: response.data });
    });
  }

  onDeleteClick = house_id => {
    axios.delete(BASE_URL + `/api/houses/${house_id}`).then(response => {
      if (response.status === 200) {
        const newHouses = this.state.inventory.filter(house => {
          return house.house_id !== house_id;
        });
        console.log(newHouses);
        this.setState({ inventory: newHouses });
      }
    });
  };
  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <h2>DASHBOARD</h2>
          <Link className="new-prop-button" to="/wizard/stepOne">
            Add Property
          </Link>
        </div>
        <h3>Home Listings</h3>
        {this.state.inventory.map(house => {
          return (
            <House
              key={house.house_id}
              house={house}
              delete={this.onDeleteClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
