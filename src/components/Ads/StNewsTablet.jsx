import React from "react";
import { Container, Image, Row } from "react-bootstrap";

import stNewsTabletAd from "../static/images/st-news-tablet.png";

class StNewsTablet extends React.Component {
  render() {
    return (
      <Row className="justify-content-center">
        {/* TODO: Create card with JSX */}
        <Container>
          <Image className="p-3" src={stNewsTabletAd} fluid />
        </Container>
      </Row>
    );
  }
}

export default StNewsTablet;
