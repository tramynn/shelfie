import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      imageURL: "",
      productName: "",
      price: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {};

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
        <section className="Form-main">
          <form className="Form-add">
            <section className="Image"></section>
            <section className="Inputs">
              <input
                name="imageURL"
                onChange={this.handleChange}
                placeholder=""
                value={this.state.imageURL}
              />
              <input
                name="productName"
                onChange={this.handleChange}
                placeholder="The Ordinary: Niacinamide 10% + Zinc 1% - 30ml"
                value={this.state.productName}
              />
              <input
                name="price"
                onChange={this.handleChange}
                placeholder="0.00"
                value={this.state.price}
              />
            </section>
            <section className="Buttons">
              <button onClick={this.cancelForm}>Cancel</button>
              <button>Add to Inventory</button>
            </section>
          </form>
        </section>
      </div>
    );
  }
}

export default Form;
