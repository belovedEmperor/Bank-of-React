import React, { Component } from "react";
import { Link } from "react-router-dom";

class Credit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: [],
    };
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>Description</td>
            <td>Amount</td>
            <td>Date</td>
          </tr>
          {this.props.credits.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>{transaction.amount.toFixed(2)}</td>
                <td>{transaction.date}</td>
              </tr>
            );
          })}
        </table>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Credit;
