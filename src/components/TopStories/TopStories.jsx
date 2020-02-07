import React from "react";
import { Container, Row } from "react-bootstrap";

import MainStory from "./MainStory";
import Story from "./Story";
import TopStoriesHeader from "./TopStoriesHeader";
import TopStoriesRow from "./TopStoriesRow";

class TopStories extends React.Component {
  render() {
    return (
      <Container>
        <TopStoriesHeader />
        <Row className="mb-3">
          <MainStory />
          <Story />
        </Row>
        <TopStoriesRow />
        <TopStoriesRow />
      </Container>
    );
  }
}

export default TopStories;
