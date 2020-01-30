import React from "react";
import Logo from "../images/straits-times-logo";

class STLogo extends React.Component {
  render() {
    return (
      <div class="row my-2">
        <img
          className="col-lg-8 img-fluid float-left"
          src={Logo}
          alt="straits times logo"
        />
      </div>
    );
  }
}

export default STLogo;
