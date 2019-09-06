import React, { Component } from "react";
import "./Product.css";
// import Axios from "axios";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    };
  }

  // componentDidMount() {
  //   Axios.get(`/api/products/${id}`)
  //     .then(response => {
  //       this.setState({
  //         product: response.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

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
