import React from "react";
import { Link } from "react-router-dom";

function Debit() {
  return (
    <div>
      <h1>Debits</h1>
      <p>This is where the debit history and functions will appear.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Debit;
