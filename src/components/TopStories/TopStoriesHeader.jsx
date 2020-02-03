import React from "react";
import { Col, Nav, Row } from "react-bootstrap";

import "../Subsection.css";

class TopStoriesHeader extends React.Component {
  render() {
    return (
      <Row className="justify-content-between">
        {/* top stories title */}
        <Col lg={8} md={6} className="subsection-title border border-primary">
          Top stories
        </Col>
        {/* date, temp, ST index */}
        {/* TODO: align vertically to bottom */}
        <Col lg={4} md={6} className="border border-primary">
          <Nav className="border border-primary float-right">
            <Nav.Item className="list-inline-item text-uppercase small">
              [Date]
            </Nav.Item>
            <Nav.Item className="list-inline-item text-uppercase small">
              [Weather]
            </Nav.Item>
            <Nav.Item className="list-inline-item text-uppercase small">
              [ST Index]
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    );
  }
}

export default TopStoriesHeader;
