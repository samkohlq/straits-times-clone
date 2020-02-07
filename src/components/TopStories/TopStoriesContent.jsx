import React from "react";
import { Col, Row } from "react-bootstrap";

import MainStory from "./MainStory";
import Story from "./Story";

class TopStoriesContent extends React.Component {
  render() {
    return (
      <div>
        <Row className="mb-3">
          <Col md lg={9}>
            <MainStory />
          </Col>
          <Col md lg={3}>
            <Story />
          </Col>
        </Row>
        <Row>
          <Col md lg={3}>
            <Story />
          </Col>
          <Col md lg={3}>
            <Story />
          </Col>
          <Col md lg={3}>
            <Story />
          </Col>
          <Col md lg={3}>
            <Story />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TopStoriesContent;
