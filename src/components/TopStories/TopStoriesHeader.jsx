import React from "react";

import "../Subsection.css";

class TopStoriesHeader extends React.Component {
  render() {
    return (
      <div className="col-lg-8 col-md-10 mt-2">
        <div className="row justify-content-between">
          {/* top stories title */}
          <div className="col-lg-8 col-md-6 px-0 subsection-title">
            Top stories
          </div>
          {/* date, temp, ST index */}
          {/* TODO: align vertically to bottom */}
          <ul className="subsection-details text-right">
            <li className="list-inline-item text-uppercase">[Date]</li>
            <span>| </span>
            <li className="list-inline-item text-uppercase">[Temp]</li>
            <span>| </span>
            <li className="list-inline-item text-uppercase">[ST Index]</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopStoriesHeader;
