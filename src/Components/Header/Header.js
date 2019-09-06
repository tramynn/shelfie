import React, { Component } from "react";
import "./Header.css";
import Dashboard from "../Dashboard/Dashboard";
import Form from "../Form/Form";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Header">
        <section className="Logo">
          <h1>Shelfie</h1>
        </section>
        <section className="Logo-links">
          <ul>
            <li>
              <button>
                <Dashboard />
              </button>
            </li>
            <li>
              <button>
                <Form />
              </button>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Header;
