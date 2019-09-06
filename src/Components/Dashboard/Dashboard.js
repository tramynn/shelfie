import React, { Component } from "react";
import Product from "../Product/Product";
import Axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Axios.get("/api/inventory")
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
    const { products } = this.state;
    return (
      <div className="Dashboard">
        <header className="Dashboard-header">
          <h1>Dashboard</h1>
        </header>
        <main className="Products-display">
          <Product products={products} />
        </main>
      </div>
    );
  }
}

export default Dashboard;
