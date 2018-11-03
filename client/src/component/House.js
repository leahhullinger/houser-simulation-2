import React from "react";

function House(props) {
  return (
    <div>
      <div className="house-info-container">
        <img className="image-box" src={props.house.image} />
        <div className="info-box">
          <button
            className="delete"
            onClick={() => props.delete(props.house.house_id)}
          >
            {" "}
            <span> &#x2715; </span>
          </button>
          <div className="info-display">
            <label>Property Name: </label>
            {props.house.house_name}{" "}
          </div>
          <div className="info-display">
            <label>Address: </label>
            {props.house.address}
          </div>
          <div className="info-display">
            <label>City: </label> {props.house.city}
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
          {props.house.monthly_mortgage}
          <label>Desired Monthly Rent: </label>
          {props.house.desired_rent}{" "}
        </div>
      </div>
    </div>
  );
}

export default House;
