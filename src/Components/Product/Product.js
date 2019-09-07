import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    let productDisplay = this.props.products.map((product, index) => {
      return (
        <div key={index}>
          <ul>
            {/* When calling data from back-end, must make sure its the same naming convention from the database */}
            <li>{product.image_url}</li>
            <li>{product.product_name}</li>
            <li>{product.price}</li>
          </ul>
          <button onClick={() => this.props.deleteProduct(this.props.id)}>
            Delete
          </button>
          <button>Edit</button>
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
