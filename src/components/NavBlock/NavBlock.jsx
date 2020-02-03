import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import SphSites from "./SphSites";
import StLogo from "./StLogo";

class NavBlock extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={1}></Col>
            <Col lg={12} md={10}>
              <SphSites />
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
        <StLogo />
        <NavBar />
      </div>
    );
  }
}

export default NavBlock;
