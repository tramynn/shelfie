import React, { Component } from "react";
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

  handleChange = () => {};

  addInventory = () => {};

  clearInput = () => {};

  render() {
    return (
      <div className="Form">
        <header className="Form-header">
          <h1>Add Inventory</h1>
        </header>
        <section className="Form-main">
          <form>
            <section className="Image"></section>
            <section></section>
            <section className="Buttons">
              <button>Cancel</button>
              <button>Add to Inventory</button>
            </section>
          </form>
        </section>
      </div>
    );
  }
}

export default Form;
