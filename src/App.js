import React from "react";
import "./App.css";
import NavBlock from "./components/NavBlock";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
      {/* row for top navbar */}
      <div>
        <NavBlock />
        <Ad />
      </div>
    </div>
  );
}

export default App;
