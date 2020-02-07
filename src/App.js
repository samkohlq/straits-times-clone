import React from "react";

import Footer from "./components/Footer/Footer";
import NavBlock from "./components/NavBlock/NavBlock";
import StNewsTablet from "./components/Ads/StNewsTablet";
import TopStories from "./components/TopStories/TopStories";

function App() {
  return (
    <div className="bg-light">
      <NavBlock />
      <StNewsTablet />
      <TopStories />
      <Footer />
    </div>
  );
}

export default App;
