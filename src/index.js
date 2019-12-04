import React from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import Forms from "./components/Forms";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Title />
      <Forms />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
