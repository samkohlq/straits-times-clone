import React from "react";

class TopNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="row my-2 justify-content-between">
          {/* left side of top navbar */}
          <div>
            <ul className="list-inline small text-dark">
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
          <div>
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
      </React.Fragment>
    );
  }
}

export default TopNavbar;
