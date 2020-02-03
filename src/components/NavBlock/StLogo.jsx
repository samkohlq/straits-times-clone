import React from "react";
import { Container, Image } from "react-bootstrap";

import Logo from "../../images/straits-times-logo.png";

class StLogo extends React.Component {
  render() {
    return (
      <Container className="my-3">
        <Image src={Logo} fluid />
      </Container>
    );
  }
}

export default StLogo;
