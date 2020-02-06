import React from "react";
import { Card } from "react-bootstrap";

import "../static/css/TopStoriesContent.css";
import StoryImage from "../static/images/story-image.png";

class Story extends React.Component {
  render() {
    return (
      <Card className="my-auto story-card">
        <Card.Img variant="top" src={StoryImage} />
        <Card.Body>
          <Card.Title className="story-title">
            Coronavirus: Singapore to mount second evacuation flight from
            viras-hit Wuhan, sources say
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default Story;
