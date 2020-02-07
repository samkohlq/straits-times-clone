import React from "react";
import { Card } from "react-bootstrap";

import "../static/css/TopStoriesContent.css";
import mainStoryImage from "../static/images/main-story-image.png";

class MainStory extends React.Component {
  render() {
    return (
      <Card className="main-story-card my-auto h-100">
        {/* TODO: Align text on left, image on right */}
        <Card.Body className="d-flex flex-column align-items-start">
          <h4>
            <div className="main-story-title">
              Coronavirus: S'pore confirms 4 new cases, including 6-month-old
              child of infected couple
            </div>
          </h4>
          <div className="main-story-text">
            All four new cases are in stable conditions, while 22 cases
            confirmed earlier are stable or improving, and one case has been
            discharged, said MOH
          </div>
          <Card.Img
            className="card-img-right main-story-image flex-auto d-none d-md-block"
            src={mainStoryImage}
          ></Card.Img>
        </Card.Body>
      </Card>
    );
  }
}

export default MainStory;
