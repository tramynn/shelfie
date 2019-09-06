import React, { Component } from "react";
import "./Product.css";
import Axios from "axios";

class Product extends Component {
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
          playlist: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Product">
        <h1>Product</h1>
        <section className="Product-display"></section>
      </div>
    );
  }
}

export default Product;
