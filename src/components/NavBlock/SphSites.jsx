import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

import "./SphSites.css";

class SphSites extends React.Component {
  render() {
    return (
      <Nav className="mx-4 small justify-content-between">
        <div>
          <Nav.Item className="list-inline-item text-uppercase">
            Edition:
          </Nav.Item>
          <Nav.Item className="mr-auto list-inline-item text-uppercase">
            <Nav.Link href="https://www.straitstimes.com/">Singapore</Nav.Link>
          </Nav.Item>
          <span>|</span>
          <Nav.Item className="mr-auto list-inline-item text-uppercase">
            <Nav.Link href="https://www.straitstimes.com/global/">
              International
            </Nav.Link>
          </Nav.Item>
          <span>|</span>
          <Nav.Item className="mr-auto list-inline-item text-uppercase">
            <Nav.Link href="https://www.stclassifieds.sg/">
              ST Classifieds
            </Nav.Link>
          </Nav.Item>
          <span>|</span>
          <Nav.Item className="mr-auto list-inline-item text-uppercase">
            <Nav.Link href="https://www.straitstimes.com/tags/st-plus-rewards">
              ST+ Reads
            </Nav.Link>
          </Nav.Item>
          <span>|</span>
          <NavDropdown
            className="list-inline-item"
            title="More"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#/somelink">Action</NavDropdown.Item>
            <NavDropdown.Item href="#/somelink">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#/somelink">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/somelink">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <div>
          <Nav.Item className="mr-auto list-inline-item text-uppercase">
            <Nav.Link href="#/somelink/">Log in</Nav.Link>
          </Nav.Item>
          <span>|</span>
          <Nav.Item className="mr-auto list-inline-item text-uppercase">
            <Nav.Link href="#/somelink">Subscribe</Nav.Link>
          </Nav.Item>
          <span>|</span>
          <Nav.Item className="mr-auto list-inline-item text-uppercase">
            <Nav.Link href="#/somelink">Print edition</Nav.Link>
          </Nav.Item>
          <span>|</span>
          <Nav.Item className="mr-auto list-inline-item">
            <Nav.Link href="#/somelink">ePAPER</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    );
  }
}

export default SphSites;
