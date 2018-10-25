import React, { Component } from "react";

function House(props) {
  return (
    <div>
      <div className="house-info-container">
        <div className="image-box">{props.house.image}</div>
        <div className="info-box">
          <div className="info-display">
            <label>Property Name: </label>
            {props.house.house_name}{" "}
          </div>
          <div className="info-display">
            <label>Address: </label>
            {props.house.address}
          </div>
          <div className="info-display">
            <label>City: </label> props.house.city}
          </div>
          <div className="info-display">
            <label>State: </label>
            {props.house.state}
          </div>
          <div className="info-display">
            <label>Zipcode: </label>
            {props.house.zipcode}{" "}
          </div>
        </div>
        <div className="info-box">
          <label>Monthly Mortgage Amount: </label>
          {props.house.monthlyMortgage}{" "}
        </div>
        <div className="info-box">
          <label>Desired Monthly Rent: </label>
          {props.house.desiredRent}{" "}
        </div>
      </div>
    </div>
  );
}

export default House;
