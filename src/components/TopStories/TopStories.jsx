import React from "react";
import { Container } from "react-bootstrap";

import TopStoriesHeader from "./TopStoriesHeader";
import TopStoriesContent from "./TopStoriesContent";

class TopStories extends React.Component {
  render() {
    return (
      <Container>
        <TopStoriesHeader />
        {/* TODO: add divider */}
        <TopStoriesContent />
      </Container>
    );
  }
}

export default TopStories;
