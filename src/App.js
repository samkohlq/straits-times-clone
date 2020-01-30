import React from "react";
import "./App.css";
import MainNavbar from "./components/MainNavbar";

function App() {
  return (
    <div className="App">
      {/* row for top navbar */}
      <div className="row">
        <div>
          <MainNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
