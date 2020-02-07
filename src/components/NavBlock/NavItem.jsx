import React from "react";
import { Nav } from "react-bootstrap";

import "../static/css/NavBar.css";
import NavData from "../static/json/navbar.json";

const NavItem = props => {
  return (
    <Nav.Link href="#somelink" className="nav-link-inverse text-uppercase">
      {NavData[0].title}
    </Nav.Link>
  );
};

export default NavItem;
