import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Component/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
