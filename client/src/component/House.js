import React, { Component } from "react";

function House(props) {
  return (
    <div>
      <div className="house-info-container">
        <label>Property Name:</label>
        {props.house.house_name}
        <label>Address:</label>
        {props.house.address}
        <label>City:</label>
        {props.house.city}
        <label>State:</label>
        {props.house.state}
        <label>Zipcode:</label>
        {props.house.zipcode}
      </div>
    </div>
  );
}

export default House;
