import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Home extends Component {
  render() {
    return (
      <div>
        <img src="https://picsum.photos/800/400" alt="bank" />
        <h1>Bank of React</h1>

        <AccountBalance accountBalance={this.props.accountBalance} />

        <Link to="/userProfile">User Profile</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/credit">Credit</Link>
      </div>
    );
  }
}

export default Home;
