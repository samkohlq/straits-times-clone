import React from "react";
import TopNavbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
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
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
