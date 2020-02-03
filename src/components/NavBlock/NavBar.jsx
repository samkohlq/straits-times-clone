import React from "react";
import { Container, Nav, Row } from "react-bootstrap";

import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-bgd">
        <Row>
          <Container>
            {/* TODO: Insert logo and search icon*/}
            <Nav className="mr-auto text-uppercase small">
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Singapore
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Politics
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Asia
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                World
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Videos
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Multimedia
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Lifestyle
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Food
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Forum
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Opinion
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Business
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                Sport
              </Nav.Link>
              <Nav.Link className="nav-link-inverse" href="#somelink">
                More ▼
              </Nav.Link>
            </Nav>
          </Container>
        </Row>
      </div>
    );
  }
}

export default NavBar;
