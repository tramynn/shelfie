import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
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
