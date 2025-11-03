import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import './Style.css';


class Home extends Component {
  render() {
    return (
      <div className="centercontent">
        <img src="https://picsum.photos/800/400" alt="bank" className="squareimg"/>
        <div className="bubble">
          <h1>Bank of React</h1>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/credit">Credit</Link>
          <Link to="/debit">Debit</Link>
          <br />
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
      </div>
    );
  }
}

export default Home;
