import React, { Component } from "react";
import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
import House from "./component/House";
import StepOne from "./component/Wizard";
import Routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
