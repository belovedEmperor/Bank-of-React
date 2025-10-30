import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 9999.99,
      currentUser: {
        userName: "Joe Smith",
        memberSince: "11/22/99",
      },
    };
  }

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
        </Routes>
      </Router>
    );
  }
}

export default App;
