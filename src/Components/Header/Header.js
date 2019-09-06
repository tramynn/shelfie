import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Header">
        <nav>
          <section className="Logo">
            <h1>Shelfie</h1>
          </section>
          <section className="Logo-links">
            <ul>
              <li>
                <button>
                  <Link to="/">Header</Link>
                </button>
              </li>
              <li>
                <Link to="/addinventory">
                  <button>Add inventory</button>
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </div>
    );
  }
}

export default Header;
