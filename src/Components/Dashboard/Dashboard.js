import React, { Component } from "react";
import Product from "../Product/Product";
import "./Dashboard.css";
import Axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Axios.get("/api/products")
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Dshboard">
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
