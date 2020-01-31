import React from "react";

import "./Ad.css";
import image from "../../images/ad.png";

class Ad extends React.Component {
  render() {
    return (
      <div className="row py-3 ad-bgd justify-content-center">
        <img className="col-lg-5 col-md-7" src={image} alt="advertisement" />
      </div>
    );
  }
}

export default Ad;
