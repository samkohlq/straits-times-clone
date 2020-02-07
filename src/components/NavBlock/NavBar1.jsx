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
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Singpore
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Politics
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Asia
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              World
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Videos
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Lifestyle
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Food
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Multimedia
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Forum
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Opinion
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Business
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              Sport
            </Nav.Link>
            <Nav.Link href="#somelink" className="nav-link-inverse">
              More ▼
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
