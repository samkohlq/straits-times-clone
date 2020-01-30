import React from "react";
import Navbar from "./components/Navbar";
import STLogo from "./components/STLogo";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* row for top navbar */}
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <Navbar fixed="top" />
          <STLogo />
        </div>
      </div>
    </div>
  );
}

export default App;
