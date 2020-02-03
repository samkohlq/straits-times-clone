import React from "react";
import { Col, Nav, Row } from "react-bootstrap";

import "../static/css/TopStoriesHeader.css";

class TopStoriesHeader extends React.Component {
  render() {
    return (
      <Row className="justify-content-between">
        {/* top stories title */}
        <Col lg={4} md={3} className="subsection-title">
          Top stories
        </Col>
        {/* date, temp, ST index */}
        {/* TODO: align vertically to bottom */}
        <Col className="subsection-details ">
          <Nav className="float-right">
            <Nav.Item className="list-inline-item text-uppercase">
              [Date]
            </Nav.Item>
            <Nav.Item className="list-inline-item text-uppercase">
              [Weather]
            </Nav.Item>
            <Nav.Item className="list-inline-item text-uppercase">
              [ST Index]
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    );
  }
}

export default TopStoriesHeader;
