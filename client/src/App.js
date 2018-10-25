import React, { Component } from "react";
import Header from "./component/Header";
import Routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-body">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
