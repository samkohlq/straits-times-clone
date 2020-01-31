import React from "react";

class SphSites extends React.Component {
  render() {
    return (
      <div className="col-lg-8 col-md-10 mt-2">
        <div className="row justify-content-between">
          {/* SPH sites */}
          <div className="col-lg-8 col-md-6">
            <ul className="float-left list-inline small text-dark">
              <li className="list-inline-item text-uppercase">Edition: </li>
              <li className="list-inline-item text-uppercase">
                <a className="text-dark" href="https://www.straitstimes.com/">
                  Singapore
                </a>
              </li>
              <li className="list-inline-item text-uppercase">
                <a
                  className="text-dark"
                  href="https://www.straitstimes.com/global/"
                >
                  International
                </a>
              </li>
              <span>| </span>
              <li className="list-inline-item text-uppercase">
                <a className="text-dark" href="https://www.stclassifieds.sg/">
                  ST Classifieds
                </a>
              </li>
              <span>| </span>
              <li className="list-inline-item text-uppercase">
                <a
                  className="text-dark"
                  href="https://www.straitstimes.com/tags/st-plus-rewards"
                >
                  ST+ Rewards
                </a>
              </li>
              <span>| </span>
              <li className="list-inline-item">More ▼</li>
            </ul>
          </div>
          {/* right side of top navbar */}
          <div className="col-lg-4 col-md-5 text-right">
            <ul className="list-inline small">
              <li className="list-inline-item text-uppercase">
                <a className="text-dark" href="#">
                  Log in
                </a>
              </li>
              <span>| </span>
              <li className="list-inline-item text-uppercase">
                <a className="text-dark" href="#">
                  Subscribe
                </a>
              </li>
              <span>| </span>
              <li className="list-inline-item text-uppercase">
                <a className="text-dark" href="#">
                  Print Edition
                </a>
              </li>
              <span>| </span>
              <li className="list-inline-item">
                <a className="text-dark" href="#">
                  ePAPER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SphSites;
