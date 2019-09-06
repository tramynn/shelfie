import React, { Component } from "react";
import Product from "../Product/Product";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Dshboard">
        <h1>Dashboard</h1>
        <Product />
      </div>
    );
  }
}

export default Dashboard;
