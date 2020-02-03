import React from "react";
import NavBlock from "./components/NavBlock/NavBlock";
import StNewsTablet from "./components/Ads/StNewsTablet";
import TopStories from "./components/TopStories/TopStories";

function App() {
  return (
    <div className="bg-light">
      <NavBlock />
      <StNewsTablet />
      <TopStories />
    </div>
  );
}

export default App;
