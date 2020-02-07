import React from "react";
import { Card, Col } from "react-bootstrap";

import "../static/css/TopStoriesContent.css";
import storyImage from "../static/images/story-image.png";

class Story extends React.Component {
  render() {
    return (
      <Col md lg={3}>
        <Card className="h-100">
          <Card.Img variant="top" src={storyImage} />
          <Card.Body>
            <Card.Title className="story-title">
              Coronavirus: Singapore to mount second evacuation flight from
              viras-hit Wuhan, sources say
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Story;
