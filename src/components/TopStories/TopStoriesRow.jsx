import React from "react";
import { Row } from "react-bootstrap";

import Story from "./Story";

class TopStoriesRow extends React.Component {
  render() {
    return (
      <Row>
        <Story />
        <Story />
        <Story />
        <Story />
      </Row>
    );
  }
}

export default TopStoriesRow;
