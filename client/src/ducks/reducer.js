import axios from "axios";
const BASE_URL = "http://localhost:3007";

const initialState = {
  inventory: [],
  propertyName: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  image: "",
  monthlyMortgage: 0,
  desiredRent: 0
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_DESIRE_RENT = "UPDATE_DESIRE_RENT";
const SUBMIT_NEW_PROPERTY = "SUBMIT_NEW_PROPERTY";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      console.log(action.payload);
      return { ...state, propertyName: action.payload };
    case UPDATE_ADDRESS:
      console.log(action.payload);
      return { ...state, address: action.payload };
    case UPDATE_CITY:
      console.log(action.payload);
      return { ...state, city: action.payload };
    case UPDATE_STATE:
      console.log(action.payload);
      return { ...state, state: action.payload };
    case UPDATE_ZIP:
      console.log(action.payload);
      return { ...state, zipcode: action.payload };
    case UPDATE_IMAGE:
      console.log(action.payload);
      return { ...state, image: action.payload };
    case UPDATE_MORTGAGE:
      console.log(action.payload);
      return { ...state, monthlyMortgage: action.payload };
    case UPDATE_DESIRE_RENT:
      console.log(action.payload);
      return { ...state, desiredRent: action.payload };
    // Add a RESET_ADD_PROPERTY
    case SUBMIT_NEW_PROPERTY:
      console.log(action.payload);
      return {
        inventory: [...this.inventory, action.payload],
        // set to initial state,
        propertyName: action.payload,
        address: action.payload,
        city: action.payload,
        state: action.payload,
        zipcode: action.payload,
        image: action.payload,
        monthlyMortgage: action.payload,
        desiredRent: action.payload
      };
    default:
      return state;
  }
}

export function updateName(propertyName) {
  return {
    type: UPDATE_NAME,
    payload: propertyName
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}
export function updateZip(zipcode) {
  return {
    type: UPDATE_ZIP,
    payload: zipcode
  };
}
export function updateImage(image) {
  return {
    type: UPDATE_IMAGE,
    payload: image
  };
}
export function updateMortgage(monthlyMortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: monthlyMortgage
  };
}

export function updateDesiredRent(desiredRent) {
  return {
    type: UPDATE_DESIRE_RENT,
    payload: desiredRent
  };
}

export function submitNewProperty(
  propertyName,
  address,
  city,
  state,
  zipcode,
  image,
  monthlyMortgage,
  desiredRent
) {
  console.log(
    "these are the values",
    propertyName,
    address,
    city,
    state,
    zipcode,
    image,
    monthlyMortgage,
    desiredRent
  );
  return {
    type: SUBMIT_NEW_PROPERTY,
    payload: axios
      .post(BASE_URL + "/api/add", {
        propertyName,
        address,
        city,
        state,
        zipcode,
        image,
        monthlyMortgage,
        desiredRent
      })
      .then(response => {
        return {
          inventory: [],
          propertyName: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          image: "",
          monthlyMortgage: 0,
          desiredRent: 0
        };
      })
  };
}

export default reducer;
