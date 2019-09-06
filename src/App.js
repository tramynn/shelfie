import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <nav className="Header"></nav>
      </div>
    </HashRouter>
  );
}

export default App;
