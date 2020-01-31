import React from "react";

import Logo from "../images/straits-times-mini-logo.png";
import "./NavBar.css";
import SearchIcon from "../images/search-icon.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="row my-2 navbar-bgd justify-content-center">
          <div>
            <img
              className="navbar-icon col-lg-8 float-right"
              src={Logo}
              alt="straits times logo"
            />
          </div>
          <ul className="navbar nav-fill small text-white text-uppercase my-auto">
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Singapore
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Politics
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Asia
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                World
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Videos
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Multimedia
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Lifestyle
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Food
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Forum
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Opinion
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Business
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                Sport
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#">
                More ▼
              </a>
            </li>
          </ul>
          <div>
            <img
              className="navbar-icon col-lg-8 img-fluid float-left my-2"
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
