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
      dataFetched: false,
      credits: [],
      debits: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://johnnylaicode.github.io/api/credits.json",
      );

      this.setState(
        {
          credits: [...response.data],
          dataFetched: true,
        },
        () => {
          this.calculateAccountBalance(); // Having this in the callback param means that it will only run after the states are set
        },
      );
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
        console.log(e.response.status);
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  addCredit = (id, description, amount, date) => {
    const updatedCredits = [
      ...this.state.credits,
      { id, description, amount, date },
    ];
    this.setState({ credits: updatedCredits }, () => {
      this.calculateAccountBalance();
    });
  };

  calculateAccountBalance = () => {
    const totalCredit = this.state.credits.reduce(
      (sum, credit) => sum + credit.amount,
      0,
    );
    const totalDebit = this.state.debits.reduce(
      (sum, debits) => sum + debits,
      0,
    );

    this.setState({
      accountBalance: Number(totalCredit - totalDebit).toFixed(2),
    });
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
              <Credit
                credits={this.state.credits}
                addCredit={this.addCredit}
                accountBalance={this.state.accountBalance}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
