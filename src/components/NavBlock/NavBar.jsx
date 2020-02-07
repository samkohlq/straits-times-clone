import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "../static/css/NavBar.css";
import NavItem from "./NavItem";
import stMiniLogo from "../static/images/straits-times-mini-logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar-bgd" expand="md" sticky="top">
        <Container className="navbar-container justify-content-center">
          <Navbar.Brand>
            <img alt="ST logo" src={stMiniLogo} width="30" height="auto" />
          </Navbar.Brand>
          <Nav className="text-uppercase">
            <NavItem />
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
