import React from "react";
import "./App.css";
import NavBlock from "./components/NavBlock/NavBlock";
import Ad from "./components/Ads/Ad";
import StNewsTablet from "./components/Ads/StNewsTablet";
import TopStories from "./components/TopStories/TopStories";

function App() {
  return (
    <div className="bg-light">
      {/* row for top navbar */}
      <div>
        <NavBlock />
        <Ad />
        <StNewsTablet />
        <TopStories />
      </div>
    </div>
  );
}

export default App;
