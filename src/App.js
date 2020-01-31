import React from "react";
import "./App.css";
import NavBlock from "./components/NavBlock";
import Ad from "./components/Ad";
import StNewsTablet from "./components/StNewsTablet";

function App() {
  return (
    <div className="bg-light">
      {/* row for top navbar */}
      <div>
        <NavBlock />
        <Ad />
        <StNewsTablet />
      </div>
    </div>
  );
}

export default App;
