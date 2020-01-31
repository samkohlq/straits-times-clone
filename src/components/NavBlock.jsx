import React from "react";

import SphSites from "./SphSites";
import StLogo from "./StLogo";
import NavBar from "./NavBar";

class NavBlock extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <SphSites />
        <StLogo />
        <NavBar />
      </div>
    );
  }
}

export default NavBlock;
