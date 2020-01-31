import React from "react";
import Logo from "../images/straits-times-logo.png";

class StLogo extends React.Component {
  render() {
    return (
      <div class="row my-2">
        <img
          className="col-lg-6 offset-lg-1 img-fluid float-left my-2"
          src={Logo}
          alt="straits times logo"
        />
      </div>
    );
  }
}

export default StLogo;
