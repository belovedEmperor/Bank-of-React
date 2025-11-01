import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Credit from "./components/Credit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: -0.01,
      currentUser: {
        userName: "Jesus",
        memberSince: "4 BC",
      },
      credits: [],
    };
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://johnnylaicode.github.io/api/credits.json",
      );

      this.setState({ credits: [...this.state.credits, ...response.data] });
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
        console.log(e.response.status);
      }
    }
  }

  addCredit = (id, description, amount, date) => {
    const updatedCredits = [
      ...this.state.credits,
      { id, description, amount, date },
    ];
    this.setState({ credits: updatedCredits });
  };

  render() {
    // You no longer need to create a separate constant for components.
    // You can pass the props directly inside the JSX for the element.
    return (
      <Router>
        <Routes>
          {/*
              For React Router 6, you need to use <Routes> to wrap <Route> & "element" instead of "component"
              No need for "exact" either
          */}
          <Route
            path="/"
            element={<Home accountBalance={this.state.accountBalance} />}
          />
          <Route
            path="/userProfile"
            element={
              <UserProfile
                userName={this.state.currentUser.userName}
                memberSince={this.state.currentUser.memberSince}
              />
            }
          />
          <Route path="/login" element={<Login mockLogIn={this.mockLogIn} />} />
          <Route
            path="/credit"
            element={
              <Credit credits={this.state.credits} addCredit={this.addCredit} />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
