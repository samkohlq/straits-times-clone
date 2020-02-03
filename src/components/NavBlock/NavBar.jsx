import React from "react";

import Logo from "../../images/straits-times-mini-logo.png";
import "./NavBar.css";
import SearchIcon from "../../images/search-icon.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="row mt-2 navbar-bgd justify-content-center">
          <div>
            <img
              // TODO: vertically align logo
              className="navbar-icon float-right"
              src={Logo}
              alt="straits times logo"
            />
          </div>
          <ul className="navbar nav-fill small text-white text-uppercase my-auto">
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Singapore
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Politics
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Asia
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                World
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Videos
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Multimedia
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Lifestyle
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Food
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Forum
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Opinion
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Business
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                Sport
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="https://www.straitstimes.com/">
                More ▼
              </a>
            </li>
          </ul>
          <div>
            <img
              className="navbar-icon img-fluid float-left my-2"
              src={SearchIcon}
              alt="straits times logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
