import React from "react";
import { Col, Row } from "react-bootstrap";

import Story from "./Story";

class TopStoriesRow extends React.Component {
  render() {
    return (
      <Row className="mb-3">
        <Story />
        <Story />
        <Story />
        <Story />
      </Row>
    );
  }
}

export default TopStoriesRow;
