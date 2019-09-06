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
        <nav className="NavBar">
          <section className="Logo">
            <h1>Shelfie</h1>
          </section>
          <section className="Logo-links">
            <ul>
              <li className="Nav-btn">
                <button>
                  <Link to="/">Header</Link>
                </button>
              </li>
              <li className="Nav-btn">
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
