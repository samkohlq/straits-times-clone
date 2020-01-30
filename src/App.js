import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid border border-primary">
        <Navbar fixed="top" />
      </div>
    </div>
  );
}

export default App;
