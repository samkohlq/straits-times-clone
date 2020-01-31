import React from "react";

import image from "../images/st-news-tablet.png";

class StNewsTablet extends React.Component {
  render() {
    return (
      // TODO: replace png with code
      <div className="row py-3 bg-light justify-content-center">
        <img className="col-lg-4 col-md-8" src={image} alt="advertisement" />
      </div>
    );
  }
}

export default StNewsTablet;
