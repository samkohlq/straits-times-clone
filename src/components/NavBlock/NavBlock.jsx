import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import "../static/css/NavBlock.css";
import SphSites from "./SphSites";
import StLogo from "./StLogo";

class NavBlock extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="bgd">
            <Col md={1}></Col>
            <Col lg={12} md={10}>
              <SphSites />
              <Row>
                <Col lg={7} md={10} xs={10}>
                  <StLogo />
                </Col>
              </Row>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
        <NavBar />
      </div>
    );
  }
}

export default NavBlock;
