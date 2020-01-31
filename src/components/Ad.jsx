import React from "react";

import Advert from "../images/ad.png";

class Ad extends React.Component {
  render() {
    return (
      <div className="row my-2 justify-content-center">
        <img
          className="navbar-icon col-lg-8 float-right"
          src={Advert}
          alt="advertisement"
        />
      </div>
    );
  }
}

export default Ad;
