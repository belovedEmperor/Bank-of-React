import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Credit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      amount: 0,
      date: "",
    };
  }

  updateDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  updateAmount = (event) => {
    this.setState({ amount: event.target.value });
  };
  updateDate = (event) => {
    this.setState({ date: event.target.value });
  };

  save = (event) => {
    event.preventDefault();

    const id = this.props.credits[this.props.credits.length - 1].id + 1;
    this.props.addCredit(
      id,
      this.state.description,
      Number(this.state.amount),
      this.state.date,
    );
  };

  render() {
    return (
      <div>
        <br />
        <table>
          <tr>
            <td>Description</td>
            <td>Amount</td>
            <td>Date</td>
          </tr>
          {this.props.credits.map((transaction) => {
            const date = new Date(transaction.date);
            return (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>{Number(transaction.amount).toFixed(2)}</td>
                <td>{`${date.getFullYear()}-${String(date.getMonth()).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`}</td>
              </tr>
            );
          })}
        </table>
        <div className="addForm">
          Description:{" "}
          <input onChange={this.updateDescription} placeholder="Description" />
          Amount: <input onChange={this.updateAmount} placeholder="Amount" />
          Date: <input onChange={this.updateDate} placeholder="Date" />
          <br />
          <button onClick={this.save}>Add Credit</button>
        </div>
        <br />
        <AccountBalance accountBalance={this.props.accountBalance} />
        <br />
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Credit;
