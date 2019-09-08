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

  deleteProduct = id => {
    Axios.delete(`/api/products/${id}`);
    Axios.get("/api/inventory")
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="Dashboard">
        <header className="Dashboard-header">
          <h1>Dashboard</h1>
        </header>
        <main className="Products-display">
          {/* map because it has to find which product to delete */}
          <Product products={products} deleteProduct={this.deleteProduct} />
        </main>
      </div>
    );
  }
}

export default Dashboard;
