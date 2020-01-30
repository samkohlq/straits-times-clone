import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg justify-content-between my-0">
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
            <ul className="list-inline small text-dark">
              <li className="list-inline-item text-uppercase">Log in</li>
              <span>| </span>
              <li className="list-inline-item text-uppercase">Subscribe</li>
              <span>| </span>
              <li className="list-inline-item text-uppercase">Print edition</li>
              <span>| </span>
              <li className="list-inline-item">ePAPER</li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
