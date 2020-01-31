import React from "react";
import "./App.css";
import NavBlock from "./components/NavBlock";

function App() {
  return (
    <div className="App">
      {/* row for top navbar */}
      <div className="row justify-content-center">
        <div>
          <NavBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
