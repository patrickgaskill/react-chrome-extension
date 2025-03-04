/*global chrome*/

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";

// loadStripe won't see the iframe's window
const stripe = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.isExt ? (
            <img
              src={chrome.runtime.getURL("static/media/logo.svg")}
              className="App-logo"
              alt="logo"
            />
          ) : (
            <img src={logo} className="App-logo" alt="logo" />
          )}

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
