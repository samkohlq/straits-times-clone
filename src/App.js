import React from "react";
import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import STLogo from "./components/STLogo";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* row for top navbar */}
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <TopNavbar fixed="top" />
          <STLogo />
        </div>
        <div className="col-lg-12">
          <MainNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
