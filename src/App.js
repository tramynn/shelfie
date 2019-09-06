import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Header from "./Components/Header/Header";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Axios.get("/api/inventory")
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // const { products } = this.state;
    return (
      <HashRouter>
        <div className="App">
          <section className="App-header">
            <Header />
          </section>
          <section className="App-body">{routes}</section>
        </div>
      </HashRouter>
    );
  }
}

export default App;
