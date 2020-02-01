import React from "react";

import "./StLogo.css";
import Logo from "../../images/straits-times-logo.png";

class StLogo extends React.Component {
  render() {
    return (
      // TODO: align logo to left
      <div className="col-lg-11 offset-lg-1 col-md-8">
        <div className="row">
          <div className="col-lg-6 offset-lg-1 col-md-12">
            <img className="logo" src={Logo} alt="straits times logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default StLogo;
