import React from "react";
import Logo from "../images/straits-times-mini-logo.png";
import SearchIcon from "../images/search-icon.png";

class BottomNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="row my-2 bg-dark justify-content-center">
          <div>
            <img
              className="col-lg-8 img-fluid float-left my-auto"
              src={Logo}
              alt="straits times logo"
            />
          </div>
          <ul className="navbar bg-dark nav-fill small text-white text-uppercase my-auto">
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
              className="col-lg-8 img-fluid float-left my-2"
              src={SearchIcon}
              alt="straits times logo"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BottomNavbar;
