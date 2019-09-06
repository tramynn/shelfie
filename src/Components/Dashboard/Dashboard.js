import React, { Component } from "react";
import Product from "../Product/Product";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <header className="Dashboard-header">
          <h1>Dashboard</h1>
        </header>
        <main className="Products-display">
          <Product />
        </main>
      </div>
    );
  }
}

export default Dashboard;
