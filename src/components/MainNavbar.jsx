import React from "react";

import TopNavbar from "./TopNavbar";
import STLogo from "./STLogo";
import BottomNavbar from "./BottomNavbar";

class MainNavbar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <TopNavbar />
        <STLogo />
        <BottomNavbar />
      </div>
    );
  }
}

export default MainNavbar;
