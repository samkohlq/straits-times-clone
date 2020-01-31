import React from "react";

import "../Subsection.css";

class TopStoriesContent extends React.Component {
  render() {
    return (
      <div className="col-lg-8 col-md-10 mt-2 border border-danger">
        <div className="row">
          <div className="col-md-8 border border-success">test</div>
          <div className="col-md-4 border border-success">
            <div className="card">
              <img
                className="card-img-top"
                src="../../images/who-rep.png"
              ></img>
              <div className="card-body">
                <p className="card-text">
                  WHO declares China virus outbreak an international emergency
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 border border-success">1</div>
          <div className="col-md-3 border border-success">2</div>
          <div className="col-md-3 border border-success">3</div>
          <div className="col-md-3 border border-success">4</div>
        </div>
      </div>
    );
  }
}

export default TopStoriesContent;
