import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import './Style.css';

class Debit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      amount: 0,
      date: "",
    };
  }

  componentDidMount() {
    const date = new Date();
    this.setState({
      date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(date.getDate()).padStart(2, "0")}`,
    });
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

    const id =
      this.props.debits.length > 0
        ? this.props.debits[this.props.debits.length - 1].id + 1
        : 1;

    this.props.addDebit(
      id,
      this.state.description,
      Number(this.state.amount),
      this.state.date
    );
  };

  render() {
    return (
      <div className="background">
        <div className="columncontainer">
          <div className="leftside">
            <br />
            <div className="bubble">
              <AccountBalance accountBalance={this.props.accountBalance} />
              <br />
              <Link to="/userProfile">User Profile</Link>
              <Link to="/login">Login</Link>
              <Link to="/credit">Credit</Link>
              <Link to="/debit">Debit</Link>
              <Link to="/">Back to Home</Link>
            </div>
          </div>
          <div className="rightside">
            <h1>Debit</h1>
            <table>
              <tr>
                <td>Description</td>
                <td>Amount</td>
                <td>Date</td>
              </tr>
              {this.props.debits.map((transaction) => {
                const date = new Date(transaction.date);
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>{Number(transaction.amount).toFixed(2)}</td>
                    <td>{`${date.getFullYear()}-${String(
                      date.getMonth() + 1
                    ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`}</td>
                  </tr>
                );
              })}
            </table>
            <div className="addForm">
              Description:{" "}
              <input onChange={this.updateDescription} placeholder="Description" />
              Amount: <input onChange={this.updateAmount} placeholder="Amount" />
              Date:{" "}
              <input
                value={this.state.date}
                onChange={this.updateDate}
                placeholder={this.state.date}
              />
              <br />
              <button onClick={this.save}>Add Debit</button>
            </div>

            <div className="reference">
              <h3>For reference Only</h3>
              <h4>AccountBalance = Total Credit - Total Debit</h4>
              <h4>
                Total Credits: $
                {this.props.debits
                  ? (Number(this.props.accountBalance) +
                      this.props.debits.reduce((sum, debit) => sum + debit.amount, 0)
                    ).toFixed(2)
                  : "0.00"}
              </h4>
              <h4>
                Total Debits: $
                {this.props.debits
                  .reduce((sum, debit) => sum + debit.amount, 0)
                  .toFixed(2)}
              </h4>
              <h4>Account Balance: ${this.props.accountBalance}</h4>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default Debit;
