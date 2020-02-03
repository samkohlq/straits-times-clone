import React from "react";
import { Col, Row } from "react-bootstrap";

import "../static/css/Subsection.css";

class TopStoriesContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg md={8} className="border border-success">
            test
          </Col>
          <Col lg md={4} className="border border-danger">
            test2
          </Col>
        </Row>
        <Row>
          <Col lg md={3} className="border border-warning">
            1
          </Col>
          <Col lg md={3} className="border border-warning">
            2
          </Col>
          <Col lg md={3} className="border border-warning">
            3
          </Col>
          <Col lg md={3} className="border border-warning">
            4
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TopStoriesContent;
