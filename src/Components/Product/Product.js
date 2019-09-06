import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    let productDisplay = this.props.products.map((product, index) => {
      return (
        <div key={index}>
          <ul>
            <li>{product.imageURL}</li>
            <li>{product.productName}</li>
            <li>{product.price}</li>
          </ul>
        </div>
      );
    });
    return (
      <div className="Product">
        <h1>Product</h1>
        <section className="Product-display">{productDisplay}</section>
      </div>
    );
  }
}

export default Product;
