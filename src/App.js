import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
      </div>
      {routes}
    </HashRouter>
  );
}

export default App;
