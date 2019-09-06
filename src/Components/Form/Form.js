import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      imageURL: "",
      productName: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/products", {
        imageURL: this.state.imageURL,
        productName: this.state.productName,
        price: this.state.price
      })
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  cancelForm = () => {
    this.setState({
      imageURL: "",
      productName: "",
      price: ""
    });
  };

  render() {
    return (
      <div className="Form">
        <header className="Form-header">
          <h1>Add Inventory</h1>
        </header>
        <main className="Form-main" onSubmit={this.handleSubmit}>
          <form className="Form-add">
            <picture className="Image-view">IMAGE</picture>
            <section className="Inputs-Container">
              <div className="Inputs">
                <label className="Form-labels">Image URL:</label>
                <input
                  name="imageURL"
                  onChange={this.handleChange}
                  placeholder=""
                  value={this.state.imageURL}
                />
                <label className="Form-labels">Product Name:</label>
                <input
                  name="productName"
                  onChange={this.handleChange}
                  placeholder="The Ordinary: Niacinamide 10% + Zinc 1% - 30ml"
                  value={this.state.productName}
                />
                <label className="Form-labels">Price:</label>
                <input
                  name="price"
                  onChange={this.handleChange}
                  placeholder="0.00"
                  value={this.state.price}
                />
              </div>
            </section>
            <div className="From-buttons-container">
              <section className="Form-buttons">
                <button onClick={this.cancelForm}>Cancel</button>
                <button type="submit">Add to Inventory</button>
              </section>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default Form;
